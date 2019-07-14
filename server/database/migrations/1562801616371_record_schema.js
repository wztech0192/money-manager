'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class RecordSchema extends Schema {
  up() {
    this.create('records', table => {
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('record_type_id')
        .unsigned()
        .references('id')
        .inTable('record_types')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      table.text('summary');
      table.datetime('date');
      table.decimal('money');
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop('records');
  }
}

module.exports = RecordSchema;
