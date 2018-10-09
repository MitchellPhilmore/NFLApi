


async function getData(){

let url = '/api/roster'

let response = await fetch(url)
let jsonData = await resposne.json()

console.log(jsonData)
}

getData()