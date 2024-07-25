import SearchInput from "@/components/searchInput";
import Link from "next/link";

export default function ServerSideProps({ posts,date }) {
  return (
    <div className="p-5">
      <div className=" mb-3">
        <p className=" text-xl font-semibold">Server Side Props</p>
        <div className=" my-3">
          <SearchInput />
        </div>
      </div>
     {
      date+""
     }
      {posts?.length > 0 ? (
        <div>
          <table>
            <thead>
              <tr>
                <td>Id</td>
                <td>Title</td>
                <td>Body</td>
                <td>View</td>
              </tr>
            </thead>
            <tbody>
              {posts?.map((data, index) => (
                <tr key={index}>
                  <td>{data?.id}</td>
                  <td>{data?.title}</td>
                  <td>{data?.body}</td>
                  <td>
                    <Link
                      href={`/server-side-props/${data.id}`}
                      className=" bg-violet-600 w-fit px-2 py-1 rounded"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <p className=" text-red-500 text-xl font-semibold underline text-center">No post Found</p>
        </>
      )}
    </div>
  );
}

export async function getServerSideProps({ query: { q } }) {
  const resposne = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts${q ? `?q=${q}` : ""}`
  );

  const posts = await resposne.json();
  return {
    props: { posts,date:new Date()+"" },
  };
}
