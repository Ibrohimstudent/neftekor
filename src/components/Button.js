import React from 'react';

function Button(props) {
    return (
        <button style={{
            width:"100px",
            height:"40px",
            backgroundColor:"indigo",
            color:"white"
        }}>
            {props.children}


        </button>
    );
}

export default Button;