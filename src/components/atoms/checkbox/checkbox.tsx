import React, { useState } from 'react';

interface CheckboxProps {
  checked: boolean;
};

export function Checkbox(props: CheckboxProps) {
  return <input type="checkbox" checked={props.checked} />
}
