const url = "https://valorant-api.com/v1/maps"

async function getAllPosts() {

    try {
        const response = await fetch(url);

        const data = await response.json();

        setMaps(data.data);
    }
    catch {
        console.log('errei, fui muleque!');
    }


}

function setMaps(mps) {
    mps.map(mp => {
        const divMp = document.querySelector('.maps-select');
        const linkMp = document.createElement('a');
        const imgMp = document.createElement('img');
        const nameMp = document.createElement('p');

        linkMp.setAttribute('href', `/maps/mapPage.html?mapId=${mp.uuid}`)
        linkMp.classList.add('menuLink');
        imgMp.setAttribute('src', `https://media.valorant-api.com/maps/${mp.uuid}/splash.png`);

        nameMp.innerText = mp.displayName;

        divMp.appendChild(linkMp);
        linkMp.appendChild(imgMp);
        linkMp.appendChild(nameMp);


    })
}

getAllPosts();