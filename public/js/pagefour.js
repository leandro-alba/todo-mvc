const deleteBtn = document.querySelectorAll('.del')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deletePagefour)
})

async function deletePagefour(){
    const pagefourId = this.parentNode.dataset.id
    try{
        const response = await fetch('pagefour/deletePagefour', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'pagefourIdFromJSFile': pagefourId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
// let button = document.querySelectorAll('.bbb')
// button.addEventListener('click', ()=>{
//     box.style.transform = 'translatex(1000px)';
//     box.style.transition = 'transform 1s ease-in-out';

//     requestAnimationFrame(()=>{
//         requestAnimationFrame(()=>{
//             box.style.transform = 'translateX(500px)'
//         })
//     })
// })//from jake Archibald: in the loop video timestamp-> 22:10

// document.body.addEventListener('DOMNodeInserted', ()=>{
//     console.log('Stuff added to <body>!')
// })