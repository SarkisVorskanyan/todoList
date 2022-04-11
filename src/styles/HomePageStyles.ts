import {makeStyles} from '@mui/styles'


export const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100%',
        flexDirection: 'column',
        marginTop: 100,
        padding: 10
    },
    header: {
        display: 'flex',
        backgroundColor: '#43b99e',
        padding: 25,
        borderRadius: 10,
        justifyContent: 'space-between'
        
    }
})