import { useState } from 'react';
import styles from './input.module.scss';

const Input = ({ type = 'text', value: propValue, onChange: propOnChange, ...rest }) => {
    const [value, setValue] = useState(propValue || '');

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);

        if (propOnChange) {
            propOnChange(newValue);
        }
    };

    return (
        <input
            type={type}
            className={`${styles['sections-input']}`}
            value={propValue || value}
            onChange={handleChange}
            {...rest}
        />
    );
};

export default Input;
