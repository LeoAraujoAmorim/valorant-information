function getQueryParams() {
    const queryString = window.location.search;

    const queryParams = new URLSearchParams(queryString);


    const params = {};

    for (const [key, value] of queryParams) {
        params[key] = value;

    }

    return params;
    
}


async function setAgents() {
    const agentParam = getQueryParams();
    const agentData = await fetch(`https://valorant-api.com/v1/agents/${agentParam.agentId}`)
    const response = await agentData.json()


    imgAgents(response.data);
    setDescription(response.data);
    setTitle(response.data);
    setAbilities(response.data.abilities);
}




function imgAgents(imgAgents) {
    const img = document.querySelector('#imgAgent');

    img.setAttribute('src', imgAgents.fullPortrait);
    img.style.backgroundImage = `url(https://media.valorant-api.com/agents/${imgAgents.uuid}/background.png)`;
}



function setAbilities(icon) {

    icon.map(abilitie => {
        if (abilitie.displayIcon) {
            const ul = document.querySelector('#abilities-info');
            const img = document.createElement('img');
            const list = document.createElement('li');
            const bloco = document.createElement('div');
            const titleAb = document.createElement('h2');
            const descripAb = document.createElement('p');


            bloco.classList.add("bloco-habilidades")
            img.setAttribute('src', abilitie.displayIcon);

            img.classList.add('imgAbilities')
            titleAb.innerText = abilitie.displayName;
            descripAb.innerText = abilitie.description;

            ul.appendChild(bloco);
            bloco.appendChild(list);
            list.appendChild(img);
            list.appendChild(titleAb);
            list.appendChild(descripAb);
        }

    })


}



function setDescription(description) {
    const desc = document.querySelector('.agentDescription');
    const p = document.createElement('p');

    desc.appendChild(p);


    p.innerText = description.description;
}

function setTitle(nameAgent) {
    const title = document.querySelector('#agentsTitle');

    title.innerText = nameAgent.displayName;

}



setAgents()