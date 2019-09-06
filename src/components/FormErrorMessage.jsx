import React from 'react';

export default function FormErrorMessage({ error }) {
  return error ? <div className="invalid-feedback">{error.message}</div> : <div />;
}