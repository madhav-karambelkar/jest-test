import { ReactElement } from "react";
import { RootState, setupStore } from "../store";
import { RenderOptions, render } from "@testing-library/react";
import { PreloadedState } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

type CustomRenderOptions = Omit<RenderOptions, "wrapper"> & {
  preLoadedState: PreloadedState<RootState>;
  url?: string;
};

const customRender = (ui: ReactElement, options?: CustomRenderOptions) => {
  const store = setupStore(options?.preLoadedState);
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[options?.url || ""]}>
          {children}
        </MemoryRouter>
      </Provider>
    );
  }
  return {
    userEvent: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...options }),
  };
};

export default customRender
