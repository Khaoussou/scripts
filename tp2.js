let blocGauche = document.querySelector(".leftDiv");
let blocDroit = document.querySelector(".rightDiv");
let blocButon = document.querySelector(".blocButon");

let tab = [ "Mon Premier" , "Mon Deuxieme" , "Mon Troisieme" , "Mon Quatrieme" ];

for( let i = 0 ; i < tab.length ; i ++ )
{
    let para = document.createElement("p");
    para.innerText = tab[i];
    blocGauche.appendChild(para);
    para.addEventListener("mouseover", function() 
    {
        para.setAttribute("over","vrai")
        console.log("over")
        let boutLef = document.querySelector(".boutLeft");
        boutLef.addEventListener("click", function()
        {
            if( para.getAttribute("over") == "vrai" )
            {
                    para.removeAttribute("over");
                    blocDroit.appendChild(para);
            }
        }
        )
        // para.removeEventListener("mouseover");
        
        let boutRight = document.querySelector(".boutRight");
        boutRight.addEventListener("click", function()
        {
            if( para.getAttribute("over") == "vrai" )
            {
                    para.removeAttribute("over");
                    blocGauche.appendChild(para);
            }
                
        }
        )
        // para.removeEventListener("mouseover");
    
    }
    )
    // para.addEventListener("mouseover", function()
    // {
    //     let boutRight = document.querySelector(".boutRight");
    //     boutRight.addEventListener("click", function()
    //     {
    //         blocGauche.appendChild(para);
    //     }
    //     )
    // }
    // )
}
