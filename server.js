const app = require("./app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) console.log("Something went wrong, Unable to start the server");
  else console.log("Server Started onto port 3000");
});
