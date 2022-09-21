import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { projects } from '../../helpers/projects'
import Arrow from './Arrow'
import * as C from './styles'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  });

  return (
    <C.NavigationWrapper>
      <C.Container ref={sliderRef} className='keen-slider'>
        {
          projects.map((project) => (
            <C.Carousel className='keen-slider__slide'>

              <C.Paragraph>
                <C.Title href={project.githubUrl} target='no_blank'>{project.title}</C.Title>
              </C.Paragraph>

              <C.Img src={project.img} alt='' />

            </C.Carousel>
          ))
        }
      </C.Container>
      {
        loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )
      }
    </C.NavigationWrapper>
  )
};

export default Carousel;
