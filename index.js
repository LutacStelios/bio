document.addEventListener("DOMContentLoaded", function() {
            const socialBtns = document.querySelectorAll(".social-btn");
            socialBtns.forEach(btn => {
                btn.addEventListener("mouseover", () => {
                    btn.style.transform = "scale(1.1)";
                });
                btn.addEventListener("mouseout", () => {
                    btn.style.transform = "scale(1)";
                });
            });
        });
