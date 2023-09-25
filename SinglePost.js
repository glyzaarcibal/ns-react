import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav';
import {Container , Card, CardHeader, CardMedia} from '@mui/material'

import {styled} from '@mui/materials/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import logo from './logo.svg'

const ExpandMore = styled((props)=>{
  const{expand, ...other}=props;
  return <IconButton {...other}/>;
  }) (({theme, expand})=>({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const SinglePost = () => {
     const [post, setPost] =useState({});
     const [expanded, setExpanded] = React.useState(false);
     let {id} =useParams();
     console.log(id);

     const fetchPosts = () => {
    axios
      .get('http://localhost:4000/api/posts/${id}')
      .then(response => {
        console.log(response.data);
       setPost(response.data);
      })
      .catch(error => alert ('Error'))
  }
  useEffect(() => { fetchPosts(); }, []);

    return (
            <div>
            <Nav/><br/>
                <Container>
                <Card sx ={{maxwidth: '345'}}>
            <CardHeader
                avatar={
                    <Avatar sx = {{ bgcolor: red [500] }} aria-label="recipe">
                        EC
                    </Avatar>
                }
                action = {
                    <IconButton aria-label ="settings">
                    <MoreVertIcon/>
                    </IconButton>
                }
                    title={post.title}
                    subheader = "September 2023"/>
                    <CardMedia
                        component = "img"
                        height = "394"
                        image = "/images"
                        alt = {post.title}/>
                    <CardContent>
                    <Typography variant = "body2"color="text.secondary">
                        Content : {post.content}
                    </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                    <IconButton aria-label = "add fave">
                        <FavoriteIcon/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                    <ExpandMore
                        expand = {expanded}
                        onClick = {handleExpandClick}
                        aria-expanded = {expanded}
                        aria-label = "show more">
                    <ExpandMoreIcon/>
                    </ExpandMore>
                </CardActions>
                </Card>
                </Container>
                </div>  
    )
    }
    export default SinglePost