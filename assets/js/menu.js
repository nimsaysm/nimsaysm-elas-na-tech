function abrirMenu() {
    const iconMenu = document.querySelector('#menu-icon');
    const linksMenu = document.querySelector('#links');

    iconMenu.addEventListener('click', function() {
        if (iconMenu.classList.contains('menu-aberto')) { //se foi clicado quando o menu estava aberto 
            linksMenu.style.display = 'none';
        } else { //icon não tem a classe menu aberto (está fechado)
            linksMenu.style.display = 'grid';
        }

        iconMenu.classList.toggle('menu-aberto');
    })
}

export { abrirMenu }