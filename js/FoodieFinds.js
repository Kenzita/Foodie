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
const findsPost = document.querySelectorAll('.FindsPost');
const findsPostArray = Array.from(findsPost);
let activePost = null;
const findsPostMap = findsPostArray.map(post =>{
    post.addEventListener('click', (event) => {
        event.stopPropagation();

        post.classList.add('BlownUp');
        activePost = post;
        activePost.querySelector('.like').classList.add("active");

        const activePostDimensions = activePost.getBoundingClientRect();
        if(
            event.clientX < activePostDimensions.left ||
            event.clientX > activePostDimensions.right ||
            event.clientY < activePostDimensions.top ||
            event.clientY > activePostDimensions.bottom
        ){
            activePost.classList.remove('BlownUp');
            activePost.querySelector('.like').classList.remove("active");
            activePost = null;
        }
    });
});