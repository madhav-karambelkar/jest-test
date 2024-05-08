import { render,  RenderOptions } from '@testing-library/react'
import { ReactElement, ReactNode } from 'react'

import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import {  PreloadedState } from '@reduxjs/toolkit'
import userEvent from '@testing-library/user-event'
import { RootState, setupStore } from '../store'


type AllProvidersProps = {
  children: ReactNode
}

type ExtendedRenderOptions = Omit<RenderOptions, 'wrapper'> & {
  preloadedState?: PreloadedState<Partial<RootState>>
  url?: string
}

const customRender = (ui: ReactElement, options?: ExtendedRenderOptions) => {
  const store = setupStore(options?.preloadedState as PreloadedState<RootState>)

  function AllProviders({ children }: AllProvidersProps) {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[options?.url ?? '/']}>
          {children}
        </MemoryRouter>
      </Provider>
    )
  }

  return {
    /**
     * I'm exposing the userEvent on te render as per docs recommendation
     * as you can see in this link: https://testing-library.com/docs/user-event/intro
     */
    userEvent: userEvent.setup(),
    ...render(ui, { wrapper: AllProviders, ...options }),
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'

export { customRender as render }
// export { customRenderHook as renderHook }