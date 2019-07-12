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
  Route.post('record/create', 'RecordController.createRecord');
  Route.post('type/create', 'RecordController.createType');
  Route.post('group/create', 'RecordController.createGroup');
  Route.get('group', 'RecordController.getRecordGroups');
})
  .middleware('auth')
  .prefix('api');
