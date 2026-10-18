(() => {
  try {
  const filename = window.location.pathname.split('/').pop() || 'index.html';
  const page = filename === 'index.html' ? 'home' : filename.replace('.html', '');
  const presentationLink = document.querySelector('[data-page-link="index.html"]');
  if (presentationLink) presentationLink.textContent = 'Home';
  document.querySelector('[data-page-link="work.html"]')?.remove();
  const primaryNav = document.querySelector('.top .nav');
  const navLinks = primaryNav?.querySelector('.navlinks');
  const menuToggle = document.createElement('button');
  menuToggle.className = 'menu-toggle';
  menuToggle.type = 'button';
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.innerHTML = '<span></span><span></span><span></span>';
  if (primaryNav && navLinks) primaryNav.insertBefore(menuToggle, navLinks);
  const sharedStyles = document.createElement('style');
  sharedStyles.textContent = `
    :root{--section-marker:#b78cff;--sans:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
    .heading-period{color:var(--lime)}
    .ui-label{font-size:.75rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase}
    .ui-label--neutral{color:var(--muted)!important}
    .ui-label--caption{font-weight:400!important;font-style:italic;letter-spacing:0!important;text-transform:none!important}
    #process-content .process-feature-quote{position:relative;width:100%;max-width:none;margin:52px 0;padding:clamp(28px,4vw,48px) clamp(28px,5vw,58px);border-left:4px solid var(--lime);background:linear-gradient(135deg,rgba(88,226,213,.1),rgba(201,255,101,.045));font-size:clamp(1.55rem,3vw,2.65rem);font-weight:520;line-height:1.3;letter-spacing:-.035em}
    #process-content .process-feature-quote:before{content:'“';position:absolute;left:14px;top:-7px;color:rgba(201,255,101,.25);font:700 5.5rem/1 Georgia,serif}
    #process-content .process-feature-quote cite{display:block;margin-top:22px;color:var(--lime);font-size:.42em;font-style:normal;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
    #process-content>.process-copy{grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;margin-top:48px}
    #process-content>.process-copy>div{min-width:0;padding:clamp(24px,3.5vw,42px);border:1px solid rgba(201,255,101,.24);background:linear-gradient(145deg,rgba(12,34,39,.9),rgba(6,19,22,.96));box-shadow:0 20px 54px rgba(0,0,0,.18)}
    #process-content>.process-copy h3{margin-bottom:18px;font-size:clamp(1.5rem,2.5vw,2.25rem)}
    #process-content>.process-copy p{margin:0;line-height:1.7}
    #process-gallery .visual-button,#process-gallery .visual-button img{background:#eef1f3}
    a:not(.button):not(.leadership-case):hover{text-decoration:underline;text-underline-offset:.22em;text-decoration-thickness:1px}
    .button,.company-filter,.work-tab{border-color:rgba(201,255,101,.68);background:transparent;color:var(--lime);cursor:pointer;transition:background .2s ease,border-color .2s ease,color .2s ease,transform .2s ease}
    button:not(.visual-button):not(.story-visual):not(.topic-visual),.button{border-radius:4px}
    .button:hover,.company-filter:not([aria-pressed="true"]):hover,.work-tab:not([aria-selected="true"]):hover{border-color:var(--lime);background:var(--lime);color:var(--canvas);transform:translateY(-2px)}
    .button:focus-visible,.company-filter:focus-visible,.work-tab:focus-visible,.visual-button:focus-visible,.topic-visual:focus-visible,.story-visual:focus-visible{outline:3px solid rgba(201,255,101,.42);outline-offset:3px}
    .company-filter[aria-pressed="true"],.work-tab[aria-selected="true"]{border-color:rgba(237,245,245,.42);background:rgba(237,245,245,.12);color:var(--ink);cursor:default;transform:none}
    .visual-button,.topic-visual{position:relative}
    .visual-button img{border-color:rgba(201,255,101,.34)}
    .visual-button:after,.topic-visual:after{content:'↗';position:absolute;z-index:2;right:12px;top:12px;display:grid;place-items:center;width:36px;height:36px;border:1px solid rgba(201,255,101,.72);border-radius:50%;background:rgba(6,19,22,.9);color:var(--lime);font:800 1rem/1 var(--sans);box-shadow:0 8px 24px rgba(0,0,0,.28);transition:transform .2s ease,background .2s ease,color .2s ease}
    .visual-button:hover:after,.visual-button:focus-visible:after,.topic-visual:hover:after,.topic-visual:focus-visible:after{transform:translate(2px,-2px);background:var(--lime);color:var(--canvas)}
    .visual-button:hover img,.visual-button:focus-visible img,.topic-visual:hover img,.topic-visual:focus-visible img{transform:translateY(-4px) scale(1.012);border-color:var(--lime);box-shadow:0 18px 42px rgba(0,0,0,.28)}
    .evidence{padding-top:clamp(54px,7vw,92px);border-top:1px solid var(--line)}
    .evidence-head{display:block!important;margin-bottom:24px!important}
    .evidence-head>div{display:grid;grid-template-columns:minmax(220px,.42fr) minmax(0,.58fr);column-gap:clamp(36px,6vw,88px);align-items:end}
    .evidence-count{grid-column:1;grid-row:1/3;display:block!important;width:max-content;margin:0!important;color:transparent;font-family:var(--sans);font-size:clamp(4.4rem,8vw,7.5rem);font-weight:300;letter-spacing:.045em;line-height:.72;transform:scaleX(1.08);transform-origin:left center;-webkit-text-stroke:1px rgba(201,255,101,.72)}
    .evidence-head .eyebrow{grid-column:2;grid-row:1;margin-bottom:16px}
    .evidence-head h3{grid-column:2;grid-row:2;margin:0;font-size:clamp(2rem,3.5vw,3.35rem);line-height:1.02}
    .evidence-instructions{max-width:none!important;text-align:center}
    .top .nav{position:relative}
    .menu-toggle{display:none;width:42px;height:42px;padding:10px;border:1px solid rgba(237,245,245,.2);background:rgba(5,17,20,.72);cursor:pointer}
    .menu-toggle span{display:block;width:100%;height:1px;margin:5px 0;background:var(--ink);transform-origin:center;transition:transform .22s ease,opacity .18s ease}
    .menu-toggle[aria-expanded="true"] span:nth-child(1){transform:translateY(6px) rotate(45deg)}
    .menu-toggle[aria-expanded="true"] span:nth-child(2){opacity:0}
    .menu-toggle[aria-expanded="true"] span:nth-child(3){transform:translateY(-6px) rotate(-45deg)}
    .topic-head{display:grid;grid-template-columns:auto minmax(0,1fr);column-gap:30px;align-items:center}
    .topic-head>div:first-child{display:contents}
    .topic-head .eyebrow{grid-column:1/-1;grid-row:1;margin-bottom:26px}
    .topic-head .topic-num{grid-column:1;grid-row:2;text-align:left;padding:8px 30px 10px 0;border-right:2px solid var(--lime);font-size:clamp(5rem,10vw,9rem);line-height:.74;-webkit-text-stroke:1px var(--lime)}
    .topic-head h2{grid-column:2;grid-row:2;margin:0;align-self:center}
    .topic-head .intro{grid-column:1/-1;grid-row:3;margin:34px 0 0}
    .story-grid.story-sections{display:block;margin-top:76px;background:none}
    .story-sections article{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(320px,.92fr);gap:clamp(36px,6vw,88px);align-items:center;min-height:610px;padding:clamp(48px,7vw,94px) 0;border-top:1px solid var(--line);background:transparent}
    .story-sections article:last-child{border-bottom:1px solid var(--line)}
    #healthcare .story-sections article:last-child{border-bottom:0}
    .story-sections article:nth-child(even) .story-media{order:2}
    .story-sections article:nth-child(even) .story-copy{order:1}
    .story-media{position:relative;z-index:1;margin:0;min-width:0}
    .story-visual{position:relative;display:block;width:100%;padding:0;overflow:hidden;border:1px solid rgba(201,255,101,.24);background:#061316;cursor:zoom-in}
    .story-visual:after{content:'View larger  ↗';position:absolute;right:14px;bottom:14px;padding:8px 10px;background:rgba(6,19,22,.86);border:1px solid rgba(201,255,101,.45);color:var(--lime);font:750 .7rem/1.1 var(--sans);letter-spacing:.08em;text-transform:uppercase}
    .story-visual img{display:block;width:100%;height:clamp(340px,38vw,520px);object-fit:cover;transition:transform .45s ease}
    .story-visual:hover img{transform:scale(1.025)}
    #healthcare .story-visual img{object-fit:contain;background:#f3f3f1}
    .story-media figcaption{display:flex;justify-content:space-between;gap:20px;padding-top:13px;color:var(--muted);font-size:.75rem;line-height:1.45}
    .story-media figcaption span:first-child{color:var(--lime);font-weight:800;text-transform:uppercase;letter-spacing:.08em}
    .story-copy{position:relative;z-index:2;max-width:560px;pointer-events:auto;-webkit-user-select:text;user-select:text}
    .story-copy *,.topic-head .eyebrow,.topic-head h2,.topic-detail .intro{-webkit-user-select:text;user-select:text}
    .story-sections .story-count{display:block;width:max-content;margin-bottom:24px;color:transparent;font-family:var(--sans);font-size:clamp(4.4rem,8vw,7.5rem);font-weight:300;letter-spacing:.045em;line-height:.72;transform:scaleX(1.08);transform-origin:left center;-webkit-text-stroke:1px rgba(201,255,101,.72)}
    .story-sections .kicker{margin-bottom:16px;color:var(--lime);font-size:.75rem;font-weight:850;letter-spacing:.12em;text-transform:uppercase}
    .story-sections h3{font-size:clamp(2rem,3.5vw,3.35rem);line-height:1.02;margin:0 0 24px}
    .story-sections .story-copy p{max-width:52ch;color:var(--muted);font-size:clamp(1rem,1.25vw,1.18rem);line-height:1.75}
    .studio #export-content,.studio #content-import,.studio #import-content,.studio #reset-content{display:none}
    .studio-save-note{margin:12px 0 0;color:var(--lime)!important;font-weight:750}
    body [data-edit-key]{white-space:pre-wrap}
    body.editing .hero-meta [data-edit-key]{outline:1px dashed var(--lime);outline-offset:4px}
    .present,.studio-toggle,.studio{display:none!important}
    #ai .topic-head,#healthcare .topic-head{position:relative;isolation:isolate;overflow:hidden;margin:0 0 28px;padding:clamp(58px,8vw,104px);border:1px solid rgba(201,255,101,.24);box-shadow:0 28px 80px rgba(0,0,0,.22)}
    #ai .topic-head>* ,#healthcare .topic-head>*{position:relative;z-index:2}
    #ai .topic-head{background:radial-gradient(circle at 82% 18%,rgba(201,255,101,.2),transparent 25%),linear-gradient(128deg,#0d3036 0%,#09242a 48%,#0b181c 100%)}
    #ai .topic-head:before{content:'';position:absolute;z-index:1;width:72%;height:190%;right:-24%;top:-52%;border:1px solid rgba(201,255,101,.36);border-radius:50%;transform:rotate(-28deg);box-shadow:0 0 0 38px rgba(88,226,213,.045),0 0 0 92px rgba(201,255,101,.028);pointer-events:none}
    #ai .topic-head:after{content:'';position:absolute;z-index:1;inset:0;background:linear-gradient(112deg,transparent 58%,rgba(88,226,213,.09) 58.2%,transparent 58.5%),linear-gradient(112deg,transparent 69%,rgba(201,255,101,.12) 69.2%,transparent 69.5%);pointer-events:none}
    #healthcare .topic-head{background:radial-gradient(circle at 79% 34%,rgba(88,226,213,.2),transparent 22%),linear-gradient(145deg,#10262f,#07171d 63%,#0b2024)}
    #healthcare .topic-head:before{content:'';position:absolute;z-index:1;inset:0;background-image:linear-gradient(rgba(237,245,245,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(237,245,245,.045) 1px,transparent 1px);background-size:58px 58px;mask-image:linear-gradient(90deg,transparent 25%,#000);pointer-events:none}
    #healthcare .topic-head:after{content:'';position:absolute;z-index:1;width:440px;height:440px;right:-90px;top:-165px;border:1px solid rgba(201,255,101,.34);border-radius:50%;box-shadow:0 0 0 48px rgba(88,226,213,.035),0 0 0 104px rgba(201,255,101,.025);pointer-events:none}
    .page-dots{position:fixed;z-index:24;right:18px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;align-items:flex-end;gap:4px;padding:10px 8px;border:1px solid rgba(237,245,245,.12);background:rgba(5,17,20,.58);backdrop-filter:blur(14px);box-shadow:0 12px 36px rgba(0,0,0,.18)}
    .page-dots a{position:relative;display:block;width:18px;height:18px;text-decoration:none}
    .page-dots a:before{content:'';position:absolute;width:5px;height:5px;right:6px;top:6px;border:1px solid rgba(237,245,245,.7);border-radius:50%;background:transparent;transition:.2s ease}
    .page-dots a:hover:before,.page-dots a:focus-visible:before,.page-dots a.active:before{border-color:var(--lime);background:var(--lime);transform:scale(1.35)}
    .page-dots a:nth-child(2):before{border-color:var(--aqua);background:rgba(88,226,213,.2)}
    .page-dots a:nth-child(9):before{border-color:var(--section-marker);background:rgba(183,140,255,.2)}
    .page-dots a:nth-child(16):before{border-color:var(--lime);background:rgba(201,255,101,.2)}
    .page-dots a:nth-child(2).active:before,.page-dots a:nth-child(9).active:before,.page-dots a:nth-child(16).active:before{transform:scale(1.35)}
    .page-dots a:after{content:attr(data-label);position:absolute;right:28px;top:50%;width:max-content;max-width:240px;transform:translate(8px,-50%);padding:7px 9px;border:1px solid rgba(201,255,101,.28);background:rgba(5,17,20,.94);color:var(--ink);font-size:.7rem;font-weight:750;letter-spacing:.04em;opacity:0;pointer-events:none;transition:.18s ease}
    .page-dots a:hover:after,.page-dots a:focus-visible:after{opacity:1;transform:translate(0,-50%)}
    .presentation-download{position:relative;isolation:isolate;display:grid;justify-items:center;gap:16px;margin-top:74px;padding:clamp(70px,10vw,132px) clamp(28px,7vw,90px);overflow:hidden;border:1px solid rgba(201,255,101,.25);background:radial-gradient(circle at 50% 24%,rgba(88,226,213,.15),transparent 34%),linear-gradient(145deg,#0c2b31,#07191d 64%,#0d2024);text-align:center}
    .presentation-download:before{content:'';position:absolute;z-index:-1;width:720px;height:360px;left:50%;top:-230px;transform:translateX(-50%);border:1px solid rgba(201,255,101,.34);border-radius:50%;box-shadow:0 0 0 44px rgba(88,226,213,.035),0 0 0 96px rgba(201,255,101,.02)}
    .presentation-download .closing-kicker{color:var(--lime);font-size:.76rem;font-weight:850;letter-spacing:.14em;text-transform:uppercase}
    .presentation-download h2{margin:3px 0 0;font-size:clamp(4rem,10vw,9rem);line-height:.82}
    .presentation-download .closing-message{max-width:680px;margin:6px 0 34px;color:var(--ink);font-size:clamp(1.25rem,2vw,1.85rem)}
    .presentation-download .button{display:inline-flex;align-items:center;justify-content:center;gap:13px;min-height:50px;padding:13px 18px;border:1px solid rgba(201,255,101,.58);background:rgba(6,19,22,.78);color:var(--lime);font-size:.78rem;font-weight:800;letter-spacing:.09em;text-transform:uppercase;box-shadow:0 12px 28px rgba(0,0,0,.18)}
    .presentation-download .button svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.8;transition:transform .2s ease}
    .presentation-download .button:hover{background:var(--lime);border-color:var(--lime);color:var(--canvas)}
    .presentation-download .button:hover svg{transform:translateY(2px)}
    .presentation-download .download-caption{max-width:56ch;margin:0;color:var(--muted);font-size:.82rem}
    #panel-questions.closing-only .presentation-download{margin-top:0}
    .contact-form-section{padding:clamp(88px,10vw,140px) 0;background:radial-gradient(circle at 80% 25%,rgba(88,226,213,.09),transparent 30%),var(--canvas)}
    .contact-form-section>.wrap{position:relative;z-index:2}
    .contact-form-section h2{max-width:760px}
    .contact-form{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;width:100%;max-width:920px;margin-top:42px;padding:clamp(24px,4vw,44px);border:1px solid var(--line);background:linear-gradient(145deg,rgba(12,34,39,.92),rgba(6,19,22,.96));box-shadow:0 24px 70px rgba(0,0,0,.2)}
    .contact-field{display:grid;gap:8px}
    .contact-field.full{grid-column:1/-1}
    .contact-field label{color:var(--aqua);font-size:.74rem;font-weight:850;letter-spacing:.1em;text-transform:uppercase}
    .contact-field input,.contact-field textarea{width:100%;border:1px solid rgba(237,245,245,.22);border-radius:0;padding:14px 15px;background:rgba(3,14,17,.72);color:var(--ink);font:inherit;transition:border-color .18s,box-shadow .18s}
    .contact-field textarea{min-height:150px;resize:vertical}
    .contact-field input:focus,.contact-field textarea:focus{outline:0;border-color:var(--lime);box-shadow:0 0 0 3px rgba(201,255,101,.13)}
    .contact-form .button{justify-self:start;min-width:170px;background:transparent;cursor:pointer}
    .contact-honeypot{position:absolute!important;left:-10000px!important;width:1px!important;height:1px!important;overflow:hidden!important}
    .form-status{max-width:920px;margin:28px 0 0;padding:15px 17px;border-left:3px solid var(--aqua);background:rgba(88,226,213,.09);color:var(--ink)}
    .form-status.error{border-color:#ff8f8f;background:rgba(255,100,100,.08)}
    .experience-summary{display:grid;grid-template-columns:minmax(0,760px);margin:38px 0 64px}
    .experience-summary article{padding:28px;background:var(--surface)}
    .experience-summary h3{margin-bottom:14px;font-size:1.18rem;letter-spacing:-.025em}
    .experience-summary p{margin:0;color:var(--muted);line-height:1.65}
    .companies-section{overflow:hidden;background:radial-gradient(circle at 86% 14%,rgba(88,226,213,.14),transparent 26%),linear-gradient(145deg,#0e2a30,#07181c 68%,#0b2024)}
    .companies-section:before{content:'';position:absolute;width:620px;height:620px;right:-210px;top:-320px;border:1px solid rgba(201,255,101,.28);border-radius:50%;box-shadow:0 0 0 52px rgba(88,226,213,.025),0 0 0 112px rgba(201,255,101,.018)}
    .company-directory{position:relative;z-index:1}
    .company-directory h2{max-width:none;margin-bottom:18px;font-size:clamp(2.5rem,5vw,5rem)}
    .experience-hero{background:linear-gradient(112deg,#051013 0 57%,#0c2630 57.2% 72%,#07171b 72.2%)}
    .experience-hero .l1-art{background:repeating-linear-gradient(135deg,transparent 0 54px,rgba(237,245,245,.035) 54px 55px,transparent 55px 108px);mask-image:linear-gradient(90deg,transparent 32%,#000 70%)}
    .experience-hero .l1-art span{width:540px;height:540px;right:-110px;top:40px;border:1px solid rgba(201,255,101,.34);border-radius:0;transform:rotate(45deg);box-shadow:0 0 0 46px rgba(88,226,213,.025)}
    .experience-hero .l1-art span:nth-child(2){width:245px;height:245px;right:300px;top:85px;border-color:rgba(88,226,213,.34);border-radius:0;transform:rotate(45deg);box-shadow:none}
    .has-l1.page-first{min-height:0}
    .l1-hero .l1-scroll{margin-top:34px}
    .company-directory>.intro{margin-bottom:28px}
    .company-filters{display:flex;flex-wrap:wrap;gap:7px;margin:0 0 42px}
    .company-filter{min-height:30px;padding:5px 10px;border:1px solid rgba(201,255,101,.68);border-radius:4px;font:600 .7rem/1.15 var(--sans)}
    .industry-tag{display:inline-flex;align-items:center;min-height:28px;padding:5px 10px;border:1px solid rgba(88,226,213,.34);border-radius:999px;background:rgba(88,226,213,.06);color:var(--muted);font:650 .7rem/1.15 var(--sans);cursor:default}
    .company-groups{display:grid;grid-template-columns:1fr 1fr;gap:clamp(28px,5vw,64px)}
    .company-group{margin-top:44px;padding:0;border:1px solid rgba(237,245,245,.14);background:#030b0d}
    .company-group h3{margin:0;padding:14px 16px;border:0;border-bottom:1px solid rgba(237,245,245,.14);background:transparent;text-align:left;font-size:.78rem;font-weight:750;letter-spacing:.1em;text-transform:uppercase}
    .company-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;padding:12px}
    .company-logo{display:grid;place-items:center;aspect-ratio:1;margin:0;padding:0;overflow:hidden;border:1px solid var(--line);background:#fff;transition:opacity .22s ease,border-color .22s ease,transform .22s ease}
    .company-logo img{display:block;width:100%;height:100%;object-fit:cover;background:#fff}
    .company-logo.is-muted{opacity:.16;filter:grayscale(1)}
    .company-logo.is-match{border-color:var(--lime);transform:translateY(-2px)}
    #work.experience-work{isolation:isolate;overflow:hidden;padding:clamp(84px,10vw,132px) 0;border-top:1px solid rgba(201,255,101,.24);background:radial-gradient(circle at 78% 18%,rgba(201,255,101,.16),transparent 24%),linear-gradient(128deg,#0d3036 0%,#09242a 50%,#0b181c 100%)}
    #work.experience-work:before{content:'';position:absolute;z-index:-1;width:70%;height:1050px;right:-22%;top:-260px;border:1px solid rgba(201,255,101,.34);border-radius:50%;transform:rotate(-24deg);box-shadow:0 0 0 42px rgba(88,226,213,.04),0 0 0 96px rgba(201,255,101,.024)}
    #work.experience-work .supporting{position:relative;z-index:1;gap:0}
    .work-examples-intro{position:relative;margin:0 0 40px;padding:0;border:0;background:transparent}
    .work-examples-intro:before{content:none}
    .work-examples-intro h2{margin-bottom:0;max-width:none;white-space:nowrap;font-size:clamp(2.5rem,4.6vw,5rem)}
    .work-tabs{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin:0 0 42px}
    .work-tab{min-height:38px;padding:9px 13px;border:1px solid rgba(201,255,101,.68);border-radius:4px;font:700 .72rem/1.15 var(--sans);letter-spacing:.06em;text-transform:uppercase}
    .experience-work .support-case[hidden]{display:none!important}
    .experience-work .support-case{padding:clamp(36px,5vw,58px);border:1px solid rgba(237,245,245,.15);background:#030b0d}
    .work-type-head{margin-bottom:30px}
    .work-type-head h3{font-size:clamp(2rem,4vw,3.4rem);margin:10px 0 0}
    .leadership-case-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .leadership-case{display:block;padding:28px;border:1px solid var(--line);background:rgba(12,34,39,.62);color:var(--ink);text-decoration:none;transition:.2s ease}
    .leadership-case:hover{border-color:var(--lime);transform:translateY(-3px)}
    .leadership-case span{display:block;margin-bottom:12px;color:var(--lime);font-size:.74rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase}
    .leadership-case strong{display:block;font-size:1.3rem;line-height:1.2}
    .topic-detail{grid-column:1/-1;grid-row:3;display:grid;grid-template-columns:minmax(0,1.45fr) minmax(250px,.55fr);gap:clamp(34px,6vw,82px);align-items:center;margin-top:42px}
    .topic-detail .intro{grid-column:auto;grid-row:auto;margin:0;max-width:760px}
    .topic-side-image{margin:0;min-width:0}
    .topic-side-image .topic-visual{display:block;width:100%;padding:0;overflow:hidden;border:1px solid rgba(201,255,101,.3);background:rgba(6,19,22,.7);cursor:zoom-in}
    .topic-side-image img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover}
    .topic-side-image .topic-image-frame{display:grid;place-items:center;width:100%;aspect-ratio:1;padding:8px;overflow:hidden;border:1px solid rgba(201,255,101,.3);background:#fff}
    .topic-side-image .topic-image-frame img{width:100%;height:100%;aspect-ratio:1;object-fit:contain}
    .topic-side-image.logo .topic-visual{background:#f7f7f3}
    .topic-side-image.logo img{height:auto;margin:0;object-fit:contain;padding:clamp(42px,7vw,82px)}
    .topic-side-image figcaption{padding-top:10px;color:var(--muted);font-size:.72rem;letter-spacing:.06em;text-transform:uppercase}
    #ai .topic-head .metric-strip,#healthcare .topic-head .metric-strip{grid-column:1/-1;grid-row:4;width:100%;margin-top:42px}
    .flow-intro{margin-bottom:42px}
    .flow-intro .eyebrow{margin-bottom:12px}
    .flow-intro h2{margin:0;font-size:clamp(2rem,4vw,4.25rem)}
    .flow-track:before{left:0;right:0}
    html{scroll-behavior:smooth;scroll-padding-top:92px}
    @media(max-width:900px){.menu-toggle{display:block;margin-left:auto}.top .navlinks.menu-open{position:absolute;display:flex;z-index:40;top:calc(100% + 1px);right:0;flex-direction:column;align-items:stretch;gap:8px;width:min(350px,calc(100vw - 38px));padding:14px;border:1px solid rgba(237,245,245,.16);background:rgba(5,17,20,.97);backdrop-filter:blur(18px);box-shadow:0 22px 50px rgba(0,0,0,.38)}.top .navlinks.menu-open a{display:flex;align-items:center;min-height:54px;padding:13px 16px;border:1px solid transparent;border-radius:4px;background:transparent;color:var(--muted);font-size:.9rem;text-decoration:none;transition:background .18s ease,border-color .18s ease,color .18s ease,transform .18s ease}.top .navlinks.menu-open a:not([aria-current="page"]):hover,.top .navlinks.menu-open a:not([aria-current="page"]):focus-visible{border-color:var(--lime);background:var(--lime);color:var(--canvas);transform:translateX(-3px);outline:0}.top .navlinks.menu-open a[aria-current="page"]{border-color:rgba(237,245,245,.42);background:rgba(237,245,245,.12);color:var(--ink);cursor:default}}
    @media(max-width:820px){.story-sections article{grid-template-columns:1fr;min-height:0;gap:32px}.story-sections article:nth-child(even) .story-media,.story-sections article:nth-child(even) .story-copy{order:initial}.story-copy{max-width:none}.story-visual img{height:auto;max-height:620px}.experience-summary{grid-template-columns:1fr}}
    @media(max-width:700px){.page-dots{right:7px;padding:7px 5px;background:rgba(5,17,20,.78)}.page-dots a:after{display:none}#ai .topic-head,#healthcare .topic-head{padding:48px 24px;margin-inline:-8px}.topic-detail{grid-template-columns:1fr}.topic-side-image{max-width:420px}.topic-side-image.logo img{padding:44px}}
    @media(max-width:720px){.contact-form{grid-template-columns:1fr}.contact-field.full{grid-column:auto}}
    @media(max-width:700px){.work-examples-intro h2{white-space:normal}#process-content>.process-copy{grid-template-columns:1fr}}
    @media(max-width:560px){.topic-head{column-gap:18px}.topic-head .topic-num{font-size:4rem;padding-right:18px}.topic-head h2{font-size:2.35rem}.story-grid.story-sections{margin-top:48px}.story-sections article{padding:54px 0}.story-media figcaption{display:block}.story-media figcaption span{display:block;margin-bottom:4px}.evidence-head>div{display:block}.evidence-count{margin-bottom:24px!important}.evidence-head .eyebrow{margin-bottom:12px}.company-groups{grid-template-columns:1fr}.leadership-case-grid{grid-template-columns:1fr}.work-examples-intro{padding:52px 24px}.work-tabs{display:grid;grid-template-columns:1fr}.work-tab{width:100%}}
    @media print{.top,.page-dots,.presentation-download,.present,.studio-toggle,.studio{display:none!important}body{-webkit-print-color-adjust:exact;print-color-adjust:exact}.story-sections article{break-inside:avoid}.topic-head{break-before:page}}
  `;
  document.head.append(sharedStyles);
  const closeMenu = () => {
    navLinks?.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
  };
  menuToggle.addEventListener('click', () => {
    const willOpen = !navLinks.classList.contains('menu-open');
    navLinks.classList.toggle('menu-open', willOpen);
    menuToggle.setAttribute('aria-expanded', String(willOpen));
    menuToggle.setAttribute('aria-label', willOpen ? 'Close navigation menu' : 'Open navigation menu');
  });
  navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', event => {
    if (primaryNav && !primaryNav.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
      menuToggle.focus();
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });
  const sections = [...document.querySelectorAll('main > section')];
  const byId = id => document.getElementById(id);
  const process = byId('process');
  const scaling = process?.nextElementSibling;
  const work = byId('work');
  const coverage = document.querySelector('.coverage')?.closest('section');
  const pages = {
    home: [document.querySelector('.hero'), byId('ai'), byId('healthcare'), coverage],
    experience: [byId('breadth'), work],
    process: [process],
    work: [work],
    contact: [byId('close')]
  };
  const keep = (pages[page] || pages.home).filter(Boolean);

  sections.forEach(section => section.hidden = !keep.includes(section));
  keep[0]?.classList.add('page-first');
  if (page !== 'home') document.body.classList.add('subpage');

  if (page === 'process') {
    const processContent = process.querySelector(':scope > .wrap');
    processContent.querySelector(':scope > .eyebrow').textContent = 'Process and methodology';
    processContent.querySelector(':scope > h2').textContent = 'Combining an industry best practice process for problem solving and framework for innovation.';
    const featureQuote = processContent.querySelector(':scope > .quote');
    featureQuote.classList.add('process-feature-quote');
    featureQuote.innerHTML = 'Design Thinking and Double Diamond, when abstracted to the highest level, can operate on a micro or macro scale and can be used as a methodology to solve any problem.<cite>~ Chun Lee</cite>';
    const processColumns = [...processContent.querySelectorAll(':scope > .process-copy > div')];
    processColumns[0].querySelector('h3').textContent = 'Why Design Thinking';
    processColumns[0].querySelector('p').textContent = 'Design Thinking as popularized by IDEO was in fact created many years prior as a way for engineers and "non-designers" to be able to harness the creative problem solving of Designers.';
    processColumns[1].querySelector('h3').textContent = 'Why the double diamond';
    processColumns[1].querySelector('p').textContent = 'Double Diamond is by far the most commonly accepted and also the most practical of all design methodologies. This model accurately portrays all the key actions needed in a PDLC but was in fact a process designed for ensure innovation and product success.';
    const processGallery = processContent.querySelector('#process-gallery');
    const processFigures = [...processGallery.querySelectorAll('figure')];
    if (processFigures.length === 4) processGallery.insertBefore(processFigures[3], processFigures[2]);
    const processCaptionCopy = {
      'p17-01.png': ['My Design Thinking Diagram', 'Classic Stanford / IDEO Design Thinking process'],
      'p17-02.png': ['How Design Thinking fits into a PDLC', 'Practical Design Thinking'],
      'p18-01.png': ['Design Thinking and Double Diamond', 'Design Thinking deliverable examples'],
      'p18-02.jpg': ['Diverging and Converging Model', 'British Design Double Diamond Model']
    };
    processGallery.querySelectorAll('figure').forEach(figure => {
      const filename = figure.querySelector('img')?.getAttribute('src')?.split('/').pop();
      const copy = processCaptionCopy[filename];
      if (!copy) return;
      figure.querySelector('.caption-label').textContent = copy[0];
      figure.querySelector('figcaption strong').textContent = copy[1];
    });
  }
  if (page === 'contact') {
    const contactSection = byId('close');
    contactSection.classList.add('contact-form-section');
    contactSection.querySelector('.eyebrow').textContent = 'Contact';
    contactSection.querySelector('h2').textContent = 'Start a conversation.';
    contactSection.querySelector('.lede').textContent = 'Share a little about the opportunity, challenge, or idea you would like to discuss.';
    const contactArea = contactSection.querySelector('.contact');
    contactArea.innerHTML = '<form class="contact-form" id="contact-form" action="contact.php" method="post"><div class="contact-field"><label for="first-name">First name</label><input id="first-name" name="first_name" type="text" autocomplete="given-name" required></div><div class="contact-field"><label for="last-name">Last name</label><input id="last-name" name="last_name" type="text" autocomplete="family-name" required></div><div class="contact-field full"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required></div><div class="contact-field full"><label for="subject">Subject</label><input id="subject" name="subject" type="text" maxlength="140" required></div><div class="contact-field full"><label for="message">Message</label><textarea id="message" name="message" required></textarea></div><div class="contact-honeypot" aria-hidden="true"><label for="company-website">Company website</label><input id="company-website" name="company_website" type="text" tabindex="-1" autocomplete="off"></div><button class="button" type="submit">Send message</button></form>';
    const params = new URLSearchParams(window.location.search);
    if (params.get('sent') === '1' || params.get('error') === '1') {
      const status = document.createElement('p');
      status.className = `form-status${params.get('error') === '1' ? ' error' : ''}`;
      status.setAttribute('role', 'status');
      status.textContent = params.get('sent') === '1' ? 'Thank you. Your message has been sent.' : 'The message could not be sent. Please try again.';
      contactArea.before(status);
    }
  }
  document.querySelectorAll('[data-edit-key]').forEach(element => {
    const normalized = element.textContent
      .replace(/\u00a0+/g, ' ')
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n');
    if (normalized !== element.textContent) element.textContent = normalized;
  });

  const mastheads = {
    experience: {
      eyebrow: 'My Experience',
      title: 'Real world best practices.',
      copy: 'Across industries, business models, and levels of organizational maturity, I have learned how to recognize patterns, adapt the operating model, and help teams move together.',
      className: 'experience-hero',
      cta: 'View my Experience',
      target: '#companies'
    },
    process: {
      eyebrow: 'Ideology & Process',
      title: 'Turning ambiguity into aligned action.',
      copy: 'UX success depends on choosing the right mix of qualitative and quantitative research, usability, accessibility, human-computer interaction, technology context, business goals, project management, collaboration, and communication.',
      className: 'process-hero',
      cta: 'Explore my Process',
      target: '#process-content'
    },
    work: {
      eyebrow: 'My Work',
      title: 'Evidence, decisions, outcomes.',
      copy: 'Selected transformations show how customer insight, accessibility, governance, design systems, and delivery discipline become measurable enterprise progress.',
      className: 'work-hero',
      cta: 'View my Work',
      target: '#work-content'
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Create your own flow.',
      copy: 'I’m interested in where customer friction, organizational friction, and technical complexity intersect—and how Design, Product, and Engineering can turn that intersection into a durable advantage.',
      className: 'contact-hero',
      cta: 'Start a conversation',
      target: '#contact-form-section'
    }
  };
  if (mastheads[page]) {
    const content = mastheads[page];
    const masthead = document.createElement('div');
    masthead.className = `l1-hero ${content.className}`;
    const pageContent = keep[0].querySelector(':scope > .wrap');
    if (pageContent && content.target !== '#companies') pageContent.id = content.target.slice(1);
    masthead.innerHTML = `<div class="l1-art"><span></span><span></span></div><div class="wrap"><div class="eyebrow">${content.eyebrow}</div><h1>${content.title}</h1><p class="lede">${content.copy}</p><a class="scroll l1-scroll" href="${content.target}">${content.cta} ↓</a></div>`;
    keep[0].classList.add('has-l1');
    keep[0].prepend(masthead);
  }

  if (page === 'experience') {
    const breadth = byId('breadth');
    const breadthWrap = breadth.querySelector(':scope > .wrap');
    const originalSlides = breadthWrap.querySelector('.logo-slides');
    const originalTags = breadthWrap.querySelector('.industry-row');

    const companies = [
      ['Healthcare & Medical', [
        ['McKesson','mckesson','healthcare'],['VCU Health','vcu-health','healthcare education'],['MedStar Health','medstar-health','healthcare'],['Inova','inova','healthcare'],
        ['Bon Secours','bon-secours','healthcare'],['Anthem Blue Cross Blue Shield','anthem','healthcare insurance'],['Healthsense','healthsense','healthcare saas'],['UniCare','unicare','healthcare insurance']
      ]],
      ['Government & Education', [
        ['Virginia Department of Health','virginia-department-health','government healthcare'],['Cyber Virginia','cyber-virginia','government nonprofit'],['Virginia Department of Fire Programs','virginia-fire-programs','government'],['Virginia Information Technologies Agency','vita','government saas'],
        ['Virginia Commonwealth University','vcu','education'],['University of Richmond','university-richmond','education'],['United States Naval Academy','usna','education government'],["St. Mary’s College of Maryland",'stmarys','education']
      ]],
      ['Consulting & Product', [
        ['CapTech','captech','consulting'],['Impact Makers','impact-makers','consulting healthcare government'],['UDig','udig','consulting'],['WayPath','waypath','consulting'],
        ['Subaru','subaru','consumer'],['Boardable','boardable','saas'],['Better Business Bureau','bbb','nonprofit'],['Family Lifeline','family-lifeline','nonprofit healthcare']
      ]],
      ['Energy, Industrial & Consumer', [
        ['Estes','estes','industrial'],['Dominion Energy','dominion-energy','energy'],['WestRock','westrock','industrial'],['Luck Stone','luck-stone','industrial'],
        ['Pronto Insurance','pronto-insurance','insurance'],['Circuit City','circuit-city','retail'],['AAA','aaa','insurance consumer'],['VII','vii','consumer retail']
      ]]
    ];
    const filters = ['Healthcare','Government','Education','IT Consulting','SaaS','Energy','Insurance','Retail','Industrial','Consumer Electronics','Nonprofit','Technology','Marketing Agency','Fashion Design','Publications'];
    const directory = document.createElement('div');
    directory.className = 'company-directory';
    directory.innerHTML = `<h2>Companies I’ve Done Work For.</h2><div class="eyebrow">Industries represented</div><p class="intro">Below are companies I have directly worked for/with on an extended engagement. Not included are project clients while at agency or consulting firms, such as Samsung, Apple, Sony, Marvel, or Lotty Dotty to name a few.</p><div class="company-filters" aria-label="Industries represented">${filters.map(filter => `<span class="industry-tag">${filter}</span>`).join('')}</div><div class="company-groups">${companies.map(([group, entries]) => `<section class="company-group"><h3>${group}</h3><div class="company-grid">${entries.map(([name, file, categories]) => `<figure class="company-logo" data-categories="${categories}" title="${name}"><img src="assets/company-logos/${file}.jpg" alt="${name} logo" loading="lazy"></figure>`).join('')}</div></section>`).join('')}</div>`;

    originalSlides.replaceWith(directory);
    originalTags.remove();
    const companiesSection = document.createElement('section');
    companiesSection.id = 'companies';
    companiesSection.className = 'companies-section';
    const companiesWrap = document.createElement('div');
    companiesWrap.className = 'wrap';
    companiesWrap.append(directory);
    companiesSection.append(companiesWrap);
    breadth.after(companiesSection);
    breadthWrap.remove();

    work.classList.add('experience-work');
    work.querySelector('.supporting > div:first-child')?.remove();
    const supporting = work.querySelector('.supporting');
    const workArticles = [...supporting.querySelectorAll('.support-case')];
    const workIntro = document.createElement('div');
    workIntro.className = 'work-examples-intro';
    workIntro.innerHTML = '<div class="eyebrow">WORK EXAMPLES</div><h2>Design with a capital “D”.</h2>';
    supporting.prepend(workIntro);
    const workTypes = [
      ['EXECUTION EXAMPLES', 'Fullstack E2E Product Design, Research, Testing, and UI.'],
      ['DESIGNOPS EXAMPLES', 'Managing Design at scale.']
    ];
    workArticles.forEach((article, index) => {
      article.querySelector('.support-head')?.remove();
      const typeHead = document.createElement('div');
      typeHead.className = 'work-type-head';
      typeHead.innerHTML = `<div class="eyebrow">${workTypes[index][0]}</div><h3>${workTypes[index][1]}</h3>`;
      article.prepend(typeHead);
    });
    const leadership = document.createElement('article');
    leadership.className = 'support-case leadership-examples';
    leadership.innerHTML = '<div class="work-type-head"><div class="eyebrow">LEADERSHIP CASE STUDIES</div><h3>Large-scale programs led from strategy through delivery.</h3><p class="leadership-access-note">These leadership use cases are password protected. To request access, contact <a href="mailto:chunlee.rva@gmail.com">chunlee.rva@gmail.com</a>.</p></div><div class="leadership-case-grid"><a class="leadership-case" href="/pcc/"><span>AI-enabled innovation</span><strong>Building organizational capability before chasing novelty</strong></a><a class="leadership-case" href="/pcc/"><span>Healthcare transformation</span><strong>Transforming a complex healthcare ecosystem end to end</strong></a></div>';
    supporting.append(leadership);
    const healthcareExamples = typeof galleries !== 'undefined' ? galleries['health-gallery'] : [];
    const designOpsExamples = typeof galleries !== 'undefined' ? galleries['ops-gallery'] : [];
    const addHealthcareExamples = (host, indexes) => {
      if (!host || !healthcareExamples?.length || typeof card !== 'function') return;
      host.insertAdjacentHTML('beforeend', indexes.map(index => card(healthcareExamples[index])).join(''));
    };
    const executionGallery = workArticles[0]?.querySelector('.gallery');
    const designOpsGallery = workArticles[1]?.querySelector('.gallery');
    [...(designOpsGallery?.querySelectorAll('figure') || [])].slice(3).forEach(example => executionGallery?.append(example));
    addHealthcareExamples(executionGallery, [0, 2, 3, 4, 5]);
    addHealthcareExamples(designOpsGallery, [1]);
    if (designOpsGallery && designOpsExamples?.length && typeof card === 'function') {
      designOpsGallery.insertAdjacentHTML('beforeend', designOpsExamples.map(card).join(''));
    }
    const executionCaptionCopy = [
      ['Information Architecture', null],
      ['Information Architecture', 'Homepage Wireframe'],
      ['PXD: Government', 'L1 Landing Page Design'],
      ['Information Architecture', 'Site Map gap analysis'],
      ['PXD: Government', null],
      ['PXD: Government', 'Homepage Redesign'],
      ['PXD: Government', null],
      ['PXD: Government', 'Responsive Design'],
      ['Information Architecture', 'Intranet Homepage Wireframes'],
      ['UX Research', 'System Usability Scale (SUS) Testing'],
      ['UX Research', null],
      ['PXD: Energy', 'Special department landing page'],
      ['PXD: Energy', 'Parent Homepage Design'],
      ['PXD: Energy', 'Child Homepage Design'],
      ['User Research', null],
      ['User Testing', null],
      ['PXD: Healthcare', 'Homepage Redesign'],
      ['PXD: Healthcare', 'Campaign Marketing Landing Page'],
      ['PXD: Healthcare', 'Parent/Child Landing Page Example']
    ];
    executionGallery?.querySelectorAll('figure').forEach((figure, index) => {
      const copy = executionCaptionCopy[index];
      if (!copy) return;
      figure.querySelector('.caption-label').textContent = copy[0];
      if (copy[1]) figure.querySelector('figcaption strong').textContent = copy[1];
    });
    supporting.insertBefore(workArticles[1], workArticles[0]);
    const panels = [...supporting.querySelectorAll('.support-case')];
    const tabs = document.createElement('div');
    tabs.className = 'work-tabs';
    tabs.setAttribute('role', 'tablist');
    const tabLabels = ['DesignOps Examples', 'Execution Examples', 'Leadership Case Studies'];
    tabs.innerHTML = tabLabels.map((label, index) => `<button class="work-tab" type="button" role="tab" id="work-tab-${index + 1}" aria-controls="work-panel-${index + 1}" aria-selected="${index === 0}">${label}</button>`).join('');
    workIntro.after(tabs);
    panels.forEach((panel, index) => {
      panel.id = `work-panel-${index + 1}`;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', `work-tab-${index + 1}`);
      panel.hidden = index !== 0;
    });
    const workTabs = [...tabs.querySelectorAll('.work-tab')];
    const activateWorkTab = (index, moveFocus = false) => {
      workTabs.forEach((item, itemIndex) => {
        const selected = itemIndex === index;
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
        panels[itemIndex].hidden = !selected;
      });
      if (moveFocus) workTabs[index].focus();
    };
    workTabs.forEach((tab, index) => {
      tab.tabIndex = index === 0 ? 0 : -1;
      tab.addEventListener('click', () => {
        if (tab.getAttribute('aria-selected') !== 'true') activateWorkTab(index);
      });
      tab.addEventListener('keydown', event => {
        const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];
        if (!keys.includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? workTabs.length - 1 : event.key === 'ArrowRight' ? (index + 1) % workTabs.length : (index - 1 + workTabs.length) % workTabs.length;
        activateWorkTab(nextIndex, true);
      });
    });

    const experienceNavigation = [
      ['breadth', 'Top'],
      ['companies', 'Companies I’ve worked for'],
      ['work', 'Work Examples']
    ];
    const experienceDots = document.createElement('nav');
    experienceDots.className = 'page-dots experience-dots';
    experienceDots.setAttribute('aria-label', 'My Experience sections');
    experienceDots.innerHTML = experienceNavigation.map(([id, label]) => `<a href="#${id}" data-label="${label}" aria-label="${label}"></a>`).join('');
    document.body.append(experienceDots);
    const experienceDotLinks = [...experienceDots.querySelectorAll('a')];
    const experienceObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      experienceDotLinks.forEach(link => link.classList.toggle('active', link.hash === `#${visible.target.id}`));
    }, {rootMargin: '-28% 0px -58% 0px', threshold: [0, .15, .4]});
    experienceNavigation.forEach(([id]) => experienceObserver.observe(document.getElementById(id)));
  }

  if (page === 'home') {
    [...document.querySelectorAll('.hero-meta b,.hero-meta span')].forEach((element, index) => {
      element.dataset.editKey = `hero-meta-${index + 1}`;
      editable.push(element);
    });
  }

  document.querySelectorAll('h1,h2,h3').forEach(heading => {
    [...heading.childNodes].forEach(node => {
      if (node.nodeType !== Node.TEXT_NODE || !node.textContent.includes('.')) return;
      const fragment = document.createDocumentFragment();
      node.textContent.split('.').forEach((part, index, parts) => {
        fragment.append(document.createTextNode(part));
        if (index < parts.length - 1) {
          const period = document.createElement('span');
          period.className = 'heading-period';
          period.textContent = '.';
          fragment.append(period);
        }
      });
      node.replaceWith(fragment);
    });
  });

  const allLabels = [...document.querySelectorAll('.eyebrow,.kicker,.caption-label,.company-group h3,.story-media figcaption span:first-child,.flow-step span')];
  allLabels.forEach(label => {
    label.classList.add('ui-label', 'ui-label--neutral');
    if (label.matches('.caption-label,.story-media figcaption span:first-child')) label.classList.add('ui-label--caption');
  });

  const titles = {
    home: 'Chun Man Lee | Experience that makes the enterprise flow',
    experience: 'My Experience | Chun Man Lee',
    process: 'Ideology & Process | Chun Man Lee',
    work: 'My Work | Chun Man Lee',
    contact: 'Contact | Chun Man Lee'
  };
  document.title = titles[page] || titles.home;
  const currentPageLink = document.querySelector(`[data-page-link="${filename}"]`);
  if (currentPageLink) {
    currentPageLink.setAttribute('aria-current', 'page');
    currentPageLink.setAttribute('aria-disabled', 'true');
    currentPageLink.addEventListener('click', event => event.preventDefault());
  }

  const studioToggle = document.querySelector('.studio-toggle');
  const presentToggle = document.querySelector('.present');
  const studioPanel = document.querySelector('.studio');
  if (studioPanel) {
    studioPanel.querySelector('h3').textContent = 'Edit the prototype directly';
    studioPanel.querySelector(':scope > p').textContent = 'Choose Edit page, select any highlighted text on the page, type your changes, and then choose Save changes. Your edits will remain in this browser.';
    const editPageButton = document.getElementById('edit-copy');
    editPageButton.textContent = 'Edit page';
    editPageButton.addEventListener('click', () => {
      editPageButton.textContent = document.body.classList.contains('editing') ? 'Finish editing' : 'Edit page';
    });
    const saveChangesButton = document.getElementById('save-content');
    saveChangesButton.textContent = 'Save changes';
    saveChangesButton.classList.add('primary');
    saveChangesButton.addEventListener('click', () => {
      const texts = Object.fromEntries(
        [...document.querySelectorAll('[data-edit-key]')]
          .filter(element => !element.closest('.studio') && !element.closest('dialog'))
          .map(element => {
            const value = element.closest('[hidden]') ? element.textContent : element.innerText;
            return [element.dataset.editKey, value.trim()];
          })
      );
      const update = {version: 3, updatedAt: new Date().toISOString(), texts};
      localStorage.setItem('chun-lee-public-content-v1', JSON.stringify(update));
      const blob = new Blob([JSON.stringify(update, null, 2)], {type: 'application/json'});
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'chun-lee-presentation-latest.json';
      link.click();
      URL.revokeObjectURL(link.href);
      note.textContent = 'Saved with paragraph breaks intact. Attach the downloaded update to this Codex task to make it permanent.';
    });
    const note = document.createElement('p');
    note.className = 'studio-save-note';
    note.textContent = 'Save changes also prepares a small update file for Codex.';
    studioPanel.querySelector('.studio-actions').after(note);
  }
  if (page === 'contact') {
    studioToggle.hidden = true;
    presentToggle.hidden = true;
  }
  document.documentElement.classList.remove('page-initializing');
  } catch (error) {
    window.publicPageLoadFailed?.();
    console.error(error);
  }
})();
