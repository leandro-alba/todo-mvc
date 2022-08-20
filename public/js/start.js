//const { deleteStart } = require("../../controllers/start")

const deleteBtn = document.querySelectorAll('.del')
//const startItem = document.querySelectorAll('span.not')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteStart)
})

// Array.from(startItem).forEach((el)=>{
//     el.addEventListener('click', )
// })

async function deleteStart(){
    const startId = this.parentNode.dataset.id
    try{
        const response = await fetch('start/deleteStart', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'startIdFromJSFile': startId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}