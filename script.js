const botao = document.getElementById("modo-escuro");

botao.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        botao.innerHTML = "☀️ Modo Claro";
    } else {
        botao.innerHTML = "🌙 Modo Escuro";
    }
});