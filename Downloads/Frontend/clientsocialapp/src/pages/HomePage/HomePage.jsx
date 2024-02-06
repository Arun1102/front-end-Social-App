import React from 'react'
import { Grid } from '@mui/material'
import Sidebar from '../../Component/SideBar'
import { Route, useLocation,Routes } from 'react-router-dom'
import MiddlePart from '../../Component/MiddlePart/MiddlePart'
import CreateReelsForm from '../../Component/Reels/CreateReelsForm'
import Reels from '../../Component/Reels/Reels'
import Profile from '../Profile/Profile'

function HomePage() {

  const location = useLocation();


  return (
    <div className='px-20'>

      <Grid container spacing={0}>
          <Grid item xs={0} lg={3}>
              <div className='sticky top-0'>
                  <Sidebar/>
              </div>
          </Grid>

          <Grid item className='px-5 flex justify-center' xs={12} lg={location.pathname === "/"? 6 : 9}>


                <Routes>
                  <Route path="/"  element={<MiddlePart/>}/>
                  <Route path="/reels"  element={<Reels/>}/>
                  <Route path="/create-reels"  element={<CreateReelsForm/>}/>
                  <Route path="/profile/:id"  element={<Profile/>}/>
                </Routes>

          </Grid>
      </Grid>

    </div>
  )
}

export default HomePage