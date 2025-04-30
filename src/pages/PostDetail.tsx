
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import { blogPosts } from "../data/blogPosts";
import { formatDate } from "../utils/dateUtils";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <Navigate to="/not-found" />;
  }

  return (
    <Layout>
      <article className="max-w-3xl mx-auto">
        {post.coverImage && (
          <div className="mb-8 overflow-hidden rounded-md">
            <img 
              src={post.coverImage} 
              alt={`Cover image for ${post.title}`} 
              className="w-full h-[400px] object-cover"
            />
          </div>
        )}
        
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        
        <div className="mb-8 text-gray-600">
          <time dateTime={post.date}>{formatDate(post.date)}</time> • By {post.author}
        </div>
        
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </Layout>
  );
};

export default PostDetail;
