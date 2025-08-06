document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".meal-button button");
    const menus = document.querySelectorAll(".menus > div");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetClass = button.id.toLowerCase().replace("-menu", "-menu");

            // Remove visibility from all menus
            menus.forEach(menu => {
                menu.classList.remove("visible");
            });

            // Add visibility to target menu
            const targetMenu = document.querySelector(`.${targetClass}`);
            if (targetMenu) targetMenu.classList.add("visible");

            // Update active button styles
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    // Auto-trigger the first button to show the first menu
    if (buttons.length) buttons[0].click();
});
