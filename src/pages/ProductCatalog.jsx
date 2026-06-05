import {useState, useEffect} from 'react';
import "./ProductCatalog.css";
import { FaFilePdf } from "react-icons/fa";
import { jsPDF } from 'jspdf';

import {
  FaRegLightbulb,
  FaLightbulb,
  FaFan,
  FaTags,
  FaShoppingBasket,
} from "react-icons/fa";

import {
  MdOutlineWallpaper,
  MdOutlineHome,
} from "react-icons/md";

import img1 from '../assets/aurora.png';
import img2 from '../assets/modena.png';
import img3 from '../assets/heritage.png';
import img4 from '../assets/foundry.png';
import img5 from '../assets/solstice.png';
import img6 from '../assets/zenith.png';

const ProductCatalog = ({setCartCount}) => {
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState("Featured");
    const [activeCategory, setActiveCategory] = useState("Ceiling Lights");
    const [selectedMaterials, setSelectedMaterials] = useState([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);

    const handleSubCategoryChange = (subCategory) => {
      setSelectedSubCategories((prev) =>
        prev.includes(subCategory)
          ? prev.filter((item) => item !== subCategory)
          : [...prev, subCategory]
      );
    };

    const handleAddToCart = () => {
      setCartCount(prev => prev + 1);
    };
  const handleMaterialChange = (material) => {
  setSelectedMaterials((prev) =>
    prev.includes(material)
      ? prev.filter((item) => item !== material)
      : [...prev, material]
  );
};

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch("/data.json");
      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  fetchProducts();
}, []);

const handleDownloadPDF = (product) => {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(20);
  doc.text(product.title, 20, 20);

  // Description
  doc.setFontSize(12);

  const description = doc.splitTextToSize(
    product.longDescription,
    170
  );

  doc.text(description, 20, 35);

  // Product Details
  doc.text(`Price: ${product.price}`, 20, 90);
  doc.text(`Material: ${product.material}`, 20, 100);
  doc.text(`Wattage: ${product.wattage}`, 20, 110);
  doc.text(`Category: ${product.category}`, 20, 120);
  doc.text(`Sub Category: ${product.subCategory}`, 20, 130);

  // Features
  doc.setFontSize(14);
  doc.text("Features", 20, 150);

  doc.setFontSize(12);

  product.features.forEach((feature, index) => {
    doc.text(`• ${feature}`, 25, 165 + index * 10);
  });

  doc.save(
    `${product.title.toLowerCase().replace(/\s+/g, "-")}.pdf`
  );
};

const sortedProducts = [...products].sort((a, b) => {
  const priceA = Number(
    a.price.replace("$", "").replace(/,/g, "")
  );

  const priceB = Number(
    b.price.replace("$", "").replace(/,/g, "")
  );

  if (sortOption === "Low") {
    return priceA - priceB;
  }

  if (sortOption === "High") {
    return priceB - priceA;
  }
  return 0;
});

