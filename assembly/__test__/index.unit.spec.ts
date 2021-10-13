import * as contract from "..";
import { Context } from "near-sdk-as";

// ------------------------- USERS ------------------------- //

// Test for the registerUser function
describe("Register User",()=>{
  it("It should register a user", () => {
    expect(() => {
      contract.registerUser("testing007.testnet","James Bond","007007007","testing@gmail.com","007");
    }).not.toThrow();
  });
  it("It should fail if we don't send Account Id", () => {
    expect(() => {
      contract.registerUser("","James Bond","007007007","testing@gmail.com","007");
    }).toThrow();
  });
  it("It should fail if we don't send the name", () => {
    expect(() => {
      contract.registerUser("testing007.testnet","","007007007","testing@gmail.com","007");
    }).toThrow();
  });
  it("It should fail if we don't send the phone number", () => {
    expect(() => {
      contract.registerUser("testing007.testnet","James Bond","","testing@gmail.com","007");
    }).toThrow();
  });
  it("It should fail if we don't send the mail", () => {
    expect(() => {
      contract.registerUser("testing007.testnet","James Bond","007007007","","007");
    }).toThrow();
  });
  it("It should fail if we don't send password", () => {
    expect(() => {
      contract.registerUser("testing007.testnet","James Bond","007007007","testing@gmail.com","");
    }).toThrow();
  });
});

// Test for the Query Users function
describe("Query all users ",()=>{
  it("It should query all users", () => {
    expect(() => {
      contract.queryUsers();
    }).not.toThrow();
  });
});

// Test for the queryUsuario function
describe("query user by account id",()=>{
  it("It should query a user for his account id", () => {
    expect(() => {
      contract.queryUser("testing007.testnet");
    }).not.toThrow();
  });
  it("It should fail if we don't send the account id", () => {
    expect(() => {
      contract.queryUser("");
    }).toThrow();
  });
});


// ------------------------- NOTES ------------------------- //

// Prueba para la función registrarServicio
describe("Record a Note",()=>{
  it("It should record a note", () => {
    expect(() => {
      contract.recordNote("Text Note","testing007.testnet");
    }).not.toThrow();
  });
  it("It should fail if we don't send description", () => {
    expect(() => {
      contract.recordNote("","testing007.testnet");
    }).toThrow();
  });
  it("It should fail if we don't send user", () => {
    expect(() => {
      contract.recordNote("Text Note","");
    }).toThrow();
  });
});