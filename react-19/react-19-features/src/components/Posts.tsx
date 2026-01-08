const Posts = () => {
  // Generate a lot of post
  const posts = Array.from(
    { length: 100000 },
    (_, index) => `Post ${index + 1}`
  );
  return (
    <div>
      {posts.map((post) => (
        <div key={post} className="post">
          {post}
        </div>
      ))}
    </div>
  );
};

export default Posts;
