/* ================= DROPDOWN ================= */

window.toggleDropdown = function (menuId) {

    const menu = document.getElementById(menuId);

    if (!menu) {
        return;
    }

    document.querySelectorAll(".submenu.show").forEach(function (item) {

        if (item !== menu) {
            item.classList.remove("show");
        }

    });

    menu.classList.toggle("show");
};


/* Close dropdown when clicking outside */

document.addEventListener("click", function (event) {

    if (!event.target.closest(".dropdown")) {

        document.querySelectorAll(".submenu.show").forEach(function (menu) {
            menu.classList.remove("show");
        });

    }

});


/* ================= LANGUAGE ================= */

let currentLanguage =
    localStorage.getItem("triLanguage") || "en";


function applyLanguage() {

    document.querySelectorAll("[data-en][data-mr]").forEach(function (element) {

        const translatedText =
            element.getAttribute("data-" + currentLanguage);

        if (translatedText !== null) {
            element.textContent = translatedText;
        }

    });


    document.querySelectorAll(
        "[data-placeholder-en][data-placeholder-mr]"
    ).forEach(function (input) {

        const translatedPlaceholder =
            input.getAttribute(
                "data-placeholder-" + currentLanguage
            );

        if (translatedPlaceholder !== null) {
            input.placeholder = translatedPlaceholder;
        }

    });


    const languageBtn =
        document.getElementById("languageBtn");

    if (languageBtn) {

        if (currentLanguage === "en") {

            languageBtn.textContent = "मराठी";
            document.documentElement.lang = "en";

        } else {

            languageBtn.textContent = "English";
            document.documentElement.lang = "mr";

        }

    }

}


/* Language button */

window.toggleLanguage = function () {

    currentLanguage =
        currentLanguage === "en" ? "mr" : "en";

    localStorage.setItem(
        "triLanguage",
        currentLanguage
    );

    applyLanguage();

};


/* Apply saved language */

applyLanguage();