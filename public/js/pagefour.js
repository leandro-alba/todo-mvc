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