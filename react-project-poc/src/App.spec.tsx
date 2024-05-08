import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from 'react-redux'
import store, { persistor } from './store/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router } from 'react-router-dom'
import customRender from "./testing/newTestConfig.tsx";


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

  it("should use with custom render function",()=>{
    customRender(<App />)
  })

  it('should update count when store count is 2',()=>{
    customRender(<App />,{
        preLoadedState:{
            count:{
                currentCount: 2
            }
        }
    })
    expect(screen.getByTestId("current_count")).toHaveTextContent("2")
  })
});
