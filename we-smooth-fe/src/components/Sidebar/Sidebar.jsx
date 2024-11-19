import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames'; // Import classnames
import styles from './sidebar.module.scss';
import Text from '../Text/Text';
import Input from '../Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ sectionItems, handleClickSectionItem }) => {
    const theme = useSelector((state) => state.theme);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (newValue) => {
        setInputValue(newValue);
    };

    return (
        <>
            <div className={classNames(styles['sections-container'], { [styles['dark-mode']]: theme === 'dark' })}>
                <div className={classNames('d-flex flex-direction-column', styles['title-wrapper'])}>
                    <Text
                        element={'h1'}
                        styleType={'h1-styles'}
                        classes={classNames({ 'text-color-white': theme === 'dark', 'text-color-black': theme !== 'dark' }, 'title-text-shadow', 'mb-l')}
                    >
                        Sections
                    </Text>
                    <Input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter your text..."
                    />
                </div>
                <div className={styles['sections-items']}>
                    {sectionItems.map((item, i) => (
                        <div className='width-full' onClick={() => handleClickSectionItem(i)} key={i}>
                            <div className={classNames(styles['section-item-container'], { [styles['open-options']]: item.areOptionsOpen, [styles['close-options']]: !item.areOptionsOpen && item.hasBeenClicked, [styles['dark-mode']]: theme === 'dark' })}>
                                <div className={styles['section-item-icon']}>
                                    <FontAwesomeIcon style={{ color: theme === 'dark' ? "#C7C7C7" : "#33363F" }} icon={faChevronRight} className={classNames({ [styles['rotate']]: item.areOptionsOpen, [styles['reverse-rotate']]: !item.areOptionsOpen && item.hasBeenClicked, 'ml-xs': true })} />
                                </div>
                                <Text
                                    element={'h3'}
                                    styleType={'h3-styles'}
                                    classes={classNames('cursor-pointer width-full', { 'text-color-white': theme === 'dark', 'text-color-black': theme !== 'dark' })}
                                >
                                    {item.title}
                                </Text>
                            </div>
                            <AnimatePresence>
                                {item.areOptionsOpen &&
                                    <motion.div
                                        style={{ overflow: 'hidden' }}
                                        className={classNames(styles['section-item-options'], { [styles['dark-mode']]: theme === 'dark' })}
                                        initial={{ maxHeight: 0, opacity: 0 }}
                                        animate={{ maxHeight: '100%', opacity: 1 }}
                                        exit={{ maxHeight: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {item.options.map((option, index) => (
                                            <Text
                                                classes={classNames('width-full', { 'text-color-white': theme === 'dark', 'text-color-black': theme !== 'dark' })}
                                                link='/'
                                                element={'Link'}
                                                key={index}
                                                styleType='link-styles'
                                            >
                                                {option.title}
                                            </Text>
                                        ))}
                                    </motion.div>
                                }
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Sidebar;
