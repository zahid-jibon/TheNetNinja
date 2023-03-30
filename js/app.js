
// How to convert a HTMLElement to an Array

// Array.from(HTMLElement)

var titles = document.getElementsByClassName('title');

Array.from(titles).forEach(function(item){
    console.log(item);
});


// querySelector


var books = document.querySelectorAll('#book-list li.namne');
// Here "name" = className and book-list = id name which we want to select


// **** //

// Delete

var list = document.querySelector('#book-list ul');

list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})


// Add
const addForm = document.forms['add-book'];

addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;


    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');


    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    li.appendChild(bookName);
    li.appendChild(deleteBtn);;
    list.appendChild(li);

})


// Search or filter somthing
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
    const term=e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title =book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term)!=-1){
            book.style.display='block';

        }else{
            book.style.display='none';
        }
    })
})




