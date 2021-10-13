const cors = require("cors");
const corsOptions = {
  origin: "https://covid-story.herokuapp.com/api/posts",
  optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions);
