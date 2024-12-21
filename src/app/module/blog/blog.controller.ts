import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../utils/catchAsync';
import { BlogServices } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
 
  const result = await BlogServices.createBlogIntoDB(req.body, req.user);

  res.status(StatusCodes.CREATED).json({
    success: true,
    message: 'Blog Create Successfully',
    statusCode: StatusCodes.CREATED,
    data: result ,
  });
});

const getAllBlog = catchAsync(async (req, res) => {

  const result = await BlogServices.getAllBlogIntoDB(req.query);

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Blogs fetched successfully',
    statusCode: StatusCodes.OK,
    data: result ,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.updateBlogIntoDB(id, req.body);

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Blog Update Successfully',
    statusCode: StatusCodes.OK,
    data: result ,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  await BlogServices.deletedBlogIntoDB(id);

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Blog Deleted Successfully',
    statusCode: StatusCodes.OK,
  });
});

export const BlogController = {
  createBlog,
  updateBlog,
  getAllBlog,
  deleteBlog,
};
