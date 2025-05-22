
// import React, { useState } from 'react';

// const Blogs = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [showForm, setShowForm] = useState(false);
//   const [selectedBlog, setSelectedBlog] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handlePost = () => {
//     alert('Blog posted (placeholder)!');
//     setTitle('');
//     setContent('');
//     setShowForm(false);
//   };

//   const sampleBlogs = [
//     {
//       id: 1,
//       title: 'How I Learned Web Development',
//       content: 'I started with HTML and CSS, then moved on to JavaScript and React. It has been an amazing journey learning through tutorials, building projects, and getting feedback from peers.',
//     },
//     {
//       id: 2,
//       title: 'Top 5 Skills for Freelancers',
//       content: 'If you want to succeed as a freelancer, these are the key skills you should master: communication, time management, self-discipline, technical expertise, and networking.',
//     },
//     {
//       id: 3,
//       title: 'React Hooks Deep Dive',
//       content: 'Hooks like useState and useEffect revolutionized the way we write React code. Learn how to manage complex state and side effects efficiently.',
//     },
//   ];

//   const filteredBlogs = sampleBlogs.filter(
//     (blog) =>
//       blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       blog.content.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <div className="flex justify-between items-center text-3xl font-bold mb-6">
//         <h1>Share Your Knowledge</h1>
//         <div
//           className="cursor-pointer"
//           onClick={() => setShowForm(true)}
//           title="Post a Blog"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none"
//             viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
//             className="w-8 h-8">
//             <path strokeLinecap="round" strokeLinejoin="round"
//               d="M12 4.5v15m7.5-7.5h-15" />
//           </svg>
//         </div>
//       </div>

//       <input
//         placeholder="Search for blog content..."
//         className="w-full border-2 border-gray-400 p-2 rounded-lg mb-6"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       {/* Blog form modal (placeholder only) */}
//       {showForm && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
//           <div className="relative bg-white rounded-xl p-4 max-w-3xl w-full">
//             <button
//               className="absolute top-2 right-4 text-xl py-4 text-gray-600 hover:text-black"
//               onClick={() => setShowForm(false)}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none"
//                 viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
//                 className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//             <div className="text-2xl py-2">Post Content</div>
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Blog Title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded mb-3"
//               />
//               <textarea
//                 placeholder="Blog Content"
//                 value={content}
//                 onChange={(e) => setContent(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded h-40"
//               />
//               <button
//                 onClick={handlePost}
//                 className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded "
//               >
//                 Post
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Read More Modal */}
//       {selectedBlog && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
//           <div className="relative bg-white rounded-xl p-6 max-w-2xl w-full">
//             <button
//               className="absolute top-2 right-4 text-xl py-4 text-gray-600 hover:text-black"
//               onClick={() => setSelectedBlog(null)}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none"
//                 viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
//                 className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//             <h2 className="text-2xl font-bold mb-2">{selectedBlog.title}</h2>
//             <p className="text-gray-700">{selectedBlog.content}</p>
//           </div>
//         </div>
//       )}

//       {/* Blog List */}
//       <div className="mt-4">
//         <h2 className="text-2xl font-semibold mb-4">Latest Blogs</h2>
//         {filteredBlogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 mb-6"
//           >
//             <h3 className="text-2xl font-semibold text-blue-800 mb-2">{blog.title}</h3>
//             <p className="text-gray-700 leading-relaxed">
//               {blog.content.split('. ')[0]}...
//             </p>
//             <div className="mt-4 flex justify-end">
//               <button
//                 className="text-sm text-blue-600 hover:underline"
//                 onClick={() => setSelectedBlog(blog)}
//               >
//                 Read More
//               </button>
//             </div>
//           </div>
//         ))}
//         {filteredBlogs.length === 0 && (
//           <p className="text-gray-500 text-center">No blogs found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Blogs;
// import React, { useState } from 'react';

// const Blogs = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [showForm, setShowForm] = useState(false);
//   const [selectedBlog, setSelectedBlog] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);

//   const handlePost = () => {
//     alert('Blog posted (placeholder)!');
//     setTitle('');
//     setContent('');
//     setShowForm(false);
//   };

