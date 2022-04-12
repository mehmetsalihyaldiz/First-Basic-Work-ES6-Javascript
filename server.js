import express from "express"
import axios from "axios"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const corsOptions = {
    origin: 'http://127.0.0.1:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


const app = express()
app.use(cors(corsOptions))

const port = 3000

app.get('/', (req, res) => {
    res.status(404).json({ message: "Not Found!" });
})

app.get('/api/v1/users/get', async (req, res) => {
    if (!req.headers.authorization) {
        res.status(403).json({ error: 'Access Denied!' });
    }
    if (req.headers.authorization === process.env.API_KEY) {
        await axios
            .get(process.env.API_URL)
            .then((response) => {
                res.status(200).json({ user: response.data.results })
            })
            .catch((error) => {
                console.log(error.response.data);
            })
            .finally(() => {
                console.log('Cleared!');
            })
    }
    res.status(403).json({ error: 'Access Denied!' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})