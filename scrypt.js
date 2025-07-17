
const myLibrary=[]


function Book(title, autor, pages, state){
    this.title=title
    this.autor=autor
    this.pages=pages
    this.state=state
    this.id= crypto.randomUUID()

    this.sayInfo=function(){
        console.log(title+" by "+autor+", have "+pages+" pages and you "+state+"ed. ID: "+this.id)
    }

    this.color=function(){
        const letters = '0123456789ABCDEF'
        let color='#'
        for(i=0;i<6; i++){
            color +=letters[Math.floor(Math.random()*16)]
        }

        return color
    }
}

function addBookToLibrary(...newBook){
    myLibrary.push(...newBook)
}


const harryPotter = new Book("Harry Potter", "J.K Rowling", 1000, "finish")
const petterPan = new Book("Petter Pan", "uknow", 500, "not finish")
const alladin = new Book("Alladin", "Yazmine", 300, "finish")
const bible = new Book("The Bible", "Shuk Norris", NaN, "fill")
const fidel = new Book("Fidel Biography", "Alejandro Indigno", 1, "kill")
const love = new Book("The love book", "Yazmine", 100, "finish")


addBookToLibrary(harryPotter,petterPan,alladin,bible,fidel,love)




const newBook=document.querySelector('#new-book')
const submit=document.querySelector('#submit-btn')
const blurrElements=document.querySelector('.blurr-elements');
const form=document.querySelector('form')


newBook.addEventListener('click', ()=>{
    blurrElements.classList.add('blurr')
    form.classList.add('visible')
})



submit.addEventListener('click', function (e){
    e.preventDefault();

    const title=document.querySelector('#book-title-input').value;
    const autor=document.querySelector('#autor-input').value;
    const pages=document.querySelector('#pages-input').value;
    const state=document.querySelector('#checkbox').checked;

    
    const addNewBoock= new Book(title,autor,pages, state)
    addBookToLibrary(addNewBoock)

    mostrarLibros(myLibrary)

    blurrElements.classList.remove('blurr')
    form.classList.remove('visible')

    document.querySelector('#book-title-input').value=""
    document.querySelector('#autor-input').value=""
    document.querySelector('#pages-input').value=""
    document.querySelector('#checkbox').checked=false

})

const greedLibrary=document.querySelector('.greed-library')

function mostrarLibros(myLibrary){
    greedLibrary.innerHTML='';

    myLibrary.forEach(book => {
    
        
        
        const bookCard=document.createElement('div')
        bookCard.className= 'book-card'
        bookCard.innerHTML= `
        <h3 style= "display:flex; background-color: ${book.color()}; color: aliceblue; min-heigth= 100px">${book.title}</h3>
        <h4>From ${book.autor} have ${book.pages} pages</h4`;

        greedLibrary.appendChild(bookCard)

    });
}

mostrarLibros(myLibrary)