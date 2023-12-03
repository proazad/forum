// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./PostComponent.css";

// const PostComponent = () => {
//   const [posts, setPosts] = useState([]);
//   const [sortOrder, setSortOrder] = useState("desc"); // Default sorting order

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get("posts.json");
//       setPosts(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSortByPopularity = () => {
//     const sortedPosts = [...posts].sort((a, b) => {
//       return sortOrder === "desc"
//         ? b.votesCount - a.votesCount
//         : a.votesCount - b.votesCount;
//     });

//     setPosts(sortedPosts);
//     setSortOrder(sortOrder === "desc" ? "asc" : "desc");
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto p-4">
//       <div className="flex items-center gap-x-4">
//       <h1 className="text-xl font-bold">Latest Posts</h1>
//       <button
//         className="polularityBtn mb-4 lg:mb-6"
//         onClick={handleSortByPopularity}
//       >
//         <span>Sort by Popularity</span>
//       </button>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {/* Iterate over dummy posts */}
//         {posts.map((post) => (
//           <div
//             key={post.id}
//             className="bg-white p-6 rounded-lg border border-purple-200"
//           >
//             {/* Author Section */}
//             <div className="flex items-center mb-4">
//               <img
//                 src={post.author.picture}
//                 alt={post.author.name}
//                 className="w-10 h-10 rounded-full mr-2"
//               />
//               <span className="text-gray-700">{post.author.name}</span>
//             </div>
//             {/* Post Title */}
//             <h2 className="text-xl font-bold mb-2">{post.title}</h2>
//             {/* Tags */}
//             <span className="bg-blue-500 text-white py-1 px-2 mr-2 rounded">
//               {post?.tags}
//             </span>
//             {/* Time, Comments Count, Votes Count */}
//             <div className="flex items-center text-gray-500">
//               <span className="mr-4">{post.time}</span>
//               <span className="mr-4">{post.commentsCount} Comments</span>
//               <span>{post.votesCount} Votes</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PostComponent;
import { useState, useEffect } from "react";
import axios from "axios";
import "./PostComponent.css";

const PostComponent = () => {
  const [posts, setPosts] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc"); // Default sorting order

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("posts.json");
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSortByPopularity = () => {
    const sortedPosts = [...posts].sort((a, b) => {
      return sortOrder === "desc"
        ? b.votesCount - a.votesCount
        : a.votesCount - b.votesCount;
    });

    setPosts(sortedPosts);
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-900">Latest Discussions</h1>
        <button
          className="text-blue-500 hover:underline"
          onClick={handleSortByPopularity}
        >
          Sort by Popularity
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={post.author.picture}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-gray-700">{post.author.name}</span>
              </div>
              <span className="text-gray-500">{post.time}</span>
            </div>
            <h2 className="text-xl font-bold mb-2 text-gray-900">
              {post.title}
            </h2>
            <div className="flex items-center text-gray-500 mb-2">
              <span className="mr-4">{post.commentsCount} Comments</span>
              <span>{post.votesCount} Votes</span>
            </div>
            <p className="text-gray-800">{post.body}</p>
            <div className="flex mt-4">
              <span className="bg-blue-500 text-white py-1 px-2 mr-2 rounded">
                {post.tags}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostComponent;
