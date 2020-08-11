// 1: Set the text of the <h1> element

const h1 = document.querySelector('h1');
h1.innerHTML = 'BLEEP!'

// 2: Set the color of the <h1> to a different color
h1.style.color = 'pink';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const desc = document.getElementsByClassName('desc');
desc[0].innerHTML = `Hey wha Blinpppedy <strong>BLOOP</strong> fa moo sah?`;

// 4: Set the class of the <ul> to 'list'
const ul = document.getElementsByTagName('ul')[0];
ul.className = 'list';

// 5: Create a new list item and add it to the <ul>
let li = document.createElement('li');
ul.appendChild(li);
let list = document.getElementsByClassName('list')[0];
let lastLi = list.lastElementChild;
lastLi.innerHTML = "BLARP BLOOP BLURP";

// 6: Change all <input> elements from text fields to checkboxes
const likid = list.children;
for (let i=0; likid.length; i++) {
  likid[i].firstChild.setAttribute('type','checkbox');  
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const extra = document.getElementsByClassName('extra')[0];
let button = document.createElement('button');
extra.appendChild(button);
button.textContent = 'Delete';

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
//const extraDiv = document.getElementsByClassName('extra')[0];
//extraDiv.addEventListener('click', (event) => { 
//  if(event.target.className === 'extra') {
//    
//  }
//});
