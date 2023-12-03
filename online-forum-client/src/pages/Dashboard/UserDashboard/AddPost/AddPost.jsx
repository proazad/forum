import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import useAuth from "../../../../hooks/useAuth";

const AddPost = () => {
  const { register, handleSubmit, control } = useForm();
  const { user } = useAuth();
  const onSubmit = async (data) => {
    try {
      const post = {
        author: [
          { name: data.authorName },
          { image: data.authorImage },
          { image: data.authorImage },
        ],
      };
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  // if (userPostCount >= 5) {
  //   return (
  //     <div className="max-w-screen-xl mx-auto p-4">
  //       <div className="text-center">
  //         <p className="text-2xl font-bold mb-4">
  //           You have reached the maximum number of allowed posts.
  //         </p>
  //         <Link
  //           to="/membership"
  //           className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg"
  //         >
  //           Become a Member
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Add a New Post</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4">
                <label
                  htmlFor="authorImage"
                  className="block text-sm font-medium text-gray-600"
                >
                  Author Image
                </label>
                <input
                  type="text"
                  id="authorImage"
                  name="authorImage"
                  {...register("authorImage")}
                  defaultValue={user?.photoURL}
                  readOnly
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="authorName"
                  className="block text-sm font-medium text-gray-600"
                >
                  Author Name
                </label>
                <input
                  type="text"
                  id="authorName"
                  name="authorName"
                  {...register("authorName")}
                  defaultValue={user?.displayName}
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  readOnly
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="authorEmail"
                  className="block text-sm font-medium text-gray-600"
                >
                  Author Email
                </label>
                <input
                  type="email"
                  id="authorEmail"
                  name="authorEmail"
                  {...register("authorEmail")}
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  defaultValue={user?.email}
                  readOnly
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="postTitle"
                  className="block text-sm font-medium text-gray-600"
                >
                  Post Title
                </label>
                <input
                  type="text"
                  id="postTitle"
                  name="postTitle"
                  {...register("postTitle")}
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="upVote"
                  className="block text-sm font-medium text-gray-600"
                >
                  UpVote
                </label>
                <input
                  type="number"
                  id="upVote"
                  name="upVote"
                  {...register("upVote")}
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  readOnly
                  defaultValue={0}
                />
              </div>
            </div>

            <div>
              <div className="mb-4">
                <label
                  htmlFor="postDescription"
                  className="block text-sm font-medium text-gray-600"
                >
                  Post Description
                </label>
                <textarea
                  id="postDescription"
                  name="postDescription"
                  {...register("postDescription")}
                  rows="4"
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="tag"
                  className="block text-sm font-medium text-gray-600"
                >
                  Tag
                </label>
                <Controller
                  name="tag"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={[
                        { value: "web-development", label: "Web Development" },
                        { value: "ui/ux-desinger", label: "UI/UX Desinger" },
                        { value: "apps-developer", label: "Apps Developer" },
                      ]}
                      className="mt-1"
                    />
                  )}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="downVote"
                  className="block text-sm font-medium text-gray-600"
                >
                  DownVote
                </label>
                <input
                  type="number"
                  id="downVote"
                  name="downVote"
                  {...register("downVote")}
                  readOnly
                  defaultValue={0}
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg mt-6 hover:bg-blue-600"
          >
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
