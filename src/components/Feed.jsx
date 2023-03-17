import {Box} from '@mui/material';
import NyMaskot from './posts/NyMaskot';
import Post from './posts/Post';
import Post1 from './posts/Post-1';

const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <Post/>
            <NyMaskot/>
            <Post/>
            <Post1/>
        </Box>
    );
};

export default Feed;
