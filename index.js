const express =  require("express");
const bodyParser = require ("body-parser");
const axios = require("axios");

// Boot express
const app= express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get("/", async (req, res) => {
    res.send("Hi there");
});

app.post("/echo", async (req, res) => {
    try {
        const response = await axios.post(
            "https://api-qa.kushkipagos.click/wallet-reseller/webhook",
            req.body
        );

        console.log(response.data);

        res.send(response.data);
    } catch (e) {
        console.log(e);
        res.send("Bypass error");
    }
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
