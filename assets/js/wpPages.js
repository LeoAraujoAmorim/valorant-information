
const carousel = document.querySelector('.carousel');

let isDragStart = false, prevPagex, prevScrollLeft;



function getQueryParams() {
    const queryString = window.location.search;


    const queryParams = new URLSearchParams(queryString);

    const params = {};

    for (const [key, value] of queryParams) {
        params[key] = value;
    }

    return params;
}

async function setWeapons() {
    const wpParam = getQueryParams();
    const weaponData = await fetch(`https://valorant-api.com/v1/weapons/${wpParam.weaponId}`)
    const response = await weaponData.json();
    setSkins(response.data.skins)
    setDefaultSkin(response.data);


}




const dragStart = (e) => {
    isDragStart = true;
    prevPagex = e.pageX
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPagex;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}





function setSkins(skins) {
    skins.map(skin => {
        if (skin.contentTierUuid) {
            const div = document.querySelector('#skins')
            const img = document.createElement('img')
            img.setAttribute('src', `https://media.valorant-api.com/weaponskins/${skin.uuid}/displayicon.png`)
            img.classList.add('imgIcon');
            div.appendChild(img);



            const divImg = document.getElementById('img-skins');
            const divName = document.getElementById('name-skins')
            const imgSkin = document.createElement('img');
            const skinName = document.createElement('p');

            img.addEventListener("click", () => {
                imgSkin.classList.add('weapon-screen')
                imgSkin.setAttribute('src', `https://media.valorant-api.com/weaponskinchromas/${skin.chromas[0].uuid}/fullrender.png`)

                divImg.appendChild(imgSkin);
                divName.appendChild(skinName);
                skinName.innerText = skin.displayName;

                if (divImg.children.length > 1) {
                    divImg.replaceChildren(imgSkin);

                }
                if (divName.children.length > 1) {
                    divName.replaceChildren(skinName);

                }
            });
        }


    })
}


function setDefaultSkin(skins) {

    const divDefault = document.getElementById('img-skins');
    const skinName = document.createElement('p');
    const imgDefault = document.createElement('img');
    const divName = document.getElementById('name-skins')
    imgDefault.classList.add('weapon-screen')
    imgDefault.setAttribute('src', `https://media.valorant-api.com/weapons/${skins.uuid}/displayicon.png`)
    divDefault.appendChild(imgDefault);
    divName.appendChild(skinName);
    skinName.innerText = skins.displayName;


}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);

setWeapons()