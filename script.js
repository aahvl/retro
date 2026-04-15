document.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll(".reveal");
  const childEls = document.querySelectorAll(".reveal-child");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );
  const childObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const siblings =
            entry.target.parentElement.querySelectorAll(".reveal-child");
          siblings.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add("visible");
            }, i * 120);
          });
          childObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -30px 0px",
    },
  );

  revealEls.forEach((el) => observer.observe(el));

  childEls.forEach((el) => childObserver.observe(el));

  const hero = document.querySelector(".hero");
  if (hero) {
    setTimeout(() => hero.classList.add("visible"), 80);
  }

  const title = document.querySelector(".main-title");
  if (title) {
    let glitchInterval = setInterval(() => {
      if (Math.random() > 0.85) {
        title.style.transform = `translate(${(Math.random() - 0.5) * 4}px, 0)`;
        title.style.textShadow = `
          ${Math.random() * 4 - 2}px 0 rgba(255,0,60,0.6),
          ${Math.random() * 4 - 2}px 0 rgba(0,255,200,0.6),
          3px 3px 0 rgba(90,55,0,0.8)
        `;
        setTimeout(
          () => {
            title.style.transform = "";
            title.style.textShadow = "";
          },
          80 + Math.random() * 80,
        );
      }
    }, 2200);
  }

  const cards = document.querySelectorAll(".quest-card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow =
        "0 0 20px rgba(0,255,65,0.1), inset 0 0 20px rgba(0,255,65,0.03)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "";
    });
  });

  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.style.borderLeftColor = "#ffb000";
      setTimeout(() => {
        item.style.borderLeftColor = "";
      }, 600);
    });
  });
});
