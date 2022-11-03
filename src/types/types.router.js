const router = require('express').Router()
const typesServices = require('./types.services')
const passport = require('passport')
const adminMiddleware = require('../middlewares/role.middleware')

require('../middlewares/auth.middleware')(passport)

router.route('/')
  .get(typesServices.getAllTypes)
  .post(passport.authenticate('jwt', { session: false}), adminMiddleware, typesServices.postType)
  

router.route('/:id')
  .get(typesServices.getTypeById)
  .delete(passport.authenticate('jwt', { session:false}), adminMiddleware, typesServices.deleteType)

module.exports = router