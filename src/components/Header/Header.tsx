import React from 'react';

type Props = {
  headingOne: string;
  headingFour: string;
}

const Header: React.FC<Props> = ({headingOne, headingFour}) => {
    return (
        <header className="container container-box-shadow">
          <h1 className="animate__animated animate__fadeIn header-one-style">{headingOne}</h1>
          <h4 className="animate__animated animate__fadeIn test header-four-style">{headingFour}</h4>
        </header>
    );
}

export default Header;