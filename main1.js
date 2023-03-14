let blocGauch = document.querySelector(".blocGauche");
let blocDroit = document.getElementsByClassName(".blocDroit");
let blocButton = document.getElementsByClassName(".blocBouton");


let elements = [ "Mon Premier" , "Mon Deuxieme" , "Mon Troisieme" , "Mon Quatrieme" ]
// console.log(blocGauch[i]);

    for( let i = 0 ; i < elements.length ; i++ )
    {
        let para = document.createElement("p");
        para.innerText = elements[i];
        blocGauch.appendChild(para);
    }
for( let i = 0 ; i < tab.length ; i ++ )
{
    let para = document.createElement("p");
    para.innerText = tab[i];
    blocGauche.appendChild(para);
    para.addEventListener("mouseover", function() 
    {
        let boutLef = document.querySelector(".boutLeft");
        boutLef.addEventListener("click", function()
        {
            blocDroit.appendChild(para);
        }
        )
    }
    )
    para.addEventListener("mouseover", function()
    {
        let boutRight = document.querySelector(".boutRight");
        boutRight.addEventListener("click", function()
        {
            blocGauche.appendChild(para);
        }
        )
    }
    )
}