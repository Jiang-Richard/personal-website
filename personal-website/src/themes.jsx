import { createTheme } from '@material-ui/core/styles';

export const responsive = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 992,
            lg: 1200,
            xl: 1920,
        },
    },
})

export const theme = createTheme({
    breakpoints: responsive.breakpoints,
    palette: {
        primary: {
            main: '#94C937',
        },
        secondary: {
            main: '#222222',
        },
        favourite: {
            main: '#dd33fa',
        }
    },
    spacing: 10,
    typography: {
        fontColor: '#94C937',
        fontDecoration: 'none',
        fontFamily: ['Roboto', 'sans-serif'],
        h1: {
            fontSize: '2.0rem',
            [responsive.breakpoints.up('sm')]: {
                fontSize: '2.5rem',
            },
            [responsive.breakpoints.up('md')]: {
                fontSize: '3.0rem',
            },
            [responsive.breakpoints.up('lg')]: {
                fontSize: '3.5rem',
            },
        },
        h2: {
            fontSize: '1.4rem',
            fontWeight: '300',
            [responsive.breakpoints.up('sm')]: {
                fontSize: '1.6rem',
            },
            [responsive.breakpoints.up('md')]: {
                fontSize: '2.0rem',
            },
            [responsive.breakpoints.up('lg')]: {
                fontSize: '2.0rem',
            },
        },
        h3: {
            fontSize: '0.9rem',
            fontWeight: '300',
            [responsive.breakpoints.up('sm')]: {
                fontSize: '1.1rem',
            },
            [responsive.breakpoints.up('md')]: {
                fontSize: '1.1rem',
            },
            [responsive.breakpoints.up('lg')]: {
                fontSize: '1.3rem',
            },
        },
        h4: {
            fontSize: '1.0rem',
            fontWeight: '400',
            [responsive.breakpoints.up('sm')]: {
                fontSize: '1.1rem',
            },
            [responsive.breakpoints.up('md')]: {
                fontSize: '1.1rem',
            },
            [responsive.breakpoints.up('lg')]: {
                fontSize: '1.3rem',
            },
        },
        h5: {
            fontSize: '1.0rem',
            fontWeight: '300',
            fontStyle: 'italic',
            [responsive.breakpoints.up('sm')]: {
                fontSize: '1.3rem',
            },
            [responsive.breakpoints.up('md')]: {
                fontSize: '1.3rem',
            },
            [responsive.breakpoints.up('lg')]: {
                fontSize: '1.5rem',
            },
        },
        h6: {
            fontSize: '0.9rem',
            fontWeight: '400',
            [responsive.breakpoints.up('sm')]: {
                fontSize: '0.9rem',
            },
            [responsive.breakpoints.up('md')]: {
                fontSize: '1.1rem',
            },
            [responsive.breakpoints.up('lg')]: {
                fontSize: '1.1rem',
            },
        },
        body1: {
            fontWeight: '500',
            fontSize: '0.9rem',
        },
        body2: {
            fontWeight: '400',
        }
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none',
            }
        }
    }
});