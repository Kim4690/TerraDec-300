(function () {

  var wrap = document.createElement("div");

  wrap.innerHTML = `
    <div onclick="window.open('https://www.fischerdanmark.dk/','_blank')"
      style="
        width:100%;
        max-width:620px;
        aspect-ratio:620/200;
        background:linear-gradient(135deg,#c40000,#ff4d4d);
        color:#fff;
        font-family:Arial,sans-serif;
        border-radius:8px;
        overflow:hidden;
        cursor:pointer;
        position:relative;
        box-sizing:border-box;
      ">

      <div style="
        position:absolute;
        inset:0;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:30px;
        box-sizing:border-box;
      ">
        <div>
          <div style="
            font-size:42px;
            font-weight:700;
            line-height:1;
            margin-bottom:10px;
          ">
            fischer testbanner
          </div>

          <div style="
            font-size:22px;
            opacity:.95;
          ">
            Test af 620x200 format
          </div>
        </div>

        <div style="
          background:#fff;
          color:#c40000;
          padding:14px 28px;
          border-radius:40px;
          font-weight:700;
          font-size:20px;
        ">
          Klik her
        </div>
      </div>
    </div>
  `;

  document.currentScript.parentNode.insertBefore(
    wrap.firstElementChild,
    document.currentScript
  );

})();
