//author: dp

//global variable to store the deleting state
var del=0;

//function to display the stored items in localStorage
function st(){
    if(typeof(Storage) !== "undefined") {
        var key;
        var s="";
        for (let key in localStorage){
            if (!localStorage.hasOwnProperty(key)) continue;
            s = s + "<p class=\"content\" onclick=\"dt('" + key + "')\">" + key + "<br>" + localStorage.getItem(key) +"</p>";
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
    localStorage.setItem(text, name);
    st()
}

//function to delete an item from localstorage
function dt(key){
    if(del == 1){
        localStorage.removeItem(key);
        st()
    }
}

//function to delete all items from localstorage
function da(){
    /*for(let key in localStorage){
        if(!localStorage.hasOwnProperty(key))continue;
        localStorage.removeItem(key);
    }*/
    localStorage.clear()
    st()
}

//function to change the state from add to delete and from delete to add
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

//function to print the json object of localstorage
function exp(){
    document.getElementById("exp").innerHTML = JSON.stringify(localStorage);
}

//load the window
window.onload = st;
