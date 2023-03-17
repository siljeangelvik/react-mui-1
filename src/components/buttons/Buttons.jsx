import {Button, styled, Typography} from '@mui/material';
import {Add, Settings} from '@mui/icons-material';


const Buttons = () => {

    const MyButton = styled(Button)(({theme}) => ({
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary,
        margin: 5,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.light,
        },
        '&:disabled': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.light,
        },
    }));

    const BlueButton = styled(Button)({
        backgroundColor: 'skyblue',
        color: '#888',
        margin: 5,
        '&:hover': {
            backgroundColor: 'lightblue',
        },
        '&:disabled': {
            backgroundColor: 'gray',
            color: 'white',
        },
    });

    return (
        <div>
            <Typography variant='h1'>H1. Heading</Typography>

            <div>
                <Button variant='contained'
                        sx={{
                            backgroundColor: 'skyblue',
                            color: '#888',
                            margin: 5,
                            '&:hover': {
                                backgroundColor: 'lightblue',
                            },
                            '&:disabled': {
                                backgroundColor: 'gray',
                                color: 'white',
                            },
                        }}>my Unique Button</Button>
                <BlueButton>'Blue' Button</BlueButton>
                <MyButton>My Button</MyButton>
            </div>
            <div>
                <h3>Theme:</h3>
                <ul>
                    <li>primary: main, light</li>
                    <Button variant='contained'
                            color='primary'
                            size='medium'
                    >
                        primary
                    </Button>
                    <li>secondary: main, light</li>
                    <Button variant='contained'
                            color='secondary'
                            size='medium'
                    >
                        secondary
                    </Button>
                    <li>dark: main, light</li>
                    <Button startIcon={<Settings/>}
                            variant='contained'
                            color='purplePalette'
                            size='medium'
                    >
                        purple palette
                    </Button>
                </ul>
            </div>
            <br/>
            <div>
                <Button variant='text'
                        color='secondary'
                        size='large'
                >
                    Button Text
                </Button>
                <Button startIcon={<Settings/>}
                        variant='contained'
                        color='primary'
                        size='medium'
                >
                    Button Contained
                </Button>
                <Button startIcon={<Add/>}
                        variant='contained'
                        color='success'
                        size='medium'
                >
                    Button Add new post
                </Button>
                <Button variant='outlined'
                        size='small'
                        disabled
                >
                    Button Outlined
                </Button>
            </div>
        </div>
    );
}

export default Buttons;