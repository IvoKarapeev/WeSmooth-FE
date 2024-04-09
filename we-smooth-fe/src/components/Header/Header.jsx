import styles from './header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/theme/themeSlice';
import Text from '../Text/Text';
import Toggle from '../Toggle/Toggle';

const Header = ({ logo, userImg, links }) => {
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    return (
        <header className={`${styles.header} ${theme === 'dark' && styles['dark-mode']}`}>
            <div className={styles["header-content"]} >
                <div className={styles['header-left']}>
                    <div className={styles['logo-container']}>
                        <img src={logo} className={styles.logo} />
                        <p className={styles['logo-text']}>WeSmooth</p>
                    </div>

                    <div className={styles['header-links']}>
                        {links && links.map((link) => {
                            return <Text key={link.title} classes={'text-color-white'} element={'Link'} styleType={'header-link-styles'} link={link.href}>{link.title}</Text>
                        })}
                    </div>
                </div>

                <div className={styles['header-right']}>
                    <div className={styles['toggle-wrapper']}>
                        <Toggle onToggleSwitch={() => dispatch(toggleTheme())} />
                    </div>
                    <div className={styles.avatar}>
                        <img className={styles['avatar-image']} src={userImg} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;