const express = require("express");
const routes = require("./routes/routes");
const app = express();

app.use(express.json());

//static folders
app.use(express.static("./assets"));

//main routes
app.use("/", routes);

app.listen(4000, () => {
    console.log("Server on port 4000");
});



