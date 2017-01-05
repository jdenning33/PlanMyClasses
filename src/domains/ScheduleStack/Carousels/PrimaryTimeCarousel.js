import React from 'react';
import style from '../../../style'
import Carousel from '../../../Components/Carousel'

const TimeInfo = ({primaryTime}) => {
  return(
    <div>
      {primaryTime.days}: {primaryTime.start}-{primaryTime.end}
    </div>
  )
}

const PrimaryTimeCarousel = ({timesJSON, activeTime, afterChange}) => {
  let sortedTimes = timesJSON.sort( (a,b) => {
    return (a.primaryTime.start - b.primaryTime.start)
  })

  let elements = sortedTimes.map( (timeJSON, index) => {

    let primaryTime = timeJSON.primaryTime;
    let active = (primaryTime.start === activeTime.start &&
                  primaryTime.end   === activeTime.end);

    let iStyle = active ? style.activeCarouselItem : style.carouselItem;

    return(
      <div  style={iStyle}
             key={index}>
        <TimeInfo   primaryTime={primaryTime}
                    active={active} />
      </div>
    )
  });

  return(
    <div style={style.primaryTimeCarousel}>
      <Carousel elements={elements}
                initialSlide={
                    sortedTimes.findIndex(time =>
                      time.primaryTime.start === activeTime.start)
                  }
                afterChange={afterChange} />
    </div>
  )
}

export default PrimaryTimeCarousel
