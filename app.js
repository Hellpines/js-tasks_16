const items = [
    { id: 1, category: 'Фрукты', name: 'Яблоко', description: 'Сладкое и сочное яблоко.' },
    { id: 2, category: 'Фрукты', name: 'Банан', description: 'Полезный и питательный банан.' },
    { id: 3, category: 'Овощи', name: 'Морковь', description: 'Свежая и хрустящая морковь.' },
    { id: 4, category: 'Овощи', name: 'Огурец', description: 'Сочный и освежающий огурец.' },
    { id: 5, category: 'Ягоды', name: 'Клубника', description: 'Сладкая и ароматная клубника.' },
    { id: 6, category: 'Ягоды', name: 'Черника', description: 'Полезная и вкусная черника.' }
];

const fruits = document.querySelector('.fruits')
const veg = document.querySelector('.veg')
const berry = document.querySelector('.berry')
const list = document.querySelector('.list')
const info = document.querySelector('.info')
const name = document.querySelector('h2')
const desc = document.querySelector('.desc')
const category = document.querySelector('.category')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')

function events(current_category){
    const arr = items.filter(el => (el.category == current_category))
    list.innerHTML = '';
    arr.forEach(el => {
        list.innerHTML += `<div class = 'item'>
        <h2>${el.category}</h2>
        <p>${el.name}</p>
        </div>`
    })
    document.querySelectorAll('.item').forEach(el =>{ el.addEventListener('click', (event)=>{
        modal.style.display = 'block'
        const arr = items.filter(elem => (elem.name == el.children[1].textContent));
        name.textContent = arr[0].name;
        desc.textContent = arr[0].description;
        category.textContent = arr[0].category;
        event.stopPropagation()
    })
    })
}

fruits.addEventListener('click', () =>{
    events('Фрукты')
})

veg.addEventListener('click', () =>{
    events('Овощи')
})

berry.addEventListener('click', () =>{
    events('Ягоды')
})

close.addEventListener('click', () => {
    modal.style.display = 'none';
})

// document.querySelector('body').addEventListener('click', (event) =>{
//     if(event.target == modal){
//         // modal.style.display = 'none';
//         // flag = false
//         event.stopPropagation()
//     }
// })

document.addEventListener('click', (event) => {
    if (!modal.contains(event.target)) {
        modal.style.display = 'none';
    }
});
