
import React from "react";
import Layout from "../components/Layout";
import { Github, FileText, Linkedin } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">About Me</h1>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
          <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 relative border-4 border-[#F2FCE2] border-opacity-70 p-1">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src="https://source.unsplash.com/random/300x300/?portrait" 
                alt="Mia Le" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <p className="text-xl font-serif mb-4">
              Hello! I'm Mia Le - The Greatest
            </p>
            
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <p className="mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="flex space-x-4 mb-6">
              <a href="https://linkedin.com/in/miale" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/mia-lhma" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
                <FileText size={20} />
                <span>Resume</span>
              </a>
            </div>
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
