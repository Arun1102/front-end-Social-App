import { Avatar, Button, Card } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PostCard from '../../Component/Post/PostCard';

import UserReelsCard from '../../Component/Reels/UserReelsCard';

const tabs =[
  {value:"post",name:"Post"},
  {value:"reels",name:"Reels"},
  {value:"saved",name:"Saved"},
  {value:"repost",name:"Repost"},
]

const post=[1,1,1,1]
const reels=[1,1,1,1]
const savedPost = [1,1,1,1]
const repost = [1,1]
function Profile() {

  const {id} = useParams();
  const [value, setValue] = React.useState("post");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    
    <Card className='my-10 w-[70]'>
      <div className='rounded-md'>
        <div className='h-[15rem]'>

          
            <img className='w-full h-full rounded-t-md' alt="beach" src="https://media.istockphoto.com/id/1300296030/photo/tropical-beach-palm-trees-sea-wave-and-white-sand.jpg?s=612x612&w=0&k=20&c=6xdlJDxSp5FVUpQC7AOt3ooHYPd3-gTQNF6lmwX5krk="/>


        </div>
      

        <div className='px-5 flex justify-between  items-start mt-5 h-[5rem]'>

          <Avatar className='transform -translate-y-20' sx={{width:"5rem", height:"5rem"}} src="c:\Users\aruna\AppData\Local\Temp\user-profile-icon-free-vector.jpg"/>
          {true? <Button sx={{borderRadius:"20px"}} variant='outlined'>Edit Profile</Button>: <Button variant='outlined'>Follow</Button>}
        
        </div>
    


    <div className='p-5'>
      <div>
        <h1 className='py-1 font-bold text-xl'>Arun Attappan</h1>
        <p>@Arun</p>
      </div>
      <div className='flex gap-2 items-center py-3'>
        <span>41 post</span>
        <span>23 followers</span>
        <span>5 followings</span>
      </div>

      <div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam in adipisci, facilis pariatur dolorum rem ipsa voluptatem cum eveniet doloribus laudantium sit odio dolores delectus, tempora, dolorem nam id repellendus.</p>
      </div>

      </div>

      <section>
      <Box sx={{ width: '100%',borderBottom:1,borderColor:"divider" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        
        {tabs.map((item)=> <Tab value={item.value} label={item.name} wrapped />)}
       
      </Tabs>
    </Box>

    <div className='flex justify-center'>

    
      {
      
      value === "post"? <div className='space-y-5 w-[70] my-10'>
        {post.map(()=><div className='border border-slate-100 rounded-md'>
          <PostCard/>
        </div>)}
      </div>
      
      :value=== "reels"?<div className='flex flex-wrap gap-2 justify-center my-10'>
        {reels.map((item)=>
        <UserReelsCard/>
        )}
      </div>  

      :value === "saved"? <div className='space-y-5 w-[70] my-10'>
      {savedPost.map(()=><div className='border border-slate-100 rounded-md'>
        <PostCard/>
      </div>)}
    </div>

      :<div className='space-y-5 w-[70] my-10'>
      {repost.map(()=><div className='border border-slate-100 rounded-md'>
        <PostCard/>
      </div>)}
    </div>
      
      }



    </div>
      </section>
    </div>
  </Card>
  )
}


export default Profile