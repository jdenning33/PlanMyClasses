import React from 'react'
import LinkContainer from '../../Link/LinkContainer'

//  Individual Link
const SetPrefLink = ( {preference, action} ) => (
  <LinkContainer  text={preference.name}
                  clickAction={action(preference)} />
)

const PrefLinksComponent = ( { ENUM, action } ) => {
  var preferences = [];
  for(let preference in ENUM){
    if(preference != null) {
      preferences.push(ENUM[preference]);
    }
  }
  return (
    <span>
      {preferences.map((pref) => (
          <span key={pref.key}>
          { (pref.key !== 0)? <span> - </span> : <span />}
          <SetPrefLink preference={pref} action={action} />
          </span>
        )
      )}
    </span>
  )
}

export default PrefLinksComponent
