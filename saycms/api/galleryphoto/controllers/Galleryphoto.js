'use strict';

/**
 * Galleryphoto.js controller
 *
 * @description: A set of functions called "actions" for managing `Galleryphoto`.
 */

module.exports = {

  /**
   * Retrieve galleryphoto records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.galleryphoto.search(ctx.query);
    } else {
      return strapi.services.galleryphoto.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a galleryphoto record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.galleryphoto.fetch(ctx.params);
  },

  /**
   * Count galleryphoto records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.galleryphoto.count(ctx.query);
  },

  /**
   * Create a/an galleryphoto record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.galleryphoto.add(ctx.request.body);
  },

  /**
   * Update a/an galleryphoto record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.galleryphoto.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an galleryphoto record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.galleryphoto.remove(ctx.params);
  }
};
