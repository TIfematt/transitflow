import React from 'react'

import { images } from '../../constants';
import './Work.css';

const Work = () => {

  const card = (props) => {
    return (
      <div className='card'>
        <img className='card_img' src={props.img} alt='' />
        <div className='content'>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    )
  }

  // Project card
  const projectCard = (props) => {
    return (
      <div className='project_card' style={{
          backgroundImage: `url(${props.img})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          // position: 'absolute',
          // left: '0px',
          display: 'flex',
          flexWrap: 'wrap',
          flexShrink: '3',
          // gap: '20px',
          width: '300px',
          height: '407.91px',
          marginLeft: '-220px',
        }}
        >
        <div style={{
              background: 'linear-gradient(0deg, #091242 14.34%, rgba(60, 60, 60, 0) 43.86%)',
              backgroundBlendMode: 'multiply',
              // position: 'absolute',
              marginTop: '210px',
              top: '300px',
              height: '200px',
              width: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              paddingLeft: '20px',
          }}
        >
          <h3 style={{
            color: 'white',
            fontFamily: 'Rubik',
            fontsize: '12px',
            lineHeight: '24px',
            fontWeight: '500',
            fontStyle: 'normal',

          }}
          >
            {props.title}
         </h3>
          <p style={{
            color: '#FFB629',
            fontFamily: 'Krub',
            fontsize: '16px',
            lineHeight: '24px',
            fontWeight: '500',
            fontStyle: 'normal',
            marginTop: '-10px',

          }}
          >
            {props.description}
          </p>
        </div>
        
      </div>
    )
  } 

  return (
    <div className='work'>
        <div className='title'>
          <p>What We Do</p>
          <h1>
            Safe & Reliable Cargo Solutions
          </h1>
        </div>
        <div className='work_content'>
          <div className='row_1 row_set'>
            {card({img: images.ship, 
                  title: 'Sea Transport Services', 
                  description: 'Following the quality of our service thus having gained trust of our many clients.'
            })}
            
            {card({img: images.plane, 
                  title: 'Warehousing Services', 
                  description: 'Following the quality of our service thus having gained trust of our many clients.'
            })}
          </div>
          <div className='row_2 row_set'>
            {card({img: images.warehouse, 
                  title: 'Air Fright Services', 
                  description: 'Following the quality of our service thus having gained trust of our many clients.'
            })}

            {card({img: images.truck, 
                  title: 'Local Shipping Services', 
                  description: 'Following the quality of our service thus having gained trust of our many clients.'
            })}
          </div>
        </div>
        <div style={{
          backgroundImage: `url(${images.photo_1})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',  
          width: '1919px',
          height: '504px',
          position: 'absolute',
          top: '400px',
          left: '-390px',
          }}
        >

        </div>
        <div className='why_us'>
          <div className='why_us_content'>
            <p className='sub_text'>Why Us</p>
            <h1>We provide full range global logistics solution</h1>
            <p className='sub_title'>
              Leverage agile frameworks to provide a robust synopsis for 
              strategy foster collaborative thinking to further the overall 
              value proposition. 
              <br />
              Organically grow the holistic world view of disruptive
              innovation via workplace diversity and empowerment.
            </p>
            <div className='why_us_bullet'>
              <div className='bullet bullet_1'>
                <img src={images.box} alt='box' />
                <p>Delivery on Time</p>
              </div>
              <div className='bullet bullet_2'>
                <img src={images.cash} alt='cash' />
                <p>Optimized Travel Cost</p>
              </div>
            </div>
          </div>
          <img className='why_us_img' src={images.airplane} alt='Airplane' />
          <div className='counter'>
            <img src={images.counter} alt='counter' />
          </div>
        </div>
        <div className='project_btn_box'>
            <button className='project_btn'>
              More Work
            </button>
        </div>
              {/* Project section */}
        <div className='project'>
              <h1>Transporting Across The World</h1>
              <div className='project_cards'>
                {projectCard(
                  {img: images.photo_4, 
                    title: 'Liquid Transportation', 
                    description: 'Premium Tankers'
                  }
                )}
                {projectCard(
                  {img: images.photo_5, 
                    title: 'Packaging Solutions', 
                    description: 'Warehouse Management'
                  }
                )}
                {projectCard(
                  {img: images.photo_6, 
                    title: 'Contract Logistics', 
                    description: 'Road Transportation'
                  }
                )}
                {projectCard(
                  {img: images.photo_7, 
                    title: 'Warehouse & Distribution', 
                    description: 'Large Warehouse'
                  }
                )}
                {projectCard(
                  {img: images.photo_8, 
                    title: 'Specialized Transport', 
                    description: 'Ocean Transports'
                  }
                )}
              </div>
        </div>
    </div>

  )
}

export default Work
