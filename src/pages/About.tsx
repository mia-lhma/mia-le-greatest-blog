
import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">About Me</h1>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
          <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src="https://source.unsplash.com/random/300x300/?portrait" 
              alt="Mia Le" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <p className="text-xl font-serif mb-4">
              Hello! I'm Mia Le, a writer, thinker, and creator.
            </p>
            
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        
        <section className="mb-8">
          <h2 className="font-serif text-2xl font-bold mb-4">My Background</h2>
          <p className="mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="font-serif text-2xl font-bold mb-4">Get in Touch</h2>
          <p>
            You can reach me at <a href="mailto:miale.lhma@gmail.com" className="text-black hover:underline">miale.lhma@gmail.com</a> or follow me on social media.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default About;
