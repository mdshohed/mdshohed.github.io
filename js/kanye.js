const loadQuotes = () => {
  fetch('https://api.kanye.rest/')
    .then( res => res.json())
    .then( data => displayQuotes(data))
}
const displayQuotes = (quotes) =>{
  const showQuotes = document.getElementById('showQuotes');
  showQuotes.innerText = quotes.quote; 
  // showQuotes.innerText = ''; 
  // const div = document.createElement('div');
  // div.innerHTML = `
  //   <p>${quotes.quote}</p>
  // `; 
  // showQuotes.appendChild(div); 
  console.log(quotes.quote); 
}