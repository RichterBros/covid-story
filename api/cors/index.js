const cors = require("cors");
const corsOptions = {
  origin: "http://www.covidstories.com",
  optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions);
