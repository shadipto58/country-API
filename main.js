

const loadQuote = ()=> {
	fetch('https://api.kanye.rest')
	.then(res => res.json())
	.then(data => displayQuote(data))
}

const displayQuote = (data)=> {
	const quote = document.getElementById('quote');

	quote.innerText = data.quote; 

}


const loadFriend =() => {
	fetch('https://randomuser.me/api/?results=15')
	.then(res => res.json())
	//.then(data => displayFriends(data))
}
loadFriend();

/*const displayFriends = (data) => {
	const div = document.getElementById('friends');

	const friends = data.results;

	for(let friend of friends){
		//console.log(friend)
		const img = document.createElement('img');
		img.src = `${friend.picture.medium}`;
		const p = document.createElement('p');
		
		p.innerText = `Name: ${friend.name.title} ${friend.name.first} ${friend.name.last}`;
		
		div.appendChild(p);
		div.appendChild(img);
	}
}*/

const loadCountry =() => {
	fetch('https://restcountries.com/v3.1/all')
	.then(res => res.json())
	.then(data => displayCountries(data))
}
loadCountry()

const displayCountries = (countries)=> {
	//console.log(countries)

	const countryHolder = document.getElementById('country');
	for(let country of countries){
		//console.log(country)

		const div = document.createElement('div');
		div.classList.add('country')

		div.innerHTML =`
		<h2>${country.name.common}</h2>
		<p>Capital: ${country.capital}</p>
		<img src="${country.flags.png}">
		<button onclick="loadDetails('${country.name.common}')">Show Details</button>
		`;

		countryHolder.appendChild(div);
	}
}

const loadDetails = (name) => {
	console.log(name)
	fetch(`https://restcountries.com/v3.1/name/${name}`)
	.then(res => res.json())
	.then(data => displayDetails(data[0]))
}

const displayDetails = (country) => {
	const details =  document.getElementById('details');

	details.innerHTML =`
	<h2>${country.name.common}</h2>
	<p>Capital: ${country.capital}</p>
	<p>Capital: ${country.population}</p>
	<p>Capital: ${country.region}</p>
	<img src="${country.flags.png}">

	`;
}