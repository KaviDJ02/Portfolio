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