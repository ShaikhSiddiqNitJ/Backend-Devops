const express = require("express");
const app = express();
let user = [{
    name: "siddiq usmani ",
    id: 1
}];
app.post("/", function (req, res) {
    user.push({
        name: "siddiq shaikh ut",
        id: 2
    });
});
app.delete("/", function (req, res) {
    user = user.pop();
});

app.get("/", function (req, res) {
    res.send(user);
});

app.listen(3000);

