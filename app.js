const addForm = document.querySelector('#addForm');
const newUl = document.querySelector('#items');
addForm.addEventListener('submit', runEvent);

function runEvent(e){
    e.preventDefault();
    const inputText = document.querySelector('#item').value;
    const newLi = document.createElement('li');
    newLi.className = "list-group-item";
    newLi.appendChild(document.createTextNode(inputText));
    newUl.appendChild(newLi);

// create new delete button and attach it ti new ul

    const deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right delete"
    // var deleteText =deleteBtn.createTextNode = "X";
    deleteBtn.appendChild(document.createTextNode("X"));
    newLi.appendChild(deleteBtn);
    newUl.appendChild(newLi);

//    console.log(li);
}

// ANALISE to delete button
//red del button is a part of li and li is part of Ul'
// therefore to delete "del button" we should be able to 
//remove li and ul
    newUl.addEventListener('click', remove);
function remove(e){
    const newLi = document.createElement('li');
    const main = document.querySelector('#main')
    // console.log(e.target)
        if(e.target.classList.contains('delete')){
            if(confirm("are you sure"));
           var li = e.target.parentElement ;
           newUl.removeChild(li);
        }
    }

//******************************* */

// Analasys of filter item
//filter item box functionality is to match the words 
//inside the "item lister" box 
//therefor for the first step we have to 

//1.to grab the value of the "item Lister"box 
//and convert it to lowercase.

//2.check to find out the type of the ul and li to not be 
//a HTML collection if it is have to convert it to Array.

//3.compare the value of the"item Lister" with 
//the value text of the "items".
const filterBox = document.querySelector('#filter');

filterBox.addEventListener('keyup', filterFunction)

function filterFunction(e){
    var filterText = e.target.value.toLowerCase();
    const items = newUl.querySelectorAll('li');

 items.forEach(function(item){
     var itemName = item.firstChild.textContent;
     if (itemName.toLowerCase().indexOf(filterText) != -1){
         item.style.display = 'block';

     }else{
         item.style.display = 'none';     }

 }
          
 )};
