import React from 'react'
import { Card, CardHeader, Avatar} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardActions from '@mui/material/CardActions';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';


function PostCard() {

  



  return (
    <Card className='mb-10'>

<CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Arun Attappan"
        subheader="@ArunAttappan"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbiUyMGhlYWR8ZW58MHx8MHx8fDA%3D"
        alt="Paella dish"
      />
    
      <CardActions className='flex justify-between'>
        <div>
          <IconButton>
            {true? <FavoriteIcon/>:<FavoriteBorderIcon/>}  
          </IconButton>

          <IconButton>
            {<ShareIcon/>}  
          </IconButton>

          <IconButton>
            {<ChatBubbleIcon/>}  
          </IconButton>
        </div>
        <div>
          <IconButton>
         
          {true? <TurnedInIcon/>:<TurnedInNotIcon/>}  
          </IconButton> 
        </div>
      </CardActions>




    </Card>
  )
}

export default PostCard