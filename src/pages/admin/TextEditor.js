import React, { useRef } from "react";
import { db } from "../../server/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import Spacer from "../../components/elements/Spacer";

const styles = {
  container: {
    width: "60%",
    margin: "auto",
    marginBottom: "20px",
    direction: "rtl",
    textAlign: "right",
  },
  contentEditable: {
    padding: "10px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  },
};

const TextEditor = () => {
  const articlesCollectionRef = collection(db, "articles");

  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const categoryRef = useRef(null);
  const masechetRef = useRef(null);
  const rabbiRef = useRef(null);
  const bodyRef = useRef(null);

  const createArticle = async () => {
    try {
      const title = titleRef.current.innerText;
      const subTitle = subTitleRef.current.innerText;
      const category = categoryRef.current.innerText;
      const masechet = masechetRef.current.innerText;
      const rabbi = rabbiRef.current.innerText;
      const body = bodyRef.current.innerText;

      await addDoc(articlesCollectionRef, {
        title,
        subTitle,
        category,
        masechet,
        rabbi,
        body,
      });
    } catch (error) {}
  };

  return (
    <div style={styles.container}>
      <Spacer height={400} />
      <div contentEditable ref={titleRef} style={styles.contentEditable}>
        כותרת
      </div>
      <div contentEditable ref={subTitleRef} style={styles.contentEditable}>
        כותרת משנה
      </div>
      <div contentEditable ref={categoryRef} style={styles.contentEditable}>
        קטגוריה
      </div>
      <div contentEditable ref={masechetRef} style={styles.contentEditable}>
        מסכת
      </div>
      <div contentEditable ref={rabbiRef} style={styles.contentEditable}>
        רב
      </div>
      <div contentEditable ref={bodyRef} style={styles.contentEditable}>
        גוף הטקסט
      </div>
      <button onClick={createArticle}>Create Article</button>
    </div>
  );
};

export default TextEditor;
