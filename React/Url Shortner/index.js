const express = require("express");
const connectToMongoDB = require("./connect");
const urlRoute = require('./routes/url')
const URL = require("./models/url")


const app = express();
const PORT = 5000;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() => console.log("MongoDB connected")
);

app.use(express.json());

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId
        },
        {
            $push: {
                visitHistory: { timestamp: Date.now()},
            }
        }
    );
    res.redirect(entry.redirectURL);
});

app.use('/url', urlRoute);

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));