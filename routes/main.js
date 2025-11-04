// create a new router
const express = require("express");
const router = express.Router();

var shopData = {shopName: "not thirsty anymoreee", 
    productCategories:["beer", "wine", "soft drinks", "hot drinks"],
    locations: { // objects storing location data, each containing the data for their manager and address
        "london, new cross": {
            manager: "yew brown",
            address: "new cross road, SE14 5DG"
        },
        "london, mile end": {
            manager: "yuqing lin",
            address: "mile end road,  E1 4NS"
        },
        cambridge: {
            manager: "hazel voss",
            address: "market street, CB2 3PA"
        },
        canterbury: {
            manager: "youzi lin",
            address: "longport, CT1 1PE"
        },
    }
};

// handle the main routes
router.get('/', (req,res) => {
    res.render('index.ejs', shopData)
});
 
router.get('/about', (req,res) => {
    res.render('about.ejs', shopData)
});

router.get('/search', (req,res) => {
    res.render('search.ejs', shopData)
});

// full html structure allows for style sheet to be applyed to response pages
router.get('/search_result', (req, res) => {
    // todo: search in the database
    res.send(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" type="text/css" href="style.css"> 
            <title> ${shopData.shopName}</title>
        </head>
        <body>
            <h1>search results</h1>
            <p> 
                here are the results for ${req.query.search} in ${req.query.category}:
            </p>
        </body>
        </html> 
        `
    )
});

router.get("/register", (req,res) => {
    res.render("register.ejs", shopData) 
});

router.post("/registered", (req,res) => { // return name and email using post protocol
    res.send(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" type="text/css" href="style.css">
            <title> ${shopData.shopName}</title>
        </head>
        <body>
            <h1>registration complete</h1>
            <p> 
                hello ${req.body.first} ${req.body.last}, your account has been created! thank you for registering with us!
                <br><br>
                we have sent a confirmation emal to ${req.body.email}, which you should recieve soon. 
                <br>
                please follow the link in the mail to activate your account.
            </p>
        </body>
        </html> 
        `
    )
});

// export the router object so index.js can access it
module.exports = router;