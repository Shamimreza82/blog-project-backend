
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const getAllBlogIntoDB = async () => {
  const result = await Blog.find({},{_id: 1, title: 1, content: 1, author: 1 }).populate('author')
  return result;
};

const updateBlogIntoDB = async (authorId: string, payload: TBlog) => {
  const result = await Blog.findOneAndUpdate(
    { author: authorId },
    { $set: payload },
    { new: true },
  ).populate('author');
  return result;
};

const deletedBlogIntoDB = async (_id: string) => {
  const result = await Blog.findByIdAndDelete({ _id });
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  updateBlogIntoDB,
  deletedBlogIntoDB,
  getAllBlogIntoDB,
};
