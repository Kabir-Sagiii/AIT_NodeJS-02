import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">ShopMaster</div>
        <ul className="navbar-links">
          <li>
            <a href="#electronics">Electronics</a>
          </li>
          <li>
            <a href="/users">Users</a>
          </li>
          <li>
            <a href="#jewelry">Jewelry</a>
          </li>
          <li>
            <a href="#mens-clothing">Men's Clothing</a>
          </li>
          <li>
            <a href="#womens-clothing">Women's Clothing</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
        <div className="navbar-icons">
          <a href="#search">
            <i className="fas fa-search"></i>
          </a>
          <a href="#cart">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </div>
      </nav>

      {/* Carousel */}
      <div className="carousel-container">
        <div className="carousel">
          <img
            src="https://via.placeholder.com/1200x400?text=Featured+Electronics"
            alt="Featured Electronics"
            className="carousel-image"
          />
          <img
            src="https://via.placeholder.com/1200x400?text=Stylish+Jewelry"
            alt="Stylish Jewelry"
            className="carousel-image"
          />
          <img
            src="https://via.placeholder.com/1200x400?text=Trendy+Clothing"
            alt="Trendy Clothing"
            className="carousel-image"
          />
          <img
            src="https://via.placeholder.com/1200x400?text=Latest+Men's+Wear"
            alt="Latest Men's Wear"
            className="carousel-image"
          />
        </div>
        <button className="carousel-prev">&#10094;</button>
        <button className="carousel-next">&#10095;</button>
      </div>

      {/* Product Sections */}
      <section id="electronics" className="product-section">
        <h2>Trending Electronics</h2>
        <div className="product-grid">
          <div className="product-card">Smartphone</div>
          <div className="product-card">Laptop</div>
          <div className="product-card">Smartwatch</div>
          <div className="product-card">Headphones</div>
        </div>
      </section>

      <section id="jewelry" className="product-section">
        <h2>Latest Jewelry</h2>
        <div className="product-grid">
          <div className="product-card">Gold Necklace</div>
          <div className="product-card">Diamond Ring</div>
          <div className="product-card">Sapphire Earrings</div>
          <div className="product-card">Pearl Bracelet</div>
        </div>
      </section>

      <section id="mens-clothing" className="product-section">
        <h2>Men's Trending Clothing</h2>
        <div className="product-grid">
          <div className="product-card">T-Shirt</div>
          <div className="product-card">Jeans</div>
          <div className="product-card">Jacket</div>
          <div className="product-card">Sneakers</div>
        </div>
      </section>

      <section id="womens-clothing" className="product-section">
        <h2>Women's Trending Clothing</h2>
        <div className="product-grid">
          <div className="product-card">Dress</div>
          <div className="product-card">Blouse</div>
          <div className="product-card">Skirt</div>
          <div className="product-card">Heels</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-info">
          <p>&copy; 2024 ShopMaster. All rights reserved.</p>
          <div className="social-icons">
            <a href="#facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
