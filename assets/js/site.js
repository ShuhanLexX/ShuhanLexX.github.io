(function () {
  "use strict";

  var root = document.documentElement;
  var themeButton = document.getElementById("darkModeToggle");
  function updateThemeButton() {
    if (!themeButton) return;
    var isDark = root.getAttribute("data-bs-theme") === "dark";
    var label = isDark ? themeButton.dataset.lightLabel : themeButton.dataset.darkLabel;
    themeButton.setAttribute("aria-label", label);
    themeButton.setAttribute("title", label);
    themeButton.setAttribute("aria-pressed", String(isDark));
  }
  if (themeButton) {
    updateThemeButton();
    themeButton.addEventListener("click", function () {
      var next = root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-bs-theme", next);
      try {
        localStorage.setItem("shuhan-theme", next);
      } catch (error) {}
      updateThemeButton();
    });
  }

  var menuButton = document.getElementById("menuToggle");
  var menu = document.getElementById("primaryNav");
  function closeMenu() {
    if (!menuButton || !menu) return;
    menuButton.setAttribute("aria-expanded", "false");
    menu.removeAttribute("data-open");
  }
  if (menuButton && menu) {
    menuButton.addEventListener("click", function () {
      var open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(open));
      if (open) menu.setAttribute("data-open", "true");
      else menu.removeAttribute("data-open");
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        closeMenu();
        menuButton.focus();
      }
    });
    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu();
    });
  }

  var search = document.getElementById("pubSearch");
  if (search) {
    search.addEventListener("input", function () {
      var query = search.value.toLocaleLowerCase().trim();
      var count = 0;
      document.querySelectorAll("[data-pub-searchable]").forEach(function (entry) {
        entry.hidden = !entry.textContent.toLocaleLowerCase().includes(query);
        if (!entry.hidden) count += 1;
      });
      document.querySelectorAll(".publication-group").forEach(function (group) {
        group.hidden = !Array.from(group.querySelectorAll("[data-pub-searchable]")).some(function (entry) {
          return !entry.hidden;
        });
      });
      document.getElementById("pubNoResults").hidden = count !== 0;
    });
  }

  var printButton = document.getElementById("printCV");
  if (printButton)
    printButton.addEventListener("click", function () {
      window.print();
    });

  var topButton = document.createElement("button");
  topButton.type = "button";
  topButton.className = "back-to-top";
  topButton.textContent = "↑";
  topButton.setAttribute("aria-label", document.body.dataset.backTop || "Back to top");
  topButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  });
  document.body.appendChild(topButton);
  window.addEventListener(
    "scroll",
    function () {
      topButton.classList.toggle("visible", window.scrollY > 500);
    },
    { passive: true }
  );
})();
