(() => {
  const menuButton = document.querySelector("#menu-button");
  const navigation = document.querySelector("#primary-navigation");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
      menuButton.querySelector("span").textContent = isOpen ? "×" : "☰";
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open menu");
        menuButton.querySelector("span").textContent = "☰";
      });
    });
  }

  document.querySelectorAll(".qblock-store-button").forEach((button) => {
    button.addEventListener("click", () => {
      const existingToast = document.querySelector(".qblock-toast");
      if (existingToast) existingToast.remove();

      const toast = document.createElement("div");
      toast.className = "qblock-toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      toast.innerHTML = '<i aria-hidden="true"></i> Coming soon! We are getting QBLOCK ready.';
      document.body.appendChild(toast);
      window.setTimeout(() => toast.remove(), 2600);
    });
  });
})();