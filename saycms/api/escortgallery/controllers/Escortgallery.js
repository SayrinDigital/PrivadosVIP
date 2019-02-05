'use strict';

/**
 * Escortgallery.js controller
 *
 * @description: A set of functions called "actions" for managing `Escortgallery`.
 */

module.exports = {

  /**
   * Retrieve escortgallery records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.escortgallery.search(ctx.query);
    } else {
      return strapi.services.escortgallery.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a escortgallery record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.escortgallery.fetch(ctx.params);
  },

  /**
   * Count escortgallery records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.escortgallery.count(ctx.query);
  },

  /**
   * Create a/an escortgallery record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.escortgallery.add(ctx.request.body);
  },

  /**
   * Update a/an escortgallery record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.escortgallery.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an escortgallery record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.escortgallery.remove(ctx.params);
  }
};
