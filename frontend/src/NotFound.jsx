import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './components/landingComponents/NavBar';
const NotFound = () => {
    // const navigate = useNavigate();
    // useEffect(() => {
    //     navigate('/login');
    // }, [])
    return (
        <>
            <NavBar></NavBar>

            <div className='row'>
                <div className='col-sm-2'></div>
                <div className='col-sm-8 text-center my-5 py-5'>
                    <h1 className='notFound'>404</h1>
                    <h2 className='notFound'>NOT FOUND</h2>
                    <p className='notFoundP'>The resource requested could not be found on this server.</p>
                </div>
                <div className='col-sm-2'></div>
            </div>
        </>


    )
}

export default NotFound