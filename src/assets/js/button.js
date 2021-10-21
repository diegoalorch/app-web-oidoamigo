const button = document.querySelector(".button");
button.addEventListener("click", () => {
    button.classList.add("active");
    setTimeout(() => {
        window.location.href = "/modulos";
        button.classList.remove("active");
        button.querySelector("i").classList.replace("bx bx-log-in", "bx-check-circle")
        button.querySelector("span").innerText = "Completed";
    }, 3000);
});