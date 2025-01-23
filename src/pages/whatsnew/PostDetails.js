import React, { useContext } from "react";
import { AppContext } from "../../App";
import { useParams } from "react-router-dom";
import Spacer from "../../components/elements/Spacer";
import PostSuggestion from "./PostSuggestion";
import NextAndPreviousBtn from "./NextAndPreviousBtn";
import SharePost from "./SharePost";
import Gallery from "../../components/elements/Gallery";
import LoaderAnimation from "../../components/elements/LoaderAnimation";
const PostDetails = () => {
  const { colors, bgColors, responsive, parsedNewsData, loadingNews } =
    useContext(AppContext);
  const { postId } = useParams();
  const post = parsedNewsData.find((p) => p?.id.toString() === postId);

  const styles = {
    mainSection: {
      maxWidth: responsive("60%", "80%", "90%"),
      marginInline: "auto",
      marginTop: responsive(0, 10, -40),
    },

    textTitle: {
      color: colors.darkBlue,
      fontSize: responsive("1.8rem", "1.5rem", "1.5rem"),
      lineHeight: responsive("2rem", "2rem", "2rem"),
    },
    tarikContainer: {
      display: "flex",
      alignItems: "center",
      padding: "30px 0",
      color: colors.grey,
    },
    tarikImg: {
      height: responsive(20, 20, 10),
      marginLeft: 10,
    },
    article: {
      fontSize: responsive("1.3rem", "1.2rem", "1rem"),
      textAlign: "justify",
      lineHeight: responsive("2rem", "1.9rem", "1.7rem"),
    },
  };
  console.log(post);

  return (
    <>
      <Spacer height={170} />
      <div style={styles.mainSection}>
        <div>
          <h2 style={styles.textTitle}>{post?.title}</h2>
          <div style={styles.tarikContainer}>
            <img style={styles.tarikImg} src="/tarik.png" alt="Tarik Logo" />
            <p style={styles.tarik}>
              <span>{post?.date}</span>
            </p>
          </div>
          <div
            style={styles.article}
            dangerouslySetInnerHTML={{ __html: post?.article }}
          />

          <Gallery data={post} />

          <NextAndPreviousBtn
            data={parsedNewsData}
            currentId={post?.id}
            UrlPageName={"WhatsNew"}
          />
          <div>
            <SharePost />
          </div>
        </div>

        {loadingNews ? (
          <LoaderAnimation isLoading={loadingNews} color={colors.orange} />
        ) : (
          <PostSuggestion
            currentPostId={post?.id}
            tarikImg={"/tarik.png"}
            UrlPageName={"WhatsNew"}
            numPosts={4}
            showPostsAfter={true}
          />
        )}
      </div>
    </>
  );
};

export default PostDetails;
