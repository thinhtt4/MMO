import React, { useState } from 'react';
import { Search, ShoppingCart, ChevronDown, Clock, X, ChevronLeft, ChevronRight } from 'lucide-react';

const MMOToolWebsite = () => {
  const [searchHistory, setSearchHistory] = useState([
    'IP dân cư Việt Nam',
    'IP dân cư Việt Nam',
    'IP dân cư Việt Nam'
  ]);

  const products = [
    {
      id: 1,
      title: 'WW Proxy - IP dân cư Việt Nam',
      price: '1.000 đ -15.000 đ',
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=300&fit=crop',
      bgColor: 'bg-blue-700',
      logo: 'WW'
    },
    {
      id: 2,
      title: 'Tải Khoản TikTok Nhiều Quốc Gia',
      price: '1.000 đ -15.000 đ',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop',
      bgColor: 'bg-gray-700',
      logo: 'TikTok'
    },
    {
      id: 3,
      title: 'Facebook Có 30-200 Bài Viết Năm 2023',
      price: '1.000 đ -15.000 đ',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
      bgColor: 'bg-blue-500',
      logo: 'f'
    },
    {
      id: 4,
      title: 'Download tất cả video của kênh trên DOUYIN',
      price: '1.000 đ -15.000 đ',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop',
      bgColor: 'bg-yellow-400',
      badge: 'Download'
    }
  ];

  const services = [
    {
      icon: '📧',
      title: 'Email',
      description: 'Cung cấp các loại email đa dạng, chất lượng cao để nên sử dụng cho nhiều mục đích khác nhau'
    },
    {
      icon: '💎',
      title: 'Phần mềm',
      description: 'Cung cấp nhiều phần mềm MMO giúp bạn tiết kiệm thời gian phục vụ công việc bán hàng online của bạn'
    },
    {
      icon: '👤',
      title: 'Tài khoản',
      description: 'Cung cấp tài khoản các mạng xã hội Facebook, Tiktok, Instagram...'
    },
    {
      icon: '➕',
      title: 'Khác',
      description: 'Các sản phẩm dịch vụ khác'
    }
  ];

  const serviceCards = [
    {
      title: 'Tăng tương tác',
      description: 'Tăng mắt, tăng view bài viết, comment Facebook, Instagram, Tiktok,...',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop',
      gradient: 'from-purple-400 to-blue-500'
    },
    {
      title: 'Dịch vụ phần mềm',
      description: 'Dịch vụ cung cấp phần mềm MMO hữu ích và cực kỳ tiện dụng',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
      gradient: 'from-orange-300 to-pink-400'
    },
    {
      title: 'Blockchain',
      description: 'Dịch vụ chia sẻ, tài nguyên, và kiến thức về công nghệ Blockchain',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop',
      gradient: 'from-purple-600 to-purple-800'
    },
    {
      title: 'Dịch vụ khác',
      description: 'Các dịch vụ uy tín về MMO và dịch vụ khác',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop',
      gradient: 'from-pink-500 to-purple-600'
    }
  ];

  const removeHistory = (index) => {
    setSearchHistory(searchHistory.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-3xl font-bold">
                <span className="text-indigo-600">MMO</span>
                <span className="text-gray-400"> Tool</span>
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600">
                  Sản phẩm <ChevronDown className="ml-1 w-4 h-4" />
                </a>
                <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600">
                  Dịch vụ <ChevronDown className="ml-1 w-4 h-4" />
                </a>
                <a href="#" className="text-gray-700 hover:text-indigo-600">Hỗ trợ</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600">Chia sẻ</a>
                <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600">
                  Cộng cụ <ChevronDown className="ml-1 w-4 h-4" />
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-indigo-600">Đăng Ký</button>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
                Đăng Nhập
              </button>
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Search */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <Search className="w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm"
                  className="flex-1 outline-none text-lg"
                />
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 font-medium">
                  Tìm kiếm
                </button>
              </div>
              
              <div className="flex space-x-4 mb-6">
                <select className="border rounded-lg px-4 py-2 text-gray-700">
                  <option>Tùy chọn tìm kiếm</option>
                </select>
                <select className="border rounded-lg px-4 py-2 text-gray-700">
                  <option>Tùy chọn cấp 2</option>
                </select>
                <select className="border rounded-lg px-4 py-2 text-gray-700">
                  <option>Tùy chọn cấp 3</option>
                </select>
              </div>

              {searchHistory.length > 0 && (
                <div className="space-y-2">
                  {searchHistory.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                      <button onClick={() => removeHistory(index)}>
                        <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`${product.bgColor} h-48 flex items-center justify-center relative`}>
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-lg font-bold">
                      {product.badge}
                    </div>
                  )}
                  <div className="text-white text-4xl font-bold">
                    {product.logo}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-2 h-12">{product.title}</h3>
                  <p className="text-indigo-600 font-semibold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg z-10">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Purple Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-2">Tạp hóa MMO</h2>
          <p className="text-xl mb-1">Chuyên mua bán sản phẩm số</p>
          <p className="text-lg">Phục vụ cộng đồng MMO</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Sản phẩm</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl shadow-lg">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <button className="border border-gray-300 px-6 py-2 rounded-lg hover:border-indigo-500 hover:text-indigo-600 transition-colors">
                Chi tiết
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Service Cards */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Dịch vụ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((card, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`h-48 bg-gradient-to-br ${card.gradient}`}></div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                <button className="border border-gray-300 px-6 py-2 rounded-lg hover:border-indigo-500 hover:text-indigo-600 transition-colors w-full">
                  Chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tạp hóa MMO</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-start space-x-6">
              <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold mb-4">Chuyên mua bán sản phẩm số - Phục vụ cộng đồng MMO</h3>
                <p className="text-gray-600 leading-relaxed">
                  Chúng tôi cung cấp các dịch vụ và sản phẩm chất lượng cao phục vụ cộng đồng MMO. 
                  Với đội ngũ chuyên nghiệp và tận tâm, chúng tôi cam kết mang đến trải nghiệm tốt nhất cho khách hàng.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4">Các tính năng tiện trang</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Phong cách mua sắm theo cá nhân</li>
              <li>• Hỗ trợ thông báo theo lĩnh vực của người dùng</li>
              <li>• Lưu trữ lịch sử tìm kiếm</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Giải đáp một số thắc mắc cùng MMO</h2>
          <div className="flex justify-center space-x-4">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg">Trang chủ</button>
            <button className="border border-gray-300 px-6 py-2 rounded-lg hover:border-indigo-500">Nạp tiền</button>
            <button className="border border-gray-300 px-6 py-2 rounded-lg hover:border-indigo-500">Công cụ màn</button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-indigo-600 mb-4">FAQ</div>
          </div>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <span className="font-medium">Làm sao để mua hàng?</span>
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
            <div className="border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <span className="font-medium">Làm sao để nạp tiền?</span>
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
            <div className="border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <span className="font-medium">Tôi muốn bán sản phẩm?</span>
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Thông tin liên hệ</h3>
              <p className="text-gray-400 text-sm">Địa chỉ: Hà Nội, Việt Nam</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Thông tin</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Giới thiệu</li>
                <li>Điều khoản dịch vụ</li>
                <li>Chính sách bảo mật</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">f</a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">t</a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">in</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MMOToolWebsite;