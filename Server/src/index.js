const app = require("./app");
const createTable = require("./database/createTable");

const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Listening: http://localhost:${port}`);
// });
createTable()
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running on port" + " " + port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
