import grassyField from "../images/grassy-field.jpg"
import React from 'react';

function Header({ title, subTitle }) {
    return (
            <div className='App-header'>
                <div style={{
                    backgroundImage: `url(${grassyField})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    color: "#20F444",
                }}>

                    <div className="container" style={{ minHeight: '350px' }}>
                        <div className="text-center justify-content-center align-self-center">
                            <h1>{title}</h1>
                            <h5>{subTitle}</h5>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default Header;