import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import PostsPreviewBox from "./PostsPreviewBox";
import LoadMore from "../../components/elements/LoadMore";
const PostsCollection = () => {
  const [visiblePostCount, setVisiblePostCount] = useState(10);
  const { responsive, parsedNewsData, loadingNews } = useContext(AppContext);

  const loadMorePosts = (increment) => {
    setVisiblePostCount((prevCount) => prevCount + increment);
  };
  const styles = {
    container: {
      paddingTop: responsive(0, 0, 60),
    },
  };
  console.log(parsedNewsData);
  return (
    <div style={styles.container}>
      {parsedNewsData?.slice(0, visiblePostCount).map((post) => (
        <PostsPreviewBox
          key={post.id}
          article={post.article}
          title={post.title}
          date={post.date}
          thumbnail={post.thumbnail}
          postId={post.id}
        />
      ))}
      {visiblePostCount < parsedNewsData.length && (
        <LoadMore onClick={() => loadMorePosts(10)} />
      )}
    </div>
  );
};

export default PostsCollection;
