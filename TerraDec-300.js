
(function () {
  var root = document.currentScript.parentNode || document.body;
  var wrap = document.createElement('div');
  wrap.style.cssText = 'width:300px;height:250px;position:relative;overflow:hidden;font-family:Arial,sans-serif;cursor:pointer;background:url("https://kim4690.github.io/TerraDec-300/bg.jpg") center/cover no-repeat;';
  wrap.onclick = function(){
    window.open('https://www.fischerdanmark.dk/da/produkter/skruer/terradec/supplerende-tilbehor/559692-terradec-80-x-1-x-20000-mm','_blank');
  };

  wrap.innerHTML = `
    <style>
      .td-t{position:absolute;left:10px;color:#fff;font-weight:700;line-height:.95;text-shadow:0 2px 8px rgba(0,0,0,.35);opacity:0}
      .td1{top:48px;font-size:26px;animation:t1 8s ease infinite}
      .td2{top:92px;font-size:26px;animation:t2 8s ease infinite}
      .tdline{position:absolute;left:10px;top:136px;display:flex;align-items:baseline;gap:8px}
      .tdmed{font-size:26px;color:#fff;opacity:0;animation:med 8s ease infinite}
      .tdterra{font-size:30px;color:#e52521;font-weight:700;opacity:0;transform:scale(3.2);transform-origin:left center;text-shadow:0 0 20px rgba(229,37,33,.35);animation:terra 8s cubic-bezier(.22,.61,.36,1) infinite}
      .tdlogo{position:absolute;right:10px;bottom:8px;width:92px}
      .tdlogo img{width:100%;display:block}
      .tdshine{position:absolute;left:-45px;top:-8px;width:24px;height:46px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.95),transparent);transform:skewX(-22deg);opacity:0;animation:shine 8s ease infinite}
      @keyframes t1{0%,8%{opacity:0}14%,100%{opacity:1}}
      @keyframes t2{0%,22%{opacity:0}30%,100%{opacity:1}}
      @keyframes med{0%,38%{opacity:0}46%,100%{opacity:1}}
      @keyframes terra{0%,42%{opacity:0;transform:scale(3.2)}82%,100%{opacity:1;transform:scale(1)}}
      @keyframes shine{0%,86%{opacity:0;left:-45px}90%{opacity:1}100%{opacity:0;left:95px}}
    </style>
    <div class="td-t td1">Forlæng levetiden</div>
    <div class="td-t td2">på din terrasse</div>
    <div class="tdline"><div class="tdmed">med</div><div class="tdterra">TerraDec.</div></div>
    <div class="tdlogo"><img src="https://kim4690.github.io/TerraDec-300/fischer-logo.png"><div class="tdshine"></div></div>
  `;

  root.appendChild(wrap);
})();
