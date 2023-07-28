// // ---------Fetch------------

// // Profile Feed Home
//     // Profile Damien
// const url = "data.json"
// const commentaireDamien = document.getElementById("DamienTexte")
// const nameDamien = document.getElementById("DamienName")
// const localisationDamien = document.getElementById("DamienLocalisation")
// const profilPicDamien = document.getElementById("DamienPP")
//     // Profile Lucas
// const commentaireLucas = document.getElementById("LucasTexte")
// const nameLucas = document.getElementById("LucasName")
// const localisationLucas = document.getElementById("LucasLocalisation")
// const profilPicLucas = document.getElementById("LucasPP")
//     // Profile Marianne
// const commentaireMarianne = document.getElementById("MarianneTexte")
// const nameMarianne = document.getElementById("MarianneName")
// const localisationMarianne = document.getElementById("MarianneLocalisation")
// const profilPicMarianne = document.getElementById("MariannePP")
    
// const getJson = async () =>{
//     await fetch(url, {
//         method: "GET",
//         headers: {
//             "Accept": "application/json"
//         }
//     })
//     .then(response => response.json())
//     .then (data => {
//         // Damien
//         commentaireDamien.innerText = data.users[4].Commentaire.Commentaire1
//         nameDamien.innerText = data.users[4].Name
//         localisationDamien.innerHTML += data.users[4].Restaurant.restau9 + `, ` + data.users[4].Ville.ville1
//         profilPicDamien.src = data.users[4].ProfilPicture
//         // Lucas
//         commentaireLucas.innerText = data.users[5].Commentaire.Commentaire2
//         nameLucas.innerText = data.users[5].Name
//         localisationLucas.innerHTML += data.users[5].Restaurant.restau8 + `, ` + data.users[5].Ville.ville2
//         profilPicLucas.src = data.users[5].ProfilPicture
//         // Marianne
//         commentaireMarianne.innerText = data.users[6].Commentaire.Commentaire3
//         nameMarianne.innerText = data.users[6].Name
//         localisationMarianne.innerHTML += data.users[6].Restaurant.restau6 + `, ` + data.users[6].Ville.ville3
//         profilPicMarianne.src = data.users[6].ProfilPicture

//     })
// }
// getJson()







const url = "data.json"
// Profile Utilisateur
const nameUser = document.getElementsByClassName("userNames");
const rankUser = document.getElementsByClassName("userRanks")
const restoUser = document.getElementsByClassName("PostRestaurants")
const postUser = document.getElementsByClassName("Post")
const ppUser = document.getElementsByClassName("userPhotos")
const photoUser = document.getElementsByClassName("UserImg")
// ------------Div global------------
const FindsPost = document.getElementsByClassName("flexfeed")
// ----------------------------------
// ------------Fonction--------------
const getJson = async () =>{
    await fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
    .then (data => {
        // ---------Boucle-----------
        for(let i = 0; i < FindsPost.length; i++){
            if(i === 0 ){
                nameUser[i].innerText = data.users[4].Name;
                restoUser[i].innerHTML += data.users[4].Restaurant.restau9 + `, ` + data.users[4].Ville.ville1;
                postUser[i].innerText = data.users[4].Commentaire.Commentaire1;
                ppUser[i].src = data.users[4].ProfilPicture;
            }else if(i === 1){
                nameUser[i].innerText = data.users[5].Name;
                restoUser[i].innerHTML += data.users[5].Restaurant.restau8 + `, ` + data.users[5].Ville.ville2;
                postUser[i].innerText = data.users[5].Commentaire.Commentaire2
                ppUser[i].src = data.users[5].ProfilPicture
            }else if(i === 2){
                nameUser[i].innerText = data.users[6].Name;
                restoUser[i].innerHTML += data.users[6].Restaurant.restau6 + `, ` + data.users[6].Ville.ville3;
                postUser[i].innerText = data.users[6].Commentaire.Commentaire3
                ppUser[i].src = data.users[6].ProfilPicture
            }
        }
    })
}
getJson()