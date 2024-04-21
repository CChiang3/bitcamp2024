const express = require("express");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const requireAuth = require("../middleware/requireAuth");

const User = require("../models/user");
const Bill = require("../models/bill");

const router = express.Router();

router.get("/auth/token", async (req, res) => {
    const companyName = req.body.companyName;
    const companyURL = req.body.companyURL;

    if (!companyName  || !companyURL) {
        return res.send(400).json({
            message: "companyName and companyURL property must be fulfilled"
        });
    }

    const token = jwt.sign({
        name: companyName,
        url: companyURL
    }, process.env.JWT_SECRET);

    return res.status(200).json({
        token: token
    });
});


router.post("/invoice", requireAuth, async (req, res) => {
    const userEmail = req.body.userEmail;

    const companyName = req.user.name;
    const companyURL = req.user.url;

    const billName = req.body.billName;
    const billDescription = req.body.billDescription;
    const billDate = req.body.billDate;
    const billAmount = req.body.billAmount;

    console.log(userEmail, companyName, companyURL, billName, billDescription, billDate, billAmount);

    if (!userEmail || !companyName || !companyURL || !billName || !billDescription || !billDate || !billAmount) {
        return res.send(400).json({
            message: "userEmail, companyName, companyURL, billName, billDescription, billDate, and billAmount property must be fulfilled"
        });
    }

    const user = await User.findOne({
        email: userEmail
    });

    console.log(user)

    const billUniquifier = uuidv4();

    const bill = new Bill({
        uniquifier: billUniquifier,
        user: user._id,
        sourceName: companyName,
        sourceURL: companyURL,
        name: billName,
        description: billDescription,
        date: new Date(billDate),
        amount: billAmount
    });

    await bill.save();

    console.log(res);

    return res.status(200).json({
        uniqifier: billUniquifier
    });
});

module.exports = router;
