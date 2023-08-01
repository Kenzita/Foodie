// Fonction 1

// document.addEventListener("DOMContentLoaded", function() {
//     let hearts = document.querySelectorAll(".heart");
//     let likeCounts = document.querySelectorAll(".like-count");

//     hearts.forEach(function(heart, index) {
//       let count = 0
//       heart.addEventListener("click", function() {
//         this.classList.toggle("is-active");
//         if (this.classList.contains("is-active")) {
//           count++;
//         } else {
//           count--;
//         }
//         likeCounts[index].textContent = count;
//       });
//     });
//   });

// Fonction 2

document.addEventListener("DOMContentLoaded", function() {
    let hearts = document.querySelectorAll(".heart");
    let likeCounts = document.querySelectorAll(".like-count");

    hearts.forEach(function(heart, index) {

        var count = parseInt(likeCounts[index].getAttribute("data-like-count"), 10);
        
      heart.addEventListener("click", function() {
        this.classList.toggle("is-active");
        if (this.classList.contains("is-active")) {
          count++;
        } else {
          count--;
        }
        likeCounts[index].textContent = count;
      });
    });
  });