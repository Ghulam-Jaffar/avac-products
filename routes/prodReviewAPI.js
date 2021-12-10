const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/view", async (req, res, next) => {
    const { query } = req.params;
    try {
        const response = await axios.get(
            `https://amazon-web-scrapper.p.rapidapi.com/products/${query}/reviews`,
            {
                params: {
                    api_key: '9bb39d3483a211cfa57e47fc7851fc3a'
                },
                headers: {
                    'x-rapidapi-host': 'amazon-web-scrapper.p.rapidapi.com',
                    'x-rapidapi-key': '679c3866c7mshe8861ddb23e1c74p1a6a42jsn8ba39c7f42a8'
                }
            }
        )

        console.log(response.data)
        res.send(response.data)
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
});

module.exports = router;