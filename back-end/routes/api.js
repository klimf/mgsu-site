
var express = require('express');
var router = express.Router();
var projectController = require('../apiControllers/project');
var userController = require('../apiControllers/user');
var adminController = require('../apiControllers/admin');
var fileController = require('../apiControllers/file');
var contactController = require('../apiControllers/conctact');
var resetCache = require('../apiControllers/common').resetCache;
var postController = require('../apiControllers/post');
var donationController = require('../apiControllers/donation');
var privilegesController = require('../apiControllers/privileges');
var calcController = require('../apiControllers/calculation');
var paymentsController = require('../apiControllers/gpbPayments');
var gradController = require('../apiControllers/graduate');

//projects
router.get('/projects', resetCache ,projectController.get);
router.get('/projects/:id', resetCache, projectController.getDetail);
router.post('/projects', userController.checkPermission.admin,  projectController.create);
router.post('/projects/:id/remove', resetCache,userController.checkPermission.admin,  projectController.remove);
router.put('/projects/:id', resetCache,userController.checkPermission.admin, projectController.update);

//donation
router.get('/donation/projects', projectController.getAll);
router.get('/donation', donationController.get);
router.get('/donation/new', userController.checkPermission.admin, donationController.getNew);
router.get('/donation/:id', donationController.getDetail);
router.post('/donation/registration', userController.checkPermission.admin, donationController.registrationAndDonate);
router.post('/donation',  donationController.donate);
router.post('/donation/:id/confirm', userController.checkPermission.admin, donationController.confirmDonation);
router.post('/donation/remove', userController.checkPermission.admin,  donationController.remove);

//privileges
router.get('/privileges', privilegesController.get);
router.post('/privileges',  userController.checkPermission.admin ,privilegesController.create);
router.put('/privileges/:id',  userController.checkPermission.admin ,privilegesController.update);
router.post('/privileges/:id/remove',  userController.checkPermission.admin ,privilegesController.remove);
router.get('/privileges/byUser/:userId',  privilegesController.getByUser);


//users
router.post('/user/login', userController.login);
router.post('/user/:userId/create-grad', gradController.create);
router.post('/user/logout', userController.logout);
router.post('/user/update', userController.update);
router.get('/user/current', userController.current);
router.get('/user/:id/grad-detail', gradController.getDetail)
router.post('/user', userController.create);

//admin
router.post('/admin', adminController.create);

//contacts
router.post('/contacts', userController.checkPermission.admin,  contactController.create);
router.post('/contacts/:id/remove', userController.checkPermission.admin,  contactController.remove);
router.get('/contacts/', contactController.get);
router.put('/contacts/:id', userController.checkPermission.admin, contactController.update);

//posts
router.post('/posts', userController.checkPermission.admin,  postController.create);
router.post('/posts/:id/remove', userController.checkPermission.admin,  postController.remove);
router.get('/posts/', resetCache, postController.get);
router.get('/posts/:id', resetCache, postController.getDetail);
router.put('/posts/:id', userController.checkPermission.admin, postController.update);

//files
router.post('/files/img', fileController.uploadImg);
router.post('/files/doc', userController.checkPermission.admin, fileController.uploadDoc);
router.post('/files/:id/remove', userController.checkPermission.admin, fileController.remove);
router.post('/files/', userController.checkPermission.admin, fileController.create);
router.get('/files/byType', fileController.getByType);

//calculation
router.post('/calculations/options', userController.checkPermission.admin, calcController.createOption);
router.post('/calculations/options/:id/remove', userController.checkPermission.admin, calcController.removeOption);
router.post('/calculations', calcController.createReport);
router.get('/calculations', userController.checkPermission.admin, calcController.getReports);
router.get('/calculations/projects', calcController.getProjects);

//payments
router.get('/payments/check-avail', paymentsController.ppsAuth, paymentsController.checkPaymentAvail);
router.get('/payments/register', paymentsController.ppsAuth, paymentsController.registerPayment);

module.exports = router;
