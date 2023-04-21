let predictBtn = document.querySelector("#predict");
let name = document.getElementById("name");
let gender = document.querySelector(".genderName");
let probability = document.querySelector(".probability");

function predictName() {
    fetch(`https://api.genderize.io?name=${name.value}`)
    .then( res => res.json())
    .then( data => { 
     gender.innerText = `${name.value}'s gender: ${data.gender}`;
     probability.innerText = `Probability: ${data.probability}`;  
     }
        )
}

predictBtn.addEventListener("click", predictName);
