

let i;
let liArray = [{content: "Hit the gym", checked: false}, {content: "Homework",checked: false}, {content: "Swimming", checked: false}]

if(!localStorage.getItem("array")) {content: 
    localStorage.setItem("array", JSON.stringify(liArray))
}
var list = document.getElementById("myUL");


function addText(array) {
    list.innerHTML = "";
    for (var i = 0; i < array.length; i++) {
        var text = array[i].content;
        var checked = array[i].checked;
        var listItem = document.createElement("li");
        if(checked){
            listItem.classList='checked';
        }
        listItem.textContent = text;
        list.appendChild(listItem);
    }

    let myNodelist = document.getElementsByTagName("li");

    for (var i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
    
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
    var close = document.getElementsByClassName("close");
    for (var ai = 0; ai < close.length; ai++) {
      close[ai].onclick = function() {
        var div = this.parentElement;
        let content = (this.parentElement.textContent).substring(0,this.parentElement.textContent.length-1);
        var index = liArray.findIndex(x => x.content === content);
        liArray.splice(index,1);
        addText(liArray);
      }
    }
    localStorage.setItem("array",JSON.stringify(liArray))
}

liArray= JSON.parse(localStorage.getItem("array"))
addText(liArray);


var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');        
        let content = (ev.target.textContent).substring(0,ev.target.textContent.length-1);
        var index = liArray.findIndex(x => x.content === content);
        console.log(liArray[index].content ,liArray[index].checked)
        liArray[index].checked=!(liArray[index].checked);
        console.log(liArray[index].content ,liArray[index].checked)
        localStorage.setItem("array",JSON.stringify(liArray))
        
    }
}, false);  



function newElement() {
    let inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let toDoItem= {content:inputValue, checked:false}
        liArray.push(toDoItem)
        addText(liArray);
    }
    document.getElementById("myInput").value = "";
}
