function getQueryParams() {
    const queryString = window.location.search;

    const queryParams = new URLSearchParams(queryString);


    const params = {};

    for (const [key, value] of queryParams) {
        params[key] = value;

    }

    return params;

}


async function setMap() {
    const mpParam = getQueryParams();

    const mapData = await fetch(`https://valorant-api.com/v1/maps/${mpParam.mapId}`)
    const response = await mapData.json();
    console.log(response);
    setBg(response.data)
    setImgMap(response.data)
}


function setBg(mps) {
    const bg = document.querySelector('.bg-map');
    if (!mps.premierBackgroundImage) {
        bg.setAttribute('background', `https://media.valorant-api.com/maps/${mps.uuid}/splash.png`)
    } else {
        bg.setAttribute('background', `https://media.valorant-api.com/maps/${mps.uuid}/premierbackgroundimage.png`)
    }
}


function setImgMap(mps) {
    const divMap = document.querySelector('.show-map');
    const titleMap = document.createElement('h1');
    const showMap = document.createElement('img');
    const coordinates = document.createElement('p')

    coordinates.innerText = mps.coordinates
    titleMap.innerText = mps.displayName
    showMap.setAttribute('src', `https://media.valorant-api.com/maps/${mps.uuid}/displayicon.png`)

    divMap.appendChild(titleMap)
    divMap.appendChild(coordinates);
    divMap.appendChild(showMap);

}

setMap()