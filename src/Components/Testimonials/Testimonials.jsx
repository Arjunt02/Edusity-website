import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useRef } from 'react'

function Testimonials() {


    const slider=useRef()
    let tx=0;

    const slideForward=()=>{
        if(tx>-50){
            tx-=25
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }

    const slideBackward=()=>{
        if(tx<0){
            tx+=25
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }


  return (
    <div className='testimonials'>
        <img onClick={slideForward} src={next_icon} alt="" className='next-btn'/>
        <img onClick={slideBackward} src={back_icon} alt="" className='back-btn'/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Jack</h3>
                                <span>Edusity ,USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At neque reprehenderit ullam sequi iure ipsa pariatur omnis magni unde magnam ab, recusandae minima exercitationem, explicabo quasi voluptatem molestias quaerat libero?</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Jack</h3>
                                <span>Edusity ,USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At neque reprehenderit ullam sequi iure ipsa pariatur omnis magni unde magnam ab, recusandae minima exercitationem, explicabo quasi voluptatem molestias quaerat libero?</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Jack</h3>
                                <span>Edusity ,USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At neque reprehenderit ullam sequi iure ipsa pariatur omnis magni unde magnam ab, recusandae minima exercitationem, explicabo quasi voluptatem molestias quaerat libero?</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Jack</h3>
                                <span>Edusity ,USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At neque reprehenderit ullam sequi iure ipsa pariatur omnis magni unde magnam ab, recusandae minima exercitationem, explicabo quasi voluptatem molestias quaerat libero?</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials