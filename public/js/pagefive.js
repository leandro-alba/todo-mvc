const deleteBtn = document.querySelectorAll('.del')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deletePagefive)
})

async function deletePagefive(){
    const pagefiveId = this.parentNode.dataset.id
    try{
        const response = await fetch('pagefive/deletePagefive', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'pagefiveIdFromJSFile': pagefiveId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}