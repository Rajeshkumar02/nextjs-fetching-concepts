export default function StaticProps({ posts,date }) {
  return (
    <div className="p-5">
      <div className=" mb-3">
        <p className=" text-xl font-semibold">Static Props</p>
      </div>
      {date+""}
      <div>
        {posts?.length > 0 ? (
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
        ) : (
          <>
            <p className=" text-red-500 text-xl font-semibold underline text-center">
              No post Found
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const resposne = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`);

  const posts = await resposne.json();
  return {
    props: { posts,date:new Date()+"" },
  };
}
