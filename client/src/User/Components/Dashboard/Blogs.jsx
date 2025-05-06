import React, { useState } from 'react';

const Blogs = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePost = () => {
    // This is just a placeholder
    alert('This would post your blog if backend was connected.');
    setTitle('');
    setContent('');
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
      <h1 className="text-3xl font-bold mb-6">Share Your Knowledge</h1>

      {/* Blog Post Form */}
      <div className="bg-white p-4 rounded shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Write a Blog</h2>

        <input
          type="text"
          placeholder="Blog Title"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Blog Content"
          className="w-full p-2 border border-gray-300 rounded mb-4 h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handlePost}
        >
          Post Blog
        </button>
      </div>

      {/* Blog List */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Latest Blogs</h2>
        {sampleBlogs.map((blog) => (
          <div key={blog.id} className="bg-white p-4 rounded shadow mb-4">
            <h3 className="text-xl font-bold">{blog.title}</h3>
            <p className="text-gray-700 mt-2">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
