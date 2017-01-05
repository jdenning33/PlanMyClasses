import React from 'react';
import style from '../../../style'
import Carousel from '../../../Components/Carousel'

const SectionInfo = ({sectionID, sections, times, active}) => {
  return(
    <div>
      {times[0] ? <span>{times[0].days}: {times[0].start}-{times[0].end}</span> :
                    <div>no times</div>}
      {/* {acitve ?
        <PrimaryTimeCarousel primaryTimes={stackMap} />
        : null} */}
    </div>
  )
}

const SectionCarousel = ({sectionJSONs, activeSectionID, sections,
                          afterChange}) => {

  let sectionIDs = Object.keys(sectionJSONs);

  let elements =
  sectionIDs.map( (sectionID, index) => {

    let times = sectionJSONs[sectionID];
    let active = (sectionID === activeSectionID);

    let iStyle = active ? style.activeCarouselItem : style.carouselItem;

    return(
      <div  style={iStyle}
             key={index}>
        <SectionInfo  sectionID={sectionID}
                      sections={sections}
                      times={times}
                      active={active} />
      </div>
    )
  });

  return(
    <div style={style.stackCarousel}>
      <Carousel elements={elements}
                initialSlide={
                  sectionIDs.findIndex( (id) =>
                    id === activeSectionID)
                  }
                afterChange={afterChange} />
    </div>
  )
}

export default SectionCarousel
