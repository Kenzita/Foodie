const form = document.querySelector("form");
const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
form.classList.add("invisible");

const compte = document.querySelector(".compte");
compte.addEventListener("click", (e) => {
    e.preventDefault();
    if (form.classList.contains("invisible")) {
        form.classList.replace("invisible", "visible");
        header.classList.add("blurBG");
        main.classList.add("blurBG");
        footer.classList.add("blurBG");
    }
});

main.addEventListener("click", () => {
    if (form.classList.contains("visible")) {
        form.classList.replace("visible", "invisible");
        header.classList.remove("blurBG");
        main.classList.remove("blurBG");
        footer.classList.remove("blurBG");
    } } )


footer.addEventListener("click", () => {
    if (form.classList.contains("visible")) {
        form.classList.replace("visible", "invisible");
        header.classList.remove("blurBG");
        main.classList.remove("blurBG");
        footer.classList.remove("blurBG");
    }
})



const connexion = document.querySelector(".contenuConnexion");
const inscription = document.querySelector(".contenuInscription");
const connexionBtn = document.querySelector(".connexionTitre");
const inscriptionBtn = document.querySelector(".inscriptionTitre");

inscription.classList.add("invisible");
connexion.classList.add("visible");

inscriptionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (inscription.classList.contains("invisible")) {
        inscription.classList.replace("invisible", "visible");
        connexion.classList.replace("visible", "invisible");
        inscriptionBtn.style.cssText =
            " color: white; background-color: #ffb600;";
        connexionBtn.style.cssText =
            " color: #ffb600; background-color: #f7d776;";
    }
});

connexionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (connexion.classList.contains("invisible")) {
        connexion.classList.replace("invisible", "visible");
        inscription.classList.replace("visible", "invisible");
        connexionBtn.style.cssText =
            " color: white; background-color: #ffb600;";
        inscriptionBtn.style.cssText =
            " color: #ffb600; background-color: #f7d776;";
    }
});
