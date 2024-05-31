import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config';
import router from './router/index.js';

const app = express()
const {PORT, URI_DB} = process.env

app.use(express.json())
router(app)

const connectdb = async () => {
    try {
        await mongoose.connect(URI_DB)
        console.log('Connect db successfully');
    } catch (error) {
        console.log('Can not connect to DB');
    }
}
app.listen(PORT, async () => {
    await connectdb()
    console.log(`Endpoint: http://localhost:${PORT}`);
})