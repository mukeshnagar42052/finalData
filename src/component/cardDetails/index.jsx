import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card, Box } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Grid } from '@mui/material';
import ChefImgOne from '../../assets/chef-1.png';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';

const CardStyle = styled(Card)(({ theme }) => ({
    background: '#394B61',
    borderRadius: 11,
    padding: 0,
    '.MuiCardContent-root': {
        color: '#D4D7DD',
        padding: '0 0',
        textAlign: 'left',
        [theme.breakpoints.down('md')]: {
            padding: 10,
        },
        '.MuiTypography-root': {
            margin: '10px 0 5px',
            fontSize: 15,            
        },
        '.MuiTypography-h6': {
            margin: '10px 0 5px',
            fontSize: 14,            
        },
        '.MuiTypography-h5': {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
        },
        '.MuiTypography-h3': {
            fontSize: 30,
            fontWeight: '700',
            paddingTop: 25,
        },
        '.MuiTypography-h4': {
            fontSize: 16,
            fontWeight: '600',
        },
    },
    '.MuiCardActions-root': {
        padding: 0,
        [theme.breakpoints.down('md')]: {
            padding: 10,
        },
        '& button': {
            margin: '22px 12px 25px 0',            
            [theme.breakpoints.up('md')]: {
                minWidth: 154,
            },            
            textTransform: 'capitalize',
            fontSize: 16,
            fontWeight: '700',
            [theme.breakpoints.down('md')]: {
                fontSize: 14,
            },
            '&.MuiButton-contained': {
                background: '#00E0FF',
                color: '#000',
            },
            '&.MuiButton-outlined': {
                borderColor: '#00E0FF',
                color: '#00E0FF',
            },
        },
    },
}))

const ProgressStyle = styled(Box)(({ theme }) => ({
    '.MuiLinearProgress-root': {
        height: 8,
        background: '#283647',
        borderRadius: 5,
        '.MuiLinearProgress-bar': {
            background: '#00E0FF',
        },
    },
    '.MuiTypography-root': {
        marginTop: '3px !important',
        color: '#fff',
        whiteSpace: 'nowrap',
    },
}))

function LinearProgressWithLabel(props) {
    return (
      <ProgressStyle sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )} / 100`}</Typography>
        </Box>
      </ProgressStyle>
    );
  }

export default function MovieCard(props) {
    console.log(props.movieDetails, "props.movieDetails");
    const { Title, Poster, Runtime, Director, Year, Language, Plot,imdbRating } = props.movieDetails.data;
    
    // const [progress, setProgress] = React.useState(1);

    // React.useEffect(() => {
    //     const timer = setInterval(() => {
    //         setProgress((prevProgress) => (prevProgress >= 10 ? 1 : prevProgress + 1));
    //     }, 80000);
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, []);

    return (
        <CardStyle sx={{ maxWidth: '100%' }}>
            <CardActionArea>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <CardMedia
                            component="img"
                            height="400"
                            onError={e => {
                                e.target.src = ChefImgOne;
                            }}
                            image={Poster}
                            alt="green iguana"
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div">
                                {Title}
                            </Typography>
                            {Number(imdbRating) ? <Grid container>
                                <Grid item xs={6} md={3.5}>
                                    <LinearProgressWithLabel value={imdbRating} />
                                </Grid>
                            </Grid> : <></>}
                            
                            <Grid container>
                                <Grid item xs={6} md={3}>
                                    <Typography gutterBottom variant="h4" component="div">Year:</Typography>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Typography gutterBottom variant="h4" component="div">
                                        {Year}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={6} md={3}>
                                    <Typography gutterBottom variant="h4" component="div">Running Time:</Typography>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Typography gutterBottom variant="h4" component="div">
                                        {Runtime}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={6} md={3}>
                                    <Typography gutterBottom variant="h4" component="div">Directed by:</Typography>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Typography gutterBottom variant="h4" component="div">
                                        {!!Director ? Director : '-'}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={6} md={3}>
                                    <Typography gutterBottom variant="h4" component="div">language:</Typography>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Typography gutterBottom variant="h4" component="div">
                                        {Language}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography gutterBottom variant="h6" component="div">{Plot}</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained">Play Movie</Button>
                            <Button variant="outlined">Watch Trailer</Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </CardActionArea>
        </CardStyle>
    );
}