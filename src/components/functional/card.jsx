import React from 'react'
import { Card, CardImg } from 'reactstrap';
import PropTypes from 'prop-types';
import { CUSTOM_AVATAR } from '../../constants/index';

const AuthCard = ({ children }) => {
  return (
    <div className="row h-100">
      <div className="col-sm-12 my-auto">
        <Card body className="customCard col-sm-8 col-md-6 col-lg-4 shadow-lg">
          <CardImg src={CUSTOM_AVATAR} />
          {children}
        </Card>
      </div>
    </div>
  );
}

AuthCard.defaultProps = {
  children: {}
}

AuthCard.propTypes = {
  children: PropTypes.instanceOf(Object),
};

export default AuthCard;