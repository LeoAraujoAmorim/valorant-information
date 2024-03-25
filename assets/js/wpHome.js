const url = "https://valorant-api.com/v1/weapons"

async function getAllPosts() {

    try {
        const response = await fetch(url);

        const data = await response.json();

        setWeapons(data.data);
    }
    catch {
        console.log('errei, fui muleque!');
    }


}


function setWeapons(wp) {

    wp.map(weapon => {
        if (weapon.category === "EEquippableCategory::Sidearm") {
            createBox('.pistol', weapon);

        }
        if (weapon.category === "EEquippableCategory::SMG") {
            createBox('.smg', weapon);
        }
        if (weapon.category === "EEquippableCategory::Rifle") {

            createBox('.rifle', weapon);

        }
        if (weapon.category === "EEquippableCategory::Sniper") {

            createBox('.sniper', weapon);

        }
        if (weapon.category === "EEquippableCategory::Shotgun") {

            createBox('.shotgun', weapon);

        }
        if (weapon.category === "EEquippableCategory::Heavy") {

            createBox('.heavy', weapon);

        }
        if (weapon.category === "EEquippableCategory::Melee") {

            createBox('.melee', weapon);

        }






    })



}


function createBox(param, weapon) {
    const box = document.querySelector(param);
    const link = document.createElement('a');
    const img = document.createElement('img');

    if(param === '.pistol') {
        img.classList.add('pistol-box');
    }
    
    
    link.setAttribute('href', `/${weapon.displayName}`);
    img.setAttribute('src', `https://media.valorant-api.com/weapons/${weapon.uuid}/displayicon.png`)
    
    box.appendChild(link);
    link.appendChild(img);
}




getAllPosts()



/*
EEquippableCategory::Rifle
EEquippableCategory::Sniper
EEquippableCategory::SMG
EEquippableCategory::Melee
EEquippableCategory::Shotgun
EEquippableCategory::Heavy

*/