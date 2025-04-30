
import React from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "../models/BlogPost";
import { formatDate } from "../utils/dateUtils";

interface PostCardProps {
  post: BlogPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="mb-12 pb-12 border-b border-gray-200 animate-fade-in">
      <Link to={`/post/${post.id}`}>
        {post.coverImage && (
          <div className="mb-6 overflow-hidden rounded-md hover:opacity-90 transition-opacity">
            <img 
              src={post.coverImage} 
              alt={`Cover image for ${post.title}`} 
              className="w-full h-[300px] object-cover"
            />
          </div>
        )}
        <h2 className="font-serif text-3xl font-bold mb-2 hover:text-gray-700 transition-colors">
          {post.title}
        </h2>
      </Link>
      
      <div className="mb-4 text-sm text-gray-600">
        <time dateTime={post.date}>{formatDate(post.date)}</time> • By {post.author}
      </div>
      
      <p className="text-gray-700 leading-relaxed mb-4">{post.excerpt}</p>
      
      <Link 
        to={`/post/${post.id}`} 
        className="inline-flex items-center text-sm font-medium text-black hover:text-gray-700 transition-colors"
      >
        Continue reading
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </article>
  );
};

export default PostCard;
