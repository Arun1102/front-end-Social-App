import React from 'react'
import {Grid,Card} from '@mui/material'
import Login from './Login'

function Authentication() {
  return (
    <div>
        <Grid container>
            <Grid className='h-screen overflow-hidden' item xs={7}>
                <img className='h-full w-full' src="https://cdn.pixabay.com/photo/2016/03/05/09/40/play-stone-1237457_1280.jpg" alt="authentication image"/>
            </Grid>
            <Grid item xs={5}>
                <div className='px-20 flex flex-col justify-center h-full'>
                    <Card className="card p-8 ">
                        
                        <div className='flex flex-col items-center mb-5 space-y-1'>
                            <h1 className='log'>Social App</h1>
                            <p className='text-center text-sm w-[70&]'>Connecting People , like never before!</p>
                        </div>

                        <Login/>
                       

                    </Card>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Authentication