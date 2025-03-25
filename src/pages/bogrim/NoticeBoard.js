import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../App";
import Notice from "./Notice";
import ModalBg from "../../components/elements/ModalBg";
import Popup from "../../components/elements/Popup";

export default function NoticeBoard({ title, titleStyle }) {
  const { colors, responsive, parsedNoticesData } = useContext(AppContext);

  const [visibleNotices, setVisibleNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [isModalBg, setIsModalBg] = useState(false);

  useEffect(() => {
    if (!parsedNoticesData || parsedNoticesData.length === 0) return;

    const latestNotices = [...parsedNoticesData]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 18);

    let index = 0;

    const updateNotices = () => {
      setVisibleNotices(latestNotices.slice(index, index + 6));
      index = (index + 6) % latestNotices.length;
    };

    updateNotices();

    if (!isModalBg) {
      const id = setInterval(updateNotices, 8000);
      setIntervalId(id);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [parsedNoticesData, isModalBg]);

  const handleClick = (notice) => {
    setSelectedNotice(notice);
    setIsModalBg(true);
    if (intervalId) clearInterval(intervalId);
  };

  const closePopup = () => {
    setIsModalBg(false);
    setSelectedNotice(null);
  };

  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      backgroundImage: "url('/noticeBoardBg.png')",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "100%",
      height: responsive("40vw", "45vw", "60vw"),
      justifyContent: "center",
      alignItems: "center",
      gap: 0,
    },
    title: titleStyle,
  };

  return (
    <>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.container}>
        {visibleNotices.map((notice) => (
          <Notice
            onClick={() => handleClick(notice)}
            key={notice.id}
            // content={
            //   <span dangerouslySetInnerHTML={{ __html: notice.content }} />
            // }
            content={notice.content}
            type={notice.type}
            isModalBg={isModalBg}
          />
        ))}
      </div>

      {isModalBg && selectedNotice && (
        <>
          <ModalBg onClick={closePopup} />

          {/* אנימציה מתוקנת עם תיקון הקפיצה */}
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <Popup>
              <Notice
                content={selectedNotice.content}
                type={selectedNotice.type}
                isPopup={true}
              />
            </Popup>
          </motion.div>
        </>
      )}
    </>
  );
}
