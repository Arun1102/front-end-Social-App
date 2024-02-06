import React from 'react'
import { Avatar } from '@mui/material'

function StoryCircle() {
  return (
    <div>
        <div className='flex flex-col items-center mr-4 cursor-pointer'>
            <Avatar sx={{width:"5rem",height:"5rem"}} src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"  ></Avatar>
           <p>Arun</p>
          </div>
    </div>
  )
}

export default StoryCircle