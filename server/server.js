const express = require("express");
const app = express();
const port = 3005;

require("./routes")(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
