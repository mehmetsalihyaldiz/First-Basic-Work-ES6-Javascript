import express from "express"
import axios from "axios"
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.json({ message: "Not Found!" })
})

app.get('/api/v1/users/get', async (req, res) => {
    await axios
        .get(process.env.API_URL)
        .then((response) => {
            res.json({ user: response.data.results })
        })
        .catch((error) => {

        })
        .finally(() => {
            console.log('Cleared!');
        })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})