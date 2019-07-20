'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const RecordService = use('App/Serivces/RecordService');

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

  async getRecordGroups({ auth }) {
    await auth.getUser();
    const result = await this.recordService.getRecordGroups();
    return result;
  }

  async getRecords({ auth }) {
    const user = await auth.getUser();
    const result = await this.recordService.getRecords(user);
    return result;
  }

  async getRecordsByRange({ auth, params }) {
    const user = await auth.getUser();
    const result = await this.recordService.getRecordsByRange(user, params);
    return {
      records: result,
      start: params.start,
      end: params.end
    };
  }

  /**
   * creating a new record.
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
    recordDto.userID = currentUser.id;
    const result = await this.recordService.createRecord(recordDto);
    if (!result.isSuccess) {
      response.status(400);
      return result.errors;
    }

    return result.data;
  }

  /**
   * creating a new record type.
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async createRecordType({ auth, request, response }) {
    await auth.getUser();
    const recordTypeDto = request.only(['typeName', 'selectGroup']);
    const result = await this.recordService.createType(recordTypeDto);
    if (!result.isSuccess) {
      response.status(400);
      return result.errors;
    }

    return result.data;
  }

  /**
   * creating a new record group.
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async createRecordGroup({ auth, request, response }) {
    await auth.getUser();
    const recordGroupDto = request.only(['isPositive', 'groupName']);
    const result = await this.recordService.createGroup(recordGroupDto);
    if (!result.isSuccess) {
      response.status(400);
      return result.errors;
    }

    return result.data;
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
