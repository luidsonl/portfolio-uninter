const toggleDarkMode = () => {
    // Obtém o modo escuro do armazenamento local, se estiver definido
    let darkModeEnabled = localStorage.getItem('darkMode');

    // Se o modo escuro não estiver definido no armazenamento local, define-o como false por padrão
    if (darkModeEnabled === null) {
        darkModeEnabled = false;
    } else {
        // Converte a string armazenada em um booleano
        darkModeEnabled = darkModeEnabled === 'true';
    }

    // Inverte o estado do modo escuro
    const newDarkModeState = !darkModeEnabled;

    // Atualiza o estado do modo escuro no armazenamento local
    localStorage.setItem('darkMode', newDarkModeState);

    // Chama a função aplyDarkMode
    aplyDarkMode()
};

//Função responsável por alterar as variáveis do css caso o tema esuro esteja ativado
const aplyDarkMode = ()=>{
    let darkModeEnabled = localStorage.getItem('darkMode');

    if(darkModeEnabled == 'true'){
        document.documentElement.style.setProperty('--dark-mode-toggler-icon', 'url("moon-phases-moon-svgrepo-com.png")');
        document.documentElement.style.setProperty('--header-background', '#111');
        document.documentElement.style.setProperty('--main-background', '#333');
        document.documentElement.style.setProperty('--main-text-color', '#fff');
        document.documentElement.style.setProperty('--toggler-background', 'linear-gradient(to bottom, var(--main-background) 0%, #000000 50%, #000 50%, #000044 100%)');
    }else{
        document.documentElement.style.setProperty('--dark-mode-toggler-icon', 'url("sun-svgrepo-com.png")');
        document.documentElement.style.setProperty('--header-background', '#333');
        document.documentElement.style.setProperty('--main-background', '#fff');
        document.documentElement.style.setProperty('--main-text-color', '#000');
        document.documentElement.style.setProperty('--toggler-background', 'linear-gradient(to bottom, var(--main-background) 0%, #6fc0e8 50%, #6fc0ff 50%, #0000ff 100%)');
    }


    
}

// Aplica o modo escuro ao carregar a página
window.onload = ()=>{
    aplyDarkMode()
}