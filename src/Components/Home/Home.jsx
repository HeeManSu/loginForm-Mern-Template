import React from 'react';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logout } from '../../app/Actions/userActions';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const naviagte = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        naviagte('/');
    }

    return (
        <div className='text-[50px] text-black flex-col font-[500] flex items-center justify-center'>Home Page


            <Button
                _hover={{
                    backgroundColor: 'blue.400'
                }}
                onClick={logoutHandler}
                textColor={'white'}
                backgroundColor={'blue.400'}
                py={5}
            >
                Logout
            </Button>
        </div>

    )
}

export default Home