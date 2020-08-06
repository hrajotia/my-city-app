import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Routes from './Routes';

export class AppLayout extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <Fragment>
        <div>
          <Header user={user.data} />
          <Routes />
          <Footer />
        </div>
      </Fragment>
    );
  }
}

AppLayout.propTypes = {
  user: PropTypes.object
};

export function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export const mapDispatchToProps = () => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
