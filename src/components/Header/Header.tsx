import React from 'react';
import "./Header.css";

type Props = {
  headingOne: string;
  headingFour: string;
}

const Header: React.FC<Props> = ({headingOne, headingFour}) => {
    return (
        <div className="header-overlay">
        <header className="container">
          <h1 className="animate__animated animate__fadeIn">{headingOne}</h1>
          <h4 className="animate__animated animate__fadeIn test">{headingFour}</h4>
        </header>
      </div>
    );
}

export default Header;