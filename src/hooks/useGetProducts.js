import { useEffect, useState } from 'react';
import axios from 'axios';
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
    />
  ),
});

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      setProducts(response.data);
    }
    fetchData();
  }, [API]);

  return products;
};

export default useGetProducts;
