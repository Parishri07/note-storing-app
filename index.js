var button = document.getElementsByClassName("btn")[0];
var key = document.querySelector('input[name="cardTitle"]').value;
var value = document.querySelector('input[name="cardContent"]').value;


button.addEventListener("click", ()=>{
    localStorage.setItem(key, value);

    console.log("Card Title: " + key);
        console.log("Card Content: " + value);
})
