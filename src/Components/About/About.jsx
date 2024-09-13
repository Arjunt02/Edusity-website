import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

function About({setPlayState}) {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img onClick={()=>setPlayState(true)} src={play_icon} alt="" className='play-icon' />
        </div>

        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi totam ex maxime. Delectus incidunt adipisci quaerat est, impedit quisquam quam quidem soluta, laborum esse voluptates, tenetur illum officia tempore? Reprehenderit.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur commodi molestias culpa nemo ut sunt expedita officiis, sit modi vero tempore optio at iusto eius. In illum iste natus quisquam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex repellat sapiente repellendus voluptas nostrum laborum sint non ab expedita! Soluta perferendis, exercitationem vitae earum temporibus cupiditate? Optio, ipsam corrupti.</p>
        </div>
    </div>
  )
}

export default About