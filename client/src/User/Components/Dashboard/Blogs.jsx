import React, { useState } from 'react';
import BlogPost from '../BlogPost';

const Blogs = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handlePost = () => {
    alert('Blog posted (placeholder)!');
    setTitle('');
    setContent('');
    setShowForm(false);
  };

  const sampleBlogs = [
    {
      id: 1,
      title: 'How I Learned Web Development',
      content: 'I started with HTML and CSS, then moved on to JavaScript and React. It has been an amazing journey...',
    },
    {
      id: 2,
      title: 'Top 5 Skills for Freelancers',
      content: 'If you want to succeed as a freelancer, these are the key skills you should master...',
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center text-3xl font-bold mb-6">
        <h1>Share Your Knowledge</h1>
        <div
          className="cursor-pointer"
          onClick={() => setShowForm(true)} title='Post a Blog'
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </div>

      <input placeholder='search for the content...' className='w-full border-2 border-gray-400 p-2 rounded-lg'/>

      {/* BlogPost modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
          <div className="relative bg-white rounded-xl p-4 max-w-3xl w-full">
            <button
              className="absolute top-2 right-4 text-xl py-4 text-gray-600 hover:text-black"
              onClick={() => setShowForm(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <BlogPost
              title={title}
              content={content}
              setTitle={setTitle}
              setContent={setContent}
              handlePost={handlePost}
            />
          </div>
        </div>
      )}

      {/* Blog List */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Latest Blogs</h2>
        {sampleBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 mb-6"
          >
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">{blog.title}</h3>
            <p className="text-gray-700 leading-relaxed">{blog.content}</p>
            <div className="mt-4 flex justify-end">
              <button className="text-sm text-blue-600 hover:underline">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
