import React from 'react'
import { Card, CardHeader, Avatar, Button} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';

function PopularUserCard() {
  return (
    <div>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <Button size="small">
           Follow
          </Button>
        }
        title="Arun Attappan"
        subheader="@ArunAttappan"
      />
    </div>
  )
}

export default PopularUserCard