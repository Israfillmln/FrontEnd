import jsCookie from 'js-cookie'
import api from '../../lib/api'
import { auth_types } from '../types'


export const userLogin = (values, setSubmitting) => {

    return async (dispatch) => {
        try {
            const res = await api.get("/users", {
                params: {
                    username: values.username,
                    email: values.email,
                    password: values.password
                }
            })
    
            if (!res.data.length) {
                throw new Error ("there are wrong input")
            }
    
            const userData = res.data[0]
            const stringifiedData = JSON.stringify(userData)
    
            jsCookie.set("user_data", stringifiedData)
    
            dispatch({
                type: auth_types.LOGIN_USER,
                payload: userData,
            })
            setSubmitting(false)
        }  catch (error) {
            console.log(error)

            dispatch({
                type: auth_types.AUTH_ERROR,
                payload: error.message
            })
            setSubmitting(false)
        }
    }
}