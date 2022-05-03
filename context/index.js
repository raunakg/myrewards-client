import { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

// initial state
const initialState = {
    user: null,
}

//create context
const Context = createContext()

//root reducer
const rootReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload }
        case 'LOGOUT':
            return { ...state, user: null }
        default:
            return state
    }
}

// context provider
const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState)

    //router
    const router = useRouter()

    useEffect(() => {
        dispatch({
            type: 'LOGIN',
            payload: JSON.parse(window.localStorage.getItem('user')),
        })
    }, [])

    axios.interceptors.response.use(
        function (response) {
            // trigerrs when status code 2xx
            return response
        },
        function (error) {
            // trigerrs when status code not 2xx
            let res = error.response
            if (
                res.status === 401 &&
                res.config &&
                !res.config.__isRetryRequest
            ) {
                return new Promise((resolve, reject) => {
                    axios
                        .get('/api/auth/logout')
                        .then((data) => {
                            console.log('/401 error > logout')
                            dispatch({ type: 'LOGOUT' })
                            window.localStorage.removeItem('user')
                            router.push('/login')
                        })
                        .catch((err) => {
                            console.log('AXIOS INTERCEPTORS ERR', err)
                            reject(error)
                        })
                })
            }

            return Promise.reject(error)
        }
    )

    // useEffect(() => {

    // }, [])

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }