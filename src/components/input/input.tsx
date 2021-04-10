import React from 'react';

import { EnterKey, TabKey } from '../../utils/key-code';

import styles from './input.module.scss';

interface InputProps {
  onEnter?: (value: string) => void;
  onTab?: (value: string) => void;
  value?: string;
}

export const Input: React.FC<InputProps> = ({ value, onEnter = () => {}, onTab = () => {} }) => {
  const handleKeyUp = (evt: React.KeyboardEvent) => {
    if (evt.code === EnterKey || evt.keyCode === 13) {
      onEnter((evt.target as HTMLInputElement).value);
      return;
    }

    if (evt.code === TabKey || evt.keyCode === 13) {
      onTab((evt.target as HTMLInputElement).value);
      return;
    }
  };

  return <input value={value} onKeyUp={handleKeyUp} className={styles.input} />;
};
