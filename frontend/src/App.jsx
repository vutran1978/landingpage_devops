import './App.css';

function App() {
  return (
    <div>
      <header className="topbar">
        <div className="logo">KH01</div>
        <nav>
          <a href="#">Trang Chủ</a>
          <a href="#">Giới Thiệu</a>
          <a href="#">Phòng Nghỉ</a>
          <a href="#">Ẩm Thực</a>
          <a href="#">Tuyển Dụng</a>
          <a href="#">Liên Hệ</a>
        </nav>
        <button className="btn">Đặt Ngay</button>
      </header>

      <section className="hero">
        <img src="/images/hero.jpg" alt="Hero" className="hero-image" />
      </section>

      <section className="features">
        <div className="feature-box">Uy tín chất lượng</div>
        <div className="feature-box">Sạch sẽ thông mát</div>
        <div className="feature-box">Bảo mật thông tin</div>
        <div className="feature-box">Hỗ trợ 24/7</div>
      </section>

      <section className="about">
        <h2>Về chúng tôi</h2>
        <p>KH01 là một nơi cung cấp dịch vụ lưu trú...</p>
      </section>

      <section className="gallery">
  <h3>Thư viện hình ảnh</h3>
  <div className="gallery-grid">
    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Phòng nghỉ 1" />
    <img src="https://images.unsplash.com/photo-1582719478185-2197dfe1b6ae" alt="Phòng nghỉ 2" />
    <img src="https://images.unsplash.com/photo-1552903023-1fdd531aefde" alt="Phòng nghỉ 3" />
  </div>
</section>

      <footer>
        <p>© KH01 Hotel 2025</p>
      </footer>
    </div>
  );
}

export default App;
