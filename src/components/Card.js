import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className="col-sm-4">
      <div className="mycard">
        <div className="card mx-2 mb-2 my-2 bg-gradient-light border border-warning ">
          <img
            className="card-image image-fluid"
            src={`https://robohash.org/${id}/?set=set4`}
            alt="name"
          />
          <div className="card-body">
            <h2 className="card-title text-dark text-center">{name}</h2>
            <p className="card-text text-dark text-center">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
