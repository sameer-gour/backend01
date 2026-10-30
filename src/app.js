// server bana hota hai yha py 


const express = require('express')

const app  = express()
app.use(express.json())

const notes = []

app.post('/notes', (req,res)=>{
    notes.push( req.body);

    res.status(201).json({
        Message:"note created sucffesfuly"
    })
    
})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        Message:"note fatuch suceesfully",
        notes:notes
    })
})

app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index
    delete notes[index]
    res.status(200).json({
        Message:"Delet successfull"

    })
})

app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index
    const title = req.body.title
    notes[index].title = title

    res.status(200).json({
        Message:"updated successfully"
    })
    
})
module.exports = app
