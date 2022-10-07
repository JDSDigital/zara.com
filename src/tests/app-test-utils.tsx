/* eslint-disable import/export */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactElement, ReactNode } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { render as rtlRender } from '@testing-library/react'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
})

type WrapperProps = {
  children: ReactNode
}

const customRender = (
  component: ReactElement,
  { ...renderOptions }: any = {}
) => {
  const Wrapper = ({ children }: WrapperProps) => (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </BrowserRouter>
  )

  return rtlRender(component, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { customRender as render }
