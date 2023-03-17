import {createTheme} from '@mui/material';
import {purple, amber} from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
            dark: purple[800],
            light: purple[300]
        },
        secondary: {
            main: amber[700],
            dark: amber[800],
            light: amber[300]
        },
        purplePalette: {
            light: '#E2C2C6',
            success: '#B9929F',
            main: '#9C528B',
            warning: '#610F7F',
            dark: '#2F0147',
        },
    },
});


/*
 secondary: {
            main: '#E2C2C6',
            light: '#B9929F',
            primary: '#15c630',
            secondary: '#610F7F',
            dark: '#2F0147',
        },
        otherColor: {
            main: '#fff',
            light: '#dedede',
            primary: '#999',
            secondary: '#333',
            dark: '#2b2b2b',
        },
 */