const deleteBtn = document.querySelectorAll('.del')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deletePagethree)
})

async function deletePagethree(){
    const pagethreeId = this.parentNode.dataset.id
    try{
        const response = await fetch('pagethree/deletePagethree', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'pagethreeIdFromJSFile': pagethreeId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}