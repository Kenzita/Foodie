
const toggle = document.getElementById('toggle');
const navigation = document.getElementById('navigation');

document.onclick = function(e) {
    if(e.target.id !== 'toggle' && e.target.id !== 'navigation'){
         toggle.classList.remove('active');
        navigation.classList.remove('active');
    }
}
toggle.onclick = function(){
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
}    
