
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

// mobile menu
if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    document.body.classList.toggle(
      "no-scroll",
      mobileNav.classList.contains("active")
    );
  });
}

// animations
const animateElements = document.querySelectorAll(".animate-on-scroll");

const observerOptions = {
  root: null, 
  rootMargin: "0px",
  threshold: 0.9, 
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target); 
    }
  });
}, observerOptions);

animateElements.forEach((element) => {
  observer.observe(element);
});

// swiper
 var swiper = new Swiper(".mySwiper", {
        loop: true,
        effect: "fade", 
        
        autoplay: {
          delay: 3000, 
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      

      document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const closeMobileNav = document.getElementById('closeMobileNav');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const body = document.body;

    // 1. التحكم في فتح وإغلاق القائمة الجانبية
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.add('open');
        // لمنع تمرير الخلفية عند فتح القائمة
        body.style.overflow = 'hidden'; 
    });

    const closeMenu = () => {
        mobileNav.classList.remove('open');
        body.style.overflow = ''; // استعادة التمرير
    };

    closeMobileNav.addEventListener('click', closeMenu);

    // 2. التحكم في قائمة الـ Accordion (القوائم المنسدلة)
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const submenu = toggle.nextElementSibling;
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true' || false;

            // إغلاق كل القوائم المفتوحة باستثناء القائمة الحالية
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    otherToggle.setAttribute('aria-expanded', 'false');
                    otherToggle.nextElementSibling.style.maxHeight = null;
                }
            });

            // فتح أو إغلاق القائمة المحددة
            if (!isExpanded) {
                toggle.setAttribute('aria-expanded', 'true');
                // يتم تعيين maxHeight بناءً على ارتفاع المحتوى لعمل الانتقال السلس
                submenu.style.maxHeight = submenu.scrollHeight + "px";
            } else {
                toggle.setAttribute('aria-expanded', 'false');
                submenu.style.maxHeight = null;
            }
        });
    });

    // 3. إغلاق القائمة عند النقر خارجها (اختياري)
    document.addEventListener('click', (event) => {
        const isClickInside = mobileNav.contains(event.target) || mobileMenuBtn.contains(event.target);
        if (!isClickInside && mobileNav.classList.contains('open')) {
            closeMenu();
        }
    });
});