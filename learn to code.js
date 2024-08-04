// JavaScript for interactive elements and animations
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const menuItems = document.querySelector('.menu-items');

  hamburgerButton.addEventListener('click', function () {
    // Toggle the 'open' class to show/hide the menu
    if (menuItems.classList.contains('open')) {
      menuItems.classList.remove('open');
    } else {
      menuItems.classList.add('open');
    }
  });
});




document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach((link) => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Animated scroll-to-top button
    const scrollBtn = document.getElementById("scrollBtn");

    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("click", function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    // Example of adding dynamic content
    const dynamicContent = document.getElementById("dynamicContent");

    const contentData = [
        { title: "Introduction to HTML", description: "Learn the basics of HTML." },
        { title: "Styling with CSS", description: "Explore CSS for designing your website." },
        { title: "JavaScript Fundamentals", description: "Understand core concepts of JavaScript." }
    ];

    contentData.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h3");
        title.textContent = item.title;

        const description = document.createElement("p");
        description.textContent = item.description;

        card.appendChild(title);
        card.appendChild(description);

        dynamicContent.appendChild(card);
    });
});
