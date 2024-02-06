import { TextField,Button} from '@mui/material';
import { ErrorMessage, Formik,Field,Form ,resetForm} from 'formik'
import React, { useState } from 'react'
import * as Yup from "yup"

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch } from 'react-redux';
import { registerUserAction } from '../../Redux/Auth/auth.action';
import { useNavigate } from 'react-router-dom';



const initialValues={firstName:"",lastName:"",email:"", password:"",gender:""}
const validationSchema={
    email:Yup.string()
        .email('Invalid email!')
        .required('Please insert Email as it is required!'),
    password:Yup.string()
        .min(6,'password should be of minimum 6 characters length')
        .required('password is required!')
    }

    

function Register() {

    const[gender,setGender] = useState();

    const dispatch = useDispatch();

    const navigate = useNavigate();
   
    

    const handleSubmit = (values,{resetForm})=>{
        values.gender=gender
        console.log("handle submitted",values)
        dispatch(registerUserAction({data:values}))
        resetForm();
    }

    const handleChange = (event) => {
      setGender(event.target.value);
    };

    

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
                    name="firstName" 
                    placeholder="First Name" 
                    type="text" 
                    variant="outlined" 
                    fullWidth/>
                    <ErrorMessage name="firstName" component="div" className='text-red-500'/>
                </div>

                <div>
                    <Field 
                    as={TextField} 
                    name="lastName" 
                    placeholder="Last Name" 
                    type="text" 
                    variant="outlined" 
                    fullWidth/>
                    <ErrorMessage name="lastName" component="div" className='text-red-500'/>
                </div>


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
            
                <RadioGroup
                  row
                  aria-label="Gender"
                  name="gender"
                  className='center justify-center'
                  
                  onChange={handleChange}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <ErrorMessage name="gender" component="div" className='text-red-500'/>
                </RadioGroup>
                
                
                
                
            <Button sx={{padding: ".8rem 0rem"}} fullWidth type='submit' variant='contained' color="primary">Register</Button>

        </Form>
        
    </Formik>
    <div className="flex gap-5 center item-center justify-center pt-5">
        <p className='pt-1'>if you have account?</p>
        <Button  onClick={()=>navigate("/")}>Sign In</Button>
    </div>

    </>
  )
}

export default Register