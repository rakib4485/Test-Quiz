import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../../images/home_img.webp';
import './Home.css';

const Home = () => {
    return (
        <div className='header'>
                <h2>Welcome To Test Quiz</h2>
                <button>
                    <Link to='/quiz'>Get Started</Link>
                </button>

            <div >
                <img src={homeImg} alt="" />
            </div>
        </div>
    );
};

export default Home;