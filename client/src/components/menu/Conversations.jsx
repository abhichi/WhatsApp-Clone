import { useEffect, useContext } from "react";
import { getUsers } from "../../service/api";
import { Box, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { AccountContext } from "../../context/AccountProvider";

//components
import Conversation from "./Conversation";


const useStyles = makeStyles({
    component: {
        height: '81vh',
        overflow: 'overlay'

    }
})

const Conversations = ({ text }) => {
    const classes = useStyles();

    const [users, setUsers] = useState([]);
    const { account } = useContext(AccountContext);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getUsers();
            const filterData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filterData);
        }
        fetchData();
    },[text])

    return (
        <Box className={classes.component}>
            {
                users.map(user => (
                    user.googleId !== account.googleId &&
                    <Conversation user={user}/>
                ))
            }

        </Box>
    )
}

export default Conversations;