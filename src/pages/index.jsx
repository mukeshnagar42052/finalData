import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SearchAppBar from '../component/header';
import SideBar from '../component/sideBar';
import MovieCard from '../component/card';
import movieData from '../dataMovie.js';
import { Grid, Typography } from '@mui/material';
import CarDetails from '../component/cardDetails';

const drawerWidth = 275;
const MainBox = styled("Box")(({ theme }) => ({
  background: '#273244',
  minHeight: '100vh',
  padding: '52px 28px 52px 52px',
  [theme.breakpoints.down('sm')]: {
    padding: '60px 0 10px 10px',
  },
  '.MuiTypography-h6': {
    color: '#fff',
    fontSize: 21,
    paddingTop: 6,
    marginLeft: 24,
  },
}))

function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [moviesData, setMoviesData] = React.useState(movieData);
  const [searchValue, setsearchValue] = React.useState("");
  const [movieDetails, setMovieDetails] = React.useState({
    data: {},
    status: false
  });

  React.useEffect(() => {
    setMoviesData(movieData);
  }, []);

  // console.log(moviesData, "moviesData");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const searchFilter = React.useCallback(async () => {
    const results = moviesData.filter(post => {
      return post.Title.toLowerCase().includes(searchValue.trim().toLowerCase())
    })
    setMoviesData(results);
  }, [moviesData, searchValue]);

  React.useEffect(() => {
    if (!!searchValue && searchValue.length >= 2 && searchValue.length <= 30) {
      searchFilter();
    } else if (searchValue === "" || searchValue.length < 2) {
      setMoviesData(movieData);
    }
  }, [searchFilter, searchValue]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SearchAppBar searchValue={searchValue} setsearchValue={setsearchValue} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <SideBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <MainBox
        component="main"
        sx={{ flexGrow: 1, pt: 15, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Grid container xs={12} spacing={3} sx={{ pt: 3 }}>
          <Grid item xs={12}>
            {movieDetails.status ? <CarDetails movieDetails={movieDetails} /> : <></>}
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={3} sx={{ pt: 3 }}>
          {moviesData && moviesData?.length ?  
            (moviesData.map((val, index) => (
              <Grid item xs={12} md={4} lg={2.4} key={index}>
                <MovieCard setMovieDetails={setMovieDetails} data={val} />
              </Grid>
            )))
           : <Typography gutterBottom variant="h6" sx={{ pt: 1 }} component="div">No results found for your dearch.</Typography> }
        </Grid>
      </MainBox>
    </Box>
  );
}
export default ResponsiveDrawer;