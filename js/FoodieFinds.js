// MENU DÉROULANT NAVBAR
const toggleNavbar = document.getElementById('toggle-navbar');
const navbar = document.getElementById('navbar');
    document.onclick = function(event) {
        if(event.target.id !== 'toggle-navbar' && event.target.id !== 'navbar'){
            toggleNavbar.classList.remove('active');
            navbar.classList.remove('active');
        };
    };
    toggleNavbar.onclick = function(){
        toggleNavbar.classList.toggle('active');
        navbar.classList.toggle('active');
    };


// MENU BURGER CITIES
const toggleCities = document.getElementById('toggle-cities');
const citiesNavigation = document.getElementById('FindsNavCities');
        document.onclick = function(event) {
            if(event.target.id !== 'toggle-cities' && event.target.id !== 'FindsNavCities'){
                toggleCities.classList.remove('active');
                citiesNavigation.classList.remove('active');
            };
        };
        toggleCities.onclick = function(){
            toggleCities.classList.toggle('active');
            citiesNavigation.classList.toggle('active');
        };


// POSTS SCALE
const findsPost = document.querySelectorAll('.FindsPost');
const findsPostArray = Array.from(findsPost);
let activePost = null;
const findsPostMap = findsPostArray.map(post =>{
    post.addEventListener('click', (event) => {
        event.stopPropagation();
        if(!activePost && window.innerWidth > 960){
            post.classList.add('BlownUp');
            activePost = post;
            activePost.querySelector('.like').classList.add("active");
        }

        else if(activePost && window.innerWidth > 960){
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
        }
    });
});