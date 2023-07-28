const url = "data.json"
// Profile Utilisateur
const nameUser = document.getElementsByClassName("userNames");
const rankUser = document.getElementsByClassName("userRanks")
const restoUser = document.getElementsByClassName("PostRestaurants")
const postUser = document.getElementsByClassName("Post")
const ppUser = document.getElementsByClassName("userPhotos")
const photoUser = document.getElementsByClassName("UserImg")
// ------------Div global------------
const FindsPost = document.getElementsByClassName("FindsPost")
// ----------------------------------
// ------------Fonction--------------
const getJsonFinds = async () =>{
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
            if(i === 0 || i === 4 || i === 8){
                nameUser[i].innerText = data.users[0].Name;
                rankUser[i].innerText = data.users[0].Grade.Grade1;
                restoUser[i].innerText = data.users[0].Restaurant.restau4 + `, ` + data.users[0].Ville.ville3;
                postUser[i].innerText = data.users[0].Commentaire.Commentaire4;
                ppUser[i].src = data.users[0].ProfilPicture;
                photoUser[i].src = data.users[0].Photo.Photo1;
            }else if(i === 1 || i === 5 || i === 9){
                nameUser[i].innerText = data.users[1].Name;
                rankUser[i].innerText = data.users[1].Grade.Grade2;
                restoUser[i].innerText = data.users[1].Restaurant.restau3 + `, ` + data.users[0].Ville.ville4;
                postUser[i].innerText = data.users[1].Commentaire.Commentaire5
                ppUser[i].src = data.users[1].ProfilPicture
                photoUser[i].src = data.users[1].Photo.Photo2
            }else if(i === 2 || i === 6 || i === 10){
                nameUser[i].innerText = data.users[2].Name;
                rankUser[i].innerText = data.users[2].Grade.Grade3;
                restoUser[i].innerText = data.users[2].Restaurant.restau2 + `, ` + data.users[0].Ville.ville2;
                postUser[i].innerText = data.users[2].Commentaire.Commentaire6
                ppUser[i].src = data.users[2].ProfilPicture
                photoUser[i].src = data.users[2].Photo.Photo3
            }else if(i === 3 || i === 7 || i === 11){
                nameUser[i].innerText = data.users[3].Name;
                rankUser[i].innerText = data.users[3].Grade.Grade1;
                restoUser[i].innerText = data.users[3].Restaurant.restau1 + `, ` + data.users[0].Ville.ville1;
                postUser[i].innerText = data.users[3].Commentaire.Commentaire7
                ppUser[i].src = data.users[3].ProfilPicture
                photoUser[i].src = data.users[3].Photo.Photo4
            }
        }
    })
}
getJsonFinds()