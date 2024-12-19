function showMessage() {
    alert("Скрипт загружен");
    console.log("Таки скрипт загружен.");
    logCurrentTime();
}

function logCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}

function resetBackgroundColor() {
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "white";
}

function changeBackgroundColor() {
    resetBackgroundColor();
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "#ff0000";
    console.log("Цвет фона сброшен на red.");
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    
    if (element) {
        element.classList.toggle('hidden');
    } else {
        console.error(`Элемент с селектором "${selector}" не найден.`);
    }
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function updateHeader() {
    var utmTerm = getUrlParameter('utm_term');
    var header = document.querySelector('h1');

    if (utmTerm) {
        header.textContent = utmTerm;
    } else {
        header.textContent = 'Добро пожаловать!';
    }
}

window.onload = function() {
    updateHeader();
};
