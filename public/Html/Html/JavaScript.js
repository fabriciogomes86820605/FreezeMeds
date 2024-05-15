// Captura do elemento com o ID "Main"
var mainElement = document.getElementById('Main');

// Obtenção dos atributos de dados
var words = mainElement.getAttribute('data-words').split(',');
var delay = mainElement.getAttribute('data-delay');

// Função para animar o texto digitado
function typeWriter(text, i, fnCallback) {
    // Verifica se o texto foi completamente exibido
    if (i < (text.length)) {
        // Adiciona um caractere ao texto
        mainElement.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
        // Aguarda o atraso especificado e chama a função novamente para o próximo caractere
        setTimeout(function () {
            typeWriter(text, i + 1, fnCallback)
        }, 100);
    }
    // Verifica se o texto foi completamente exibido e se há uma função de retorno de chamada
    else if (typeof fnCallback == 'function') {
        // Chama a função de retorno de chamada após o atraso
        setTimeout(fnCallback, delay);
    }
}

// Função para iniciar a animação de digitação
function StartTextAnimation(i) {
    if (typeof words[i] == 'undefined') {
        // Chama a função recursivamente para iniciar a animação novamente
        setTimeout(function () {
            StartTextAnimation(0);
        }, 20); // Ajuste este valor para o tempo de pausa entre as animações
    }
    // Verifica se há texto para exibir
    if (i < words.length) {
        // Chama a função para exibir o texto atual na posição "i"
        typeWriter(words[i], 0, function () {
            // Chama a função recursivamente para exibir o próximo texto
            StartTextAnimation(i + 1);
        });
    }
}

// Inicia a animação de digitação
StartTextAnimation(0);

window.addEventListener('scroll', function () {
    var Navbar = document.getElementById('Panelinha');
    var navbarHeight = Navbar.offsetHeight;
    var scrollPosition = window.scrollY;

    if (scrollPosition >= navbarHeight) {
        Navbar.classList.add('fixed')
    } else {
        Navbar.classList.remove('fixed')
    }


});