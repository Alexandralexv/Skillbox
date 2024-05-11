function activateMenuItem(element) {

    let ul = document.querySelectorAll('.menu-item');

    for (let i = 0; i < ul.length; i++) {
        ul[i].classList.remove('active');
    }

    element.classList.add('active');

}