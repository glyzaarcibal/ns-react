import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {Typography}  from '@mui/material';
import  {Link} from 'react-router-dom';
import Stack from '@mui/material/Stack';

export const PostList = ({post}) =>{

    return (
      <div>
        <Card sx={{ minWidth:275  }}>
          <CardContent>
            <Link to={'/post/${post.id}'}>
                <h2>{post.title}</h2>
            </Link>
            <Typography variant="h5" color="text.secondary" component="div">
               Slug: {post.slug}
            </Typography>
            <Typography variant="h5" color="text.secondary" component="div">
               Content: {post.content}
            </Typography>
          </CardContent>

          <CardActions>

            <Stack direction="row" spacing={0.5}>
              <Link to={'/post/update/${post.id}'}>
                <Button variant="contained" color="success">
                  edit
                </Button>
              </Link>
            </Stack>
            <Button size="small">read more</Button>
          </CardActions>
        </Card>
      </div>
    )
}
export default PostList