import React from 'react';

import './label.scss';

interface LabelProps {
  text: string;
}

export function Label(props: LabelProps) {
  return <label className="label">{props.text}</label>;
}
