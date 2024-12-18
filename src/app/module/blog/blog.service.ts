import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const updateBlogIntoDB = async (authorId: string, payload: TBlog) => {
  const result = await Blog.findOneAndUpdate({author: authorId}, {$set : payload}, {new: true});
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  updateBlogIntoDB
};
