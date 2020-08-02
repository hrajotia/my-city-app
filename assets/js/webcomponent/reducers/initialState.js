import constants from '../constants';

export default {
  app: {
    locale: constants.app.defaultLocale,
    translations: {
      [constants.app.defaultLocale]: {}
    },
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
