import React from 'react';
// import SubjectsComponent from '../../domains/Subject/SubjectsComponent'
import SubjectsContainer from '../../domains/Subject/SubjectsContainer'
import BottomNavigationContainer from '../../domains/Navigation/BottomNavigationContainer'
import AppBarComponent from '../../domains/Navigation/AppBarComponent'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';


import style from '../../style'


let SearchBar = ({ currentFilter, updateFilter }) => (
  <Paper zDepth={2} style={style.searchBarContainer}>
    <TextField  hintText="filter results"
                onChange={ e => updateFilter(e.target.value) }
                value={currentFilter}
                // floatingLabelText="MultiLine and FloatingLabel"
                style={style.SearchBar}
                fullWidth={true}
                underlineShow={false} />
  </Paper>

)

class CourseBrowserComponent extends React.Component{
  constructor( {subjectIDs, helpActive, currentFilter,
                  openHelp, closeHelp, loadSubjects, updateFilter} ){
    super();;
  }

  componentWillMount(){
    let my=this.props;
    if(!my.subjectIDs.length) my.loadSubjects();
  }

  render(){
    let my=this.props;
    return (
      <div style={style.appPage}>
        <AppBarComponent helpActive={my.helpActive}
                        openHelp={my.openHelp}
                        closeHelp={my.closeHelp}
                        title={'Course Browser'}
                        helpText={'How to use the course browser:'}/>
        <br />
        <div>
          <SubjectsContainer subjectIDs={my.subjectIDs} />
        </div>
        <br />
        <SearchBar  currentFilter={my.currentFilter}
                    updateFilter={my.updateFilter}/>
        <BottomNavigationContainer />
      </div>
    )
  }
}

// CourseBrowserComponent.propTypes = {
//
// }

export default CourseBrowserComponent
