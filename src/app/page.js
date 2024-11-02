"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Products from "@/components/Products/Products";
import Hero from "@/components/Hero/Hero";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      const modifiedData = data.map((item) => ({ ...item, isLiked: false }));
      setProducts(modifiedData);
      return data;
    } catch (error) {
      console.error("Error while fetching products ", error);
    }
  };

  const handleProductLike = (e) => {
    console.log(e.target.id);
    const updatedProducts = products.map((product) => ({
      ...product,
      isLiked: product.id === e.target.id,
    }));
    setProducts(updatedProducts);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <Banner />
      <Header />
      <hr />
      <Hero />
      <Products products={products} handleProductLike={handleProductLike} />
      <Footer />
    </div>
  );
};

export default HomePage;
