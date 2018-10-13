import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as UserActions from "./actions"

function mapStateToProps(state) {
  const { user } = state
  return user
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        storeUserInfo: UserActions.storeUserInfoAction,
      },
      dispatch
    ),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
