
import { BlogPost } from "@/data/blogPosts";

interface BlogContentProps {
  post: BlogPost;
}

const BlogContent = ({ post }: BlogContentProps) => {
  return (
    <div className="py-8 prose prose-lg mx-auto blog-content">
      <div className="mb-10">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-72 md:h-96 object-cover rounded-xl"
        />
        <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-2">{post.title}</h1>
        
        <div className="flex items-center mt-4 mb-8">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="font-medium text-gray-900">{post.author.name}</p>
            <div className="flex text-sm text-gray-500">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="mx-1">&middot;</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-md p-4 mb-6">
          <p className="font-medium text-gray-900">Medical Disclaimer</p>
          <p className="text-sm text-gray-600">
            This article is for informational purposes only and is not a substitute
            for professional medical advice. Always consult with your doctor or
            other qualified healthcare provider before making any healthcare
            decisions.
          </p>
        </div>
      </div>
      
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      
      <div className="border-t border-gray-200 pt-6 mt-10">
        <p className="text-sm text-gray-500">
          Last updated: {new Date(post.lastUpdated || post.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default BlogContent;
