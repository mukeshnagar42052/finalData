import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import TvIcon from '@mui/icons-material/Tv';
import ListIcon from '@mui/icons-material/List';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import UserPic from '../../assets/user-img.png';

const drawerWidth = 275;
 
const DrawerStyle = styled("Box")(({ theme }) => ({
    '.MuiDrawer-paper': {
        background: '#1F2A3C',
        '.MuiListItem-root': {
            padding: '0 36px',
            '.MuiButtonBase-root': {
              paddingTop: 5,
              paddingBottom: 4,
              margin: '3px 0',
            },
            '.MuiListItemIcon-root': {
                minWidth: 38,
            },
            '.MuiListItemText-root': {
                margin: 0,
            },
            '.MuiTypography-root': {
                color: '#D4D7DD',
            },
            '.MuiSvgIcon-root': {
                fill: '#D4D7DD',
            },
        },
        '.MuiDivider-root': {
            borderColor: '#394B61',
        },
    },    
}))

const ActiveListItem = styled(ListItem)(({ theme }) => ({
  position: 'relative',
  '&:after': {
    width: 3,
    height: 33,
    content: '""',
    position: 'absolute',
    right: 0,
    top: 3,
    background: '#00E0FF',
  },  
  '.MuiTypography-root': {
      color: '#00E0FF !important',
  },
  '.MuiSvgIcon-root': {
      fill: '#00E0FF !important',
  },
}))

const UserStyle = styled("Box")(({ theme }) => ({
    textAlign: 'center',
    padding: '40px 0 20px',
    display: 'block',
    '.MuiAvatar-root': {
        display: 'inline-flex',
    },
    '.MuiTypography-root': {
        fontSize: 20,
        color: '#D4D7DD',
        margin: 0,
    },
}))

function SideBar(props) {
  const { window } = props;
  const {mobileOpen, handleDrawerToggle} = props

 

  const drawer = (
    <div>
      <UserStyle>
        <Avatar
            alt="Remy Sharp"
            src={UserPic}
            sx={{ width: 100, height: 100 }}
        />
        <Typography gutterBottom variant="h4" sx={{ pt: 1 }} component="div">Eric Hoffman</Typography>
      </UserStyle>
      <Divider />
      <List>        
        <ActiveListItem>
            <ListItemButton>
                <ListItemIcon><SearchIcon /></ListItemIcon>
                <ListItemText>Discover</ListItemText>
            </ListItemButton>
        </ActiveListItem>               
        <ListItem>
            <ListItemButton>
                <ListItemIcon><PlaylistPlayIcon /></ListItemIcon>
                <ListItemText>Playlist</ListItemText>
            </ListItemButton>
        </ListItem>        
        <ListItem>
            <ListItemButton>
                <ListItemIcon><OndemandVideoIcon /></ListItemIcon>
                <ListItemText>Movie</ListItemText>
            </ListItemButton>
        </ListItem>        
        <ListItem>
            <ListItemButton>
                <ListItemIcon><TvIcon /></ListItemIcon>
                <ListItemText>TV Shows</ListItemText>
            </ListItemButton>
        </ListItem>        
        <ListItem>
            <ListItemButton>
                <ListItemIcon><ListIcon /></ListItemIcon>
                <ListItemText>My List</ListItemText>
            </ListItemButton>
        </ListItem>        
      </List>
      <Divider />
      <List>        
        <ListItem>
            <ListItemButton>
                <ListItemIcon><WatchLaterIcon /></ListItemIcon>
                <ListItemText>Watch Later</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemIcon><FavoriteBorderIcon /></ListItemIcon>
                <ListItemText>Recomended</ListItemText>
            </ListItemButton>
        </ListItem>        
      </List>
      <Divider />
      <List>        
        <ListItem>
            <ListItemButton>
                <ListItemIcon><SettingsIcon /></ListItemIcon>
                <ListItemText>Settings</ListItemText>
            </ListItemButton>
        </ListItem> 
        <ListItem>
            <ListItemButton>
                <ListItemIcon><LogoutIcon /></ListItemIcon>
                <ListItemText>Logout</ListItemText>
            </ListItemButton>
        </ListItem>        
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
      <DrawerStyle
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </DrawerStyle>
  );
};
SideBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  
export default SideBar;