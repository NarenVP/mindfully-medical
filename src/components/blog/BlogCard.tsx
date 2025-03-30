
import { Link } from 'react-router-dom';
import { BlogPost } from '@/data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-105">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={post.coverImage}
          alt={post.title}
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Link to={`/blog/${post.slug}`}>
            <p className="text-sm font-medium text-wellness-600">
              {post.category}
            </p>
            <div className="block mt-2">
              <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
              <p className="mt-3 text-base text-gray-500 line-clamp-3">{post.excerpt}</p>
            </div>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={post.author.avatar}
              alt={post.author.name}
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              {post.author.name}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
