
import React, { useState } from 'react';

const Blogs = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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
      content: 'I started with HTML and CSS, then moved on to JavaScript and React. It has been an amazing journey learning through tutorials, building projects, and getting feedback from peers.',
    },
    {
      id: 2,
      title: 'Top 5 Skills for Freelancers',
      content: 'If you want to succeed as a freelancer, these are the key skills you should master: communication, time management, self-discipline, technical expertise, and networking.',
    },
    {
      id: 3,
      title: 'React Hooks Deep Dive',
      content: 'Hooks like useState and useEffect revolutionized the way we write React code. Learn how to manage complex state and side effects efficiently.',
    },
  ];

  const filteredBlogs = sampleBlogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center text-3xl font-bold mb-6">
        <h1>Share Your Knowledge</h1>
        <div
          className="cursor-pointer"
          onClick={() => setShowForm(true)}
          title="Post a Blog"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </div>

      <input
        placeholder="Search for blog content..."
        className="w-full border-2 border-gray-400 p-2 rounded-lg mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Blog form modal (placeholder only) */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
          <div className="relative bg-white rounded-xl p-4 max-w-3xl w-full">
            <button
              className="absolute top-2 right-4 text-xl py-4 text-gray-600 hover:text-black"
              onClick={() => setShowForm(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-2xl py-2">Post Content</div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Blog Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-3"
              />
              <textarea
                placeholder="Blog Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded h-40"
              />
              <button
                onClick={handlePost}
                className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded "
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Read More Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
          <div className="relative bg-white rounded-xl p-6 max-w-2xl w-full">
            <button
              className="absolute top-2 right-4 text-xl py-4 text-gray-600 hover:text-black"
              onClick={() => setSelectedBlog(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedBlog.title}</h2>
            <p className="text-gray-700">{selectedBlog.content}</p>
          </div>
        </div>
      )}

      {/* Blog List */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold mb-4">Latest Blogs</h2>
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 mb-6"
          >
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">{blog.title}</h3>
            <p className="text-gray-700 leading-relaxed">
              {blog.content.split('. ')[0]}...
            </p>
            <div className="mt-4 flex justify-end">
              <button
                className="text-sm text-blue-600 hover:underline"
                onClick={() => setSelectedBlog(blog)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
        {filteredBlogs.length === 0 && (
          <p className="text-gray-500 text-center">No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
