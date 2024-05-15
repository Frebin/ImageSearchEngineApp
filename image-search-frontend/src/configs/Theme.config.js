import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0F0F0F',
            light: '#232D3F',
            dark: '#232D3F'
        },
        secondary: {
            main: '#005B41',
            dark: '#008170',
            contrastText: '#F8F8F8'
        },
        background: {
            default: '#F8F8F8',
        }
    },
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(',')
    }
})