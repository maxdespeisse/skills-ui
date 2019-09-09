import React from 'react';

export default function LabelWithError({ htmlFor, children, error }) {
  if (error) {
    return <label htmlFor={htmlFor} className="text-danger">{error.message}</label>;
  }
  return <label htmlFor={htmlFor} >{error ? error.message : children}</label>;
}