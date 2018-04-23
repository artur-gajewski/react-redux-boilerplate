import App from "../App";
import { connect } from "react-redux";
import { getPersons, hirePerson, firePerson } from "../../ducks/person";
import { withRouter } from "react-router";
import { compose } from "recompose";

export default compose(
  withRouter,
  connect(
    state => ({
      persons: state.person.get("persons")
    }),
    {
      getPersons,
      hirePerson,
      firePerson
    }
  )
)(App);
