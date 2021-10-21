document.body.innerHTML = `
<input type="text" name="search" id="one" placeholder = "Search"   size="50">
<button onclick ="search(one.value)"  class = "SearchBtn">Search</button>
<section class = "container"></section>`;

async function search(searchText) {
  const data = await fetch("https://api.nationalize.io/?name=" + searchText);
  const NationData = await data.json();

  const two = document.querySelector(".container");
  two.innerHTML += `
     <h2>Country Name: ${NationData.country[0].country_id}</h2>
     <h2>Country Probability: ${NationData.country[0].probability}</h2>
     <h2>Country Name: ${NationData.country[1].country_id}</h2>
     <h2>Country Probability: ${NationData.country[1].probability}</h2>`;
}
search();