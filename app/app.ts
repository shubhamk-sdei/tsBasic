import express from "express";
const app = express();
import api from "./controllers";
const port = process.env.PORT || 3030;
console.log("the port from process is", process.env.PORT);
app.get("/test", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(`Version: v1.0. The current local time is ${(new Date()).toDateString()}`);
});

app.use("/", api);

app.listen(port, async () => {
    console.log("app initialised, OK!");
});
