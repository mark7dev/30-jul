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
    text.textContent = 'I am an international trade consultant, but right now I’m studying Web Development.'
}, 3000)

setTimeout(function() {
    var text = document.createElement('p');
    text.className = 'message__text';
    document.querySelector('#conversation').appendChild(text);
    text.textContent = 'I like playing on cumputer, watching football and coding of course!.'
}, 4000)

setTimeout(function() {
    var text = document.createElement('p');
    text.className = 'message__bot';
    document.querySelector('#conversation').appendChild(text);
    text.textContent = 'Awesome! How would you like to be called?.'
}, 5000)

setTimeout(function(){
    var inUser = document.createElement('input');
    inUser.type = 'text';
    inUser.className = 'input__text';
    document.querySelector('#conversation').appendChild(inUser);
    
    var buttonUser = document.createElement('button');
    buttonUser.className = 'button__get';
    buttonUser.textContent = "Send";
    document.querySelector('#conversation').appendChild(buttonUser);

    buttonUser.addEventListener('click',function(){
        nombre = inUser.value;

        if(nombre === ""){
            var text = document.createElement('p');
            text.className = 'message__bot'
            document.querySelector('#conversation').appendChild(text); 
            text.textContent ='Be sure how you you like to be called'; 

            var inUser2 = document.createElement('input');
            inUser2.type = 'text';
            inUser2.className = 'input__text';
            document.querySelector('#conversation').appendChild(inUser2);
            
            var buttonUser2 = document.createElement('button');
            buttonUser2.className = 'button__get';
            buttonUser2.textContent = "Send";
            document.querySelector('#conversation').appendChild(buttonUser2);

            buttonUser2.addEventListener('click', function(){
                nombre = inUser2.value;

                if(nombre.length >= 6){
                    var text = document.createElement('p');
                    text.className = 'message__bot'
                    document.querySelector('#conversation').appendChild(text);
                
                    text.textContent ='Wow, you have a long name, well, nice to meet you ' + nombre;  
                } else if (nombre.length < 6 && nombre !== ""){
                    var text = document.createElement('p');
                    text.className = 'message__bot'
                    document.querySelector('#conversation').appendChild(text);
                
                    text.textContent ='Well, nice to meet you ' + nombre;};
            })
        } else if(nombre.length >= 6){
            var text = document.createElement('p');
            text.className = 'message__bot'
            document.querySelector('#conversation').appendChild(text);
        
            text.textContent ='Wow, you have a long name, well, nice to meet you ' + nombre;  
        } else if (nombre.length < 6 && nombre !== ""){
            var text = document.createElement('p');
            text.className = 'message__bot'
            document.querySelector('#conversation').appendChild(text);
        
            text.textContent ='Well, nice to meet you ' + nombre;};
    })
},6000)