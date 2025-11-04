// create a new router
const express = require("express");
const router = express.Router();

var shopData = {shopName: "not thirsty anymoreee", 
    productCategories:["beer", "wine", "soft drinks", "hot drinks"],
    locations: {
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

router.get('/search_result', (req, res) => {
    // todo: search in the database
    res.send(
        "You searched for " + req.query.search_text + 
        " in " + req.query.category
    )
});

router.get("/register", (req,res) => {
    res.render("register.ejs", shopData) 
});

router.post("/registered", (req,res) => { // return name and email using post protocol
    res.send(
        'hello ' + req.body.first + ' ' + req.body.last + 
        ' you are now registered! ' +
        'we have sent confirmation email to ' + req.body.email
    )
});

// export the router object so index.js can access it
module.exports = router;