
const url = "https://valorant-api.com/v1/agents"


async function getAllPosts() {
  const response = await fetch(url);


  const data = await response.json();

  setAgents(data.data);



}

function setAgents(agents) {
  agents.map(agent => {
    
    if (agent.isPlayableCharacter) {
      const ul = document.querySelector('.names');
      const link = document.createElement('a');
      const list = document.createElement('li');
      const img = document.createElement('img')


      link.classList.add('links');
      list.classList.add('list-agents')
      link.setAttribute('href', `agentsInfo.html?agentId=${agent.uuid}`);
      img.setAttribute('src', `https://media.valorant-api.com/agents/${agent.uuid}/displayiconsmall.png`)
      img.classList.add('imgIcon');
      
      ul.appendChild(list);
      link.appendChild(img);
      list.appendChild(link);

  
    }

  })
}







getAllPosts()



