import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ChefImgOne from '../../assets/chef-1.png';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';

const CardStyle = styled(Card)(({ theme }) => ({
  background: '#394B61',
  borderRadius: 11,
  padding: 10,
  cursor: "pointer",
  '.MuiCardContent-root': {
    color: '#D4D7DD',
    padding: '0 0',
    textAlign: 'left',
    '.MuiTypography-root': {
      margin: '10px 0 5px',
      fontSize: 15,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  },
  '.MuiCardActions-root': {
    padding: 0,
    '& button': {
      padding: 0,
      margin: '0 12px 0 0',
      '& svg': {
        fill: '#D4D7DD',
      },
    },
  },
}))

export default function MovieCard(props) {
  const { Title, Poster } = props.data;

  const handleChangeMovieCard = () => {
    props.setMovieDetails(({
      data: props.data,
      status: true
    }));
    window.scrollTo(0, 0);
  }
  return (
    <CardStyle onClick={handleChangeMovieCard} sx={{ maxWidth: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={Poster}
          onError={e => {
            e.target.src = ChefImgOne;
          }}
          alt="Movie Banner"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <PlayCircleOutlineRoundedIcon />
        </IconButton>
        <IconButton aria-label="share">
          <AddCircleOutlineRoundedIcon />
        </IconButton>
      </CardActions>
    </CardStyle>
  );
}