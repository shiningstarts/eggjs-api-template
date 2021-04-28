'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;

  const webRouter = router.namespace('/web', middleware.auth());

  webRouter.resources('/users', controller.web.user);
};
