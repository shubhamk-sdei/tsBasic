import express from "express";
const app = express();
const port = 3030;

app.get("/test", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(`Version: v1.0. The current local time is ${(new Date()).toDateString()}`);
});

app.listen(port, async () => {
    console.log("app initialised");
});