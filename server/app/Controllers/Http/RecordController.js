'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

import RecordService from '../../Serivces/RecordService';

/**
 * Resourceful controller for interacting with records
 */
class RecordController {
  constructor() {
    this.recordService = new RecordService();
  }
  /**
   * Show a list of all records.
   * GET records
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Render a form to be used for creating a new record.
   * GET records/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async createNewRecord({ auth, request, response }) {
    const currentUser = await auth.getUser();
    const recordDto = request.only([
      'recordMoney',
      'recordDate',
      'recordSummary',
      'selectType'
    ]);
    recordDto.user_id = currentUser.id;

    const result = this.recordService.createNewRecord(recordDto);
    return result;
  }

  /**
   * Create/save a new record.
   * POST records
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single record.
   * GET records/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing record.
   * GET records/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update record details.
   * PUT or PATCH records/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a record with id.
   * DELETE records/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = RecordController;