//   const sampleBlogs = [
//     {
//       id: 1,
//       title: 'How I Learned Web Development',
//       content:
//         'I started with HTML and CSS, then moved on to JavaScript and React. It has been an amazing journey learning through tutorials, building projects, and getting feedback from peers.',
//     },
//     {
//       id: 2,
//       title: 'Top 5 Skills for Freelancers',
//       content:
//         'If you want to succeed as a freelancer, these are the key skills you should master: communication, time management, self-discipline, technical expertise, and networking.',
//     },
//     {
//       id: 3,
//       title: 'React Hooks Deep Dive',
//       content:
//         'Hooks like useState and useEffect revolutionized the way we write React code. Learn how to manage complex state and side effects efficiently.',
//     },
//     {
//       id: 4,
//       title: 'Mastering Time Management',
//       content:
//         'Time management is crucial for productivity. Start by identifying your most important tasks each day and scheduling focused work sessions.\n\nEliminate distractions, set clear goals, and use tools like calendars and to-do lists to stay on track.',
//     },
//     {
//       id: 5,
//       title: 'Why Soft Skills Matter',
//       content:
//         'Technical skills will get you the job, but soft skills will help you grow. Communication, empathy, and adaptability are key to thriving in collaborative environments.\n\nBuild these skills through practice, feedback, and self-awareness.',
//     },
//     {
//       id: 6,
//       title: 'My First Freelancing Project Experience',
//       content:
//         'Getting your first freelancing client can be both exciting and nerve-wracking. I found mine through a freelance platform and had to learn how to communicate clearly and manage deadlines.\n\nThrough the project, I gained confidence, improved my skills, and received valuable client feedback.',
//     },
//   ];

//   const filteredBlogs = sampleBlogs.filter(
//     (blog) =>
//       blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       blog.content.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const toggleBookmark = (blog) => {
//     setBookmarkedBlogs((prev) => {
//       const isBookmarked = prev.some((b) => b.id === blog.id);
//       return isBookmarked
//         ? prev.filter((b) => b.id !== blog.id)
//         : [...prev, blog];
//     });
//   };

//   const getFirstLine = (text) => {
//     return text.split('.')[0] + '.';
//   };

//   return (
//     <div className="min-h-screen py-6 px-16 bg-gradient-to-b from-gray-100 to-white">
//       <div className="flex justify-between items-center text-3xl font-bold mb-6">
//         <h1 className="text-[#161179]">Share Your Knowledge</h1>
//         <div
//           className="flex gap-1 items-center cursor-pointer text-white bg-[#161179] px-4 py-2 rounded-lg shadow-md"
//           onClick={() => setShowForm(true)}
//           title="Post a Blog"
//         >
//           <div className="">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//           </svg></div>
//           <div className="text-lg">New Blog</div>
//         </div>
//       </div>

