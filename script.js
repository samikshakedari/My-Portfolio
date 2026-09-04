/* ================= DARK MODE ================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {

        icon.classList.remove("bi-moon-fill");

        icon.classList.add("bi-sun-fill");

    } else {

        icon.classList.remove("bi-sun-fill");

        icon.classList.add("bi-moon-fill");

    }

});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (name === "" || email === "" || message === "") {

        alert("Please fill all required fields.");

        return;

    }


    alert(
        "Thank you, " +
        name +
        "! Your message has been submitted successfully."
    );


    contactForm.reset();

});


/* ================= NAVBAR ACTIVE LINK ================= */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


/* ================= MOBILE NAVBAR ================= */

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const navbar =
            document.getElementById("navbarMenu");


        if (navbar.classList.contains("show")) {

            const collapse =
                bootstrap.Collapse.getInstance(navbar);


            if (collapse) {

                collapse.hide();

            }

        }

    });

});