import React from 'react';
import ClickableContainer from '../../domains/Clickable/ClickableContainer';
import { COLLECTIONS_ENUM } from '../../dataHandling/dataCache'


const Title = ( {section, cardClicked} ) => {
  let text = (
    <div>
      <span> ~ ~ {section.number}: {section.title}</span>
    </div>
  )
  return (<ClickableContainer node={text}
                             active={false}
                             clickAction={()=>cardClicked(section._id)} />)
}

const ExpandedSectionComponent = ( {section, cardClicked} ) => (
  <div>
    <Title  section={section}
            cardClicked={cardClicked} />
    <span>Display more info!!</span>
  </div>
);

const LoadingComponent = ( ) => (
  <div>
    loading
  </div>
);


const Component = ( {section, sectionID, expanded, fetchingIDs,
                            cardClicked, getData} ) => {
  if(!section) return ( <LoadingComponent /> )
  else if(expanded){
    return (<ExpandedSectionComponent section={section}
                              cardClicked={cardClicked} />);
  }
  else{
    return (<Title section={section} cardClicked={cardClicked} />);
  }
};


class SectionComponent extends React.Component{
  constructor({section, sectionID, expanded, fetchingIDs,
                              cardClicked, getData}){
    super();
  }

  componentWillMount(){
    let my = this.props;
    if(!my.section){
      if(!my.fetchingIDs.length || !my.fetchingIDs.some(id=>id===my.sectionID)) {
        my.getData(my.sectionID, COLLECTIONS_ENUM.SECTIONS)
      };
    }
  }

  render(){
    return Component(this.props)
  }
}


export default SectionComponent
