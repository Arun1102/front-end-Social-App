import { TextField,Button} from '@mui/material';
import { ErrorMessage, Formik,Field,Form } from 'formik'
import React, { useState } from 'react'
import * as Yup from "yup"


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

    const handleSubmit = (values)=>{
        console.log("handle submitted",values)
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
            <Button sx={{paading: ".8rem 0rem"}} fullWidth type='submit' variant='contained' color="primary">Login</Button>

        </Form>
        
    </Formik>

    </>
  )
}

export default Login