import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../utils/catchAsync';
import { BlogServices } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.createBlogIntoDB(req.body);

  res.status(StatusCodes.CREATED).json({
    success: true,
    message: 'Blog Create Successfully',
    statusCode: StatusCodes.CREATED,
    data: result || {},
  });
});

const updateBlog = catchAsync (async (req, res) => {
const {id} = req.params

const result = await BlogServices.updateBlogIntoDB(id, req.body)


    res.status(StatusCodes.OK).json({
        success: true,
        message: 'Blog Update Successfully',
        statusCode: StatusCodes.OK,
        data: result || {},
      });
})



export const BlogController = {
  createBlog,
  updateBlog
};
