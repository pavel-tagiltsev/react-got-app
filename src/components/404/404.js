import React from "react";
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <h1>404 - not found</h1>
            <Link to='/'>Go to home page</Link>
        </>
    )
}

export default NotFound;