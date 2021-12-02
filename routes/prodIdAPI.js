const express = require("express");
const axios = require("axios");
const router = express.Router();

const breakString = (url) => {
    return url.split("/")[5]
}
const prodIds = [];
const keyword = "toaster";

router.get("/view", async (req, res, next) => {
    try {
        const response = await axios.get(
            "https://amazon-web-scrapper.p.rapidapi.com/search/"+keyword,
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
        console.log(response.data.results.length);
        for (let i = 0; i < response.data.results.length; i++) {
            prodIds.push(breakString(response.data.results[i].url))
        }
        console.log(prodIds)
        res.send(response.data)
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
});

module.exports = router;