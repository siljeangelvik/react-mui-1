import {
    Avatar,
    AvatarGroup,
    Box, Divider, ImageList, ImageListItem,
    List,
    ListItem,
    ListItemAvatar, ListItemText,
    Typography
} from '@mui/material';
import {Logo} from './logo/Logo';
import React from 'react';

const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{display: {xs: 'none', sm: 'block'}}}>
            <Box position='fixed' width={300}>
                <Typography variant={'h6'} fontWeight={100}>
                    Online Friends
                </Typography>
                <AvatarGroup max={7}>
                    <Avatar alt={'Marielle'} src={'./media/marielle.jpg'}/>
                    <Avatar alt={'Ingrid'} src={'./media/ingrid.jpg'}/>
                    <Avatar alt={'Synne'} src={'./media/synne.jpg'}/>
                    <Avatar alt={'Silje'} src={'./media/silje.jpg'}/>
                    <Avatar alt={'Sebastian'} src={'./media/sebastian.jpg'}/>
                    <Avatar alt={'Marielle'} src={'./media/marielle.jpg'}/>
                    <Avatar alt={'Ingrid'} src={'./media/ingrid.jpg'}/>
                    <Avatar alt={'Synne'} src={'./media/synne.jpg'}/>
                    <Avatar alt={'Silje'} src={'./media/silje.jpg'}/>
                    <Avatar alt={'Sebastian'} src={'./media/sebastian.jpg'}/>
                </AvatarGroup>

                <Typography variant={'h6'} fontWeight={100} mt={2} mb={2}>
                    Latest Photos
                </Typography>
                <ImageList cols={3} rowHeight={164} gap={5}>
                    <ImageListItem>
                        <img
                            src={'./media/posts/NyMaskot.png'}
                            alt={'Lag Ny Maskot'}
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src={'./media/posts/søk_deg_inn_bystream-2021.jpg'}
                            alt={''}
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src={'https://material-ui.com/static/images/image-list/breakfast.jpg'}
                            alt={''}
                            loading="lazy"
                        />
                    </ImageListItem>
                </ImageList>

                <Typography variant={'h6'} fontWeight={100} mt={2}>
                    Latest Conversations
                </Typography>
                <List>
                    <ListItem sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                        <ListItemAvatar>
                            <Avatar alt={'ByLan'} src={Logo}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{display: 'inline'}}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{display: 'inline'}}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"/>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{display: 'inline'}}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Rightbar;
