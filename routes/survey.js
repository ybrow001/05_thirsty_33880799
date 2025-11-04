// create a new router
const express = require("express");
const router = express.Router();

var shopData = { // shortened form with data currently relevant data for survey
    shopName: "not thirsty anymoreee", 
    productCategories:["beer", "wine", "soft drinks", "hot drinks"]
};

var surveyData = {
    firstName: "customer",
    lastName: "undefined",
    age: "undefined",
    drinkType: "undefined",
    isStudent: "undefined"
}

router.get("/survey", (req,res) => {
    res.render("survey.ejs", shopData)
});

router.post("/survey_complete", (req,res,next) => { // return user input data via POST
    surveyData.firstName = req.body.first;
    surveyData.lastName = req.body.last;
    surveyData.age = req.body.age;
    surveyData.drinkType = req.body.drink_type;
    surveyData.isStudent = req.body.is_student;
    
    if(req.body.is_student != "yes") {
        surveyData.isStudent = "no"
    };
    // assigns value to unchecked checkbox for "are you a student?"

    next() 
}, (req,res) => {
    res.render("survey_complete.ejs", {shopData, surveyData})
});

module.exports = router;