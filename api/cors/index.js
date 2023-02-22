const cors = require("cors");
const corsOptions = {
  origin: "https://covid-stories.onrender.com",
  optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions);
