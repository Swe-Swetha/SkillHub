function BlogPost({ title, content, setTitle, setContent, handlePost }) {
    return (
      <div className="">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 p-2">Write a Blog</h2>
  
        <input
          type="text"
          placeholder="Blog Title"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
  
        <textarea
          placeholder="Blog Content"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        
        <div className="flex justify-end">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          onClick={handlePost}
        >
          Post Blog
        </button></div>
      </div>
    );
  }

  export default BlogPost;
  