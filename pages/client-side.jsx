import { useEffect, useState } from "react";

export default function ClientSide() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPosts() {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/posts`
        );
        const posts = await response.json();
        setPosts(posts);
      } catch (e) {
        setError("Error while geting the posts.")
      } finally {
        setLoading(false);
      }
    }

    getPosts();
  }, []);
  
  return (
    <div className="p-5">
      <div className=" mb-3">
        <p className=" text-xl font-semibold">Client Side</p>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className=" text-red-500">{error}</p>
        ) : (
          <div>
            <table>
              <thead>
                <tr>
                  <td>Id</td>
                  <td>Title</td>
                  <td>Body</td>
                </tr>
              </thead>
              <tbody>
                {posts?.map((data, index) => (
                  <tr key={index}>
                    <td>{data?.id}</td>
                    <td>{data?.title}</td>
                    <td>{data?.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
