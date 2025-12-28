document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector("#hamburger-menu");
  const body = document.querySelector("body");
  const mobileNav = document.createElement("div");
  mobileNav.className = "mobile-nav";

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  mobileNav.innerHTML = `
        <div class="close-menu" id="close-btn-id">&times;</div>
        <a href="index.html" class="${
          currentPage === "index.html" ? "active-nav" : ""
        }">HOME</a>
        <a href="pages.html" class="${
          currentPage === "pages.html" ? "active-nav" : ""
        }">PAGES</a>
        <a href="portfolio.html" class="${
          currentPage === "portfolio.html" ? "active-nav" : ""
        }">PORTFOLIO</a>
        <a href="blog.html" class="${
          currentPage === "blog.html" ? "active-nav" : ""
        }">BLOG</a>
        <a href="shop.html" class="${
          currentPage === "shop.html" ? "active-nav" : ""
        }">SHOP</a>
        <div style="height: 1px; width: 30px; background: #333; margin: 15px 0;"></div>
        <a href="#" style="font-size: 12px;">LOG IN</a>
        <a href="#" style="border: 1px solid #fff; padding: 10px 25px; font-size: 12px; margin-top: 10px;">SIGN UP</a>
    `;
  document.body.appendChild(mobileNav);
  if (hamburger) {
    hamburger.onclick = () => {
      mobileNav.classList.add("active");
      body.style.overflow = "hidden";
    };
  }

  const closeMenuFunc = () => {
    mobileNav.classList.remove("active");
    body.style.overflow = "auto";
  };
  document.addEventListener("click", (e) => {
    if (e.target.id === "close-btn-id") {
      closeMenuFunc();
    }
  });
  mobileNav.onclick = (e) => {
    if (e.target === mobileNav) {
      closeMenuFunc();
    }
  };
});
