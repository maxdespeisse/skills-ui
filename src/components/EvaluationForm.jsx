import React, { Component } from 'react';
import _ from 'lodash';
import EvaluationService from '../services/EvaluationService';
import FormErrorMessage from './FormErrorMessage';

const inputClassName = error => `form-control ${error ? 'is-invalid' : ''}`;

export default class EvaluationForm extends Component {
  constructor(props) {
      super();
      const { username = ''} = props;
      this.state = {
        errors: {},
        level: 1,
        username,
      };
      this.isFormValid = this.isFormValid.bind(this);
      this.submit = this.submit.bind(this);
  }

  isFormValid() {
    const { username, skill } = this.state;
    const errors = {};
    if (!username) {
      errors.username = {message: 'Enter a username'}
    }
    if (!skill) {
      errors.skill = {message: 'Enter a skill'}
    }
    this.setState({ errors });
    return _.isEmpty(errors);
  }

  submit() {
    const { addEvaluation } = this.props;
    if (this.isFormValid()) {
      const { username, skill, level } = this.state;
      EvaluationService.post({ username, skill, level })
        .then(() => addEvaluation({ username, skill, level }));
    }
  }

  render() {
    const { errors, username } = this.state;
    return (
      <form>
        <div className="form-group">
          <label htmlFor="usernameInput">Name</label>
          <input type="text" className={inputClassName(errors.username)}
            id="usernameInput"
            value={username}
            onChange={e => {
              this.setState({ username: e.target.value })
            }
          }/>
          <FormErrorMessage error={errors.username}/>
        </div>
        <div className="form-group">
          <label htmlFor="skillInput">Skill</label>
          <input type="text" className={inputClassName(errors.skill)} id="skillInput" onChange={e => {
            this.setState({ skill: e.target.value })
          }}/>
          <FormErrorMessage error={errors.skill}/>
        </div>
        <div className="form-group">
          <label htmlFor="levelSelect">Level</label>
          <select className="form-control" id="levelSelect" onChange={e => {
            this.setState({ level: e.target.value })
          }}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <button className="btn btn-primary" type="button" onClick={this.submit}>Save</button>
      </form>
    );
  }
}