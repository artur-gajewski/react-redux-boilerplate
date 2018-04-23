import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import Button from "./Button";
import Icon from "react-fa";
import { pure } from "recompose";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Person = props => {
  const { person, firePerson } = props;

  return (
    <div>
      <div>
        <Link to={`/person/${person.id}`}>
          {person.firstName} {person.lastName}
        </Link>
      </div>

      <div>{person.age.toFixed(2)}</div>

      <Button
        disabled={person.firing}
        block
        onClick={e => firePerson(person.id)}
      >
        {person.firing ? "Removing..." : "Remove"}
      </Button>
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.object.isRequired,
  firePerson: PropTypes.func.isRequired
};

Person.defaultProps = {
  firePerson: () => { }
};

export default pure(Person);
