import React, { Component } from 'react';
import SkillsApi from '../services/SkillsApi';
import SkillsTable from './SkillsTable';
import EvaluationForm from './EvaluationForm';

export default class SearchUserForm extends Component {

  constructor() {
    super();
    this.state = {
      isEvaluationFormOpen: false,
    };
    this.submit = this.submit.bind(this);
    this.addEvaluation = this.addEvaluation.bind(this);
    this.toggleEvaluationForm = this.toggleEvaluationForm.bind(this);
  }

  submit(event) {
    event.preventDefault();
    const { username } = this.state;
    SkillsApi.getSkillsByUser(username)
      .then(response => {
        this.setState({
          evaluations: response.data.evaluations,
        });
      }).catch(error => {
        console.error('GET skills by user error', error);
      });
  }

  toggleEvaluationForm() {
    this.setState((state) => ({ isEvaluationFormOpen: !state.isEvaluationFormOpen }));
  }

  addEvaluation(evaluation) {
    this.setState(state => ({
      evaluations: state.evaluations.concat(evaluation)
    }));
  }

  render() {
    const { evaluations = [], isEvaluationFormOpen, username } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.submit} className="mb-4">
          <div className="form-group">
            <label htmlFor="usernameInput">Name</label>
            <input type="text" className="form-control" id="usernameInput" onChange={e => {
              this.setState({ username: e.target.value })
            }} />
          </div>
          <button className="btn btn-primary" type="submit">Search</button>
          <button className="btn btn-outline-primary ml-2" type="button" onClick={this.toggleEvaluationForm}>
            Add an evaluation
          </button>
        </form>
        {isEvaluationFormOpen && <EvaluationForm username={username} addEvaluation={this.addEvaluation} />}
        {evaluations.length > 0 && <SkillsTable evaluations={evaluations} />}
      </div>
    );
  }
}