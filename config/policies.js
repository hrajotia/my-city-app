/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,

  HealthcheckController: {
    healthCheck: true
  },
  LocaleController: {
    getTranslation: true
  },
  MyCityController: {
    getAllMyCity: true,
    getAllMyCityPaginated: true,
    createMyCity: true,
    getMyCity: true,
    updateMyCity: true,
    deleteMyCity: true

  }

};
