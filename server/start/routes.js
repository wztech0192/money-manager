'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.group(() => {
  /**
   * Record Controller
   */
  Route.post('login', 'UserController.login');
}).prefix('api');

Route.group(() => {
  /**
   * Record Controller
   */
  Route.post('record/create', 'RecordController.createNewRecord');
  Route.post('type/create', 'RecordController.createRecordType');
  Route.post('group/create', 'RecordController.createRecordGroup');
  Route.get('group/all', 'RecordController.getRecordGroups');
})
  .middleware('auth')
  .prefix('api');
