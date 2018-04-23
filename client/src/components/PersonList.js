import React from "react";
import Person from "./Person";
import ImmutablePropTypes from "react-immutable-proptypes";

const PersonList = props => {
  const { persons, ...rest } = props;

  return (
    <div>
      <h2>Users</h2>
      {persons.size === 0 &&
        <p>No users found</p>
      }
      {persons.map(p => <Person key={p.id} person={p} {...rest} />)}
    </div>
  );
};

PersonList.propTypes = {
  persons: ImmutablePropTypes.list.isRequired
};

export default PersonList;
