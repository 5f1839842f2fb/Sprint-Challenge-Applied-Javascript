// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const dateSpan = document.createElement('span').textContent = ('SMARCH 28, 2019')
    const headerDiv = document.createElement('div').classList.add('header')
    const headerContainerDiv = document.querySelector('.header-container')
    .appendChild(headerDiv)
}
