import React from 'react';
import '../css/banner.css';
import '../css/base.css';

function Banner() {
  return (
    <div className='banner '>
        <div className="grid wide">
            <div className="row">
                <a className='banner-inner'>
                    <div className="text-inner c-6">
                        <h4 className="text-inner--title">Mona Watch</h4>
                        <h1 className="text-inner--heading">Đồng hồ Classico</h1>
                        <p className="text-inner--des">
                            Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương 
                            hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…
                        </p>
                        <button className='banner-btn'>
                            <span className='banner-btn--text'>Xem sản phẩm</span>
                        </button>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Banner