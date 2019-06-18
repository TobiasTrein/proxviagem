const x = Math.floor(Math.random() * 250);
const url = "https://cors-anywhere.herokuapp.com/https://restcountries.eu/rest/v2/all";
var nome = document.getElementById("nomepais");
var bandeira = document.getElementById("bandeirapais");
fetch(url)
.then(response=>response.json())
.then(json=>{
    nome.innerHTML = json[x].translations.br;
    bandeira.innerHTML = "<img src="+json[x].flag+" class=\"d-block w-100\" alt=\"...\">";
})
//.then(json=>nome.innerHTML = json[x].translations.br)
//.then(json=>bandeira.innerHTML = "<img src="+json[x].flag+" class=\"d-block w-100\" alt=\"...\">")
.catch(error=>console.error(error))