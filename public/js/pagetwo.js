// const { deletePagetwo } = require("../../controllers/pagetwo")
// const { deleteTodo } = require("../../controllers/todos")

const deleteBtn = document.querySelectorAll('.del')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deletePagetwo)
})

async function deletePagetwo(){
    const pagetwoId = this.parentNode.dataset.id
    try{
        const response = await fetch('pagetwo/deletePagetwo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'pagetwoIdFromJSFile': pagetwoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}