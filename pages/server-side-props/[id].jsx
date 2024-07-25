export default function PostDetailsPage({ post, userData }) {
  return (
    <div className="p-5">
      <div className=" mb-3">
        <p className=" text-xl font-semibold">Server Side Props</p>
      </div>
      <div>
        <p className=" text-lg font-semibold underline"> {post.title}</p>
        <p className=" mt-3 font-mono">{post.body}</p>
        <div>
          <p className=" font-semibold mt-4 mb-1">User Details :-</p>
          <p>
            <span className=" font-semibold">Name</span> : {userData.name}
          </p>
          <p>
            <span className=" font-semibold">Email</span> : {userData.email}
          </p>
          <p>
            <span className=" font-semibold">Phone</span> : {userData.phone}
          </p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const resposne = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`
  );
  const post = await resposne.json();
  const user = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users/${post.userId}`
  );
  const userData = await user.json();
  return {
    props: { post, userData },
  };
}
