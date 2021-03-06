const express = require('express')
const { request, response } = require('express')
const app = express()
const port = 3000

var users = new Array()

app.get('/', (request, response) => {
    response.send('Hello World!')
})

app.get('/users', (request, response) => {
    response.send(users)
})

app.get('/user/:id', (request, response) => {
    response.send(users[request.params.id])
})

app.post('/user', (request, response) => {
    user = { id: 0 }
    users.push(user)
    response.send(user)
})

app.delete('/user/:id', (request, response) => {
    if (typeof users[request.params.id] === 'undefined') {
        response.status(204).end()
    } else {
        user = users[request.params.id]
        users.splice(request.params.id, request.params.id + 1)
        response.status(202).send(user)
    }
})

app.listen(port, () => {
    console.log(`Server listening on port : http://localhost:${port}` )
})