import { TextField,Button} from '@mui/material';
import { ErrorMessage, Formik,Field,Form ,resetForm} from 'formik'
import React, { useState } from 'react'
import * as Yup from "yup"
import { loginUserAction } from '../../Redux/Auth/auth.action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const initialValues={email:"", password:""}
const validationSchema={
    email:Yup.string()
        .email('Invalid email!')
        .required('Please insert Email as it is required!'),
    password:Yup.string()
        .min(6,'password should be of minimum 6 characters length')
        .required('password is required!')
    }

function Login() {

    const[formValue,setFormValue] = useState();
    const dispatch = useDispatch();

    const navigate=useNavigate();
   

    const handleSubmit = (values,{resetForm})=>{
        console.log("handle submitted",values)
        dispatch(loginUserAction({data:values}))
        resetForm();
    }

  return (
    <>
    <Formik 
    onSubmit={handleSubmit} 
    // validationSchema={validationSchema} 
    initialValues={initialValues}>

        <Form className="space-y-5">

            <div className="space-y-5">

                <div>
                    <Field 
                    as={TextField} 
                    name="email" 
                    placeholder="Email Address" 
                    type="email" 
                    variant="outlined" 
                    fullWidth/>
                    <ErrorMessage name="email" component="div" className='text-red-500'/>
                </div>
                <div>
                    <Field 
                    as={TextField} 
                    name="password" 
                    placeholder="Password" 
                    type="password" 
                    variant="outlined" 
                    fullWidth/>
                    <ErrorMessage name="password" component="div" className='text-red-500'/>
                </div>
            </div>
            <Button sx={{padding: ".8rem 0rem"}} fullWidth type='submit' variant='contained' color="primary">Login</Button>

        </Form>
        
    </Formik>

    <div className="flex gap-5 center item-center justify-center pt-5">
        <p className='pt-1'>if you dont have account?</p>
        <Button onClick={()=>navigate("/register")}>Register</Button>
    </div>

    </>
  )
}

export default Login