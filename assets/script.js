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

    // Aplica ou remove a classe 'dark-mode' no corpo da página conforme necessário
    document.body.classList.toggle('dark-mode', newDarkModeState);
    aplyDarkMode()
};

const aplyDarkMode = ()=>{
    let darkModeEnabled = localStorage.getItem('darkMode');

    if(darkModeEnabled == 'true'){
        document.documentElement.style.setProperty('--dark-mode-toggler-icon', 'url("moon-phases-moon-svgrepo-com.png")');
        document.documentElement.style.setProperty('--header-background', '#111');
        document.documentElement.style.setProperty('--main-background', '#333');
        document.documentElement.style.setProperty('--main-text-color', '#fff');
    }else{
        document.documentElement.style.setProperty('--dark-mode-toggler-icon', 'url("sun-svgrepo-com.png")');
        document.documentElement.style.setProperty('--header-background', '#333');
        document.documentElement.style.setProperty('--main-background', '#fff');
        document.documentElement.style.setProperty('--main-text-color', '#000');
    }


    
}

window.onload = ()=>{
    aplyDarkMode()
}