(function () {

  var script = document.currentScript;
  var base = script.src.substring(0, script.src.lastIndexOf("/") + 1);

  var banner = document.createElement("div");

  banner.style.cssText = `
    width:100%;
    max-width:620px;
    aspect-ratio:620 / 200;
    position:relative;
    overflow:hidden;
    font-family:Arial,sans-serif;
    cursor:pointer;
    background:linear-gradient(135deg,#c00000,#e53935);
    color:#fff;
    box-sizing:border-box;
    border-radius:8px;
  `;

  banner.innerHTML = `
    <style>
      .f-wrap{
        position:absolute;
        inset:0;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:30px;
        box-sizing:border-box;
      }

      .f-left{
        animation:fadeIn 1s ease forwards;
      }

      .f-title{
        font-size:clamp(24px,4vw,42px);
        font-weight:700;
        line-height:1;
        margin-bottom:10px;
      }

      .f-sub{
        font-size:clamp(14px,2vw,22px);
        opacity:.95;
      }

      .f-btn{
        padding:14px 28px;
        background:#fff;
        color:#c00000;
        font-size:clamp(14px,2vw,22px);
        font-weight:700;
        border-radius:50px;
        animation:pulse 2s infinite;
      }

      .f-badge{
        position:absolute;
        right:20px;
        top:20px;
        background:rgba(255,255,255,.15);
        border:1px solid rgba(255,255,255,.3);
        padding:8px 14px;
        border-radius:30px;
        font-size:14px;
        font-weight:700;
      }

      @keyframes fadeIn{
        from{
          opacity:0;
          transform:translateY(20px);
        }
        to{
          opacity:1;
          transform:translateY(0);
        }
      }

      @keyframes pulse{
        0%,100%{
          transform:scale(1);
        }
        50%{
          transform:scale(1.06);
        }
      }
    </style>

    <div class="f-badge">TEST 620×200</div>

    <div class="f-wrap">
      <div class="f-left">
        <div class="f-title">fischer testbanner</div>
        <div class="f-sub">
          Responsivt testformat til pc og mobil
        </div>
      </div>

      <div class="f-btn">Klik her</div>
    </div>
  `;

  banner.onclick = function () {
    window.open("https://www.fischerdanmark.dk/", "_blank");
  };

  script.parentNode.insertBefore(banner, script);

})();