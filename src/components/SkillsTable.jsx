import React from 'react';
import _ from 'lodash';

export default function SkillsTable({ evaluations = [] }) {
  const evaluationsToDisplay = _.uniqBy(evaluations, ({skill, level}) => skill + level);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Skill</th>
          <th scope="col">Level</th>
        </tr>
      </thead>
      <tbody>
        {evaluationsToDisplay.map(({skill, level}) => (
          <tr key={skill + level}>
            <td>{skill}</td>
            <td>{level}</td>
          </tr>
        ))}
     </tbody>
    </table>
  );
};