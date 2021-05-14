import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <nav>
            <Link to="/"><i class="fa fa-home" aria-hidden="true"></i>Tech-Hut Todo</Link>
        </nav>
    );
};

export default header;