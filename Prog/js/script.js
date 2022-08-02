import {films_data} from "./data.js";
let films = films_data


const edit_mode_btn = document.getElementById('edit_mode_btn').onclick = function (){
    const edit_div = document.getElementsByClassName('edit_div')
    for (let i = 0; i < edit_div.length; i++) {
        if (edit_div[i].style.cssText == "display: flex;"){
            edit_div[i].style.cssText = "display: none;"
        }else{
            edit_div[i].style.cssText = "display: flex;"
        }
    }
}

const sort_mode_btn = document.getElementById('sort_mode_btn').onclick = function (){
    let filter = document.getElementById('filter')
    let options = document.getElementById('options')
    if(filter.style.cssText === 'height: 60px;'){
        options.style.cssText = 'display: none;'
        filter.style.cssText = 'height: 0px;'
    }else {
        filter.style.cssText = 'height: 60px;'
        setTimeout(()=>{options.style.cssText = 'display: flex;'}, 300)
    }
}

const search_query = document.getElementById('search_query').oninput = (e) => {
    let new_films = []
    for (let i = 0; i < films.length; i++) {
        if(!films[i].actors.toString().toLowerCase().includes(e.target.value.toLowerCase())){
            new_films.splice(i, 1)
            clearFilms()
            addFilms(new_films)
        }
        if(films[i].actors.toString().toLowerCase().includes(e.target.value.toLowerCase())){
            new_films.push(films[i])
            clearFilms()
            addFilms(new_films)
        }
    }
}

const sort_by_year = document.getElementById('sort_by_year').onclick = function (){
    films = films.sort(function (a, b){
        return b.year - a.year
    })
    clearFilms()
    addFilms(films)
}

const sort_by_rate = document.getElementById('sort_by_rate').onclick = function (){
    films = films.sort(function (a, b){
        return b.score - a.score
    })
    clearFilms()
    addFilms(films)
}

function clearFilms(){
    let old_film_div = document.getElementsByClassName("frame_film")
    for (let i = 0; i < old_film_div.length; i++) {
        old_film_div[i].remove()
        i--;
    }
}

function addFilms(films) {
    let k = 5;
    let container_div = document.getElementById('container_div');
    for (let i = 0; i < films.length; i++) {

        container_div.innerHTML += `
        <div id='film_${films[i].id}' class="frame_film">
            <div class="team-grid__member hover">
                <div class="film__info">
                    <div class="center-vert-content">
                        <h3 class="film__name">${films[i].name}</h3>
                        <p class="film__type">${films[i].type}</p>
                        <a id="myBtn${k}" class="read_more">Read more</a>
                    </div>
                </div>
                <img class="img_film" src='${films[i].img}'>
            </div>
            <div class="edit_div">
                <a onclick="" class="delete_btn" style="background: #D68D2C">Edit</a>
                <a id="del_${films[i].id}" name="del_btn" onclick="" class="del_func delete_btn">Delete</a>
            </div>
        </div>
    `
    k++;
    }
}

addFilms(films)

// const deleteBtns = document.getElementsByClassName('del_func')
// for(let i = 0; i < deleteBtns.length; i++) {
//     deleteBtns[i].addEventListener('click', (e) => {
//         console.log(e.target.id)
//     })
// }


addEventListener('click', (e) =>{
    if(e.target.name === 'del_btn'){
        let id_div = 'film_' + e.target.id.slice(4)
        const film_div = document.getElementById(id_div).remove()
        for (const filmDivKey in films) {
            if (films[filmDivKey].id == e.target.id.slice(4)){
                films.splice(filmDivKey, 1)
            }
        }
    }
})

// document.getElementById('film_${films[i].id}').remove()
for(let i = 5;i<8;i++) {
    var modal = document.getElementById('myModal');


    var btn = document.getElementById(`myBtn${i}`);


    var span = document.getElementsByClassName("close")[0];


    btn.onclick = function () {
        modal.style.display = "block";
    }


    span.onclick = function () {
        modal.style.display = "none";
    }


    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}
