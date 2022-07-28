import React from 'react';
import './CSS/card.css';
import '../vanilla-tilt';
import Tilt from 'react-vanilla-tilt';


const Card = ({ ListData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {/* curElem returns an array with id,name... etc  */}
        {ListData.map((curElem) => {
          // updating curElem values in these variables over each iteration
          const { _id, name, category, description, LabelTags,iconLink ,Link } = curElem;

          return (
            <>
              <div className="card-container" key={_id}>
                <Tilt style={{ margin: "0px", padding: "0px", width: "fit-content", borderRadius:'8px' }}>
                  <div className='card'>
                    <img src={iconLink} alt="thumbnail here" />
                    <div className='content-box'>
                      <h4 className='content-heading'>{name}</h4>
                      <p className='content'>{description}</p>
                      <ol className='links-list'>
                        {Link.map((thisLink) => {
                          const {id, siteName, siteLink} = thisLink;
                          return (
                            <>
                              <li key={id}> <a href={siteLink} target="_blank" rel="noreferrer noopener"> {siteName} </a></li>
                            </>
                          )
                        })}
                      </ol>
                    </div>
                  </div>
                </Tilt>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default Card;