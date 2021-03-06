//author: dp

//global variables
var del=0;
var expo = 0;
var liste = 0;
var modify = 0;
var op = 0;

//function to display the stored items in localStorage
function st(){
    if(typeof(Storage) !== "undefined") {
        var key;
        var s="";
        for (let key in localStorage){
            if (!localStorage.hasOwnProperty(key)) continue;
            if(liste==0){
                s = s + "<p class=\"content\" onclick=\"dt('" + key + "')\">" + key + localStorage.getItem(key) +"</p>";
            }else{
                s = s + "<ul class=\"content\" onclick=\"dt('" + key + "')\"><li>" + key.split("<br />").join("</li><li>") + localStorage.getItem(key) +"</ul>";
            }
        }
        document.getElementById("ml").innerHTML = s;
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

//function to add a new item in localStorage
function add(){
    var text = document.getElementById("text").value;
    var name = document.getElementById("name").value;
    localStorage.setItem(text.split("\n").join("<br />") + "<br />", name);
    st()
}

//function to modify or delete an item from localstorage
function dt(key){
    if(del == 1){
        localStorage.removeItem(key);
        st()
    }else if(modify == 1){
        document.getElementById("text").value = key.split("<br />").join("\n");
        document.getElementById("name").value = localStorage.getItem(key);    
        localStorage.removeItem(key);
        modify = 0;
        document.getElementById("mb").innerHTML = "modify"
        st()
    }
}

//function to delete all items from localstorage
function da(){
    localStorage.clear()
    st()
}

//function to change the state from add to delete and from delete to add
function delact(){
    if(del == 0){
        del = 1;
        document.getElementById("del").style.display = "flex";
        document.getElementById("add").style.display = "none";
        document.getElementById("options").style.display = "none";
    }
    else{
        del = 0
        document.getElementById("del").style.display = "none";
        document.getElementById("add").style.display = "flex";
        document.getElementById("options").style.display = "none";
    }
    op = 0;
}

//function to change the state of the visualization
function listed(){
    if(liste==0){
        liste = 1;
    }else{
        liste = 0;
    }
    st()
}

//function to change the state of the modification
function mod(){
    if(modify==0){
        modify = 1;
        document.getElementById("mb").innerHTML = "stop modify"
    }else{
        modify = 0;
        document.getElementById("mb").innerHTML = "modify"
    }
    st()
}

//function to change the state of the options
function options(){
    if(op==0){
        op = 1;
        document.getElementById("add").style.display = "none";
        document.getElementById("options").style.display = "flex";
    }else{
        op = 0;
        document.getElementById("add").style.display = "flex";
        document.getElementById("options").style.display = "none";
    }
    st()
}

//function to print the json object of localstorage
function exp(){
    if(expo == 0){
        var o={};
        for (let key in localStorage){
            if (!localStorage.hasOwnProperty(key)) continue;
            o[key.split("<br />").join("\n")] = localStorage.getItem(key);
        }
        document.getElementById("exp").innerHTML = JSON.stringify(o);
        expo=1;
    }else{
        document.getElementById("exp").innerHTML = "";
        expo=0;
    }
}

//load the window
window.onload = st;
