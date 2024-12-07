

function fetchMusic(query, id) {

    let section = document.querySelector(`#${id}`);
    let row = section.querySelector(`#${id}Section`)


    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query) // trasforma i dati in un array
        .then((raw) => raw.json())   //modo per formattare le risposta del server in maniera più corretta;
        .then((res) => {  // `res` sta per `response` e rappresenta i dati trasformati di `raw.json`, risposta in questo caso del fetch;


            let singles = res.data; // qua dico di crearmi una variabile che è uguale ai dati di `res` 
            console.log(singles);
            section.classList.remove("d-none")


            for (let i = 0; i < singles.length; i++) {

                let element = singles[i]
                row.innerHTML += `<div class = "col personal" >
                                    <div class="card justify-content-center">
                                    <img src="${element.album.cover_xl}" class="card-img-top" alt="...">
                                         <div class="card-body">
                                            <h5 class="card-title">${element.title}</h5>
                                            <p class="card-text">${element.artist.name}</p>
                                            <p class="card-text">${element.album.title}</p>
                                        </div>
                                      </div>
                                  </div>`

            }

        })
        .catch((err) => console.log(err));


}

fetchMusic("eminem", "eminem");
fetchMusic("metallica", "metallica");
fetchMusic("queen", "queen");


function lista() {
    
    let query = "eminem"
    let albumCol = document.getElementById("album-collection")

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)
        .then((raw) => raw.json())
        .then((res) => {

            const singles = res.data;


            for (let x = 0; x < singles.length; x++) {

                let el = singles[x]
                const par = document.createElement("p")
                par.innerText = `${el.album.title}`
                par.className = "p-modal"
                albumCol.appendChild(par)

                console.log(par);


            }
        })

        .catch((err) => {
            console.log("Errore durante il fetch:", err);

            const errorMes = document.createElement("p")
            errorMes.textContent = "Errore durante il caricamento degli album";
            albumCol.appendChild(errorMes);

        });

}


function lista2() {
    
    let query = "metallica"
    let albumCol = document.getElementById("album-collection2")

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)
        .then((raw) => raw.json())
        .then((res) => {

            const singles = res.data;


            for (let j = 0; j < singles.length; j++) {

                let el = singles[j]
                const par = document.createElement("p")
                par.innerText = `${el.album.title}`
                par.className = "p-modal"
                albumCol.appendChild(par)

                console.log(par);


            }
        })

        .catch((err) => {
            console.log("Errore durante il fetch:", err);

            const errorMes = document.createElement("p")
            errorMes.textContent = "Errore durante il caricamento degli album";
            albumCol.appendChild(errorMes);

        });

}



function lista3() {
    
    let query = "queen"
    let albumCol = document.getElementById("album-collection3")

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)
        .then((raw) => raw.json())
        .then((res) => {

            const singles = res.data;


            for (let y = 0; y < singles.length; y++) {

                let el = singles[y]
                const par = document.createElement("p")
                par.innerText = `${el.album.title}`
                par.className = "p-modal"
                albumCol.appendChild(par)

                console.log(par);


            }
        })

        .catch((err) => {
            console.log("Errore durante il fetch:", err);

            const errorMes = document.createElement("p")
            errorMes.textContent = "Errore durante il caricamento degli album";
            albumCol.appendChild(errorMes);

        });

}