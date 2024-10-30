import { proverbs } from "./Proverbs.js";

const button = document.querySelector("button");

button.addEventListener("click", () => {
    let number = Math.floor(Math.random()*32 +1 );
    let html = "";

    function showup(){
        proverbs.forEach( proverb => {
            if (proverb.id === number){
                html += `<div class="text">${proverb.content}</div>`
                document.querySelector(".box").innerHTML = html;
            }
        }) 
    }
    showup();
})


