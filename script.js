var hamburguer = document.querySelector(".hamburguer");

//o EventListener está "esperando o evento de click"
// quando acontecer o evento de click vai executar a função
// a função vai pegar o meu sidebar, e apartir da classList vou adicionar(.toggle) uma nova classe "show-,menu"
//(se tiver a classe show menu ele ira tirar, se nao tiver ele ira colocar)
hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
})
