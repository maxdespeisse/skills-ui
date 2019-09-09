import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import SkillsApi from '../services/SkillsApi';
import LabelWithError from './LabelWithError';

const inputClassName = error => `form-control ${error ? 'is-invalid' : ''}`;
const MAX_LEVEL = 5;

export default class EvaluationForm extends Component {
  constructor(props) {
    super();
    this.state = {
      errors: {},
      level: 1,
      date: moment().format('YYYY-MM-DD'),
    };
    this.isFormValid = this.isFormValid.bind(this);
    this.submit = this.submit.bind(this);
  }

  isFormValid() {
    const { username } = this.props;
    const { skill, date } = this.state;
    const errors = {};
    if (!username) {
      errors.username = { message: 'Enter a username' }
    }
    if (!skill) {
      errors.skill = { message: 'Enter a skill' }
    }
    if (!date) {
      errors.date = { message: 'Pick a date' }
    }
    this.setState({ errors });
    return _.isEmpty(errors);
  }

  submit() {
    const { addEvaluation, username } = this.props;
    const { skill, level, date } = this.state;
    if (this.isFormValid()) {
      SkillsApi.postEvaluation({ username, skill, level, date })
        .then(() => addEvaluation({ username, skill, level }));
    }
  }

  render() {
    const { errors, date } = this.state;
    return (
      <form>
        <div className="form-group">
          <LabelWithError htmlFor="skillInput" error={errors.skill}>Skill</LabelWithError>
          <input type="text" className={inputClassName(errors.skill)} id="skillInput" onChange={e => {
            this.setState({ skill: e.target.value })
          }} />
        </div>
        <div className="form-group">
          <label htmlFor="levelSelect">Level</label>
          <select className="form-control" id="levelSelect" onChange={e => {
            this.setState({ level: e.target.value })
          }}>
            {
              Array(MAX_LEVEL + 1).fill().map((x, i) =>
                <option key={i}>{i}</option>
              )
            }
          </select>
        </div>
        <div className="form-group">
          <LabelWithError htmlFor="dateInput" error={errors.date}>Date</LabelWithError>
          <input type="date"
            className={inputClassName(errors.date)}
            id="dateInput"
            name="evaluationDate"
            value={date}
            onChange={e => {
              this.setState({ date: e.target.value })
            }} />
        </div>
        <button className="btn btn-primary" type="button" onClick={this.submit}>Save</button>
      </form>
    );
  }
}