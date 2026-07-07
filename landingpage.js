(function() {
    const appId = "liv-arthaland-3dvista-final-v2";
    const portalId = "tour-portal-overlay";
    const brandColor = "#ffffff";
    const bgColor = "#278C8D";
    const portalBgColor = "#11728D";

    const suaveFontUrl = "https://cdn.jsdelivr.net/gh/jiaseeds/artha-sondris@76b825702f01bab855cbd6720b16ae4ad6b9fcd1/Suave.ttf";
    const livLogo = "https://github.com/jiaseeds/artha-sondris/blob/main/Logo%202.png?raw=true";
    const arthalandLogo = "https://github.com/jiaseeds/artha_logo/blob/main/arthaland-logo.png?raw=true";
    const thirdLogo = "https://github.com/jiaseeds/artha-sondris/blob/main/image%20(2).png?raw=true";
    const bottomPattern = "https://github.com/jiaseeds/artha-sondris/blob/main/sondris-pattern.png?raw=true";

    const img1BR = "https://github.com/jiaseeds/artha-sondris/blob/main/1br.png?raw=true";
    const img2BR = "https://github.com/jiaseeds/artha-sondris/blob/main/2br.png?raw=true";
    const img3BR = "https://github.com/jiaseeds/artha-sondris/blob/main/3br.png?raw=true";

    console.log("Tour object:", tour);
    console.log("Current state:", tour);

    const cleanup = () => [appId, portalId, appId + "-style", portalId + "-style"].forEach(id => document.getElementById(id)?.remove());
    cleanup();

    const style = document.createElement('style');
    style.id = appId + "-style";
    style.innerHTML = `
        @font-face { font-family: 'SuaveCustom'; src: url('${suaveFontUrl}') format('truetype'); font-display: swap; }
        #${appId}::before, #${portalId}::before { content: ""; position: absolute; inset: 0; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M100 0 L100 100 M0 100 L100 100' fill='none' stroke='${brandColor.replace('#','%23')}' stroke-width='0.2' opacity='0.2'/%3E%3C/svg%3E") !important; background-size: 80px 80px !important; pointer-events: none; }
        #${appId} { font-family: 'Inter', sans-serif !important; z-index: 2147483647; position: fixed; inset: 0; background-color: ${bgColor}; backdrop-filter: blur(25px); display: flex; flex-direction: column; align-items: center; justify-content: center; transition: opacity 1s ease; color: ${brandColor}; overflow: hidden; padding: 5vh 5vw; box-sizing: border-box; }
        #${appId}.experience-started { opacity: 0; pointer-events: none; }
        #${portalId} { position: fixed; inset: 0; z-index: 2147483646; background-color: ${portalBgColor}; display: none; flex-direction: column; align-items: center; justify-content: center; font-family: 'SuaveCustom', serif; color: #FFFFFF; transition: opacity 1s ease; opacity: 0; }
        #${portalId}.portal-visible { display: flex; opacity: 1; }
        
        .portal-pattern { position: absolute; bottom: 0; left: 0; width: 100%; height: 140px; background-image: url('${bottomPattern}'); background-repeat: repeat-x; background-position: bottom; background-size: contain; opacity: 1; pointer-events: none; z-index: 5; }

        .branding-header { display: flex; align-items: center; justify-content: center; gap: 4vw; width: 100%; margin-bottom: 8vh; padding: 1.5em 0; border-top: 1px solid rgba(208, 168, 99, 0.15); border-bottom: 1px solid rgba(208, 168, 99, 0.15); }
        .liv-img, .third-logo-img { height: 60px; }
        .arthaland-img { height: 65px; filter: brightness(0) invert(1); }
        .header-dot { width: 5px; height: 5px; background: ${brandColor}; border-radius: 50%; opacity: 0.4; }
        .main-stage { display: flex; gap: 8vw; z-index: 1; }
        .content-column { display: flex; flex-direction: column; align-items: center; text-align: center; width: 22em; }
        .icon-suite { display: flex; align-items: center; justify-content: center; margin-bottom: 3.5em; height: 8em; gap: 30px; }
        .icon-separator { width: 1px; height: 50px; background: linear-gradient(to bottom, transparent, ${brandColor}, transparent); opacity: 0.5; }
        .architectural-divider { width: 1px; height: 20vh; background: linear-gradient(to bottom, transparent, rgba(208, 168, 99, 0.3), transparent); }
        .serif-label { font-family: 'SuaveCustom', serif !important; font-size: 1.8rem; text-transform: uppercase; letter-spacing: 0.12em; color: ${brandColor}; margin-bottom: 0.5em; }
        .sans-description { font-size: 0.9rem; font-weight: 200; line-height: 1.6; color: rgba(255,255,255,0.7); max-width: 250px; }
        .btn-architectural { cursor: pointer; background: ${brandColor}; color: #315b47; border: none; padding: 1.6em 7em; font-weight: 600; text-transform: uppercase; letter-spacing: 0.8em; font-size: 0.75rem; margin-top: 8vh; transition: 0.4s; z-index: 2; }
        
        @keyframes wasdFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .wasd-anim { animation: wasdFloat 3s infinite ease-in-out; }
        @keyframes mousePan { 0%, 100% { transform: translateX(-15px); } 50% { transform: translateX(15px); } }
        .mouse-anim { animation: mousePan 3s infinite ease-in-out; }
        @keyframes hotspotPulse { 0% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.2); opacity: 0.4; } 100% { transform: scale(1); opacity: 0.8; } }
        .pulse-circle { animation: hotspotPulse 2s infinite ease-in-out; }
        @keyframes cursorTarget { 0% { transform: translate(25px, 25px); } 50% { transform: translate(5px, 5px); scale(0.9); } 100% { transform: translate(25px, 25px); } }
        .cursor-target-anim { animation: cursorTarget 2s infinite ease-in-out; }

    .hero-title{
            font-family:'Inter';
            letter-spacing:.5em;
            font-size:.9rem;
            text-transform:uppercase;
            opacity:.75;
            margin-top:20px;
        }

    .hero-project{
            font-family:'SuaveCustom';
            font-size:4.5rem;
            letter-spacing:.05em;
            margin-top:10px;
        }

    .hero-subtitle{
            font-size:1rem;
            letter-spacing:.3em;
            text-transform:uppercase;
            opacity:.7;
            margin-bottom:60px;
        }

    .content-column{
            background:rgba(255,255,255,.06);
            border:1px solid rgba(255,255,255,.12);
            backdrop-filter:blur(20px);
            border-radius:28px;
            padding:40px;
            transition:.4s;
        }

    .content-column:hover{
            transform:translateY(-6px);
            border-color:rgba(255,255,255,.3);
        }

    .architectural-divider{
        width:1px;
        background:
        linear-gradient(
        to bottom,
        transparent,
        rgba(255,255,255,.3),
        transparent);
        position:relative;
        }

        .architectural-divider:before, .architectural-divider:after{
        content:"";
        position:absolute;
        left:-3px;
        width:7px;
        height:7px;
        background:white;
        border-radius:50%;
        }

        .architectural-divider:before{
        top:25%;
        }

        .architectural-divider:after{
        bottom:25%;
        }

    .btn-architectural{
            border-radius:999px;
            padding:20px 80px;
            font-size:.8rem;
            letter-spacing:.4em;
            box-shadow:
            0 0 30px rgba(255,255,255,.08);
            transition:.4s;
          }

    .btn-architectural:hover{
        transform:translateY(-3px);
        box-shadow:
        0 10px 40px rgba(255,255,255,.2);
        }

    .branding-header{
        animation:fadeUp 1.2s ease;
        }

        @keyframes fadeUp{
        from{
        opacity:0;
        transform:translateY(40px);
        }

        to{
        opacity:1;
        transform:translateY(0);
        }
        }

    .content-column:nth-child(1){

        animation:fadeUp .8s .3s both;
        }

    .content-column:nth-child(3){

        animation:fadeUp .8s .6s both;
        }

    .btn-architectural{
        animation:fadeUp .8s .9s both;
      }


    .branding-header{
        margin-bottom:100px;
        }

    .main-stage{
        gap:120px;
        }

    .content-column{
        width:420px;
        }

 #liv-arthaland-3dvista-final-v2{

        transition:
        opacity 1s,
        transform 1s;
        }

#liv-arthaland-3dvista-final-v2.experience-started{
        opacity:0;
        transform:scale(1.03);
        }

#liv-arthaland-3dvista-final-v2:after {
  content: '';
  position: absolute;
  width: 900px;
  height: 900px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.08),
    transparent 70%
  );

  top: -250px;
  right: -250px;
  animation: floatGlow 10s ease-in-out infinite;
  pointer-events: none;
}

@keyframes floatGlow {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-120px, 60px);
  }
}



        .tour-container { display: flex; gap: 2vw; width: 90%; height: 50vh; z-index: 10; margin-bottom: 50px; }
        .tour-card { flex: 1; position: relative; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); transition: 0.7s; cursor: pointer; }
        .tour-card:hover { flex: 1.4; border-color: white; }
        .tour-img { position: absolute; inset: 0; background-size: cover; background-position: center; transition: 1.5s; filter: brightness(0.4); }
        .tour-card:hover .tour-img { transform: scale(1.1); filter: brightness(0.7); }
        .tour-content { position: absolute; bottom: 0; padding: 2vw; width: 100%; box-sizing: border-box; background: linear-gradient(transparent, rgba(0,0,0,0.8)); pointer-events: none; }
        .tour-title { font-size: 1.6rem; text-transform: uppercase; color: #FFF; }
        .tour-subtitle { font-family: 'Inter', sans-serif; font-size: 1.1rem; letter-spacing: 0.1em; color: rgba(255,255,255,0.95); font-weight: 300; text-transform: uppercase; }
        .dhsud-text { position: absolute; top: 25px; right: 30px; font-size: 0.8rem; color: rgba(255,255,255,0.4); font-family: 'Inter', sans-serif; letter-spacing: 1px; }
        @media (max-width: 768px) { .main-stage { flex-direction: column; gap: 4vh; } .tour-container { flex-direction: column; height: auto; } .tour-card { height: 150px; } .architectural-divider { display: none; } .portal-pattern { height: 80px; } }
    `;
    document.head.appendChild(style);

    const toggleFS = () => {
        const isFull = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
        if (isFull) {
            if (document.exitFullscreen) document.exitFullscreen();
            else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        } else {
            const el = document.documentElement;
            if (el.requestFullscreen) el.requestFullscreen();
            else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
        }
    };

    const overlay = document.createElement('div');
    overlay.id = appId;
    overlay.ondblclick = (e) => { e.stopPropagation(); toggleFS(); };
    overlay.innerHTML = `
        <div class="branding-header">
            <img src="${livLogo}" class="liv-img"><div class="header-dot"></div><img src="${thirdLogo}" class="third-logo-img"><div class="header-dot"></div><img src="${arthalandLogo}" class="arthaland-img">
        </div>
        <div class="hero-title">WELCOME TO</div>
        <div class="hero-project">CERULEAN RESIDENCES</div>
        <div class="hero-subtitle">
        Virtual Interactive Experience
        </div>
        <div class="main-stage">
            <div class="content-column">
                <div class="icon-suite">
                    <div style="width: 60px; height: 80px; display: flex; align-items: center; justify-content: center; overflow: visible;">
                        <svg width="45" height="65" viewBox="0 0 16 24" class="mouse-anim" style="overflow: visible;">
                            <path d="M8 1C4.134 1 1 4.134 1 8v8c0 3.866 3.134 7 7 7s7-3.134 7-7V8c0-3.866-3.134-7-7-7z" fill="none" stroke="${brandColor}" stroke-width="1"/>
                            <path d="M8 5v4" fill="none" stroke="${brandColor}" stroke-width="1" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div class="icon-separator"></div>
                    <svg width="100" height="80" viewBox="0 0 100 70" class="wasd-anim">
                        <g fill="none" stroke="${brandColor}" stroke-width="1.2">
                            <rect x="35" y="5" width="25" height="25" rx="3"/> <text x="47.5" y="22" fill="${brandColor}" font-size="12" text-anchor="middle" font-family="Inter" font-weight="600">W</text>
                            <rect x="5" y="35" width="25" height="25" rx="3"/> <text x="17.5" y="52" fill="${brandColor}" font-size="12" text-anchor="middle" font-family="Inter" font-weight="600">A</text>
                            <rect x="35" y="35" width="25" height="25" rx="3"/> <text x="47.5" y="52" fill="${brandColor}" font-size="12" text-anchor="middle" font-family="Inter" font-weight="600">S</text>
                            <rect x="65" y="35" width="25" height="25" rx="3"/> <text x="77.5" y="52" fill="${brandColor}" font-size="12" text-anchor="middle" font-family="Inter" font-weight="600">D</text>
                        </g>
                    </svg>
                </div>
                <p class="serif-label">Perspective</p>
                <p class="sans-description">Click and drag to look around the panorama, or use the WASD keys on your keyboard for fluid movement.</p>
            </div>
            <div class="architectural-divider"></div>
            <div class="content-column">
                <div class="icon-suite">
                    <svg width="100" height="100" viewBox="0 0 60 60" style="overflow: visible;">
                        <g class="pulse-circle">
                            <circle cx="20" cy="20" r="15" stroke="${brandColor}" stroke-width="1" stroke-dasharray="3 3" fill="none"/>
                            <circle cx="20" cy="20" r="4" fill="${brandColor}"/>
                        </g>
                        <g class="cursor-target-anim">
                            <path d="M0 0L12 18L15 12L21 10L0 0Z" fill="${brandColor}" stroke="#315b47" stroke-width="0.5" transform="translate(10, 10)"/>
                        </g>
                    </svg>
                </div>
                <p class="serif-label">Navigation</p>
                <p class="sans-description">Tap on the circular hotspots located throughout the room to instantly walk to different views and explore the space.</p>
            </div>
        </div>
        <button class="btn-architectural" id="start-btn">Begin Experience</button>
    `;

    const portal = document.createElement('div');
    portal.id = portalId;
    portal.ondblclick = (e) => { e.stopPropagation(); toggleFS(); };
    portal.innerHTML = `
        <div class="dhsud-text">DSHUD LTS No. 0001214</div>
        <img src="${livLogo}" style="height:100px; margin-bottom:40px; z-index:10; position:relative;">
    <div class="tour-container">

    <div class="tour-card" onclick="forceJump('Overview','overview1')">
        <div class="tour-img" style="background-image:url('${img1BR}')"></div>
        <div class="tour-content">
            <div class="tour-title">Overview</div>
        </div>
    </div>

    <div class="tour-card" onclick="forceJump('The Marina','marina')">
        <div class="tour-img" style="background-image:url('${img2BR}')"></div>
        <div class="tour-content">
            <div class="tour-title">The Marina</div>
        </div>
    </div>

    <div class="tour-card" onclick="forceJump('The Coral','coral')">
        <div class="tour-img" style="background-image:url('${img3BR}')"></div>
        <div class="tour-content">
            <div class="tour-title">The Coral</div>
        </div>
    </div>

    <div class="tour-card" onclick="forceJump('The Isla','isla')">
        <div class="tour-img" style="background-image:url('${img3BR}')"></div>
        <div class="tour-content">
            <div class="tour-title">The Isla</div>
        </div>
    </div>

</div>
        <div class="portal-pattern"></div>
    `;
function setupForceJump() {
    window.forceJump = function(media, subtitle) {

        console.clear();
        console.log("CARD CLICKED:", media, subtitle);

        media = String(media || "").toLowerCase().trim();
        subtitle = String(subtitle || "").toLowerCase().trim();

        try {

            const root = tour?.getRoot?.() || tour?.root || tour;

            const defs =
                root?.locManager?.rootPlayer?.bs?.definitions ||
                root?.locManager?.rootPlayer?.definitions;

            if (!defs) {
                console.log("Definitions not found");
                return;
            }

            let match = null;

            for (let i = 0; i < defs.length; i++) {

                const item = defs[i];
                if (!item) continue;

                const label = String(
                    item.label ||
                    item.data?.label ||
                    ""
                ).toLowerCase().trim();

                const sub = String(
                    item?.data?.subtitle ||
                    item?.bs?.subtitle ||
                    item?.bd?.subtitle ||
                    ""
                ).toLowerCase().trim();

                console.log("CHECK:", label, "|", sub);

                if (label === media && sub === subtitle) {
                    match = item;
                    break;
                }
            }

            if (!match) {
                console.log("No panorama matched");
                return;
            }

            console.log("MATCH FOUND:", match);

            let panoIndex = null;
            
        // change the subtitle and panoIndex here
        
            if (subtitle === "overview") panoIndex = 0;
            if (subtitle === "marina") panoIndex = 4;
            if (subtitle === "coral") panoIndex = 41;
            if (subtitle === "isla") panoIndex = 72;

            console.log("USING INDEX:", panoIndex);

            const p =
                window.player ||
                window.vtour ||
                root?.locManager?.rootPlayer ||
                root?.player ||
                tour?.player;

            if (!p) {
                console.log("Player not found");
                return;
            }

            console.log("PLAYER:", p);

            const runMethods = () => {
                const methods = [
                    () => p.setMediaByIndex(panoIndex),
                    () => p.SetMediaByIndex(panoIndex),
                    () => p.openPanorama(panoIndex),
                    () => p.loadScene(panoIndex),
                    () => p.moveTo(panoIndex),
                    () => tour.setMediaByIndex(panoIndex),
                    () => tour.SetMediaByIndex(panoIndex)
                ];

                for (let fn of methods) {
                    try {
                        fn();
                        console.log("OPENED INDEX:", panoIndex);

                        if (p.drawScene) p.drawScene();
                        if (p.render) p.render();
                        if (p.update) p.update();

                        return true;
                    } catch (e) {}
                }

                return false;
            };

            if (!runMethods()) {
                console.log("Retrying...");

                const interval = setInterval(() => {
                    if (runMethods()) clearInterval(interval);
                }, 250);

                setTimeout(() => {
                    clearInterval(interval);
                    console.log("Failed after retries");
                }, 10000);
            }

            if (typeof portal !== "undefined") {
                portal.style.opacity = "0";

                setTimeout(() => {
                    portal.style.display = "none";
                    portal.classList.remove("portal-visible");
                }, 1000);
            }

        } catch (e) {
            console.log("Error:", e);
        }
    };
}


    document.body.prepend(portal);
    document.body.prepend(overlay);

    document.getElementById('start-btn').onclick = (e) => {
    e.stopPropagation();

    setupForceJump(); // reset forceJump every time menu opens

    overlay.classList.add('experience-started');
    portal.style.display = 'flex';
    setTimeout(() => portal.classList.add('portal-visible'), 50);
};
})();