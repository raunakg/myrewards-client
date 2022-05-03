import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import 'font-awesome/css/font-awesome.min.css'
import '../public/css/styles.css'

import { ThemeProvider } from 'styled-components'
import TopNav from '../components/TopNav'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Provider } from '../context'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const theme = {
    colors: {
        primary: '#fafafa',
    },
}

function MyApp({ Component, pageProps }) {
    return (
        <Provider>
            <ThemeProvider theme={theme}>
                <ToastContainer position="top-center" />
                <TopNav />

                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp
