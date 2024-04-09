import styles from './toggle.module.scss';

const Toggle = ({ onToggleSwitch }) => {
    const handleClick = (event) => {
        event.stopPropagation();
        onToggleSwitch();
    };

    return (
        <div className={styles['toggle-switch']}>
            <label className={styles.label}>
                <input className={styles.input} type="checkbox" onClick={handleClick} />
                <span className={styles.slider} />
            </label>
        </div>
    )
}

export default Toggle;