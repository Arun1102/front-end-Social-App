import React from 'react'
import { navigationMenu } from './SidebarNavigation'
import { Avatar, Divider } from '@mui/material'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SideBar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };





  return (
    <div className='card h-screen flex flex-col justify-between py-5'>
      
        <div className='space-y-8 pl-5'>



          <div className=''>
            <span className='logo font-bold text-xl'>Social App</span>
          </div>

          <div className="space-y-8">
              {
                navigationMenu.map((item)=>
                <div className="flex space-x-3 cursor-pointer">
                  {item.icon}
                 <p className='text-xl'> {item.title}</p>
                </div>)
              }
          </div>

        </div>

        <div>
          <Divider/>
          <div className='pl-5 flex items-center justify-between pt-5'>
              <div className='flex items-center space-x-3'>
                  <Avatar src='https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg'/>
              
              <div>
                <p className="font-bold">Arun Attappan</p>
                <p className="opacity-70">@ArunAttapan</p>
              </div>
              </div>

              {/*  */}
              <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

          </div>
          
        </div>



    </div>
  )
}

export default SideBar