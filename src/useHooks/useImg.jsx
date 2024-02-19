import { useEffect, useState } from "react";

export function useImg(product) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    async function fetchImg() {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${product}`
      );
      const data = await res.json();

      setUrl(data[2].image);
      console.log(data);
      // console.log(data[2].price);
    }
    fetchImg();
  }, [product]);

  return { url };
}
