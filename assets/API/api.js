export default async function getAllPosts() {
    const url = "https://valorant-api.com/v1/agents"
    const response = await fetch(url);
  
  
    const data = await response.json();

    return data.data
}
getAllPosts()