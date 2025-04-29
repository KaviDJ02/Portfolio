document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-card");
    const dropdown = document.getElementById("categorySelect");

    function filterProjects(category) {
        projects.forEach(project => {
            if (category === "all" || project.getAttribute("data-category") === category) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
        AOS.init();
    }

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            filterProjects(this.getAttribute("data-category"));
        });
    });

    dropdown.addEventListener("change", function() {
        filterProjects(this.value);
    });

    filterProjects("all"); // Show all projects initially
});

let goTopBtn = document.getElementById("goTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
};

goTopBtn.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

document.getElementById("cvButton").addEventListener("click", function() {
    window.open("assets/cv.pdf", "_blank");
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        fetch(form.action, {
            method: form.method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    alert("Message sent successfully!");
                    form.reset(); // Reset the form fields
                } else {
                    alert("Failed to send message. Please try again.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An error occurred. Please try again.");
            });
    });
});

window.addEventListener("scroll", () => {
    const blob = document.querySelector(".blob-outer-container");
    const scrollY = window.scrollY;

    // Fade out as user scrolls past 300px
    const fadeStart = 100;
    const fadeEnd = 400;
    let opacity = 1;

    if (scrollY > fadeStart) {
        opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
        if (opacity < 0) opacity = 0;
    }

    blob.style.opacity = opacity;
});