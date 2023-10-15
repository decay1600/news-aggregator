const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

//? Database Connection
const TEST_DB = process.env.TEST_DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

before(async function () {
  try {
    await mongoose.connect(TEST_DB);
    console.log("Successfully TEST DB connected");
  } catch (err) {
    console.log("Problem in connecting Database", err);
  }
});

// Not Using async await as Mocha will not be able to parse the error properly
afterEach(function (done) {
  console.log("Running before each clause");
  mongoose.connection.collections.users.drop((err) => {
    console.log("Dropped User Collections");

    done(); // Pass the error, if any, to Mocha
  });
});

after(async () => {
  // Disconnect from the remote MongoDB server
  await mongoose.disconnect();
});
