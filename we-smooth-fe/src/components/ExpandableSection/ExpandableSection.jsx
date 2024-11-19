import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, AnimatePresence } from 'framer-motion';
import { useCallback, useState } from 'react';
// Components
import Text from '../Text/Text';
import styles from './expandableSection.module.scss'
import Button from '../Button/Button';

const ExpandableSection = ({ sectionData }) => {
    const [sections, setSections] = useState(sectionData);

    const handleClickSectionItem = useCallback((event, index) => {
        event.stopPropagation();

        setSections(prevState => {
            const updatedItems = [...prevState];

            updatedItems[index] = {
                ...updatedItems[index],
                isOpen: !updatedItems[index].isOpen,
                hasBeenClicked: true
            };

            return updatedItems;
        });
    }, [setSections]);

    return (
        <div className={styles['expandable-section']} >
            {sections.map((item, index) => {
                return (
                    <div key={index}>
                        <div className={styles['expandable-item-wrapper']}>
                            <div className='cursor-pointer d-flex justify-content-between align-items-center' onClick={(e) => handleClickSectionItem(e, index)}>
                                <div>
                                    <Text classes={'text-color-white font-weight-normal'} styleType={'h1-styles'}>{item.title}</Text>
                                </div>
                                <FontAwesomeIcon className={`${styles['section-item-icon']} ${item.hasBeenClicked && item.isOpen ? styles['icon-rotate-down'] : ''}`} icon={faChevronRight} />
                            </div>

                            <AnimatePresence>
                                {item.isOpen &&
                                    <motion.div
                                        className={`${styles['descr-wrapper']} mt-s`}
                                        style={{ overflow: 'hidden' }}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        key={'animation-item'}
                                    >
                                        <p
                                            className={styles['item-description']}
                                        >
                                            {item.description}
                                        </p>
                                        {item.link && <Button to={item.link}>{item.linkTitle}</Button>}
                                    </motion.div>
                                }
                            </AnimatePresence>
                        </div>
                        {index < sectionData.length - 1 && <hr className={styles.devider} />}
                    </div>
                )
            })}
        </div>
    )
}

export default ExpandableSection