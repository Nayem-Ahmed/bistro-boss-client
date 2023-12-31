import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'


import { HelmetProvider } from 'react-helmet-async'
import Authproviders from './Providers/Authproviders.jsx'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authproviders>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>

          <RouterProvider router={router}></RouterProvider>
        </HelmetProvider>

      </QueryClientProvider>
    </Authproviders>
  </React.StrictMode>,
)
