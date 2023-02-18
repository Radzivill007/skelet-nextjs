import React from 'react'
import Slider from 'react-slick'
import Link from 'next/link'

const MySlider = () => {
  const slides = [
    {
      title: 'title',
      desc: 'desc',
    },
    {
      title: 'title',
      desc: 'desc',
     
    },
    {
      title: 'title',
      desc: 'desc',
      
    },
    {
      title: 'title',
      desc: 'desc',
     
    },
    {
      title: 'title',
      desc: 'desc',
     
    },
  ]

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    touchThreshold: 50,
    swipeToSlide: true,
  }

  return (
    <div style={{ borderBottom: '1px solid white' }}>
      <Slider {...settings}>
        {slides?.map((slide) => (
          <div key={slide.title}>
            <div className='inner'>
              <div>
                <div className='title'>{slide.title}</div>
                <div className='desc' dangerouslySetInnerHTML={{ __html: slide.desc }} />
                <div className='btnsWrapper'>
                  {slide.btns.map((btn) => (
                    <Link className={slide.btns.length > 1 ? 'big' : ''} href={btn.link} key={btn.text}>
                      {btn.text}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <img src={slide.img} alt={slide.title} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default MySlider
