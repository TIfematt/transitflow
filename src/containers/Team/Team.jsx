import React from 'react'
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';

import { images } from '../../constants';
import './Team.css';

const Team = () => {

  
  const teamCard = (prop) => {
    return (
      <div className='team-card' style={{
        height: '538px',
        width: '364px',
      }}
      >
        <div className='team-card-image' style={{
          display: 'flex',
          height: '80%',
          width: '100%',
          // height: '426px',
          // width: '364px',
        }}
        >
          <img src={prop.image} alt={prop.name} />
        </div>
        <div className='team-card-content' style={{
          height: '20%',
          width: '101%',
          // height: '112px',
          // width: '364px',
          background: '#1C1F35',
          position: 'relative',
          top: '-20px',
          left: '0',
        }}>
          <h3 style={{
            color: '#ffffff',
            fontSize: '20px',
            fontWeight: '500',
            fontFamily: 'Rubik',
            fontStyle: 'normal',
            lineHeight: '24px',
            width: '149px',
            height: '24px',
            position: 'relative',
            top: '42px',
            left: '40px',

          }}
          >
            {prop.name}
          </h3>
          <p  style={{
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: '500',
            fontFamily: 'krub',
            fontStyle: 'normal',
            lineHeight: '24px',
            width: '149px',
            height: '24px',
            position: 'relative',
            top: '25px',
            left: '40px',
          }}
          >
            {prop.position}
          </p>
        </div>
        <div style={{
          display: 'flex',
          position: 'relative',
          top: '-150px',
          left: prop.left,
          background: 'linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)',
          width: prop.width,
          height: '50.11px',
        }}>
          {prop.social}
        </div>
      </div>
    )
  }

  return (
    <div className='team'>
      <div className='team_content'>
        <p>The Transporters</p>
        <h1>Meet Expert Team</h1>
      </div>
      <div className='team-images'>
        {teamCard({
          image: images.Jessica,
          name: 'Jessica Arow',
          position: 'Designer',
          width: '150px',
          left: '218px',
          social: (
            <div className='team_social jessica'>
              <a href='https://www.twitter.com/'>
                <BsTwitter className='icons' /> 
              </a>
              <a href='https://www.facebook.com/'>
                <BsFacebook className='icons' /> 
              </a>
              <a href='https://www.instagram.com/'>
                <BsInstagram className='icons' />
              </a>
            </div>
          )
        })}
        {teamCard({
          image: images.Smith,
          name: 'Kathleen Smith',
          position: 'Designer',
          width: '170px',
          left: '199px',
          social: (
            <div className='team_social smith'>
              <a href='https://www.facebook.com/'>
                <BsLinkedin className='icons' /> 
              </a>
              <a href='https://www.facebook.com/'>
                <BsTwitter className='icons' /> 
              </a>
              <a href='https://www.facebook.com/'>
                <BsFacebook className='icons' /> 
              </a>
              <a href='https://www.facebook.com/'>
                <BsInstagram className='icons' />
              </a>
            </div>
          )
        })}
        {teamCard({
          image: images.Rebecca,
          name: 'Rebecca Taylor',
          position: 'Designer',
          width: '100px',
          left: '269px',
          social: (
            <div className='team_social taylor'>
              <a href='https://www.facebook.com/'>
                <BsFacebook className='icons' /> 
              </a>
              <a href='https://www.facebook.com/'>
                <BsInstagram className='icons' />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Team
