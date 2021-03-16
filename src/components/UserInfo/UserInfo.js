import React from 'react';

const UserInfo = (props) => {
    const {name, email, image} = props.user;
    return (
        <div>
            <h4>Ny Name is :{name} </h4>
            <h5> My Email : {email}</h5>
            <img src={image} alt=""/>
        </div>
    );
};

export default UserInfo;