import React from "react";
import personService from "../services/person";
import { Form, Field } from "react-final-form";
import { DateTime } from "luxon";

const required = value => (value ? undefined : "Required");

const mustBeDate = value => {
  const dt = DateTime.fromISO(value);
  return dt.invalid && "Must be a date";
};

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

class HirePersonForm extends React.Component {
  handleSubmit = async values => {
    const { hirePerson } = this.props;
    const newPerson = {
      ...personService.createPerson(),
      ...values
    };
    hirePerson(newPerson);
  };

  render() {
    return (
      <div>
        <h2>Create new user</h2>
        <Form
          onSubmit={this.handleSubmit}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Field name="firstName" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} type="text" placeholder="First name" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="lastName" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} type="text" placeholder="Last name" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field
                name="birthDay"
                validate={composeValidators(required, mustBeDate)}
              >
                {({ input, meta }) => (
                  <div>
                    <input {...input} type="text" placeholder="Birthday" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <br />
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}

export default HirePersonForm;
