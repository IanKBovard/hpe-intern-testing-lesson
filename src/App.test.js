import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { App, add, subtract, onClick, Counter } from "./App";

describe("add function", () => {
  let value;

  beforeEach(() => {
    value = add(1, 2);
  });

  afterEach(() => {
    value = 0;
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

describe("onClick fetch function", () => {
  test("returns :) when correct url is passed as an argument", () => {
    // stubbed function
    const mockedFetch = jest.fn((url) => ":)");
    const value = onClick(mockedFetch, ["hello"]);
    expect(mockedFetch).toHaveBeenCalled();
    expect(mockedFetch).toHaveBeenCalledWith("hello");
    expect(value[0]).toBe(":)");
  });

  test("returns :( when correct url is not passed", () => {
    // stubbed function
    const mockedFetch = jest.fn((url) => ":(");
    const value = onClick(mockedFetch, [""]);
    expect(mockedFetch).toHaveBeenCalled();
    expect(mockedFetch).toHaveBeenCalledWith("");
    expect(value[0]).toBe(":(");
  });

  test("runs for each url in the array passed", () => {
    // mocked function
    const mockedFetch = jest.fn();
    onClick(mockedFetch, ["hello", "hello", "hello", "hello"]);
    expect(mockedFetch).toHaveBeenCalledTimes(4);
  });
});

describe("app component", () => {
  afterEach(cleanup);

  test("renders h1 tag with title", () => {
    //static test
    // renders component in a container that is appended to document.body
    const { queryByText } = render(<App />);
    const title = queryByText("This is the title");
    expect(title).toBeInTheDocument();
  });

  /*   test("container snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  test("container.firstChild snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  test("asFragment snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  }); */
});

describe("Counter component", () => {
  let utils;

  beforeEach(() => {
    utils = render(<Counter />);
  });

  afterEach(cleanup);

  test("renders title", () => {
    const titleElement = utils.queryByText(/counting is rad!/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders button with label of increment", () => {
    const incrementButton = utils.queryByTestId(/increment-button/i);
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders with initial state of 0", () => {
    const countElement = utils.queryByTestId("count");
    expect(countElement.innerHTML).toBe("0");
  });

  // messy
  /*   test("Increment button onClick increments count", () => {
    const incrementButton = utils.queryByTestId(/increment-button/i);
    fireEvent.click(incrementButton);
    const countElement = utils.queryByTestId("count");
    expect(countElement.innerHTML).toBe("1");
  });

  test("Decrement button onClick decrements count", () => {
    const decrementButton = utils.queryByTestId(/decrement-button/i);
    const incrementButton = utils.queryByTestId(/increment-button/i);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    const countElement = utils.queryByTestId("count");
    expect(countElement.innerHTML).toBe("1");
  }); */

  describe("increment and decrement buttons", () => {
    let incrementButton, decrementButton, countElement;

    beforeEach(() => {
      incrementButton = utils.queryByTestId(/increment-button/i);
      decrementButton = utils.queryByTestId(/decrement-button/i);
      countElement = utils.queryByTestId("count");
    });
    afterEach(cleanup);
    test("Increment button onClick increments count", () => {
      fireEvent.click(incrementButton);
      expect(countElement.innerHTML).toBe("1");
    });

    test("Decrement button onClick decrements count", () => {
      fireEvent.click(incrementButton);
      fireEvent.click(incrementButton);
      fireEvent.click(decrementButton);
      expect(countElement.innerHTML).toBe("1");
    });
  });
});
describe("submit button", () => {
  const mockedSubmit = jest.fn(() => console.log("hello"));
  let utils;
  beforeEach(() => {
    utils = render(<Counter onSubmit={mockedSubmit} />);
  });
  afterEach(cleanup);
  test("fires submit function when clicked", () => {
    const submitButton = utils.queryByText(/submit/i);
    fireEvent.click(submitButton);
    expect(mockedSubmit).toHaveBeenCalled();
  });
});
