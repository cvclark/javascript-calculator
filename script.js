document.title = "Interactive JavaScript UI.com";

var i = 0;

var append = function() {
    var p = document.createElement('p');
    p.textContent = `This is paragraph #${i++}`;
    var target = document.querySelector('#target');
    target.appendChild(p);
}

var insert = function() {
    var p = document.createElement('p');
    p.textContent = `This is paragraph #${i++}`;
    var target = document.querySelector('#target');
    target.insertBefore(p, target.firstElementChild);
}

var remove = function() {
    document.querySelector('#target').firstElementChild.remove();
}

var move = function() {
    var firstChild = document.querySelector('#target').firstElementChild;
    if (firstChild) {
        var receiver = document.querySelector('#receiver')
        receiver.appendChild(firstChild);
    }
}

var copy = function() {
    var firstChild = document.querySelector('#target').firstElementChild;
    if (firstChild) {
        var receiver = document.querySelector('#receiver')
        receiver.appendChild(firstChild.cloneNode(true));
    }
}

