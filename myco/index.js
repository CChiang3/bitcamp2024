require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();

// configure middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", async (req, res) => {
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post("/", async (req, res) => {
    const email = req.body.email;
    const subject = req.body.subject;
    const description = req.body.description;
    const amount = req.body.amount;
    const date = req.body.date;

    axios({
        method: "get",
        url: "http://localhost:3000/api/auth/token",
        data: {
            companyName: "MyCo",
            companyURL: `http://localhost:${process.env.PORT}`
        }
    }).then((response) => {
        const token = response.data.token;

        axios({
            method: "post",
            url: "http://localhost:3000/api/invoice",
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                userEmail: email,
                billName: subject,
                billDescription: description,
                billDate: date,
                billAmount: amount
            }
        }).then((response) => {
            console.log(response)
        })
        console.log(response.data);
    }).catch((error) => {
        console.log(error);
    })

    res.send('root');
});

app.listen(process.env.PORT, () => {
    console.log(`MyCo on port ${process.env.PORT}...`)
});
