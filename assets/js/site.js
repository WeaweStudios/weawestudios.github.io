// Nova Rush website: screenshot lightbox only. No tracking, no cookies, no storage.
(function () {
  var dlg = document.querySelector(".lightbox");
  if (!dlg || typeof dlg.showModal !== "function") return;
  var img = dlg.querySelector("img");
  var src = dlg.querySelector("source");
  document.querySelectorAll(".shot").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var base = btn.getAttribute("data-full");
      src.srcset = base + ".webp";
      img.src = base + ".png";
      img.alt = btn.getAttribute("data-alt") || "";
      dlg.showModal();
    });
  });
  dlg.querySelector(".lb-close").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
})();
