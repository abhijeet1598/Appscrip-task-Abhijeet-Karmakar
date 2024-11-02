import Image from "next/image";
import React, { useState } from "react";
import styles from "./products.module.css";
import Dropdown from "../Dropdown/Dropdown";
import { sortOptions } from "@/constants/sortOptions";
import Filter from "../Filter/Filter";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ products, handleProductLike }) => {
  const [isShowingFilters, setIsShowingFilters] = useState(true);

  const handleFilters = () => {
    setIsShowingFilters((prev) => !prev);
  };

  return (
    <section className={styles.products}>
      <div className={styles.productsHeader}>
        <div className={styles.productsHeaderItems}>
          <span>3425 Items</span>
          <div className={styles.filterbtn} onClick={handleFilters}>
            {isShowingFilters ? <ChevronLeft /> : <ChevronRight />}
            <p>{isShowingFilters ? "HIDE FILTER" : "SHOW FILTER"}</p>
          </div>
        </div>
        <Dropdown options={sortOptions} />
      </div>

      <div className={styles.productsHeaderMobile}>
        <div>FILTER</div>
        <Dropdown options={sortOptions} />
      </div>
      <div className={styles.wrapper}>
        {isShowingFilters && (
          <aside className={styles.filters}>
            <div className={styles.filterCategory}>
              <input type="checkbox" name="customizable" />
              <label for="customizable">Customizable</label>
            </div>
            <Filter
              category={"Ideal for"}
              options={["Men", "Women", "Baby & Kids"]}
            />
            <Filter category={"Occasion"} options={[]} />
            <Filter category={"Work"} options={[]} />
            <Filter
              category={"Fabric"}
              options={["Cotton", "Nylon", "Linen"]}
            />
            <Filter category={"Segment"} options={[]} />
            <Filter category={"Suitable For"} options={[]} />
            <Filter category={"Raw Material"} options={[]} />
            <Filter
              category={"Pattern"}
              options={["Solid", "Printed", "Checks"]}
            />
          </aside>
        )}
        <div className={styles.productsContainer}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleProductLike={handleProductLike}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
