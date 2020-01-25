// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response)
        cardMaker(response)
    })
    .catch(problem => {
        console.log(problem)
    })

const cardMaker = (response) => {
    let articlesArray = [];
    for (const key in response.data.articles) {
        response.data.articles[key].forEach(element => {
            articlesArray.push(element)
        })
    }
    console.log(articlesArray)
    let cardContainer = document.querySelector('.cards-container')
    articlesArray.forEach(element => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card')
        const headlineDiv = document.createElement('div');
        headlineDiv.classList.add('headline')
        headlineDiv.textContent = element.headline;
        const authorDiv = document.createElement('div');
        authorDiv.classList.add('author');
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img-container');
        const authorImg = document.createElement('img');
        authorImg.setAttribute('src', element.authorPhoto);
        const nameSpan = document.createElement('span');
        nameSpan.textContent = 'By '+element.authorName;
        cardContainer.appendChild(cardDiv);
        cardDiv.appendChild(headlineDiv);
        cardDiv.appendChild(authorDiv);
        authorDiv.appendChild(imgDiv);
        authorDiv.appendChild(nameSpan);
        imgDiv.appendChild(authorImg);
    })
    
}