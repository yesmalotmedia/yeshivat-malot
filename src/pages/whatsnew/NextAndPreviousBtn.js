import React, { useContext } from "react";
import { AppContext } from "../../App";
import NavigationBtn from "./NavigationBtn";

export default function NextAndPreviousBtn({ currentId, data, UrlPageName }) {
  const { colors } = useContext(AppContext);

  const getCurrentPostIndex = () => {
    return data.findIndex((post) => post.id === currentId);
  };

  const currentIndex = getCurrentPostIndex();
  const hasNextPost = currentIndex < data.length - 1;
  const hasPreviousPost = currentIndex > 0;

  const styles = {
    container: {
      marginTop: 50,
      display: "flex",
      alignItems: "center",

      justifyContent: hasPreviousPost ? "space-between" : "flex-end",
    },
  };

  return (
    <div style={styles.container}>
      {hasPreviousPost && (
        <NavigationBtn
          direction="previous"
          postId={data[currentIndex - 1].id}
          navigation={UrlPageName}
          colors={colors}
          prevTitle={"לעמוד הקודם"}
          arrow={"/arrow-right-orange.png"}
        />
      )}
      {hasNextPost && (
        <NavigationBtn
          direction="next"
          postId={data[currentIndex + 1].id}
          navigation={UrlPageName}
          colors={colors}
          nextTitle={"לעמוד הבא"}
          arrow={"/arrow-right-orange.png"}
        />
      )}
    </div>
  );
}
