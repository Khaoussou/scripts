let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");
let b4 = document.querySelector(".b4");
let bout = document.querySelector(".bout");
let affiche = document.querySelector(".affiche");
let tab = [ "Vous avez reussi !" , "Attention chien mechant" , "Veuillez changer de direction  svp" , "Votre pass internet est inferieur à 5MO, veuillez recharger"]


// tab.className = "tab"
    b1.addEventListener("click", function () 
    {
        let msg = document.createElement("div");
        msg.innerText = tab[0];
        msg.className = "msg";
        affiche.appendChild(msg);
        msg.style.backgroundColor = "green";

    }
    )
    b2.addEventListener("click", function () 
    {
        let msg = document.createElement("div");
        msg.innerText = tab[1];
        msg.className = "msg";
        affiche.appendChild(msg);
        msg.style.backgroundColor = "red";
       
    }
    )
    b3.addEventListener("click", function () 
    {
        let msg = document.createElement("div");
        msg.innerText = tab[2];
        msg.className = "msg";
        affiche.appendChild(msg);
        msg.style.backgroundColor = "orange";

    }
    )
    b4.addEventListener("click", function () 
    {
        let msg = document.createElement("div");
        msg.innerText = tab[3];
        msg.className = "msg";
        affiche.appendChild(msg);
        msg.style.backgroundColor = "rgb(0, 195, 255)";
        
    }
    )
