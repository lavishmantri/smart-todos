import React from 'react';

interface LabelProps {
  text: string;
}

export function Label(props: LabelProps) {
  return <label>{props.text}</label>;
}
