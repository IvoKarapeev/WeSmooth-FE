import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './button.module.scss';

const Button = ({ children, onClick, type = 'primary', to, className }) => {
    const buttonClass = classNames(
        styles.buttonBase,
        {
            [styles.primary]: type === 'primary',
            [styles.secondary]: type !== 'primary',
        },
        className
    );

    if (to) {
        return (
            <Link to={to} className={buttonClass} onClick={onClick}>
                {children}
            </Link>
        );
    }

    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
