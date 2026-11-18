/* ------------------------------------------------------------------
   Site content. Edit this file to update the website; no HTML needed.
   ------------------------------------------------------------------ */
window.SITE = {
  // Citation counts per year (source: OpenAlex, Nov 2026). Replace with
  // Google Scholar numbers if preferred.
  citesByYear: { 2018: 1, 2019: 8, 2020: 2, 2021: 29, 2022: 70, 2023: 53, 2024: 57, 2025: 45, 2026: 43 },

  news: [
    { date: "2026", tag: "Award", text: "Runner-up for the <b>Best Paper Award at MICCAI 2026</b>." },
    { date: "2026", tag: "Release", text: "Released <b>Uni-Light</b>, an ultra-lightweight, uncertainty-aware distillation framework for 3D brain tumour segmentation, together with code and pre-trained models." },
    { date: "2026", tag: "Service", text: "Appointed <b>Track Chair</b>, REED-AI: Responsible, Explainable and Ethical-by-Design AI in Clinical Applications, <b>ACM TRUST 2027</b>." },
    { date: "2026", tag: "PhD", text: "Congratulations to <b>Dr Ziling Wu</b> on completing the PhD: <i>Discover-Observe-Learn: Annotation-Free Object Detection from Physical-World Exploration</i>." },
    { date: "2025", tag: "Paper", text: "<b>Ensemble Foreground Management for Unsupervised Object Discovery</b> accepted at <b>ICCV 2025</b>." },
    { date: "2025", tag: "Paper", text: "Three contributions on AI for dementia presented at <b>AAIC 2025</b> (Alzheimer's &amp; Dementia)." },
  ],

  themes: [
    {
      icon: "shield",
      title: "Trustworthy & Uncertainty-Aware Medical AI",
      text: "Semi- and self-supervised deep learning that stays reliable when labels are scarce and data distributions shift, with calibrated uncertainty clinicians can act on.",
      tags: ["Semi-supervised", "Uncertainty", "Explainability", "Distribution shift"],
    },
    {
      icon: "brain",
      title: "Neuroimaging, Radiomics & Dementia",
      text: "AI-enhanced MRI for early Alzheimer's detection, hippocampal subfield segmentation, lightweight brain tumour segmentation and multimodal biomarker pipelines.",
      tags: ["MRI", "Segmentation", "Radiomics", "Alzheimer's"],
    },
    {
      icon: "eye",
      title: "Computer Vision & Embodied Perception",
      text: "Annotation-free object discovery, occlusion-robust detection and perception that learns by exploring and observing the physical world.",
      tags: ["Unsupervised discovery", "Detection", "Self-supervision"],
    },
    {
      icon: "robot",
      title: "Assistive Robotics & Human-Centred AI",
      text: "Embodied AI and social robots in the homes of older people living with frailty or dementia: co-designed, multimodal and built for real-world wellbeing.",
      tags: ["HRI", "Embodied AI", "Assistive tech", "Co-design"],
    },
  ],

  // type: journal | conference | preprint | book | thesis | abstract
  pubs: [
    { y: 2026, type: "preprint", title: "Uni-Light: An Ultra-Lightweight Framework via Uncertainty-Aware Knowledge Distillation for Brain Tumour Segmentation", authors: "L. Kuang, S. Salehi, Z. Wu, A. P. Tafti, A. Moemeni", venue: "arXiv:2609.06729", url: "https://doi.org/10.48550/arxiv.2609.06729", topics: ["neuro", "trust"] },
    { y: 2025, type: "conference", title: "Ensemble Foreground Management for Unsupervised Object Discovery", authors: "Z. Wu, A. Moemeni, P. Caleb-Solly", venue: "IEEE/CVF International Conference on Computer Vision (ICCV)", url: "https://doi.org/10.1109/iccv51701.2025.01885", badge: "ICCV", topics: ["vision"] },
    { y: 2025, type: "journal", title: "Challenges of Integrating Assistive Technologies and Robots with Embodied Intelligence in the Homes of Older People Living with Frailty", authors: "A.-K. Al-Tamimi, L. Hewitt, D. S. Cameron, M. Salem, A. Moemeni", venue: "Applied Sciences", url: "https://doi.org/10.3390/app15158415", topics: ["robotics"] },
    { y: 2025, type: "abstract", title: "From Journaling to Insights: Empowering People with Dementia using AI and Social Robotics", authors: "T. Surtees, A. Purswani, N. Chadborn, A. Moemeni", venue: "Alzheimer's & Dementia (AAIC)", url: "https://doi.org/10.1002/alz70858_101504", topics: ["robotics", "neuro"] },
    { y: 2025, type: "abstract", title: "A Data-Driven Approach for Genetic Prediction of Alzheimer's Disease when Polygenic Risk Scores Fail to Account for AD's Genetic Complexity", authors: "A. Purswani, T. Goddard, K. J. Brookes, A. P. Rajkumar, P. Patel, A. Dutta, W. Sun, A. Moemeni", venue: "Alzheimer's & Dementia (AAIC)", url: "https://doi.org/10.1002/alz70855_106728", topics: ["neuro"] },
    { y: 2025, type: "abstract", title: "AI-Driven Pipeline for Analysis and Classification of Neurodegenerative Diseases from Cognitive, Imaging, and Clinical Biomarkers from the CogNID Study", authors: "A. Purswani, A. Moemeni, A. A. Hosseini", venue: "Alzheimer's & Dementia (AAIC)", url: "https://doi.org/10.1002/alz70855_106908", topics: ["neuro"] },
    { y: 2024, type: "journal", title: "Dementia with Lewy Bodies: Genomics, Transcriptomics, and Its Future with Data Science", authors: "T. R. Goddard, K. J. Brookes, R. Sharma, A. Moemeni, A. P. Rajkumar", venue: "Cells", url: "https://doi.org/10.3390/cells13030223", topics: ["neuro"] },
    { y: 2023, type: "conference", title: "Robustness of Deep Learning Methods for Occluded Object Detection: A Study Introducing a Novel Occlusion Dataset", authors: "Z. Wu, A. Moemeni, S. Castle-Green, P. Caleb-Solly", venue: "International Joint Conference on Neural Networks (IJCNN)", url: "https://doi.org/10.1109/ijcnn54540.2023.10191368", topics: ["vision"] },
    { y: 2023, type: "conference", title: "Comparing a Graphical User Interface, Hand Gestures and Controller in Virtual Reality for Robot Teleoperation", authors: "J. Chen, A. Moemeni, P. Caleb-Solly", venue: "ACM/IEEE International Conference on Human-Robot Interaction (HRI)", url: "https://doi.org/10.1145/3568294.3580165", badge: "HRI", topics: ["robotics"] },
    { y: 2022, type: "journal", title: "Dealing with Distribution Mismatch in Semi-Supervised Deep Learning for COVID-19 Detection Using Chest X-ray Images: A Novel Approach Using Feature Densities", authors: "S. Calderon-Ramirez, S. Yang, D. Elizondo, A. Moemeni", venue: "Applied Soft Computing", url: "https://doi.org/10.1016/j.asoc.2022.108983", topics: ["trust"] },
    { y: 2022, type: "journal", title: "Dataset Similarity to Assess Semisupervised Learning Under Distribution Mismatch Between the Labeled and Unlabeled Datasets", authors: "S. Calderon-Ramirez, L. Oala, J. Torrents-Barrena, S. Yang, D. Elizondo, A. Moemeni, S. Colreavy-Donnelly, W. Samek, et al.", venue: "IEEE Transactions on Artificial Intelligence", url: "https://doi.org/10.1109/tai.2022.3168804", topics: ["trust"] },
    { y: 2022, type: "journal", title: "A Real Use Case of Semi-Supervised Learning for Mammogram Classification in a Local Clinic of Costa Rica", authors: "S. Calderon-Ramirez, D. Murillo-Hernandez, K. Rojas-Salazar, D. Elizondo, S. Yang, A. Moemeni, M. A. Molina-Cabello", venue: "Medical & Biological Engineering & Computing", url: "https://doi.org/10.1007/s11517-021-02497-6", topics: ["trust"] },
    { y: 2021, type: "journal", title: "Correcting Data Imbalance for Semi-Supervised COVID-19 Detection Using X-ray Chest Images", authors: "S. Calderon-Ramirez, S. Yang, A. Moemeni, D. Elizondo, S. Colreavy-Donnelly, L. F. Chavarría-Estrada, M. A. Molina-Cabello", venue: "Applied Soft Computing", url: "https://doi.org/10.1016/j.asoc.2021.107692", topics: ["trust"] },
    { y: 2021, type: "journal", title: "Improving Uncertainty Estimation With Semi-Supervised Deep Learning for COVID-19 Detection Using Chest X-Ray Images", authors: "S. Calderon-Ramirez, S. Yang, A. Moemeni, S. Colreavy-Donnelly, D. Elizondo, L. Oala, J. Rodríguez-Capitán, M. Jiménez-Navarro, et al.", venue: "IEEE Access", url: "https://doi.org/10.1109/access.2021.3085418", topics: ["trust"] },
    { y: 2021, type: "conference", title: "Dealing with Scarce Labelled Data: Semi-Supervised Deep Learning with MixMatch for COVID-19 Detection Using Chest X-ray Images", authors: "S. Calderon-Ramirez, R. Giri, S. Yang, A. Moemeni, M. Umaña, D. Elizondo, J. Torrents-Barrena, M. A. Molina-Cabello", venue: "International Conference on Pattern Recognition (ICPR)", url: "https://doi.org/10.1109/icpr48806.2021.9412946", badge: "ICPR", topics: ["trust"] },
    { y: 2021, type: "conference", title: "Improving Uncertainty Estimations for Mammogram Classification Using Semi-Supervised Learning", authors: "S. Calderon-Ramirez, D. Murillo-Hernandez, K. Rojas-Salazar, L.-A. Calvo-Valverde, S. Yang, A. Moemeni, D. Elizondo, E. López-Rubio, et al.", venue: "International Joint Conference on Neural Networks (IJCNN)", url: "https://doi.org/10.1109/ijcnn52387.2021.9533719", topics: ["trust"] },
    { y: 2020, type: "preprint", title: "MixMOOD: A Systematic Approach to Class Distribution Mismatch in Semi-Supervised Learning Using Deep Dataset Dissimilarity Measures", authors: "S. Calderon-Ramirez, L. Oala, J. Torrents-Barrena, S. Yang, A. Moemeni, W. Samek, M. A. Molina-Cabello", venue: "arXiv:2006.07767", url: "https://doi.org/10.48550/arxiv.2006.07767", topics: ["trust"] },
    { y: 2020, type: "conference", title: "A First Glance to the Quality Assessment of Dental Photostimulable Phosphor Plates with Deep Learning", authors: "A. Bermúdez, S. Calderon-Ramirez, T. Thang, P. Tyrrell, A. Moemeni, S. Yang, J. Torrents-Barrena", venue: "International Joint Conference on Neural Networks (IJCNN)", url: "https://doi.org/10.1109/ijcnn48605.2020.9206779", topics: ["trust"] },
    { y: 2020, type: "conference", title: "Intersection SPaT Estimation by Means of Single-Source Connected Vehicle Data", authors: "M. Rostami-Shahrbabaki, K. Bogenberger, A. A. Safavi, A. Moemeni", venue: "Conference paper", url: "", topics: [] },
    { y: 2019, type: "book", title: "Transnational Higher Education in Computing Courses: Experiences and Reflections", authors: "A. Moemeni, R. Gatward, L. Kankevičienė, A. Pyko (Eds.)", venue: "Springer", url: "https://doi.org/10.1007/978-3-030-28251-6", topics: [] },
    { y: 2019, type: "book", title: "Revising ICT Programmes Through Learning Outcome Alignment: A Practical Exercise in Belarusian Universities", authors: "A. Moemeni, R. Gatward, L. Kankevičienė, A. Pyko", venue: "Springer (book chapter)", url: "https://doi.org/10.1007/978-3-030-28251-6_5", topics: [] },
    { y: 2019, type: "conference", title: "Enhancing the Traffic Delay Model (TDM) in Signalised Intersections Using GPS Data", authors: "Z. Hafezi, A. A. Safavi, A. Moemeni", venue: "Conference paper", url: "", topics: [] },
    { y: 2018, type: "conference", title: "Low-Cost Automatic Ambient Assisted Living System", authors: "H. Malekmohamadi, A. Moemeni, A. Orun, J. K. Purohit", venue: "IEEE PerCom Workshops", url: "https://doi.org/10.1109/percomw.2018.8480390", topics: ["robotics"] },
    { y: 2018, type: "conference", title: "An Outcome-Based Approach to Developing a Belarusian Qualification Framework", authors: "R. Gatward, A. Moemeni, A. Ayesh, P. Lebegue, A. Caillier, J. Rudniewski, M. Repca", venue: "Conference paper", url: "", topics: [] },
    { y: 2016, type: "journal", title: "A Quantisation of Cognitive Learning Process by Computer Graphics-Games: Towards More Efficient Learning Models", authors: "A. Orun, H. Şeker, J. Rose, A. Moemeni, M. Fidan", venue: "Open Access Library Journal", url: "https://doi.org/10.4236/oalib.1102329", topics: [] },
    { y: 2014, type: "conference", title: "Inertial-Visual Pose Tracking Using Optical Flow-Aided Particle Filtering", authors: "A. Moemeni, E. Tatham", venue: "IEEE Symposium on Computational Intelligence for Multimedia, Signal and Vision Processing (CIMSIVP)", url: "https://doi.org/10.1109/cimsivp.2014.7013296", topics: ["vision"] },
    { y: 2014, type: "thesis", title: "Hybrid Marker-less Camera Pose Tracking with Integrated Sensor Fusion", authors: "A. Moemeni", venue: "PhD Thesis, De Montfort University", url: "", topics: ["vision"] },
    { y: 2010, type: "conference", title: "A Framework for Camera Pose Tracking Using Stochastic Data Fusion", authors: "A. Moemeni, E. Tatham", venue: "IEEE Games Innovations Conference (ICE-GIC)", url: "https://doi.org/10.1109/icegic.2010.5716876", topics: ["vision"] },
    { y: 2007, type: "journal", title: "Wavelet and Multiwavelet Watermarking", authors: "C. V. Serdean, M. K. Ibrahim, A. Moemeni, M. M. Al-Akaidi", venue: "IET Image Processing", url: "https://doi.org/10.1049/iet-ipr:20060214", topics: ["vision"] },
  ],

  /* ---------------------------------------------------------------
     PROJECTS
     kind: "research" (funded projects) | "student" (student projects)
     Every field except title/summary is optional; empty ones are hidden.
       people:        [{ name, role }]      e.g. students on the project
       collaborators: ["Name (Institution)"]
       links:         [{ label, url }]      papers, code, project pages (https only)
       video:         YouTube / Vimeo link, or a file in assets/ such as "assets/videos/demo.mp4"
     --------------------------------------------------------------- */
  projects: [
    { kind: "research", status: "Completed", years: "2024–2025", role: "Co-PI", funder: "Alzheimer's Research UK",
      title: "AI-Enhanced 3T MRI for Early Alzheimer's Detection",
      summary: "Validating hippocampal subfield segmentation and MRI sequence optimisation against biomarker-anchored diagnoses, so routine 3T scans can support earlier and more reliable detection of Alzheimer's disease.",
      tags: ["Neuroimaging", "Segmentation", "Alzheimer's"], collaborators: [], links: [] },
    { kind: "research", status: "Active", years: "2024–2026", role: "Co-I", funder: "EPSRC Horizon Digital Economy Research Institute",
      title: "SOMA: Co-Designed Technology for Wellbeing",
      summary: "Multimodal embodied interaction systems, co-designed with people living with dementia and neurodivergent communities, to support everyday wellbeing.",
      tags: ["Embodied AI", "Co-design", "Wellbeing"], collaborators: [], links: [] },
    { kind: "research", status: "Completed", years: "2023–2025", role: "Co-PI", funder: "EPSRC Emergence Network (Trailblazer)",
      title: "CIREI: Robots with Embodied Intelligence in the Homes of Older People",
      summary: "Investigating the challenges of integrating assistive robots into the homes of older people living with frailty, and proposing a smart middleware architecture to bring devices and robots together safely.",
      tags: ["Assistive robotics", "Frailty", "Middleware"],
      collaborators: ["Abdel-Karim Al-Tamimi", "Lantana Hewitt", "David S. Cameron", "Maher Salem"],
      links: [{ label: "Paper (Applied Sciences, 2025)", url: "https://doi.org/10.3390/app15158415" }] },
    { kind: "research", status: "Completed", years: "2022–2023", role: "Co-I", funder: "EPSRC Horizon Digital Economy Research Institute",
      title: "Open All Senses",
      summary: "Exploring trusted, data-driven products for multisensory experiences.",
      tags: ["HCI", "Multisensory", "Trusted data"], collaborators: [], links: [] },
    { kind: "research", status: "Completed", years: "2016–2020", role: "UK Principal Investigator", funder: "Erasmus+ Capacity Building in Higher Education (EU)",
      title: "IESED: Innovative ICT Education for Social-Economic Development",
      summary: "International capacity-building project modernising ICT curricula with partner universities, including outcome-based programme design in Belarus.",
      tags: ["Education", "International"], collaborators: [],
      links: [{ label: "Book (Springer, 2019)", url: "https://doi.org/10.1007/978-3-030-28251-6" }] },

    // ---- Student projects --------------------------------------------
    { kind: "student", status: "Completed", years: "PhD · 2026",
      title: "Discover-Observe-Learn: Annotation-Free Object Detection",
      people: [{ name: "Dr Ziling Wu", role: "PhD" }],
      summary: "Teaching machines to find and recognise objects without human labels, by learning from their own exploration and observation of the physical world. Includes a new dataset for studying detection under occlusion.",
      tags: ["Unsupervised learning", "Object discovery", "Robotics"],
      collaborators: ["Praminda Caleb-Solly", "Simon Castle-Green"],
      links: [{ label: "ICCV 2025 paper", url: "https://doi.org/10.1109/iccv51701.2025.01885" }, { label: "IJCNN 2023 paper", url: "https://doi.org/10.1109/ijcnn54540.2023.10191368" }] },
    { kind: "student", status: "Completed", years: "PhD · 2024",
      title: "Integrative Omics for Dementia with Lewy Bodies",
      people: [{ name: "Dr Thomas R. Goddard", role: "PhD (BBSRC DTP)" }],
      summary: "Combining genomics, transcriptomics and data science to understand the molecular pathogenesis of dementia with Lewy bodies.",
      tags: ["Dementia", "Omics", "Data science"],
      collaborators: ["Keeley J. Brookes", "Anto P. Rajkumar"],
      links: [{ label: "Review (Cells, 2024)", url: "https://doi.org/10.3390/cells13030223" }] },
    { kind: "student", status: "Completed", years: "PhD · 2021",
      title: "Semi-Supervised Deep Learning under Distribution Mismatch",
      people: [{ name: "Dr Saúl Calderón Ramírez", role: "PhD" }],
      summary: "Making semi-supervised deep learning reliable when labelled and unlabelled medical images come from different distributions, with applications to COVID-19 chest X-rays and mammography.",
      tags: ["Semi-supervised", "Uncertainty", "Medical imaging"],
      collaborators: ["Shengxiang Yang", "David Elizondo", "Miguel A. Molina-Cabello"],
      links: [{ label: "IEEE TAI 2022", url: "https://doi.org/10.1109/tai.2022.3168804" }, { label: "IEEE Access 2021", url: "https://doi.org/10.1109/access.2021.3085418" }] },
    { kind: "student", status: "Ongoing", years: "PhD · to 2029",
      title: "Multimodal Large Brain Model for Tumour Detection and Reporting",
      people: [{ name: "Denilson Tafa", role: "PhD (EPSRC Doctoral Landscape Award)" }],
      summary: "A multimodal, AI-based large brain model that detects brain tumours on imaging and generates NLP-enhanced medical reports.",
      tags: ["Multimodal AI", "Brain tumour", "NLP"], collaborators: [], links: [] },
    { kind: "student", status: "Ongoing", years: "PhD · to 2027",
      title: "AI-Based Computer-Aided Diagnosis for Musculoskeletal Disorders",
      people: [{ name: "Merve Apaydin Yumus", role: "PhD" }],
      summary: "Developing AI-based computer-aided diagnosis tools to support clinicians in assessing musculoskeletal disorders.",
      tags: ["CAD", "Musculoskeletal", "Medical imaging"], collaborators: [], links: [] },
    { kind: "student", status: "Ongoing", years: "PhD · to 2030",
      title: "Label-Efficient Fine-Grained Medical Visual Classification",
      people: [{ name: "Siddhart Parthasarathi Ray", role: "PhD" }],
      summary: "Self- and semi-supervised learning for fine-grained medical image classification when expert labels are scarce.",
      tags: ["Self-supervised", "Fine-grained", "Label efficiency"],
      collaborators: ["University of Nottingham Malaysia"], links: [] },
    // Template for a new student project (copy, fill in, remove the // marks):
    // { kind: "student", status: "Ongoing", years: "MSc · 2026", title: "", people: [{ name: "", role: "MSc" }],
    //   summary: "", tags: [], collaborators: [], links: [{ label: "", url: "https://" }], video: "https://www.youtube.com/watch?v=..." },
  ],

  /* ---------------------------------------------------------------
     JOIN ME: available project proposals for prospective students.
     DRAFT examples based on current research. Edit or replace them.
     level: "PhD" | "MSc" | "PhD / MSc"
     --------------------------------------------------------------- */
  openings: [
    { level: "PhD", title: "Uncertainty-Aware Hippocampal Subfield Segmentation for Early Alzheimer's Detection",
      summary: "Build segmentation models for 3T MRI that report how confident they are, and test whether subfield measurements improve early diagnosis when anchored to blood and CSF biomarkers.",
      skills: ["Deep learning", "Medical imaging", "Python / PyTorch"], funding: "Self-funded or scholarship applicants" },
    { level: "PhD", title: "Embodied AI for Assistive Robots in the Home",
      summary: "Develop perception and interaction methods that let assistive robots work safely alongside older people living with frailty, building on our smart-middleware research.",
      skills: ["Robotics", "Computer vision", "HRI"], funding: "Self-funded or scholarship applicants" },
    { level: "MSc", title: "Lightweight Brain Tumour Segmentation for Low-Resource Settings",
      summary: "Use knowledge distillation and uncertainty estimation to shrink 3D segmentation networks so they run on modest hardware without losing reliability.",
      skills: ["PyTorch", "3D segmentation"], funding: "MSc dissertation project" },
    { level: "MSc", title: "Self-Supervised Pre-Training for Label-Scarce Medical Images",
      summary: "Compare self-supervised pre-training strategies for medical image classification when only a handful of labelled examples are available.",
      skills: ["Self-supervised learning", "Python"], funding: "MSc dissertation project" },
  ],

  /* ---------------------------------------------------------------
     CONSULTANCY
     --------------------------------------------------------------- */
  consultancy: [
    { icon: "brain", title: "Medical imaging AI", text: "Feasibility studies, model development and validation for MRI, X-ray and other imaging data, from segmentation to computer-aided diagnosis." },
    { icon: "shield", title: "Trustworthy AI review", text: "Independent assessment of robustness, uncertainty, explainability and data-shift risks before AI systems reach users or patients." },
    { icon: "eye", title: "Computer vision & robotics", text: "Prototyping perception systems, label-efficient training pipelines and assistive technology for real-world environments." },
    { icon: "book", title: "AI training & curriculum", text: "Workshops and programme design in AI and data science, drawing on degree apprenticeship and industry partnership experience." },
  ],

  team: {
    current: [
      { name: "Siddhart Parthasarathi Ray", topic: "Label-efficient fine-grained medical visual classification via self-/semi-supervised learning (with UoN Malaysia)", until: "2030" },
      { name: "Denilson Tafa", topic: "Multimodal AI-based large brain model for brain tumour detection and NLP-enhanced medical reporting", until: "2029", note: "EPSRC Doctoral Landscape Award" },
      { name: "Merve Apaydin Yumus", topic: "AI-based computer-aided diagnosis for musculoskeletal disorders", until: "2027" },
    ],
    alumni: [
      { name: "Dr Ziling Wu", topic: "Discover-Observe-Learn: Annotation-free object detection from physical-world exploration and observation", year: "2026" },
      { name: "Dr Thomas R. Goddard", topic: "Integrative omics approaches for understanding the molecular pathogenesis of dementia with Lewy bodies", year: "2024", note: "BBSRC DTP" },
      { name: "Dr Saúl Calderón Ramírez", topic: "Improving semi-supervised deep learning under distribution mismatch for medical image analysis", year: "2021" },
    ],
  },

  teaching: [
    { area: "AI & Data Science", items: ["Big Data Learning and Technologies", "Data Science", "Intelligent Systems & Computational Intelligence"] },
    { area: "Computer Vision & Imaging", items: ["Introduction to Image Processing", "Advanced Image Processing with Machine Learning"] },
    { area: "Programming & Software Eng.", items: ["Computer Programming & Software Engineering", "Internet Software Development", "C++, C#, MATLAB, Java, Python"] },
    { area: "HCI & Multimedia", items: ["Multimedia Technologies (HCI)", "Interactive Media Development", "Computer Games Technology & Programming"] },
  ],

  career: [
    { years: "2020–present", role: "Assistant Professor in Computer Science", org: "University of Nottingham" },
    { years: "2004–2020", role: "Principal Lecturer (equivalent to Associate Professor) & Programme Leader", org: "De Montfort University", note: "Previously Senior Lecturer" },
  ],

  education: [
    { year: "2015", deg: "PhD, Computing & Electronics Engineering", org: "De Montfort University" },
    { year: "2003", deg: "MSc, Multimedia Computing", org: "University of Gloucestershire" },
    { year: "1999", deg: "BSc (Hons) Electronics Engineering, First Class", org: "Shiraz (Pahlavi) University" },
  ],

  service: [
    "Track Chair, REED-AI: Responsible, Explainable & Ethical-by-Design AI in Clinical Applications, ACM TRUST 2027",
    "Guest Editor, Special Issue on Computer Vision for Medical Applications, MDPI",
    "Reviewer for IEEE journals, CVPR, MICCAI-associated conferences, BMVA venues and medical imaging journals",
    "School EDI Director, School of Computer Science, University of Nottingham (2021–2024); led the Athena SWAN Bronze award",
    "Member, University of Nottingham Athena SWAN Gold Self-Assessment Team (2023); Race Equality Charter contributor",
    "External Examiner, Nottingham Trent University (2021–2024); External PhD Examiner, Anglia Ruskin (2021) & De Montfort (2020)",
    "Internal PhD Examiner, University of Nottingham (2024, 2025, 2026)",
    "Year in Industry Lead (Nottingham); Head of International Mobility & Erasmus (De Montfort)",
  ],

  memberships: ["SFHEA · Advance HE", "MICCAI Society", "IEEE", "BMVA", "IET (2007–19)"],
};
