var list = document.getElementById('project-list');
var heading = document.getElementById('project-heading');

heading.addEventListener("click", function(){
    if (list.style.display == 'none'){
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
}, false);