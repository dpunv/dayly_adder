var del=0;
function st(){
    if(typeof(Storage) !== "undefined") {
        var key;
        var s="";
        for (let key in localStorage){
            if (!localStorage.hasOwnProperty(key)) continue;
            s = s + "<p class=\"content\" onclick=\"dt('" + key + "')\">" + key + "<br>" + localStorage.getItem(key) +"</p>";
        }
        /*
        if(s == ""){
            localStorage.setItem("0", "hello world");
            s = s + "<button onclick=\"dt(0)\">" + localStorage.getItem("0") +"</button>";
        }
        */
        document.getElementById("ml").innerHTML = s;
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function add(){
    var text = document.getElementById("text").value;
    var name = document.getElementById("name").value;
    localStorage.setItem(text, name);
    st()
}

function dt(key){
    if(del == 1){
        localStorage.removeItem(key);
        st()
    }
}

function da(){
    /*for(let key in localStorage){
        if(!localStorage.hasOwnProperty(key))continue;
        localStorage.removeItem(key);
    }*/
    localStorage.clear()
    st()
}

function delact(){
    if(del == 0){
        del = 1;
        document.getElementById("delact").innerHTML = "add";
        document.getElementById("da").style.display = "block";
        document.getElementById("add").style.display = "none";
    }
    else{
        del = 0
        document.getElementById("delact").innerHTML = "delete";
        document.getElementById("da").style.display = "none";
        document.getElementById("add").style.display = "block";
    }
}

function exp(){
    document.getElementById("exp").innerHTML = JSON.stringify(localStorage);
}

window.onload = st;
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then( (registration) => {
            console.log('scope: ', registration.scope);
        }, (e) => {
            console.log('error: ', e);
        });
    });
}
*/