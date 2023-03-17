import {Mail, Notifications} from '@mui/icons-material';
import React, {useState} from 'react';
import {AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from '@mui/material';
import ByLanLogo from './logo/Logo';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const Search = styled('div')(({theme}) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
}));

const Icons = styled(Box)(({theme}) => ({
    backgroundColor: 'transparent',
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up('sm')]: {
        display: 'flex',

    }

}));

const UserBox = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up('sm')]: {
        display: 'none',

    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppBar position="stick">
            <StyledToolbar>
                <ByLanLogo/>
                <Search>
                    <InputBase placeholder='Search...'></InputBase>
                </Search>

                <Icons>
                    <Badge badgeContent={4} color='error'>
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={2} color='error'>
                        <Notifications/>
                    </Badge>
                    <Avatar
                        sx={{width: 30, height: 30}}
                        src='https://avatars.githubusercontent.com/u/78737818?v=4'
                        onClick={() => setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={() => setOpen(true)}>
                    <Avatar
                        sx={{width: 30, height: 30}}
                        src='https://avatars.githubusercontent.com/u/78737818?v=4'/>
                    <Typography variant='span'>Silje Avena Angelvik</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id='demo-positioned-menu'
                aria-labelledby='demo-positioned-menu'
                open={open}
                onClose={()=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;