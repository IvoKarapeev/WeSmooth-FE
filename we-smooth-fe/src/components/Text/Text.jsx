import styles from './text.module.scss';
import { Link } from 'react-router-dom';

const Text = ({ element, styleType, classes, link, children }) => {
    // Default is 'p' element and 'p-styles' styleType if not provided
    const Element = element || 'p';
    const StyleType = styleType || 'p-styles';

    return (
        <>
            {element === 'Link' ? (
                <Link to={link} className={`${styles[StyleType]} ${classes && classes}`}>
                    {children}
                </Link>
            ) : (
                <Element className={`${styles[StyleType]} ${classes && classes}`}>
                    {children}
                </Element>
            )}
        </>
    );
};

export default Text;
