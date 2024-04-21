const propelAuth = require("@propelauth/express");

const Bill = require("../models/bill");
const User = require("../models/user");

const controller = {};

controller.postBillAdd = async (req, res) => {
    const billName = req.body.billName;
    const billDate = req.body.billDate;
    const billAmount = req.body.billAmount;

    const userClass = propelAuth.UserClass.fromUser(req.user);
    const userEmail = userClass.email;

    const user = User.findOne({
        email: userEmail
    });

    const bill = new Bill({
        user: user._id,
        name: billName,
        date: billDate,
        amount: billAmount
    });
    await bill.save();

    const bills = user.bills;
    user.update({
        bills: bills.push(bill._id)
    })
    await user.save();

    return res.send(200).json({
        message: "added bill to user"
    })
}

controller.getBills = async (req, res) => {
    const userClass = propelAuth.UserClass.fromUser(req.user);
    const userEmail = userClass.email;

    const user = User.findOne({
        email: userEmail
    }).populate("bill");

    const bills = user.bills.forEach((bill) => {
        return {
            billName: bill.name,
            billDate: bill.date,
            billAmount: bill.amount
        };
    })

    res.send(200).json({
        bills: bills
    });
}