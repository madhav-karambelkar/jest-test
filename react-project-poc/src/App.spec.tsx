import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import customRender from "./testing/newTestConfig.tsx";
import { setIncreaseCount } from "./store/features/count/countSlice.ts";

jest.mock("./store/hook", () => ({
  useAppDispatch: () => jest.fn(),
  useAppSelector: () => jest.fn(),
}));

describe("<App />", () => {
  it("Should render App Component", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router basename={"/"}>
            <App />
          </Router>
        </PersistGate>
      </Provider>
    );
  });

  it("should use with custom render function", () => {
    customRender(<App />);
  });

  // it("should update count when store count is 2", () => {
  //   customRender(<App />, {
  //     preLoadedState: {
  //       count: {
  //         currentCount: 2,
  //       },
  //     },
  //   });
  //   expect(screen.getByTestId("current_count")).toHaveTextContent("2");
  // });
});

describe("App component test", () => {
  it("should render with initial count", () => {
    jest.spyOn(require("./store/hook"), "useAppSelector").mockReturnValue(0);

    render(<App />);

    expect(screen.getByTestId("current_count")).toHaveTextContent("count is 0");
  });

  test("should increase count when add button is clicked", () => {
    const mockDispatch = jest.fn();
    jest.spyOn(require("./store/hook"), "useAppSelector").mockReturnValue(0);
    jest
      .spyOn(require("./store/hook"), "useAppDispatch")
      .mockReturnValue(mockDispatch);

    render(<App />);

    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);

    expect(mockDispatch).toHaveBeenCalledWith(setIncreaseCount(1));
  });
});
