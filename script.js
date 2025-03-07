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

// Add this to your script.js or within a <script> tag in index.html
window.addEventListener('load', function() {
    try {
        new FinisherHeader({
            "count": 10,
            "size": {
                "min": 1300,
                "max": 1500,
                "pulse": 0
            },
            "speed": {
                "x": {
                    "min": 0.1,
                    "max": 0.6
                },
                "y": {
                    "min": 0.1,
                    "max": 0.6
                }
            },
            "colors": {
                "background": "#eb2a2a",
                "particles": [
                    "#ff4848",
                    "#000000",
                    "#2235e5",
                    "#000000",
                    "#ff0000"
                ]
            },
            "blending": "overlay",
            "opacity": {
                "center": 0.5,
                "edge": 0.05
            },
            "skew": 0,
            "shapes": [
                "c"
            ]
        });
    } catch (error) {
        console.error('FinisherHeader failed to initialize:', error);
        document.querySelector('.headerNav').style.backgroundColor = '#ffffff'; // Fallback background color
    }
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