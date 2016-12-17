import React from 'react'
import LinkContainer from '../../Link/LinkContainer'

//  Individual Link
const SetPrefLink = ( {preference, active, action} ) => (
  <LinkContainer  text={preference.name}
                  active={active}
                  clickAction={action(preference)} />
)

//  Displays a set of links delimmited by a '-'
const PrefLinksComponent = ( { ENUM, activeLinks, action } ) => {
  var preferences = [];
  for(let preference in ENUM){
    if(preference != null) {
      preferences.push(ENUM[preference]);
    }
  };

  return (
    <span>
      {preferences.map((pref) => (
          <span key={pref.key}>
          { (pref.key !== 0)? <span> - </span> : <span /> }
          <SetPrefLink  preference={pref}
                        active={activeLinks.some( (p) => p===pref)}
                        action={action} />
          </span>
        )
      )}
    </span>
  )
}

export default PrefLinksComponent
