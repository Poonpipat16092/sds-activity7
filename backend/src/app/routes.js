import express from 'express'
import blog from './controllers/blog'
import category from './controllers/category'

const router = express.Router()

router
  .get('/blog', blog.findAll)
  .get('/blog/:ID', blog.getBlogByID)
  .post('/blog', blog.creat)
  .put('/blog/:ID', blog.updateBlogByID)
  .delete('/blog/:ID', blog.deleteBannerByID)
  .get('/category/:ENUM', category.getCategoryByENUM)
  .get('/category', category.getCategoryList)

export default router
