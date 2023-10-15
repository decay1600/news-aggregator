// test-register.js

const mongoose = require("mongoose");
const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const server = require("../../server"); // Replace with the path to your Express app file
const User = require("../../models/userModel"); // Replace with the path to your User model

chai.use(chaiHttp);

describe("Register Function Test", () => {
  it("should create a new user and send a token", async () => {
    const newUser = {
      // Create a user object with required fields
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
    };

    const response = await chai
      .request(server)
      .post("/api/v1/users/register")
      .send(newUser);

    // Assert the response status, data, and token
    expect(response).to.have.status(201);
    expect(response.body).to.have.property("token");
    expect(response.body).to.have.property("data");

    // You can add additional assertions based on the behavior you expect
  });
  describe("Re-Register email ID test", () => {
    // Will run beforeEach test cases in this block.
    beforeEach((done) => {
      const newUser = {
        // Create a user object with required fields
        name: "John Doe",
        email: "john@example.com",
        password: "password123",
      };
      chai
        .request(server)
        .post("/api/v1/users/register")
        .send(newUser)
        .end((err, res) => done());
    });

    it("should not create a user where there is already an email present", async () => {
      const newUser = {
        // Create a user object with required fields
        name: "John Doe",
        email: "john@example.com",
        password: "password123",
      };

      const response = await chai
        .request(server)
        .post("/api/v1/users/register")
        .send(newUser);

      // Assert the response status, data, and token
      expect(response).to.have.status(409);
    });
  });
});

describe("Login Flow", () => {
  beforeEach(async () => {
    const registerBody = {
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
    };

    // Register a user
    const registerResponse = await chai
      .request(server)
      .post("/api/v1/users/register")
      .send(registerBody);
  });

  it("Without Email and password", async () => {
    const loginBody = {
      name: "John Doe",
      email: "",
      password: "",
    };

    const loginResponse = await chai
      .request(server)
      .post("/api/v1/users/login")
      .send(loginBody);

    expect(loginResponse).to.have.status(400);
  });

  it("With Email and Password", async () => {
    const loginBody = {
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
    };

    const loginResponse = await chai
      .request(server)
      .post("/api/v1/users/login")
      .send(loginBody);

    expect(loginResponse).to.have.status(200);
  });

  it("No User present in the DB", async () => {
    const loginBody = {
      name: "Bad guy",
      email: "badguy@gmail.com",
      password: "badguypassword",
    };

    const loginResponse = await chai
      .request(server)
      .post("/api/v1/users/login")
      .send(loginBody);

    // status is provided by chai-http lib
    expect(loginResponse).to.have.status(401);
    expect(loginResponse.body.message).equal("Incorrect email or password");
  });
});
