import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class UserHome extends React.Component {
  render() {
    return (
      <div className='user-home-container'>
        <div className='user-sections'>
          <div className='user-main-section'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

UserHome.propTypes = {
  children: PropTypes.element
};

function mapStateToProps(/*state*/) {
  return {
  };
}

const mapDispatchToProps = (/*dispatch*/) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
