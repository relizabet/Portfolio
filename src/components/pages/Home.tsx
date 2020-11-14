import React from 'react';
import Header from '../Header/Header';

const Home: React.FC<{}> = () => {
    const headingOne = "Rachel E. Campbell";
    const headingFour = "Full Stack Web Developer";

    return (
        <div>
            <Header headingOne={headingOne} headingFour={headingFour}/>
        </div>
    );
}

export default Home;