import {Favorite, FavoriteBorder, MoreVert, Share} from '@mui/icons-material';
import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography} from '@mui/material';

const NyMaskot = () => {
    return (
        <Card sx={{margin: 5}}>
            <CardHeader
                avatar={
                    <Avatar
                        sx={{width: 50, height: 50}}
                        aria-label='marielle'
                        src='./media/marielle.jpg'>
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert/>
                    </IconButton>
                }
                title="Marielle Graave"
                subheader="Oktober 14, 2021"
            />
            <CardMedia
                component="img"
                height="20%"
                image="./media/posts/NyMaskot.png"
                alt="Lag vår nye maskot!"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color: 'red'}}/>}/>
                </IconButton>
                <IconButton aria-label="share">
                    <Share/>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default NyMaskot;