//       <input
//         placeholder="Search for blog content..."
//         className="w-full border-2 border-gray-400 p-2 rounded-lg mb-6"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       {showForm && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
//           <div className="relative bg-white rounded-xl p-4 max-w-3xl w-full">
//             <button
//               className="absolute top-2 right-4 text-xl py-4 text-gray-600 hover:text-black"
//               onClick={() => setShowForm(false)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//             <div className="text-2xl py-2 font-semibold">Post Content</div>
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Blog Title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded mb-3"
//               />
//               <textarea
//                 placeholder="Blog Content"
//                 value={content}
//                 onChange={(e) => setContent(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded h-40"
//               />
//               <button
//                 onClick={handlePost}
//                 className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded"
//               >
//                 Post
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {selectedBlog && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
//           <div className="relative bg-white rounded-xl p-6 max-w-2xl w-full">
//             <button
//               className="absolute top-2 right-4 text-xl py-4 text-gray-600 hover:text-black"
//               onClick={() => setSelectedBlog(null)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//             <h2 className="text-2xl font-bold mb-2">{selectedBlog.title}</h2>
//             <p className="text-gray-700 whitespace-pre-line">{selectedBlog.content}</p>
//           </div>
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {filteredBlogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
//           >
//             <h3 className="text-2xl font-semibold  mb-2">{blog.title}</h3>
//             <p className="text-gray-700 leading-relaxed truncate overflow-hidden whitespace-nowrap">{getFirstLine(blog.content)}</p>
//             <div className="mt-4 flex justify-between items-center">
//               <button
//                 className="text-sm text-blue-600 hover:underline"
//                 onClick={() => setSelectedBlog(blog)}
//               >
//                 Read More
//               </button>
//               <button
//                 onClick={() => toggleBookmark(blog)}
//                 title="Bookmark this blog"
//                 className="text-xl text-yellow-500 hover:text-yellow-600"
//               >
//                 {bookmarkedBlogs.some((b) => b.id === blog.id) ? '★' : '☆'}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {filteredBlogs.length === 0 && (
//         <p className="text-gray-500 text-center mt-6">No blogs found.</p>
//       )}

//       {bookmarkedBlogs.length > 0 && (
//         <div className="mt-10">
//           <h2 className="text-2xl font-semibold mb-4 text-green-700">⭐ Bookmarked Blogs</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {bookmarkedBlogs.map((blog) => (
//               <div
//                 key={blog.id}
//                 className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl shadow"
//               >
//                 <h3 className="text-xl font-bold text-yellow-800">{blog.title}</h3>
//                 <p className="text-gray-700 truncate overflow-hidden whitespace-nowrap">{getFirstLine(blog.content)}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Blogs;

import React, { useState } from 'react';

const Blogs = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);

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
      content:
        'I started with HTML and CSS, then moved on to JavaScript and React. It has been an amazing journey learning through tutorials, building projects, and getting feedback from peers.',
    },
    {
      id: 2,
      title: 'Top 5 Skills for Freelancers',
      content:
        'If you want to succeed as a freelancer, these are the key skills you should master. communication, time management, self-discipline, technical expertise, and networking.',
    },
    {
      id: 3,
      title: 'React Hooks Deep Dive',
      content:
        'Hooks like useState and useEffect revolutionized the way we write React code. Learn how to manage complex state and side effects efficiently.',
    },
    {
      id: 4,
      title: 'Mastering Time Management',
      content:
        'Time management is crucial for productivity. Start by identifying your most important tasks each day and scheduling focused work sessions.\n\nEliminate distractions, set clear goals, and use tools like calendars and to-do lists to stay on track.',
    },
    {
      id: 5,
      title: 'Why Soft Skills Matter',
      content:
        'Technical skills will get you the job, but soft skills will help you grow. Communication, empathy, and adaptability are key to thriving in collaborative environments.\n\nBuild these skills through practice, feedback, and self-awareness.',
    },
    {
      id: 6,
      title: 'My First Freelancing Project Experience',
      content:
        'Getting your first freelancing client can be both exciting and nerve-wracking. I found mine through a freelance platform and had to learn how to communicate clearly and manage deadlines.\n\nThrough the project, I gained confidence, improved my skills, and received valuable client feedback.',
    },
  ];

  const filteredBlogs = sampleBlogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleBookmark = (blog) => {
    setBookmarkedBlogs((prev) => {
      const isBookmarked = prev.some((b) => b.id === blog.id);
      return isBookmarked
        ? prev.filter((b) => b.id !== blog.id)
        : [...prev, blog];
    });
  };

  const getFirstLine = (text) => {
    return text.split('.')[0] + '.';
  };

  return (
    <div className="min-h-screen px-36 py-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-3xl font-bold mb-8">
        <h1 className="text-[#161179] text-center sm:text-left">Share Your Knowledge</h1>
        <button
          className="mt-4 sm:mt-0 flex gap-2 items-center text-white bg-[#161179] hover:bg-[#2b27a3] px-5 py-2 rounded-xl shadow-lg transition"
          onClick={() => setShowForm(true)}
          title="Post a Blog"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span className="text-lg">New Blog</span>
        </button>
      </div>

      {/* Search */}
      <input
        placeholder="Search for blog content..."
        className="w-full border-2 border-gray-300 focus:border-[#161179] p-3 rounded-lg mb-8 transition-all duration-200 outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Blog Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 px-4">
          <div className="relative bg-white rounded-2xl shadow-xl p-6 w-full max-w-2xl transition-all">
            <button
              className="absolute top-3 right-4 text-gray-600 hover:text-black"
              onClick={() => setShowForm(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-[#161179]">Post Content</h2>
            <input
              type="text"
              placeholder="Blog Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-[#161179]"
            />
            <textarea
              placeholder="Blog Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg h-40 resize-none focus:outline-none focus:border-[#161179]"
            />
            <button
              onClick={handlePost}
              className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition shadow"
            >
              Post
            </button>
          </div>
        </div>
      )}

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 px-4">
          <div className="relative bg-white rounded-xl p-6 max-w-2xl w-full">
            <button
              className="absolute top-2 right-4 text-gray-600 hover:text-black"
              onClick={() => setSelectedBlog(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedBlog.title}</h2>
            <p className="text-gray-700 whitespace-pre-line">{selectedBlog.content}</p>
          </div>
        </div>
      )}

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#161179]">{blog.title}</h3>
            <p className="text-gray-700 mb-3">{getFirstLine(blog.content)}</p>
            <div className="flex justify-between items-center">
              <button
                className="text-sm text-blue-600 hover:underline"
                onClick={() => setSelectedBlog(blog)}
              >
                Read More
              </button>
              <button
                onClick={() => toggleBookmark(blog)}
                title="Bookmark this blog"
                className="text-2xl text-yellow-400 hover:text-yellow-500 transition"
              >
                {bookmarkedBlogs.some((b) => b.id === blog.id) ? '★' : '☆'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <p className="text-gray-500 text-center mt-6">No blogs found.</p>
      )}

      {/* Bookmarked Blogs */}
      {bookmarkedBlogs.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-green-700">⭐ Bookmarked Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookmarkedBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl shadow-md"
              >
                <h3 className="text-lg font-semibold text-yellow-800">{blog.title}</h3>
                <p className="text-gray-700 mt-1">{getFirstLine(blog.content)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
