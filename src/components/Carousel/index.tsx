import Image from 'next/image'
import { useState } from 'react'

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { SliderData } from './SliderData'
import { SliderSection } from './style'

type CarouselProps = {
  slides: {
    image: string
  }[]
}

const Carousel = ({ slides }: CarouselProps) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  if (!Array.isArray(slides) || length <= 0) return null

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <SliderSection>
      <FaArrowAltCircleLeft
        className='left-arrow'
        size={34}
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className='right-arrow'
        size={34}
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => (
        <div
          key={Math.random()}
          className={index === current ? 'slide active' : 'slide'}
        >
          {index === current && (
            <Image
              className='image'
              src={slide.image}
              alt='just some images'
              width={800}
              height={450}
            />
          )}
        </div>
      ))}
      <strong style={{ marginBottom: '0.5rem' }}>{current + 1}</strong>
    </SliderSection>
  )
}

export default Carousel
