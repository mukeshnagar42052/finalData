import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginRight: 'auto',
  '~ button': {
    marginLeft: 0,
    '& svg': {
      fill: '#D4D7DD',
    },
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',

  },
  background: 'none',
  '& .MuiSvgIcon-root': {
    fill: '#D4D7DD !important',
    marginTop: 4,
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiSvgIcon-root': {
    fill: '#D4D7DD',
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 0,
      borderRadius: 8,
      padding: '16px 28px 16px 50px',
      '&:focus': {
        width: '60ch',
        background: '#1A2536',
      },
    },
  },
}));

const HeaderStyle = styled("Box")(({ theme }) => ({
  '.MuiPaper-root': {
    background: '#273244',
    boxShadow: 'none',
    padding: '25px 26px',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    }
  },
}))
const drawerWidth = 275;

export default function SearchAppBar(props) {
  const { handleDrawerToggle, searchValue, setsearchValue } = props;

  const handleChangeSearch = (e) => {
    if (e.target.value) {
      setsearchValue(e.target.value)
    } else {
      setsearchValue('');
    }
  };

  return (
    <HeaderStyle sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <StyledInputBase
              value={searchValue}
              onChange={handleChangeSearch}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
          >
            <LightModeIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
          >
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </HeaderStyle>
  );
}
