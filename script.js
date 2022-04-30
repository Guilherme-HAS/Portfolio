var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){ /*Quando clickar chama a função*/
    document.querySelector(".sidebar").classList.toggle("show-menu"); /*Adicionando dinamicamente uma nova classe ao side bar*/
});