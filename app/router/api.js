'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;

  const apiRouter = router.namespace('/api', middleware.auth());

  apiRouter.resources('/users', controller.api.user);
};
