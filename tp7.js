let input = document.querySelector('input')
// console.log(input);
const blocImage = document.querySelector('.blocImage')
let IMGPATH = "https://image.tmdb.org/t/p/w1280";
let tabFilm = []

function createElement(elements,attributs,elementContent)
{
    const element = document.createElement(elements);
    for (const cle in attributs) 
    {
        element.setAttribute(cle,attributs[cle])
    }
    element.textContent = elementContent;
    return element;
}

function createImage(url,titre,vote,decs)
{
    const image = createElement('div',{class:'image'})
    const img = createElement('img',{src:url,class:'img'})
    const infoImage = createElement('div',{class:'infoImage'})
    const title = createElement('div',{class:'title'},titre)
    const votes = createElement('button',{class:'vote'},vote)
    
    infoImage.append(title,votes);
    image.append(img,infoImage);
    blocImage.appendChild(image);

    return image
}
// createImage("trees-g445baa572_1920.jpg","yrez",5)

async function getMovies(url)
{
    let movies = await fetch(url);
    let data = await movies.json();
    // console.log(data.results);
    return data.results
}

const movie = getMovies("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")
movie.then(data => 
    {
        // console.log(data);
        for (let i = 0; i < data.length; i++) 
        {
            // console.log(data[i]);
                const url = IMGPATH + data[i].poster_path;
                const titre = data[i].original_title;
                const vote = data[i].vote_average;
                const desc = data[i].overview;
                const film = createImage(url,titre,vote,desc)
                tabFilm.push(film);
                blocImage.append(film);
        } 
    
    })
    
// console.log(tabFilm);

input.addEventListener('input',(e)=>
{
    // console.log(e);
    const searchElements = e.target.value;
    filterElements(searchElements,tabFilm);
    // console.log(searchElements);
})

function filterElements(caracter , elements)
{
    for (let i = 0 ; i < elements.length ; i++) 
    {

        if(elements[i].textContent.toLowerCase().includes(caracter))
        {
            elements[i].style.display = 'block';
        }
        else
        {
            elements[i].style.display = 'none';
        }
    }
   
}






























































































































    //
// decompte(10) Assynchrone 

// function decompte(n)
// {
//     // console.log(n)
//     const t = setInterval(()=>
//     {
//         n--
//         // console.log(n);
//         if( n === 0)
//             clearInterval(t)
//     },1000 )
// }

// Les promises en js prennent en parametre une fonction qui aura deux parametres 'resolve = true et reject = false'
// Les methodes d'utilisation sur les promise sont : 'then(callbck) si c'est vrai' , 'catch(callback) si c'est faux' et 'finally(callback) dans tous les cas'

// const p = new Promise((resolve, reject) => 
// {
//     resolve(4)
// }
// )


