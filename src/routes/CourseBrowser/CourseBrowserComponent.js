import React from 'react';
// import SubjectsComponent from '../../domains/Subject/SubjectsComponent'
import SubjectsContainer from '../../domains/Subject/SubjectsContainer'
import BottomNavigationContainer from '../../domains/Navigation/BottomNavigationContainer'
import style from '../../style'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Help from 'material-ui/svg-icons/action/help-outline';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';


const CourseBrowserAppBar = ({helpActive, openHelp, closeHelp}) => (
  <div>
    <AppBar
      style={style.header}
      title={<span>Course Browser</span>}
      onTitleTouchTap={()=>null}
      showMenuIconButton={false}
      iconElementRight={
        <IconButton onTouchTap={() => openHelp()}>
          <Help />
        </IconButton>}
    />
  <CourseBrowserHelp active={helpActive}
                     open={openHelp}
                     close={closeHelp} />
  </div>
)

const CourseBrowserHelp = ({active, open, close}) => (
  <div>
    <Dialog
      title="Course Browser Help"
      modal={false}
      open={active}
      onRequestClose={() => close()}>
      The actions in this window were passed in as an array of React objects.
    </Dialog>
  </div>
  )

const CourseBrowserComponent = ( {subjectIDs, helpActive,
                                  openHelp, closeHelp} ) => {

  return (
    <div style={style.appPage}>
      <CourseBrowserAppBar  helpActive={helpActive}
                            openHelp={openHelp}
                            closeHelp={closeHelp}/>
      <br />
      <div>
        <h3> Course Browser </h3>
        <SubjectsContainer subjectIDs={subjectIDs} />
      </div>
      <div style={style.filler}></div>
      <BottomNavigationContainer />
    </div>
  )
}

// CourseBrowserComponent.propTypes = {
//
// }

export default CourseBrowserComponent
