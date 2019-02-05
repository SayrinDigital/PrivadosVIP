'use strict';

/**
 * Serviceplan.js controller
 *
 * @description: A set of functions called "actions" for managing `Serviceplan`.
 */

module.exports = {

  /**
   * Retrieve serviceplan records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.serviceplan.search(ctx.query);
    } else {
      return strapi.services.serviceplan.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a serviceplan record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.serviceplan.fetch(ctx.params);
  },

  /**
   * Count serviceplan records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.serviceplan.count(ctx.query);
  },

  /**
   * Create a/an serviceplan record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.serviceplan.add(ctx.request.body);
  },

  /**
   * Update a/an serviceplan record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.serviceplan.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an serviceplan record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.serviceplan.remove(ctx.params);
  }
};
