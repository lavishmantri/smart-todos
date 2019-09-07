import React from 'react';

import './checkbox.scss';

interface CheckboxProps {
  checked: boolean;
};

export function Checkbox(props: CheckboxProps) {
  return <input type="checkbox" checked={props.checked} className="checkbox checked" />
}
