// create a new router
const express = require("express");
const router = express.Router();

var shopData = {shopName: "not thirsty anymoreee", 
    productCategories:["beer", "wine", "soft drinks", "hot drinks"],
    locations: {
        london: {
            manager: "yew brown",
            address: "new cross"
        },
        paris: {
            manager: "jan",
            address: "people are smoking outside and drinking espressos"
        },
        berlin: {
            manager: "johanna braun",
            address: "cool industrial building down an allyway covered in graffiti"
        },
        nyc: {
            manager: "jane doe",
            address: "not in midtown"
        },
        antarctica: {
            manager: "lin yuqing",
            address: "turn left at the glacier"
        },
        tokyo: {
            manager: "mike-san",
            address: "not in shinjuku"
        }
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

router.get("/survey", (req,res) => {
    res.render("survey.ejs", shopData)
});

router.post("/survey_complete", (req,res) => { // return user input data via POST
    let drinkType = req.body.drink_type;
    let isStudent = req.body.is_student;
    
    if(req.body.is_student != "yes") {
        isStudent = "no"
    };
    // assigns value to unchecked checkbox for "are you a student?"

    let surveyData = {
        name: req.body.first,
        drinkType: drinkType, 
        isStudent: isStudent
    };

    res.render(survey_complete.ejs, shopData, surveyData)

    // res.send(
    //     "hello " + req.body.first + 
    //     " thank you for taking the time to fill out our survey! " +
    //     "it's hugely helpful in assisting us to improve our services and customer satisfaction :)" +
    //     " review your responses below: " + "what is your age?: " + req.body.age + 
    //     " which of the following drink types do you consume the most?: " + req.body.drink_type +
    //     " are you a student?: " + isStudent
    // )
}); 

// Export the router object so index.js can access it
module.exports = router;