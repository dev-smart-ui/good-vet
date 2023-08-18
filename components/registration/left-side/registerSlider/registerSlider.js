import React from "react"
import styles from './registerSlider.module.scss'

import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay, Navigation} from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'

import {reviewsData} from "./data"

const RegisterSlider = () => {

  return (
	  <Swiper
		  loop
		  observer
		  navigation
		  spaceBetween={50}
		  slidesPerView={1}
		  modules={[Autoplay, Navigation]}
		  autoplay={{ delay: 5000, disableOnInteraction: false }}
		  className={styles.swiperWrapper}
	  >
		  {reviewsData.map((obj) => {
			  return (
				  <SwiperSlide key={obj.id}>
					  <p className={styles.review}>&quot;{obj.review}&quot;</p>
					  <span className={styles.author}>- {obj.author}</span>
				  </SwiperSlide>
			  )
		  })}
	  </Swiper>
  )
}

export default RegisterSlider