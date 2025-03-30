
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import BlogCard from '../blog/BlogCard';

const FeaturedPosts = () => {
  // Get the 3 most recent posts
  const featuredPosts = blogPosts.slice(0, 3);
  
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Latest Articles</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Evidence-based health information written in a way that's easy to understand.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-wellness-600 hover:bg-wellness-700"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
