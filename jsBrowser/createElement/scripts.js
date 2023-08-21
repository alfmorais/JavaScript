let list = document.createElement("ul");


for (i = 0; i < 5; i++) {
    let item = document.createElement("li");
    let text = document.createTextNode("Text in List" + i);
    item.append(text);
    list.appendChild(item);
}


let container = document.getElementById("container-principal");
container.append(list);