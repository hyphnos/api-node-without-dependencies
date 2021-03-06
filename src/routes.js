import * as app from './http/index.js'
import * as user from './controllers/users.js'
import fs from 'fs'

app.get('/users', user.index)

app.get('/users_table', (req, res) => {
    fs.readFile('./src/views/users_table.html', (err, data) => {
        if(err) console.log(err)
        res.html(data)  
    })
})

app.get('/users/:id', user.view)

app.post('/users/', user.create)

app.put('/users/:id', user.update)

app.del('/users/:id', user.del)

app.get('/', (req, res) => {
    res.send('teste')
})

export default app