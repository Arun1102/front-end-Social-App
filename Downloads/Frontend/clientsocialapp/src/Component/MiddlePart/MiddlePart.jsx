import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import StoryCircle from './StoryCircle';
import Card from '@mui/material/Card';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
import PostCard from '../Post/PostCard';
const story = [1,1,1,1,1]
const post = [1,1,1,1,1]


function MiddlePart() {

  const handleOpenCreatePostModel=()=>{
      console.log("open post model");
  }



  return (
    <div className="px-20">  
      <section className='flex  items-center p-5 rounded-b-md'>
          <div className='flex flex-col  items-center mr-4 cursor-pointer'>
            <Avatar sx={{width:"5rem",height:"5rem"}}  ><AddIcon sx={{fontSize:"3rem"}}/></Avatar>
           <p>New</p>
           
          </div>
          {story.map(()=><StoryCircle/>)}
      </section>

      <Card className="p-5 mt-5">
        <div className='flex justify-between '>
          <Avatar/>
          <input className='outline-none w-[90%]  rounded-full px-5 bg-transparent border-[#3b4054] border' type="text"/>
        </div>

        <div className='flex justify-center space-x-9 mt-5'>
          <div className='flex items-center'>

            <IconButton color='primary' onClick={handleOpenCreatePostModel}>
              <ImageIcon/>
            </IconButton>

            <span>media</span>

            <div className='flex items-center'>

            <IconButton color='primary' onClick={handleOpenCreatePostModel}>
              <VideocamIcon/>
            </IconButton>

            <span>video</span>

            <div className='flex items-center'>

            <IconButton color='primary' onClick={handleOpenCreatePostModel}>
              <ArticleIcon/>
            </IconButton>

            <span>Write Article</span>

          </div>


        </div>

    </div>
    </div>

      </Card>

      <div className='mt-5 sapce-y-5'>
        
        {post.map(()=><PostCard/>)}
      </div>

    </div>
    
  )
}

export default MiddlePart