const filteredProducts = sortedProducts.filter((product) => {
    const categoryMatch =
      activeCategory === "All" ? true : product.category === activeCategory;

    const materialMatch =
      selectedMaterials.length === 0
        ? true
        : selectedMaterials.some((material) => product.material.toLowerCase().includes(material.toLowerCase()));

    const subCategoryMatch =
      selectedSubCategories.length === 0
        ? true
        : selectedSubCategories.includes(product.subCategory);    

    return categoryMatch && materialMatch && subCategoryMatch;
  });


  return (
    <div className="productCatalog">
      {/* Sidebar */}

      <aside className="sidebar">
        <div className="sidebarCard">
          <h2>Product Categories</h2>
          <p>Browse our collection</p>

          <ul className="categoryList">

            <li className= {activeCategory === "All" ? "active" : ""} onClick={() => setActiveCategory("All")}>
              <FaLightbulb />
              All Products
            </li>

            <li className= {activeCategory === "Ceiling Lights" ? "active" : ""} onClick={() => setActiveCategory("Ceiling Lights")}>
              <FaRegLightbulb />
              Ceiling Lights
            </li>

            <li className= {activeCategory === "Wall Lights" ? "active" : ""} onClick={() => setActiveCategory ("Wall Lights")}>
              <MdOutlineWallpaper />
              Wall Lights
            </li>

            <li className= {activeCategory === "Lamps" ? "active" : ""} onClick={() => setActiveCategory("Lamps")}>
              <FaLightbulb />
              Lamps
            </li>

            <li className= {activeCategory === "LED Lights" ? "active" : ""} onClick={() => setActiveCategory("LED Lights")}>
              <FaRegLightbulb />
              LED Lights
            </li>

            <li className= {activeCategory === "Outdoor Lights" ? "active" : ""} onClick={() => setActiveCategory("Outdoor Lights")}>
              <FaLightbulb />
              Outdoor Lights
            </li>

            <li className= {activeCategory === "Fans" ? "active" : ""} onClick={() => setActiveCategory("Fans")}>
              <FaFan />
              Fans
            </li>

            <li className= {activeCategory === "Home Accents" ? "active" : ""} onClick={() => setActiveCategory("Home Accents")}>
              <MdOutlineHome />
              Home Accents
            </li>

            <li className= {activeCategory === "Offers" ? "active" : ""} onClick={() => setActiveCategory("Offers")}>
              <FaTags />
              Offers
            </li>
          </ul>
        </div>

        <div className="filterCard">
          <h4>SUB-CATEGORIES</h4>

          <label>
            <input type="checkbox" checked = {selectedSubCategories.includes("Crystal")} onChange={() => handleSubCategoryChange("Crystal")} />
            Crystal
          </label>

          <label>
            <input type="checkbox" checked = {selectedSubCategories.includes("Traditional")} onChange={() => handleSubCategoryChange("Traditional")} />
            Traditional
          </label>

          <label>
            <input type="checkbox" checked = {selectedSubCategories.includes("Modern")} onChange={() => handleSubCategoryChange("Modern")} />
            Modern
          </label>

          <hr />

          <h4>MATERIAL</h4>

          <label>
  <input
    type="checkbox"
    checked={selectedMaterials.includes("Brass")}
    onChange={() => handleMaterialChange("Brass")}
  />
  Brass
</label>

<label>
  <input
    type="checkbox"
    checked={selectedMaterials.includes("Crystal")}
    onChange={() => handleMaterialChange("Crystal")}
  />
  Crystal
</label>

<label>
  <input
    type="checkbox"
    checked={selectedMaterials.includes("Glass")}
    onChange={() => handleMaterialChange("Glass")}
  />
  Glass
</label>

<label>
  <input
    type="checkbox"
    checked={selectedMaterials.includes("Aluminum")}
    onChange={() => handleMaterialChange("Aluminum")}
  />
  Aluminum
</label>

<label>
  <input
    type="checkbox"
    checked={selectedMaterials.includes("Steel")}
    onChange={() => handleMaterialChange("Steel")}
  />
  Steel
</label>
        </div>
      </aside>

      {/* Main Content */}

      <main className="catalogContent">
        <div className="catalogHeader">
          <div>
            <h1>{activeCategory}({filteredProducts.length})</h1>
            <p>
              Discover our curated selection of architectural
              lighting, where craftsmanship meets contemporary
              design.
            </p>
          </div>

          <div className="sortBox">
  <span>Sort by:</span>

  <select
    value={sortOption}
    onChange={(e) => setSortOption(e.target.value)}
  >
    <option value="Featured">Featured</option>
    <option value="Low">Price Low - High</option>
    <option value="High">Price High - Low</option>
  </select>
</div>
        </div>

        <div className="productGrid">
          {filteredProducts.map((product, index) => (
            <div className="productCard" key={product.id}  data-aos="fade-up"
    data-aos-delay={index * 80}>
              <div className="imageWrapper">
                {product.badge && (
                  <span className="badge">{product.badge}</span>
                )}

                <img
                  src={product.image}
                  alt={product.title}
                />
              </div>

              <div className="cardBody">
                <h3>{product.title}</h3>

                <p>{product.desc}</p>

                <div className="divider"></div>

                <div className="specs">
                  <div>
                    <span>WATTAGE</span>
                    <h5>{product.wattage}</h5>
                  </div>

                  <div>
                    <span>MATERIAL</span>
                    <h5>{product.material}</h5>
                  </div>
                </div>

                <div className="cardFooter">
                  <div>
                    <h4>{product.price}</h4>
                    <small>● In Stock</small>
                  </div>

                  <div className="productActions">
                    <button
                      className="cartBtn"
                      onClick={handleAddToCart}
                    >
                      <FaShoppingBasket />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductCatalog;