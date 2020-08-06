import constants from '../constants';

export default {
  app: {
    locale: constants.app.defaultLocale,
    translations: {
      [constants.app.defaultLocale]: {}
    }
  },
  user: {
    data: {
      token: '',
      username: '',
      email: '',
      firstname: '',
      lastname: ''
    },
    login: {
      data: {
        username: '',
        password: ''
      },
      errMsg: '',
      errors: {}
    },
    signup: {
      data: {
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: ''
      },
      errMsg: '',
      errors: {}
    }
  },
  myCities: {
    errMsg: '',
    paginated: {
      data: [],
      perPage: constants.table.perPage,
      page: constants.table.page,
      sort: '',
      totalSize: 0
    }
  }
};
