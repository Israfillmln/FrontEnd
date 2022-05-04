import { Box, Button, Container, FormControl, FormHelperText, FormLabel, Heading, Icon, Input, InputGroup, InputRightElement, Stack, useToast } from '@chakra-ui/react'
import jsCookie from 'js-cookie'
import api from "../../lib/api"
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { auth_types } from '../../redux/types'
import { userLogin } from '../../redux/actions/auth'


const LoginPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    const dispatch = useDispatch()

    const authSelector = useSelector((state) => state.auth)

    const router = useRouter()

    const toast = useToast()

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        validationSchema: yup.object().shape({
            username: yup.string().required("this field is required!"),
            email: yup.string().required("this field is required!"),
            password: yup.string().required("this field is required!")
        }),
        validateOnChange: false,
        onSubmit: (values) => {
            setTimeout(() => {
                dispatch(userLogin(values, formik.setSubmitting))
            }, 2000)
            // router.push("/")
            // router.push("/auth/login"
        }
    });

    useEffect(() => {
        if (authSelector.errorMessage) {
            toast({
                status: "error",
                tittle: "Login failed",
                description: authSelector.errorMessage
            })
        }

        if (authSelector.id) {
            router.push("/")
        }
    },[authSelector.errorMessage, authSelector.id])

    return (
        <Container maxW="lg">
            <Heading pt="10" textAlign="center" fontSize="md">Welcome { authSelector.username } </Heading>
            <Stack py="16">
                 <Heading py="15" textAlign="center" fontSize="3xl">Sign Up or Log In if you are User</Heading>
                 <Box maxW="lg" backgroundColor="white" shadow="lg" p="5">
                     <form>
                         <FormControl isInvalid={formik.errors.username}>
                            <FormLabel htmlFor='inputUsername'>Username</FormLabel>
                            <Input onChange={(event) => {formik.setFieldValue("username", event.target.value)}} id='inputUsername'/>
                            <FormHelperText>{formik.errors.username}</FormHelperText>
                         </FormControl>

                         <FormControl isInvalid={formik.errors.email}>
                            <FormLabel htmlFor='inputEmail'>Email</FormLabel>
                            <Input onChange={(event) => {formik.setFieldValue("email", event.target.value)}} id='inputEmail'/>
                            <FormHelperText>{formik.errors.email}</FormHelperText>
                         </FormControl>

                         <FormControl isInvalid={formik.errors.password}>
                            <FormLabel mt="3" htmlFor='inputPassword'>Password</FormLabel>
                            <InputGroup>
                            <Input onChange={(event) => {formik.setFieldValue("password", event.target.value)}} id='inputPassword' type={passwordVisible? "text" : "password"}/>
                            <InputRightElement onClick={() => setPasswordVisible(!passwordVisible)} children={ <Icon as={passwordVisible? IoMdEyeOff : IoMdEye} sx={{ _hover: { cursor:"pointer" }}} /> } />
                            </InputGroup>
                            <FormHelperText>{formik.errors.password}</FormHelperText>
                         </FormControl>

                         <Stack py={5}>
                            <Button disabled={formik.isSubmitting} onClick={formik.handleSubmit} type='submit' bgColor="black" color="white">Login</Button>
                            <Button bgColor="black" color="white">Sign Up</Button>
                         </Stack>
                     </form>
                 </Box>
            </Stack>
        </Container>
    )
}

export default LoginPage;