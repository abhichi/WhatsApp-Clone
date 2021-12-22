import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    component: {
        display: 'flex',
        height: 40,
        padding: '13px 0',
        cursor: 'pointer'
    },
    displayPicture: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        padding: '0 14px'
    }
})

const Conversation = ({ user }) => {
    const classes = useStyles();
    const url = user.imageUrl
    return(
        <Box className={classes.component}>
            <Box>
                <img src={url} alt="display-picture" className={classes.displayPicture}/>
            </Box>
            <Box>
                <Box>
                    <Typography>{user.name}</Typography>
                </Box>
            </Box>
        </Box>

    )
}

export default Conversation;