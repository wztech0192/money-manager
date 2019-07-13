'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class RecordTypeSchema extends Schema {
  up() {
    this.create('record_types', table => {
      table.increments();
      table.timestamps();
      table
        .integer('record_group_id')
        .unsigned()
        .references('id')
        .inTable('record_groups')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.string('typeName', 50).notNullable();
    });
  }

  down() {
    this.drop('record_types');
  }
}

module.exports = RecordTypeSchema;
