(function () {

  var script = document.currentScript;
  var base = script.src.substring(0, script.src.lastIndexOf('/') + 1);

  var banner = document.createElement("div");
  banner.style.cssText = `
    width:300px;
    height:250px;
    position:relative;
    overflow:hidden;
    font-family:Arial,sans-serif;
    cursor:pointer;
    background:url('${base}bg.jpg') center/cover no-repeat;
  `;

  banner.onclick = function () {
    window.open(
      "https://www.fischerdanmark.dk/da/produkter/skruer/terradec/supplerende-tilbehor/559692-terradec-80-x-1-x-20000-mm",
      "_blank"
    );
  };

  banner.innerHTML = `
    <style>
      .td-t{
        position:absolute;
        left:10px;
        color:#fff;
        font-weight:700;
        line-height:.95;
        text-shadow:0 2px 8px rgba(0,0,0,.35);
        opacity:0;
      }

      .td1{ top:70px; font-size:26px; animation:t1 8s infinite; }
      .td2{ top:118px; font-size:26px; animation:t2 8s infinite; }

      .td-line{
        position:absolute;
        left:10px;
        top:166px;
        display:flex;
        align-items:baseline;
        gap:6px;
      }

      .td-med{
        font-size:26px;
        font-weight:700;
        color:#fff;
        opacity:0;
        animation:med 8s infinite;
      }

      .td-terra{
        font-size:30px;
        font-weight:700;
        color:#e52521;
        opacity:0;
        transform:scale(3);
        transform-origin:left center;
        animation:terra 8s cubic-bezier(.22,.61,.36,1) infinite;
      }

      .td-logo{
        position:absolute;
        right:8px;
        bottom:8px;
        width:95px;
      }

      .td-logo img{
        width:100%;
        display:block;
        mix-blend-mode:multiply;
      }

      .td-shine{
        position:absolute;
        top:0;
        left:-40px;
        width:20px;
        height:100%;
        background:linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent);
        transform:skewX(-20deg);
        opacity:0;
        animation:shine 8s infinite;
      }

      @keyframes t1{
        0%,8%{opacity:0}
        14%,100%{opacity:1}
      }
      @keyframes t2{
        0%,22%{opacity:0}
        30%,100%{opacity:1}
      }
      @keyframes med{
        0%,38%{opacity:0}
        46%,100%{opacity:1}
      }
      @keyframes terra{
        0%,42%{opacity:0; transform:scale(3)}
        82%,100%{opacity:1; transform:scale(1)}
      }
      @keyframes shine{
        0%,86%{left:-40px; opacity:0}
        90%{opacity:1}
        100%{left:110px; opacity:0}
      }
    </style>


    <div class="td-t td1">Forlæng levetiden</div>
    <div class="td-t td2">på din terrasse</div>

    <div class="td-line">
      <div class="td-med">med</div>
      <div class="td-terra">TerraDec.</div>
    </div>

    <div class="td-logo">
      <img src="${base}fischer-logo.png">
      <div class="td-shine"></div>
    </div>
  `;

  script.parentNode.insertBefore(banner, script);

})();
