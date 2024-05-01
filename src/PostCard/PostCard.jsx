
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'sans-serif',
    ].join(','),
  },
});

function PostCard({ avatarSrc, author, date, imageSrc, likesCount, commentCount, imageFooter }) {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 470, margin: '5px auto', boxShadow: 3, backgroundColor: '#212121' }}>
        <CardHeader
          avatar={<Avatar src={avatarSrc} alt={author} />}
          title={<Typography variant="body1" sx={{ fontSize: '14px', color: 'white'}}>{author}</Typography>}
          subheader={<Typography variant="body2" sx={{ fontSize: '12px', color: 'white', fontWeight: 'normal', fontWeight: '100' }}>{date}</Typography>}
        />
        <CardMedia
          component="img"
          height="320"
          image={imageSrc}
          alt="Post Image"
        />
        <Typography variant="body2" color="white" sx={{ padding: '16px' }}>
          {imageFooter}
        </Typography>
        <CardContent sx={{ display: 'flex', alignItems: 'center', marginBottom:'-4px',marginLeft: '-8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '5px', marginTop:'-40px', paddingTop:'12px'}}>
            <IconButton aria-label="like">
              <FavoriteIcon sx={{ color: 'white' }} />
            </IconButton>
            <Typography variant="body2" color="white" >
              {likesCount} Likes
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop:'-40px', paddingTop:'12px' }}>
            <IconButton aria-label="comment">
              <ChatIcon sx={{ color: 'white' }} />
            </IconButton>
            <Typography variant="body2" color="white">
              {commentCount} Comments
            </Typography>
          </div>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

export default PostCard;