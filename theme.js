try { var t = localStorage.getItem("theme"); if (t === "light" || t === "dark") document.documentElement.dataset.theme = t; } catch (e) {}
// Always open at the top: stop the browser restoring an old scroll position.
try { if ("scrollRestoration" in history) history.scrollRestoration = "manual"; } catch (e) {}
