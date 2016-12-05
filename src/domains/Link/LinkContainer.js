import { connect } from 'react-redux'
import LinkComponent from './LinkComponent'

const mapStateToProps = (state, ownProps) => {
  return {
    text: ownProps.text
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(ownProps.clickAction)
    }
  }
}

const LinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkComponent)

export default LinkContainer
