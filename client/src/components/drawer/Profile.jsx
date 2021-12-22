import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
    imageContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    displayPicture: {
        width: 200,
        height: 200,
        borderRadius: '50%',
        padding: '18px 0'
    },
    nameContainer: {
        background: '#ffffff',
        padding: '12px 30px 2px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        '& :first-child': {
            fontSize: 14,
            color: '#009688'
        },
        '& :last-child': {
            color: '#4a4a4a',
            margin: '14px 0'
        }
    },
    description: {
        padding: '10px 20px 28px 30px',
        '& > *': {
            fontSize: 12,
            color: 'rgba(0, 0, 0, 0.45)'
        }
        
    }

})

const Profile = () => {
    const classes = useStyles();
    const { account } = useContext(AccountContext);
    return (
        <>
            <Box className={classes.imageContainer}>
                <img src={account.imageUrl} alt="dp" className={classes.displayPicture} />
            </Box>
            <Box className={classes.nameContainer}>
                <Typography>Your Name</Typography>
                <Typography>{account.name}  </Typography>
            </Box>
            <Box className={classes.description}>
                <Typography>This is not Username or PIN. This name will be visible to your WhatsApp Contacts</Typography>
            </Box>
            <Box className={classes.nameContainer}>
                <Typography>About</Typography>
                <Typography>Don't Call...only Text</Typography>
            </Box>
        </>
    )
}
export default Profile;