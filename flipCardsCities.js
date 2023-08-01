const url = "restaurants.json"

const divCadres = document.querySelector(".cadres")


const getJson = async () => {
    await fetch (url,  {
        method : "GET",
        headers : {
            "Accept" : "application/json"
        }
    })
    .then (response => response.json())
// .then(data => {
//     console.log(data);
// })
    
    .then (data => {
        // console.log(restaurants);

        const restaurants = data.restaurants

        console.log(restaurants)
restaurants.map(restaurant => {
                    const divCadreinner = document.createElement("div")
                    const divCadre = document.createElement("div")
                    const imgCadre = document.createElement("img")
                    const divFrontCard = document.createElement("div")
                    const titreVille = document.createElement("h2")
                    const titreRestau = document.createElement("h3")
                    const pCadreText = document.createElement("p")
                    const divBackCard = document.createElement("div")
        
                    divCadreinner.classList.add("cadre")
                    divFrontCard.setAttribute("id", restaurant.ville)
                    divBackCard.setAttribute("id", "b"+restaurant.ville)
                    divFrontCard.classList.add("cadretexte")
                    divBackCard.classList.add("cadretexte")
    
        
                    divBackCard.append(pCadreText)
                    divFrontCard.append(imgCadre, titreVille, titreRestau)
                    divCadreinner.append( divFrontCard, divBackCard)
                    divCadre.append(divCadreinner)
                    divCadres.append(divCadre)

                    titreVille.innerText = restaurant.ville;
                    titreVille.style.textTransform = "capitalize"
                    titreRestau.innerText = restaurant.restaux.restau1;
                    pCadreText.innerText = restaurant.descriptions.description1;
                    imgCadre.src = restaurant.images.image1
                    imgCadre.style.borderRadius ="3em"

                    divCadre.classList.add("flipCard")
                    divCadreinner.classList.add("flipCardinner")
                    divFrontCard.classList.add("flipcardFront")
                    divBackCard.classList.add("flipcardBack")

    })
})}



getJson()