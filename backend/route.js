const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

mongoose.connect(process.env.MONGODB_URI)

// SCHEMA

const NewsletterSchema = new mongoose.Schema({
    email: String,
})
const Newsletter = mongoose.model('newsletters', NewsletterSchema)

app.post("/api/newsletter", async (req, res) => {
    try {
        // check if email already exists in database
        const email = req.body.email
        const exists = await Newsletter.exists({
            email: email
        })
        
        if (exists) {
            res.status(409).send("User Exists");
            return;
        }

        // make if email doesn't already exist
        const subscriber = new Newsletter({ email: email})

        // try adding newsletter to database
        try {
            await subscriber.save()
            res.status(200).send("Subscription Created")
            console.log("newsletter email added")
        } catch (error) {
            res.status(500).send("Subscription could not be made", error)
            console.log("failed to add newsletter email")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Post error");
    }
})