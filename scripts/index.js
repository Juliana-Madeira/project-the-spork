const changeTheme = document.querySelector('.change-theme-all');

//função para mudar dark ou light mode
const toggleDarkMode = () => {
    document.body.classList.toggle('dark')
};

//carregar o tema dark ou light
const loadTheme = () => {
    const darkModeIn = localStorage.getItem('dark')

    if(darkModeIn){
        toggleDarkMode()
    }
};

loadTheme();



//evento ao clicar no botão
changeTheme.addEventListener('change', function(){
    toggleDarkMode();

    //salvar o mode de preferência do usuário 
    localStorage.removeItem('dark'); //removo o dark de início, nao vai dar erro nenhum, mas se for dark, no if abaixo ele chama o dark

    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark', 1)    //se o dark estiver ativo, a preferência é 'dark' como true
    }
});


//funçao para abrir o menu hamburguer
function openMenu() {
    document.getElementById('overlayMenu').style.width = '50%'
}

function closeMenu() {
    document.getElementById('overlayMenu').style.width = '0'
}