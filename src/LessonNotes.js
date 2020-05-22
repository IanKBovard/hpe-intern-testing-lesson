// What is jest

// Jest is a test runner and assertion library
// jest also offers other tools like mocking, and snapshots as well.
// included with create-react-app

// Example: simple
// we have a function that adds two numbers
// const add = (x, y) => x + y;
// we need to export it

//write a test for it
// we need to import add
// import {add} from 'App.js'

/* 
  test("add function returns the correct value", () => {
    const value = add(1, 2);
    expect(value).toBe(3);
    expect(add(1, 2)).toBe(3);
    // sometimes ok to be redundant
    expect(add(5, 2)).toBe(7); ----> assertion expect with matchers expect(something).toBe(something)
  });
*/

// so why test?
// what does testing here afford us?

// we're not neccessarily testing for bugs
// we test to ensure the functionality of our code is preserved
// especially important in large projects, or when projects exchange hands.
// you'll hear the word confidence a lot, and it is true.
// i am confident that my code will be preserved

// another aspect of testing not spoken about to often is that it can provide documentation for the developer
// when looking through tests i should be able to tell what that component does, and how its parts function.

// before, after, test, and decsribe blocks

// describe is used to create something called test suites..
// organizes your test
// but also provides scope

/* 
  import { add, subtract } from "./App";

  describe("add function", () => {
    let value;

    beforeEach(() => {
      value = add(1, 2);
      console.log("before each runs");
    });

    afterEach(() => {
      value = 0;
      console.log("after each runs");
    });

    test("returns the correct value", () => {
      expect(value).toBe(3);
      expect(add(1, 2)).toBe(3);
      expect(add(5, 2)).toBe(7);
    });
  });

  describe("subtract function", () => {
    test("returns the correct value", () => {
      const value = subtract(2, 1);
      expect(value).toBe(1);
      expect(subtract(2, 1)).toBe(1);
      expect(subtract(5, 2)).toBe(3);
    });
  });
*/

// this ius known as setup and teardown

// mocks specifically using jest.fn
// multiple ways to mock jest.fn, jest.mock, jest.spyOn
// mocks are also called spies, because they lets you track how a function is called
// mocks are used in place of eternal dependencies
// you dont need to test the api when you're testing frontend
// if its a package yo dont need to test it

/* 
use mocks to -- replace external dependencies
                check if mock is called or not, how many times, and with the correct arguments
*/

// snapshots introduce then go into later
// tests for consistency in ui, no unexpected changes

// react-testing-library
// not a test runner or assertion library
// provides utility functions to more easily render and test react components
// your tests interact with actual dom nodes

// render is one of those functions

// import {render} from "@testing-library/react";

// TDD EXAMPLE
