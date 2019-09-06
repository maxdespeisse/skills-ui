import React from 'react';
import _ from 'lodash';

const evaluationComparator = (evaluation, otherEvaluation) =>
  (evaluation.skill === otherEvaluation.skill)
  && (evaluation.level === otherEvaluation.level);

const removeDuplicates = evaluations => _.uniqWith(evaluations, evaluationComparator);

export default function SkillsTable({ evaluations = [] }) {
  const evaluationsToDisplay = removeDuplicates(evaluations);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Skill</th>
          <th scope="col">Level</th>
        </tr>
      </thead>
      <tbody>
        {evaluationsToDisplay.map(({ skill, level }) => (
          <tr key={skill + level}>
            <td>{skill}</td>
            <td>{level}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};