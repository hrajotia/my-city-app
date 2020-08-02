import React, {Fragment} from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Routes from './Routes';

export class AppLayout extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <Header />
          <Routes />
          <Footer />
        </div>
      </Fragment>
    )
  }
}

AppLayout.propTypes = {
};

export function mapStateToProps(state) {
  return {
    app: state.app
  };
}

export const mapDispatchToProps = () => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
