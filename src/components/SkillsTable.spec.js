import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SkillsTable from './SkillsTable'

test('Should display table header and row', () => {
  const { getByText } = render(
    <SkillsTable evaluations={[{ level: 5, skill: 'Scala' }]} />,
  );

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(getByText('Skill')).toBeDefined();
  expect(getByText('Level')).toBeDefined();
  expect(getByText('Scala')).toBeDefined();
  expect(getByText('5')).toBeDefined();
})