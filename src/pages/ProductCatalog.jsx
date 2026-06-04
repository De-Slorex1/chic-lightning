import {useState} from 'react';
import "./ProductCatalog.css";

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

const products = [

        {
          id: 1,
          image: img1,
          title: "Aurora Crystal Tiered",
          desc: "A stunning multi-tiered masterpiece featuring...",
          wattage: "60W x 12",
          material: "Brass & Crystal",
          price: "$3,450.00",
          badge: "NEW COLLECTION",
          category: "Ceiling Lights",
          subCategory: "Crystal",
        },
        {
          id: 2,
          image: img2,
          title: "Modena Linear Pendant",
          desc: "Architectural linear lighting perfect for islands and...",
          wattage: "LED 45W",
          material: "Aluminum",
          price: "$895.00",
          category: "Wall Lights",
          subCategory: "Modern",
        },
        {
          id: 3,
          image: img3,
          title: "Heritage Gold Flush",
          desc: "Classic design meets modern efficiency...",
          wattage: "2 x 40W",
          material: "Hand-Leafed Steel",
          price: "$425.00",
          category: "Lamps",
          subCategory: "Traditional",
        },
        {
          id: 4,
          image: img4,
          title: "Foundry Loft Pendant",
          desc: "Rugged industrial charm refined for modern...",
          wattage: "60W Edison",
          material: "Forged Steel",
          price: "$310.00",
          category: "Outdoor Lights",
          subCategory: "Modern",
        },
        {
          id: 5,
          image: img5,
          title: "Solstice Wood Ribbon",
          desc: "Hand-bent oak veneers create a mesmerizing...",
          wattage: "LED 30W",
          material: "Oak & Acrylic",
          price: "$1,120.00",
          category: "Lamps",
          subCategory: "Traditional",
        },
        {
          id: 6,
          image: img6,
          title: "Zenith Ultra-Slim LED",
          desc: "Edge-lit technology providing shadowless...",
          wattage: "24W Dimmable",
          material: "Anodized Gold",
          price: "$245.00",
          category: "Led Lights",
          subCategory: "Crystal",
        },
    {
    id: 7,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    title: "Crystal Bloom Chandelier",
    desc: "Sparkling crystal chandelier inspired by blooming flowers.",
    wattage: "50W x 8",
    material: "Crystal",
    price: "$2,250.00",
    badge: "LUXURY",
    category: "Ceiling Lights",
    subCategory: "Crystal"
    },
    
    {
    id: 8,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
    title: "Empire Brass Pendant",
    desc: "Elegant brass pendant ideal for kitchen islands.",
    wattage: "35W",
    material: "Brass",
    price: "$680.00",
    badge: "TRENDING",
    category: "Ceiling Lights",
    subCategory: "Modern"
    },
    
    {
    id: 9,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    title: "Vintage Lantern Wall Light",
    desc: "Traditional lantern-style wall fixture with warm glow.",
    wattage: "40W",
    material: "Steel",
    price: "$190.00",
    badge: "POPULAR",
    category: "Wall Lights",
    subCategory: "Traditional"
    },
    
    {
    id: 10,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    title: "Nova LED Wall Bar",
    desc: "Modern LED wall fixture for hallways and bedrooms.",
    wattage: "18W",
    material: "Aluminum",
    price: "$145.00",
    badge: "BEST SELLER",
    category: "Wall Lights",
    subCategory: "Modern"
    },
    
    {
    id: 11,
    image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9",
    title: "Royal Crystal Sconce",
    desc: "Luxury wall sconce featuring hand-cut crystal accents.",
    wattage: "25W",
    material: "Crystal",
    price: "$320.00",
    badge: "LUXURY",
    category: "Wall Lights",
    subCategory: "Crystal"
    },
    
    {
    id: 12,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    title: "Orbit Ring Pendant",
    desc: "Circular LED pendant creating dramatic visual impact.",
    wattage: "48W",
    material: "Aluminum",
    price: "$760.00",
    badge: "TRENDING",
    category: "Home Accents",
    subCategory: "Modern"
    },
    
    {
    id: 13,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    title: "Aria Table Lamp",
    desc: "Elegant bedside lamp with soft ambient lighting.",
    wattage: "15W",
    material: "Ceramic",
    price: "$120.00",
    badge: "POPULAR",
    category: "Lamps",
    subCategory: "Traditional"
    },
    
    {
    id: 14,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    title: "Halo Desk Lamp",
    desc: "Compact LED desk lamp for productivity and style.",
    wattage: "12W",
    material: "Aluminum",
    price: "$95.00",
    badge: "BEST SELLER",
    category: "Offers",
    subCategory: "Modern"
    },
    
    {
    id: 15,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
    title: "Regency Crystal Lamp",
    desc: "Premium crystal table lamp with gold detailing.",
    wattage: "20W",
    material: "Crystal",
    price: "$380.00",
    badge: "LUXURY",
    category: "Lamps",
    subCategory: "Crystal"
    },
    
    {
    id: 16,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    title: "Forest Glow Floor Lamp",
    desc: "Tall floor lamp with warm oak finish.",
    wattage: "25W",
    material: "Oak",
    price: "$280.00",
    badge: "NEW COLLECTION",
    category: "Offers",
    subCategory: "Modern"
    },
    
    {
    id: 17,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    title: "Eclipse Arc Lamp",
    desc: "Contemporary arc floor lamp for modern living spaces.",
    wattage: "30W",
    material: "Steel",
    price: "$420.00",
    badge: "TRENDING",
    category: "Fans",
    subCategory: "Modern"
    },
    
    {
    id: 18,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    title: "Beacon Outdoor Lantern",
    desc: "Weather-resistant outdoor lantern with classic styling.",
    wattage: "18W",
    material: "Steel",
    price: "$165.00",
    badge: "POPULAR",
    category: "Outdoor Lights",
    subCategory: "Traditional"
    },
    
    {
    id: 19,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    title: "Pathway Solar Light",
    desc: "Energy-efficient solar pathway illumination.",
    wattage: "8W",
    material: "Aluminum",
    price: "$75.00",
    badge: "ECO",
    category: "Home Accents",
    subCategory: "Modern"
    },
    
    {
    id: 20,
    image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9",
    title: "Garden Glow Bollard",
    desc: "Elegant landscape lighting for outdoor pathways.",
    wattage: "12W",
    material: "Steel",
    price: "$140.00",
    badge: "BEST SELLER",
    category: "Outdoor Lights",
    subCategory: "Modern"
    },
    
    {
    id: 21,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
    title: "Radiant LED Panel",
    desc: "Slim LED panel providing uniform illumination.",
    wattage: "36W",
    material: "Aluminum",
    price: "$110.00",
    badge: "TRENDING",
    category: "LED Lights",
    subCategory: "Modern"
    },
    
    {
    id: 22,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    title: "Spectrum Smart Light",
    desc: "App-controlled RGB lighting with smart features.",
    wattage: "15W",
    material: "Polycarbonate",
    price: "$89.00",
    badge: "SMART",
    category: "Offers",
    subCategory: "Modern"
    },
    
    {
    id: 23,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    title: "Celestial Ring Chandelier",
    desc: "Floating ring chandelier with integrated LEDs.",
    wattage: "55W",
    material: "Aluminum",
    price: "$1,850.00",
    badge: "LUXURY",
    category: "Ceiling Lights",
    subCategory: "Modern"
    },
    
    {
    id: 24,
    image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9",
    title: "Grand Palace Chandelier",
    desc: "Large crystal centerpiece designed for luxury interiors.",
    wattage: "60W x 18",
    material: "Crystal",
    price: "$5,900.00",
    badge: "PREMIUM",
    category: "Fans",
    subCategory: "Crystal"
    },
    
    {
    id: 25,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    title: "Metro Track Light",
    desc: "Adjustable track lighting for modern homes.",
    wattage: "20W x 4",
    material: "Aluminum",
    price: "$260.00",
    badge: "POPULAR",
    category: "Offers",
    subCategory: "Modern"
    },
    {
      id: 26,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
      title: "Luna Frost Pendant",
      desc: "Elegant frosted glass pendant with ambient glow.",
      wattage: "28W",
      material: "Glass",
      price: "$340.00",
      badge: "NEW COLLECTION",
      category: "Home Accents",
      subCategory: "Modern"
    },
    
    {
      id: 27,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      title: "Imperial Crystal Crown",
      desc: "Statement crystal chandelier for luxury interiors.",
      wattage: "60W x 14",
      material: "Crystal",
      price: "$4,200.00",
      badge: "PREMIUM",
      category: "Ceiling Lights",
      subCategory: "Crystal"
    },
    
    {
      id: 28,
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      title: "Nordic Beam Pendant",
      desc: "Minimalist Scandinavian-inspired pendant fixture.",
      wattage: "32W",
      material: "Oak",
      price: "$590.00",
      badge: "TRENDING",
      category: "Ceiling Lights",
      subCategory: "Modern"
    },
    
    {
      id: 29,
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      title: "Regal Wall Lantern",
      desc: "Classic lantern wall fixture with brass accents.",
      wattage: "40W",
      material: "Brass",
      price: "$220.00",
      badge: "POPULAR",
      category: "Wall Lights",
      subCategory: "Traditional"
    },
    
    {
      id: 30,
      image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9",
      title: "Glow Edge Sconce",
      desc: "Modern wall light with seamless illumination.",
      wattage: "18W",
      material: "Aluminum",
      price: "$160.00",
      badge: "BEST SELLER",
      category: "Wall Lights",
      subCategory: "Modern"
    },
    
    {
      id: 31,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
      title: "Diamond Crystal Sconce",
      desc: "Luxury crystal wall fixture with shimmering finish.",
      wattage: "22W",
      material: "Crystal",
      price: "$395.00",
      badge: "LUXURY",
      category: "Wall Lights",
      subCategory: "Crystal"
    },
    
    {
      id: 32,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      title: "Harmony Table Lamp",
      desc: "Elegant ceramic lamp for bedrooms and lounges.",
      wattage: "12W",
      material: "Ceramic",
      price: "$110.00",
      badge: "POPULAR",
      category: "Lamps",
      subCategory: "Traditional"
    },
    
    {
      id: 33,
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      title: "Vertex LED Desk Lamp",
      desc: "Adjustable desk lamp with touch controls.",
      wattage: "10W",
      material: "Aluminum",
      price: "$85.00",
      badge: "SMART",
      category: "Lamps",
      subCategory: "Modern"
    },
    
    {
      id: 34,
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      title: "Royal Amber Lamp",
      desc: "Crystal-inspired table lamp with warm glow.",
      wattage: "15W",
      material: "Glass",
      price: "$260.00",
      badge: "LUXURY",
      category: "Lamps",
      subCategory: "Crystal"
    },
    
    {
      id: 35,
      image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9",
      title: "Auric Floor Lamp",
      desc: "Tall designer floor lamp with premium finish.",
      wattage: "28W",
      material: "Steel",
      price: "$390.00",
      badge: "TRENDING",
      category: "Lamps",
      subCategory: "Modern"
    },
    
    {
      id: 36,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
      title: "Garden Beacon",
      desc: "Weather-resistant outdoor pathway fixture.",
      wattage: "15W",
      material: "Steel",
      price: "$135.00",
      badge: "BEST SELLER",
      category: "Outdoor Lights",
      subCategory: "Traditional"
    },
    
    {
      id: 37,
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      title: "Solar Horizon Light",
      desc: "Solar-powered outdoor lighting with dusk sensor.",
      wattage: "8W",
      material: "Polycarbonate",
      price: "$70.00",
      badge: "ECO",
      category: "Outdoor Lights",
      subCategory: "Modern"
    },
    
    {
      id: 38,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      title: "Parkway Bollard",
      desc: "Architectural landscape lighting for pathways.",
      wattage: "16W",
      material: "Aluminum",
      price: "$180.00",
      badge: "POPULAR",
      category: "Outdoor Lights",
      subCategory: "Modern"
    },
    
    {
      id: 39,
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      title: "Radiance LED Panel",
      desc: "Slim ceiling panel delivering uniform brightness.",
      wattage: "40W",
      material: "Aluminum",
      price: "$130.00",
      badge: "TRENDING",
      category: "LED Lights",
      subCategory: "Modern"
    },
    
    {
      id: 40,
      image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9",
      title: "Smart Spectrum Bulb",
      desc: "Wi-Fi enabled bulb with millions of colors.",
      wattage: "12W",
      material: "Polycarbonate",
      price: "$55.00",
      badge: "SMART",
      category: "LED Lights",
      subCategory: "Modern"
    },
    
    {
      id: 41,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
      title: "Infinity Ring Pendant",
      desc: "Floating ring design with integrated LEDs.",
      wattage: "52W",
      material: "Aluminum",
      price: "$1,450.00",
      badge: "LUXURY",
      category: "Ceiling Lights",
      subCategory: "Modern"
    },
    
    {
      id: 42,
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      title: "Majestic Crystal Empire",
      desc: "Large luxury chandelier for grand spaces.",
      wattage: "60W x 20",
      material: "Crystal",
      price: "$6,500.00",
      badge: "PREMIUM",
      category: "Ceiling Lights",
      subCategory: "Crystal"
    },
    
    {
      id: 43,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      title: "Metro Spotlight Rail",
      desc: "Adjustable track light system for interiors.",
      wattage: "18W x 4",
      material: "Steel",
      price: "$280.00",
      badge: "BEST SELLER",
      category: "LED Lights",
      subCategory: "Modern"
    },
    
    {
      id: 44,
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      title: "Vintage Edison Pendant",
      desc: "Industrial pendant inspired by classic Edison lamps.",
      wattage: "40W",
      material: "Steel",
      price: "$210.00",
      badge: "TRENDING",
      category: "Ceiling Lights",
      subCategory: "Traditional"
    },
    
    {
      id: 45,
      image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9",
      title: "Opal Glass Pendant",
      desc: "Elegant pendant with soft opal diffusion.",
      wattage: "24W",
      material: "Glass",
      price: "$320.00",
      badge: "NEW COLLECTION",
      category: "Ceiling Lights",
      subCategory: "Modern"
    },
    
    {
      id: 46,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
      title: "Prestige Crystal Halo",
      desc: "Luxury halo chandelier featuring premium crystals.",
      wattage: "50W x 10",
      material: "Crystal",
      price: "$3,850.00",
      badge: "LUXURY",
      category: "Ceiling Lights",
      subCategory: "Crystal"
    },
    
    {
      id: 47,
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      title: "Urban Glow Wall Light",
      desc: "Contemporary wall fixture for modern homes.",
      wattage: "16W",
      material: "Aluminum",
      price: "$145.00",
      badge: "POPULAR",
      category: "Wall Lights",
      subCategory: "Modern"
    },
    
    {
      id: 48,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      title: "Classic Manor Sconce",
      desc: "Traditional wall sconce with decorative detailing.",
      wattage: "25W",
      material: "Brass",
      price: "$235.00",
      badge: "TRADITIONAL",
      category: "Wall Lights",
      subCategory: "Traditional"
    },
    
    {
      id: 49,
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      title: "Eco Solar Lantern",
      desc: "Outdoor solar lantern with automatic illumination.",
      wattage: "10W",
      material: "Polycarbonate",
      price: "$90.00",
      badge: "ECO",
      category: "Outdoor Lights",
      subCategory: "Modern"
    },
    
    {
      id: 50,
      image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9",
      title: "Signature Grand Chandelier",
      desc: "Premium centerpiece chandelier for luxury interiors.",
      wattage: "60W x 16",
      material: "Crystal",
      price: "$5,200.00",
      badge: "SIGNATURE",
      category: "Ceiling Lights",
      subCategory: "Crystal"
    }
    ];
  

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

                  <button onClick={handleAddToCart}>
                    <FaShoppingBasket />
                  </button>
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