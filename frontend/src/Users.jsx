import { Box } from '@mui/material';
import UserForm from './UserForm';
import UsersTable from './UsersTable'
import Axios from 'axios';
import { useState,useEffect } from 'react';



const Users = () => {

    useEffect(() => {
        getUsers();

    },[])

    const[users,setUsers] = useState([]);

    const getUsers = () =>{
        Axios.get('http://localhost:3001/api/users')
           .then(response => {
                setUsers(response.data?.response || []);
        })
            .catch(error => {
                console.log("Axios error:", error);
            })
    }

   




  return (
    <>
        <Box
        sx={{
            width: 'calc(100% - 100px)',
            margin: 'auto',
            marginTop: '100px'
        }}
        
        
        >
        <UserForm />
        <UsersTable rows={users} />
        </Box>
       







    </>
  )
}

export default Users;
