import React from 'react';

const ENTER_KEY = 13;

interface TextInputProps {
  text: string;
  onChange: Function;
  onPressEnter: Function;
}

export function TextInput(props: TextInputProps) {
  const onChangeText = (e: any) => {
    if(e.keyCode === ENTER_KEY) {
      props.onPressEnter();
    }

    props.onChange(e.target.value);
  };

  return <input value={props.text}
      onChange={onChangeText}
    />
}
