import React from "react";
import HirePersonForm from "./HirePersonForm";
import PersonList from "./PersonList";

const IndexPage = props => {
  const { persons, firePerson, hirePerson } = props;
  const sorted = persons.sortBy(p => p.firstName).sortBy(p => p.lastName);

  return (
    <div>
      <h1>User management</h1>
      <HirePersonForm hirePerson={hirePerson} />
      <PersonList persons={sorted} firePerson={firePerson} />
    </div>
  );
};

export default IndexPage;
