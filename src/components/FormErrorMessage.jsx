import React from 'react';

export default function FormErrorMessage({ error }) {
  if (error) {
    return <div className="invalid-feedback">{error.message}</div>;
  }
  return <div/>;
}