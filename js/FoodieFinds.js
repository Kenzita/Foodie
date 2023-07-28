// MENU BURGER
const toggle = document.getElementById('toggle');
const citiesNavigation = document.getElementById('FindsNavCities');
        document.onclick = function(event) {
            if(event.target.id !== 'toggle' && event.target.id !== 'FindsNavCities'){
                toggle.classList.remove('active');
                citiesNavigation.classList.remove('active');
            };
        };
        toggle.onclick = function(){
            toggle.classList.toggle('active');
            citiesNavigation.classList.toggle('active');
        };


// POSTS SCALE

// const findsPost = document.querySelectorAll('.FindsPost');
// const findsPostArray = Array.from(findsPost);
// const findsPostMap = findsPostArray.map(post =>{
//     post.addEventListener('click', (event) => {
//         event.stopPropagation();
//         post.classList.add('BlownUp');
//     })
//     document.addEventListener('click', (event) => {
//         if(!event.target.classList.contains('BlownUp')){
//             post.classList.remove('BlownUp');
//         }
//     })
// })

const findsPost = document.querySelectorAll('.FindsPost');
const findsPostArray = Array.from(findsPost);
let activePost = null;
const findsPostMap = findsPostArray.map(post =>{
    post.addEventListener('click', (event) => {
        event.stopPropagation();
        if(activePost && !post.classList.contains('BlownUp')){
            activePost.classList.remove('BlownUp');
            activePost = null
            // console.log(2);
        }
        else{
            post.classList.add('BlownUp');
            activePost = post;
            // console.log(1);
        }
    })
});
document.addEventListener('click', (event) => {
    if(!event.target.classList.contains('BlownUp') && activePost){
            activePost.classList.remove('BlownUp');
            activePost = null;
            // console.log(3);
    }
})
