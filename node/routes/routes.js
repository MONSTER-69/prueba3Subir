import express from 'express'
import { createBlog, getAllBlogs, getBlog, updateblog, delateblog } from '../controller/BlogController.js'

const router=express.Router()

router.get("/",getAllBlogs)

// un solo blog 
router.get("/:no_registro",getBlog)

router.post('/',createBlog)

// para la actualizacion 
router.put("/:no_registro",updateblog)

router.delete("/:no_registro",delateblog)


export default router;

