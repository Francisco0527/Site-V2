const alldropdowns = document.querySelectorAll(".js-dropdown")
alldropdowns.forEach(function(item, index){
    item.addEventListener("click", function(){
    console.log(item)
    })
})

// Seleciona os elementos
var modal = document.getElementById("modal");
var contato = document.getElementById("contato");
var closeButton = document.getElementsByClassName("close-button")[0];
var form = document.getElementById("contactForm");

// script.js
document.getElementById('contato').onclick = function() {
    document.getElementById('modal').style.display = 'block';
}

document.getElementsByClassName('close-button')[0].onclick = function() {
    document.getElementById('modal').style.display = 'none';
}


// Quando o botão de contato é clicado, abre o modal
contato.onclick = function() {
    modal.style.display = "block";
}

// Quando o botão de fechar é clicado, fecha o modal
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica fora do modal, fecha o modal
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// Quando o formulário é enviado, exibe os dados
form.onsubmit = function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    alert("Nome: " + name + "\nTelefone: " + phone + "\nE-mail: " + email + "\nMensagem: " + message);
    modal.style.display = "none";
}

const cursor = document.getElementById('cursor');
let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

document.addEventListener('mousemove', function(event) {
    mouseX = event.pageX;
    mouseY = event.pageY;
});

function updateCursor() {
    // Interpolação linear para suavizar o movimento
    posX += (mouseX - posX) * 0.1;
    posY += (mouseY - posY) * 0.1;
    
    cursor.style.left = posX + 'px';
    cursor.style.top = posY + 'px';

    requestAnimationFrame(updateCursor);
}

updateCursor();

document.addEventListener("scroll", function() {
    const image = document.getElementById("image");
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Calcula a nova altura da imagem
    let newHeight = viewportHeight - (scrollY / 2);
    newHeight = Math.max(newHeight, viewportHeight / 2); // Garante que a altura mínima seja 50% da altura da viewport

    // Define a nova altura da imagem
    image.style.height = newHeight + "px";
});

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.navTabs li a');
    const panes = document.querySelectorAll('.tabPane');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function (event) {
            event.preventDefault(); // previne atualizar a pagina
            
            // Remove 'active' class from all tabs and panes
            tabs.forEach(tab => tab.classList.remove('active'));
            panes.forEach(pane => pane.classList.remove('active'));

            // Add 'active' class to clicked tab and corresponding pane
            tab.classList.add('active');
            panes[index].classList.add('active');
        });
    });
});