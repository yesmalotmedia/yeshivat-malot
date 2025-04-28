import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import LoadMore from "../../components/elements/LoadMore";
import BookPreviewBox from "./BookPreviewBox";

const BooksCollection = ({ isRoshYeshiva, leftSection, dataType }) => {
  const {
    responsive,
    colors,
    bgColors,
    isMobile,
    videos,
    categories,
    loadingCategories,
    lessonsType,
    setlessonsType,
    setlessonsFilter,
    lessonsFilter,
    loadingPosts,
    parsedPublishData,
    parsedMaalonData,
  } = useContext(AppContext);
  const [visiblePostCount, setVisiblePostCount] = useState(20);
  const loadMorePosts = (increment) => {
    setVisiblePostCount((prevCount) => prevCount + increment);
  };
  console.log(parsedMaalonData);

  const styles = {
    gridContainer: {
      display: "flex",
      width: "70%",
      flexWrap: "wrap",
      gap: "20px",
      alignItems: "center",
      justifyContent: "center",
      margin: "auto",
    },
    loadMoreContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "20px",
    },
  };
  const currentData =
    dataType === "books" ? parsedPublishData : parsedMaalonData;
  console.log(currentData);

  const filteredBooks = currentData?.filter((book) =>
    isRoshYeshiva
      ? book.author === "הרב יהושע ויצמן"
      : book.author !== "הרב יהושע ויצמן"
  );
  return (
    <div style={styles.container}>
      <div style={styles.gridContainer}>
        {filteredBooks?.slice(0, visiblePostCount).map((book) => (
          <BookPreviewBox
            key={book.title}
            image={book.image}
            title={book.title}
            author={book.author}
            price={book.price}
            discountPrice={book.discountPrice}
            pdfFile={book.pdfFile}
            dataType={dataType}
          />
        ))}
      </div>
      {visiblePostCount < parsedPublishData?.length && (
        <div style={styles.loadMoreContainer}>
          <LoadMore onClick={() => loadMorePosts(20)} />
        </div>
      )}
    </div>
  );
};

export default BooksCollection;
