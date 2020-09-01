var form = document.getElementById('addForm');
var itemList = document.querySelector('#items');
var filter = document.querySelector('#filter');


//form submit event
form.addEventListener('submit', addItem);
itemList.addEventListener('click' , removebtn);
//Add eventlistener to filter
filter.addEventListener('keyup', filterItem);
// add item function
function addItem(e){
    e.preventDefault();

    // Grab the input VALUE of the submit form and attach it to the new li that we should create
    var newItem = document.querySelector('#item').value;
    
    // Create New LI Element 
    var li = document.createElement(li);
    // add a class name to new LI
    li.className="list-group-item";
    //console.log(li)
     // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);

    // attach the delete button

    // create new Delete Button
    var deleteBtn = document.createElement('buttton');
    // Add class to new delete button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    // Append new text node to Delete btn
    deleteBtn.appendChild(document.createTextNode("X"));
    // Append new Delete Btn to li
    li.appendChild(deleteBtn);

    // Remove the del button

    
}

function removebtn(e){
    if (e.target.classList.contains("delete")) {
        if(confirm ("Are you sure"));
        var li = e.target.parentElement;
            itemList.removeChild(li);
    }
}

function filterItem(e){
    var text = e.target.value.toLowerCase();
    
     var items = itemList.getElementsByTagName('li');
  //convert to an Array
     Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;

    if(itemName.toLowerCase().indexOf(text) != -1){
    item.style.display= 'block';
    }else{
        item.style.display = 'none';
    }

}
     )};