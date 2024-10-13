import { useState, useEffect } from "react";

function useLoadingData(pageName) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [content, setContent] = useState(null);
  const [isMediaLoading, setIsMediaLoading] = useState(true);

  // useEffect(() => {
  //   fetch(`${backendUrl}/api/Pages/${pageName}/content`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((resp) => {
  //       if (!resp.ok) {
  //         throw new Error(resp.statusText);
  //       }

  //       return resp.json();
  //     })
  //     .then((data) => {
  //       setContent(
  //         [
  //           ...data.pageTexts.map((item) => ({
  //             [item.htmlElementId]: { ...item },
  //           })),
  //           ...data.pageMetrics.map((item) => ({
  //             [item.htmlElementId]: { ...item },
  //           })),
  //         ].reduce((acc, item) => {
  //           const key = Object.keys(item)[0];
  //           acc[key] = item[key];
  //           return acc;
  //         }, {})
  //       );
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  return [content, isMediaLoading, setIsMediaLoading];
}

export default useLoadingData;
