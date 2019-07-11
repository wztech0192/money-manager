'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class RecordGroupSchema extends Schema {
  up() {
    this.create('record_groups', table => {
      table.increments();
      table.timestamps();
      table.string('groupName', 50).notNullable();
      table.boolean('isPositive').defaultTo(false);
    });
  }

  down() {
    this.drop('record_groups');
  }
}

module.exports = RecordGroupSchema;
