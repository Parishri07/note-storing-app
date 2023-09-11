var button = document.getElementsByClassName("btn")[0];

button.addEventListener("click", () => {
    var key = document.querySelector('input[name="cardTitle"]').value;
    var val = document.querySelector('input[name="cardContent"]').value;
    localStorage.setItem(key, val);

    console.log("Notes Title: " + key);
    console.log("Notes Content: " + val);
})

let c = confirm("Do you want to delete the node");
if(c){
    localStorage.removeItem("note");
}