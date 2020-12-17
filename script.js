function st(){
    if(typeof(Storage) !== "undefined") {
        var key;
        var s="";
        for (let key in localStorage){
            if (!localStorage.hasOwnProperty(key)) continue;
            s = s + "<button onclick=\"dt('" + key + "')\">" + localStorage.getItem(key) +"</button>";
        }
        if(s == ""){
            localStorage.setItem("0", "hello world");
            s = s + "<button onclick=\"dt(0)\">" + localStorage.getItem("0") +"</button>";
        }
        document.getElementById("ml").innerHTML = s;
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function add(){
    var text = document.getElementById("text").value;
    localStorage.setItem(text, text);
    st()
}

function dt(key){
    localStorage.removeItem(key);
    st()
}

function da(){
    for(let key in localStorage){
        if(!localStorage.hasOwnProperty(key))continue;
        localStorage.removeItem(key);
    }
    st()
}

window.onload = st;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then( (registration) => {
            console.log('scope: ', registration.scope);
        }, (e) => {
            console.log('error: ', e);
        });
    });
}
