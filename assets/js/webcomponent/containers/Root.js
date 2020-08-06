import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import { fetchTranslation } from '../actions/appActions';

import App from '../components/App';

class Root extends Component {
  componentDidMount() {
    const { app } = this.props;
    this.props.fetchTranslation(app.locale);
  }

  render() {
    const { app } = this.props;
    const tranlation = app.translations[app.locale];

    if (isEmpty(tranlation)) {
      return <div />;
    }

    return (
      <IntlProvider locale={app.locale} messages={tranlation} >
        <App />
      </IntlProvider>
    );
  }
}

Root.propTypes = {
  app: PropTypes.object,
  fetchTranslation: PropTypes.func
};

function mapStateToProps(state) {
  return {
    app: state.app
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTranslation: (locale) => dispatch(fetchTranslation(locale))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
