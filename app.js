(() => {
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- theme ---------- */
  const root = document.documentElement;
  const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  $("#themeBtn").addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- nav ---------- */
  const nav = $("#nav"), links = $("#links"), menuBtn = $("#menuBtn");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  menuBtn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", (e) => { if (e.target.tagName === "A") { links.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); } });
  const navLinks = [...links.querySelectorAll("a")];
  const spy = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  navLinks.forEach((a) => { const t = $(a.getAttribute("href")); if (t) spy.observe(t); });

  /* ---------- icons ---------- */
  const ICONS = {
    shield: '<path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3z"/><path d="m9 12 2 2 4-4"/>',
    brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/><path d="M12 9h2M12 14h3"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/><path d="M3 3h3M3 3v3M21 3h-3M21 3v3M3 21h3M3 21v-3M21 21h-3M21 21v-3"/>',
    robot: '<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M9.5 16.5h5M2 13v2M22 13v2"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5z"/><path d="M4 19a2 2 0 0 0 2 2h13M8 7h7M8 11h5"/>',
  };

  /* ---------- news ---------- */
  $("#news").innerHTML = S.news.map((n) => `
    <li><div class="meta"><span class="pill ${n.tag === "Award" ? "award-p" : ""}">${n.tag}</span>${n.date}</div>${n.text}</li>`).join("");

  /* ---------- themes ---------- */
  $("#themes").innerHTML = S.themes.map((t, i) => `
    <article class="theme reveal">
      <div class="ico"><svg viewBox="0 0 24 24">${ICONS[t.icon]}</svg></div>
      <span class="num">0${i + 1}</span>
      <h3>${t.title}</h3>
      <p>${t.text}</p>
      <ul class="tags">${t.tags.map((x) => `<li>${x}</li>`).join("")}</ul>
    </article>`).join("");
  document.querySelectorAll(".theme").forEach((el) => el.addEventListener("pointermove", (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", e.clientX - r.left + "px"); el.style.setProperty("--my", e.clientY - r.top + "px");
  }));

  /* ---------- citation bars ---------- */
  const cy = Object.entries(S.citesByYear), maxC = Math.max(...cy.map(([, v]) => v));
  $("#bars").innerHTML = cy.map(([y, v]) => `<div class="b" data-v="${v}" title="${y}: ${v} citations"><span>${String(y).slice(2)}</span></div>`).join("");
  $("#bars").querySelectorAll(".b").forEach((b, i) => { b.style.height = Math.max(4, (cy[i][1] / maxC) * 100) + "%"; });

  /* ---------- publications ---------- */
  const TYPES = [["all", "All"], ["journal", "Journals"], ["conference", "Conferences"], ["preprint", "Preprints"], ["abstract", "Abstracts"], ["book", "Books & thesis"]];
  const TOPICS = [["trust", "#trustworthy-ai"], ["neuro", "#neuroimaging"], ["vision", "#computer-vision"], ["robotics", "#assistive-robotics"]];
  const TYPE_LABEL = { journal: "Journal", conference: "Conference", preprint: "Preprint", abstract: "Abstract", book: "Book", thesis: "Thesis" };
  const state = { type: "all", topic: null, q: "", expanded: false };
  const PUB_LIMIT = 8; // publications shown before "View more"
  const count = (t) => t === "all" ? S.pubs.length : S.pubs.filter((p) => p.type === t || (t === "book" && p.type === "thesis")).length;

  $("#filters").innerHTML = TYPES.map(([k, l]) => `<button class="chip" data-type="${k}" aria-pressed="${k === "all"}">${l}<span class="n">${count(k)}</span></button>`).join("");
  $("#topics").innerHTML = TOPICS.map(([k, l]) => `<button class="chip" data-topic="${k}" aria-pressed="false">${l}</button>`).join("");

  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    state.type = b.dataset.type; state.expanded = false;
    $("#filters").querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    renderPubs();
  });
  $("#topics").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    state.topic = state.topic === b.dataset.topic ? null : b.dataset.topic; state.expanded = false;
    $("#topics").querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x.dataset.topic === state.topic));
    renderPubs();
  });
  let t; $("#q").addEventListener("input", (e) => { clearTimeout(t); t = setTimeout(() => { state.q = e.target.value.trim(); state.expanded = false; renderPubs(); }, 120); });

  // Highlight on the raw text, then escape each piece; user input never reaches innerHTML unescaped.
  const hl = (s) => {
    if (!state.q) return esc(s);
    const re = new RegExp("(" + state.q.slice(0, 100).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
    return String(s).split(re).map((part, i) => (i % 2 ? `<mark>${esc(part)}</mark>` : esc(part))).join("");
  };
  const safeUrl = (u) => (/^https:\/\//.test(u || "") ? esc(u) : "");
  function renderPubs() {
    const q = state.q.toLowerCase();
    const list = S.pubs.filter((p) =>
      (state.type === "all" || p.type === state.type || (state.type === "book" && p.type === "thesis")) &&
      (!state.topic || (p.topics || []).includes(state.topic)) &&
      (!q || (p.title + " " + p.authors + " " + p.venue + " " + p.y).toLowerCase().includes(q)));
    if (!list.length) { $("#pubs").innerHTML = `<p class="empty">no matching publications, try another query</p>`; return; }
    list.sort((a, b) => (b.y || 0) - (a.y || 0));
    const showAll = state.expanded || state.q || list.length <= PUB_LIMIT;
    const shown = showAll ? list : list.slice(0, PUB_LIMIT);
    $("#pubs").innerHTML = shown.map((p) => {
      const authors = hl(p.authors).replace(/A\. Moemeni/g, "<b>A. Moemeni</b>");
      const u = safeUrl(p.url);
      const title = u ? `<a href="${u}" target="_blank" rel="noopener noreferrer">${hl(p.title)}</a>` : hl(p.title);
      const doi = u ? `<a class="doi" href="${u}" target="_blank" rel="noopener noreferrer">${u.includes("arxiv") ? "arXiv" : "DOI"} ↗</a>` : "";
      return `<article class="pub">
        <div><h4>${title}</h4><p class="au">${authors}</p><p class="ve">${hl(p.venue)}${p.y ? `, ${p.y}` : ""}</p></div>
        <div class="pub-side"><span class="type ${p.badge ? "badge" : ""}">${p.badge || TYPE_LABEL[p.type]}</span>${doi}</div>
      </article>`;
    }).join("");
    const more = $("#pubMore");
    if (list.length <= PUB_LIMIT || state.q) { more.hidden = true; return; }
    more.hidden = false;
    more.textContent = state.expanded ? "Show fewer ↑" : `View all ${list.length} publications ↓`;
    more.setAttribute("aria-expanded", state.expanded);
  }
  $("#pubMore").addEventListener("click", () => {
    state.expanded = !state.expanded; renderPubs();
    if (!state.expanded) $("#publications").scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  });
  renderPubs();

  /* ---------- projects ---------- */
  const videoEmbed = (v) => {
    if (!v) return "";
    const yt = v.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
    const vm = v.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (yt) return `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${yt[1]}" title="Project video" loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`;
    if (vm) return `<div class="video"><iframe src="https://player.vimeo.com/video/${vm[1]}" title="Project video" loading="lazy" allow="fullscreen; picture-in-picture"></iframe></div>`;
    if (/^assets\/[\w\/.-]+\.(mp4|webm)$/i.test(v)) return `<div class="video"><video src="${esc(v)}" controls preload="metadata" playsinline></video></div>`;
    return "";
  };
  const PROJ_TABS = [["all", "All"], ["research", "Research projects"], ["student", "Student projects"]];
  const pcount = (k) => k === "all" ? S.projects.length : S.projects.filter((p) => p.kind === k).length;
  $("#projTabs").innerHTML = PROJ_TABS.map(([k, l]) => `<button class="chip" data-k="${k}" aria-pressed="${k === "all"}">${l}<span class="n">${pcount(k)}</span></button>`).join("");
  function renderProjects(kind) {
    $("#projectList").innerHTML = S.projects.filter((p) => kind === "all" || p.kind === kind).map((p) => {
      const people = (p.people || []).filter((x) => x.name).map((x) => `<li><b>${esc(x.name)}</b>${x.role ? ` · ${esc(x.role)}` : ""}</li>`).join("");
      const collab = (p.collaborators || []).filter(Boolean).map(esc).join(", ");
      const links = (p.links || []).filter((l) => safeUrl(l.url)).map((l) => `<a href="${safeUrl(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)} ↗</a>`).join("");
      const meta = [p.role, p.funder].filter(Boolean).map(esc).join(" · ");
      return `<article class="project ${p.kind}">
        <div class="top"><span class="role-p ${p.kind}">${p.kind === "student" ? "Student project" : "Research project"}</span><span class="yrs">${esc(p.years || "")}${p.status ? ` · ${esc(p.status)}` : ""}</span></div>
        <h3>${esc(p.title)}</h3>
        ${people ? `<ul class="p-people">${people}</ul>` : ""}
        <p>${esc(p.summary || "")}</p>
        ${videoEmbed(p.video)}
        ${(p.tags || []).length ? `<ul class="tags">${p.tags.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
        ${meta || collab || links ? `<div class="foot">
          ${meta ? `<div class="p-row"><span class="lbl mono">Funding</span><span>${meta}</span></div>` : ""}
          ${collab ? `<div class="p-row"><span class="lbl mono">Collaborators</span><span>${collab}</span></div>` : ""}
          ${links ? `<div class="p-links">${links}</div>` : ""}
        </div>` : ""}
      </article>`;
    }).join("");
  }
  $("#projTabs").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    $("#projTabs").querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    renderProjects(b.dataset.k);
  });
  renderProjects("all");

  /* ---------- join me: available projects ---------- */
  const levels = ["All", ...new Set(S.openings.map((o) => o.level))];
  $("#openTabs").innerHTML = levels.map((l, i) => `<button class="chip" data-l="${esc(l)}" aria-pressed="${i === 0}">${esc(l)}</button>`).join("");
  function renderOpenings(level) {
    $("#openings").innerHTML = S.openings.filter((o) => level === "All" || o.level === level).map((o) => `
      <article class="opening">
        <span class="lvl mono">${esc(o.level)}</span>
        <h3>${esc(o.title)}</h3>
        <p>${esc(o.summary)}</p>
        ${(o.skills || []).length ? `<ul class="tags">${o.skills.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
        <div class="o-foot"><span>${esc(o.funding || "")}</span>
          <a href="mailto:armaghan.moemeni@nottingham.ac.uk?subject=${encodeURIComponent("Project enquiry: " + o.title)}">Ask about this →</a></div>
      </article>`).join("");
  }
  $("#openTabs").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    $("#openTabs").querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    renderOpenings(b.dataset.l);
  });
  renderOpenings("All");

  /* ---------- consultancy ---------- */
  $("#consult").innerHTML = S.consultancy.map((c) => `
    <article class="theme reveal">
      <div class="ico"><svg viewBox="0 0 24 24">${ICONS[c.icon] || ""}</svg></div>
      <h3>${esc(c.title)}</h3>
      <p>${esc(c.text)}</p>
    </article>`).join("");

  /* ---------- team ---------- */
  const initials = (n) => n.replace(/^Dr\s+/, "").split(/\s+/).filter((w) => /^[A-ZÁÉÍÓÚ]/.test(w)).map((w) => w[0]).slice(0, 2).join("");
  $("#current").innerHTML = S.team.current.map((p) => `
    <li class="person reveal"><div class="avatar">${initials(p.name)}</div>
      <div><div class="nm">${p.name}<span>→ ${p.until}</span></div><p>${p.topic}</p>${p.note ? `<span class="tag note">${p.note}</span>` : ""}</div></li>`).join("");
  $("#alumni").innerHTML = S.team.alumni.map((p) => `
    <li class="person alum reveal"><div class="avatar">${initials(p.name)}</div>
      <div><div class="nm">${p.name}<span>PhD ${p.year}</span></div><p>${p.topic}</p></div></li>`).join("");

  /* ---------- teaching / about ---------- */
  $("#teach").innerHTML = S.teaching.map((t) => `<div class="teach-card reveal"><h3>${t.area}</h3><ul>${t.items.map((i) => `<li>${i}</li>`).join("")}</ul></div>`).join("");
  $("#career").innerHTML = S.career.map((c) => `<li><div class="yr">${c.years}</div><div class="rl">${c.role}</div><div class="og">${c.org}</div>${c.note ? `<div class="og note">${c.note}</div>` : ""}</li>`).join("");
  $("#edu").innerHTML = S.education.map((c) => `<li><div class="yr">${c.year}</div><div class="rl">${c.deg}</div><div class="og">${c.org}</div></li>`).join("");
  $("#service").innerHTML = S.service.map((s) => `<li>${s}</li>`).join("");
  $("#members").innerHTML = S.memberships.map((m) => `<li>${m}</li>`).join("");
  $("#yr").textContent = new Date().getFullYear();

  /* ---------- open at the top (unless the link points to a section, e.g. #contact) ---------- */
  const toTop = () => { if (!location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" }); };
  toTop(); addEventListener("load", toTop); addEventListener("pageshow", (e) => { if (e.persisted) toTop(); });

  /* ---------- reveal + counters ---------- */
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 60 + "ms"; io.observe(el); });

  if (!reduce) {
    const cio = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return; cio.disconnect();
      e.target.querySelectorAll("dd[data-count]").forEach((dd) => {
        const end = +dd.dataset.count, suffix = dd.textContent.replace(/[\d,]/g, ""), t0 = performance.now();
        const step = (now) => { const k = Math.min(1, (now - t0) / 1200), v = Math.round(end * (1 - Math.pow(1 - k, 3)));
          dd.textContent = v + suffix; if (k < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step);
      });
    }), { threshold: 0.4 });
    cio.observe($("#stats"));
  }

  /* ---------- hero field: animated iso-contours (marching squares) ----------
     Evokes segmentation contours / level sets over an MRI-like intensity field. */
  const cv = $("#field"), ctx = cv.getContext("2d");
  let W, H, dpr, cell, cols, rows, vals, raf, visible = true;
  const blobs = Array.from({ length: 6 }, (_, i) => ({ ax: 0.25 + Math.random() * 0.6, ay: 0.15 + Math.random() * 0.7, r: 0.12 + Math.random() * 0.14, sx: 0.08 + Math.random() * 0.12, sy: 0.06 + Math.random() * 0.1, p: i * 1.7 }));
  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cell = W < 700 ? 14 : 12; cols = Math.ceil(W / cell) + 1; rows = Math.ceil(H / cell) + 1;
    vals = new Float32Array(cols * rows);
  }
  function field(t) {
    const pts = blobs.map((b) => [(b.ax + Math.sin(t * b.sx + b.p) * 0.08) * W, (b.ay + Math.cos(t * b.sy + b.p) * 0.1) * H, (b.r * Math.min(W, H * 1.6)) ** 2]);
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      const x = i * cell, y = j * cell; let v = 0;
      for (const [bx, by, r2] of pts) { const dx = x - bx, dy = y - by; v += r2 / (dx * dx + dy * dy + 1); }
      v += 0.08 * Math.sin(x * 0.012 + t * 0.3) * Math.cos(y * 0.015 - t * 0.2);
      vals[j * cols + i] = v;
    }
  }
  const lerp = (a, b, l) => (l - a) / (b - a || 1e-6);
  function contour(level) {
    ctx.beginPath();
    for (let j = 0; j < rows - 1; j++) for (let i = 0; i < cols - 1; i++) {
      const a = vals[j * cols + i], b = vals[j * cols + i + 1], c = vals[(j + 1) * cols + i + 1], d = vals[(j + 1) * cols + i];
      const idx = (a > level) | ((b > level) << 1) | ((c > level) << 2) | ((d > level) << 3);
      if (idx === 0 || idx === 15) continue;
      const x = i * cell, y = j * cell;
      const T = [x + cell * lerp(a, b, level), y], R = [x + cell, y + cell * lerp(b, c, level)],
            B = [x + cell * lerp(d, c, level), y + cell], L = [x, y + cell * lerp(a, d, level)];
      const seg = (p, q) => { ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]); };
      switch (idx) {
        case 1: case 14: seg(L, T); break; case 2: case 13: seg(T, R); break; case 3: case 12: seg(L, R); break;
        case 4: case 11: seg(R, B); break; case 6: case 9: seg(T, B); break; case 7: case 8: seg(L, B); break;
        case 5: seg(L, T); seg(R, B); break; case 10: seg(T, R); seg(L, B); break;
      }
    }
    ctx.stroke();
  }
  function draw(now) {
    const t = now / 1000;
    field(t);
    ctx.clearRect(0, 0, W, H);
    const col = getComputedStyle(root).getPropertyValue("--field").trim();
    const acc = getComputedStyle(root).getPropertyValue("--accent").trim();
    ctx.lineWidth = 1; ctx.strokeStyle = col;
    for (let k = 1; k <= 9; k++) { ctx.globalAlpha = 0.35 + k * 0.06; contour(0.35 + k * 0.32); }
    ctx.globalAlpha = 0.9; ctx.lineWidth = 1.6; ctx.strokeStyle = acc; contour(3.4); // the "segmentation mask"
    ctx.globalAlpha = 1;
    if (!reduce && visible) raf = requestAnimationFrame(draw);
  }
  resize();
  addEventListener("resize", () => { resize(); if (reduce) draw(0); });
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; cancelAnimationFrame(raf); if (visible) raf = requestAnimationFrame(draw); }).observe(cv);
  if (reduce) draw(0);
})();
