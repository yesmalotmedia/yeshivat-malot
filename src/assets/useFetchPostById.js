import { useState, useEffect } from "react";

const useFetchPostById = (postId) => {
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState("idle"); // "idle" | "pending" | "success" | "error"
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!postId) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchPost = async () => {
      setStatus("pending");
      setError(null);

      try {
        const response = await fetch(
          `https://yesmalot.co.il/wp-json/custom/v1/posts/${postId.trim()}`,
          { signal }
        );

        if (!response.ok) throw new Error("Failed to fetch post");

        const data = await response.json();

        setPost(data);
        setStatus("success");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching post:", err);
          setError(err.message);
          setStatus("error");
        }
      }
    };

    fetchPost();

    return () => controller.abort(); // ביטול הבקשה אם ה-`postId` משתנה או הרכיב מתנתק
  }, [postId]);

  return { post, status, error };
};

export default useFetchPostById;
