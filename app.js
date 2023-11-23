
const crud = require('./crud')

const express = require('express')
const body_parser = require('body-parser')

const app = express()
const port = 3000
app.use(body_parser.json())

// GET 
app.get('/api/users', (request, response) => {
    //console.log(request);
    console.log('someone did a get for /api/users URL');
    //response.send('<h1 style="color:blue">hi</h1>')
    response.json(crud.get())
})
// GET by ID
app.get('/api/users/:id', (request, response) => {
    const user_id = parseInt(request.params.id)
    const user = crud.get_by_id(user_id)
    if (user) { 
        response.json(user)
    }
    else {
        response.status(404).json({ "error": `cannot find user with id ${user_id}`})
    }
})
// POST
app.post('/api/users', (request, response) => {
    const new_user = request.body
    const updated_user = crud.post(new_user)
    response.status(201).json(updated_user)
    
})
// PUT
app.put('/api/users/:id', (request, response) => {
    const updated_user_req = request.body
    const user_id = parseInt(request.params.id)
    const updated_or_created_user = crud.put(user_id, updated_user_req)
    response.json(updated_or_created_user)
})
// PATCH
app.patch('/api/users/:id', (request, response) => {
    const updated_user_req = request.body
    const user_id = parseInt(request.params.id)
    const updated_user = crud.patch(user_id, updated_user_req)
    if (updated_user) { 
        response.json(updated_user)
    }
    else {
        response.status(404).json({ "error": `cannot find user with id ${user_id}`})
    }
})

// DELETE
app.delete('/api/users/:id', (request, response) => {
    const user_id = parseInt(request.params.id)
    const deleted = crud.delete_by_id(user_id)
    if (deleted) { 
        response.status(204).json({ "status": `user with id = ${user_id} deleted`})
    }
    else {
        response.status(404).json({ "error": `cannot find user with id ${user_id}`})
    }
})

// GET 
app.get('/api/photos', (request, response) => {
    //console.log(request);
    console.log('someone did a get for /api/users URL');
    //response.send('<h1 style="color:blue">hi</h1>')
    response.json(crud.get_photos())
})
// GET by ID
app.get('/api/photos/:id', (request, response) => {
    const photo_id = parseInt(request.params.id)
    const photo = crud.get_by_id_photo(photo_id)
    if (photo) { 
        response.json(photo)
    }
    else {
        response.status(404).json({ "error": `cannot find photo with id ${photo_id}`})
    }
})
// POST
app.post('/api/photos', (request, response) => {
    const new_photo = request.body
    const updated_photo = crud.post_photo(new_photo)
    response.json(updated_photo)
})
// PUT
app.put('/api/photos/:id', (request, response) => {
    const updated_photo_req = request.body
    const photo_id = parseInt(request.params.id)
    const updated_or_created_photo = crud.put_photo(photo_id, updated_photo_req)
    response.json(updated_or_created_photo)
})
// PATCH
app.patch('/api/photos/:id', (request, response) => {
    const updated_photo_req = request.body
    const photo_id = parseInt(request.params.id)
    const updated_photo = crud.patch_photo(photo_id, updated_photo_req)
    if (updated_photo) { 
        response.json(updated_photo)
    }
    else {
        response.status(404).json({ "error": `cannot find photo with id ${photo_id}`})
    }
})

// DELETE
app.delete('/api/photos/:id', (request, response) => {
    const photo_id = parseInt(request.params.id)
    const deleted = crud.delete_by_id_photo(photo_id)
    if (deleted) { 
        response.json({ "status": `photo with id = ${photo_id} deleted`})
    }
    else {
        response.status(404).json({ "error": `cannot find photo with id ${photo_id}`})
    }
})

app.listen(3000, () => {
    console.log('Express server is running ....');
})
