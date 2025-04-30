
import React from "react";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import { blogPosts } from "../data/blogPosts";

const Index = () => {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto">
        <div className="space-y-4 md:space-y-8">
          {blogPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
