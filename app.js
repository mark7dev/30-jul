var name = "";

setTimeout(function() {
    var text = document.createElement('p');
    text.className = 'message__text';
    document.querySelector('#conversation').appendChild(text);
    text.textContent = 'Hello! My name is Mark';
}, 2000)

setTimeout(function() {
    var text = document.createElement('p');
    text.className = 'message__text';
    document.querySelector('#conversation').appendChild(text);
    text.textContent = 'I was an international trade consultant, but right now I’m studying Web Development.'
}, 4000)