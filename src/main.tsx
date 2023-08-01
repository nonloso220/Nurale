import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import AppRoutes from './routes/index.tsx'
import { Provider } from 'react-redux'
import { store } from './store/applicationStore.ts'
// import './i18n.config.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider>
                <AppRoutes />
            </ChakraProvider>
        </Provider>
    </React.StrictMode>
)
