import { memo, useEffect, useState } from 'react';
import classNames from 'classnames';

import styles from './blueprintItems.module.scss';
import Text from '../Text/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const BlueprintsItems = memo(({ items, theme }) => {
    const [itemsHeight, setItemHeights] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Calculate the heights of the next items
        const heights = items.map((_, i) => {
            const nextItemIndex = i;
            if (nextItemIndex < items.length) {
                const nextItemHeight = document.getElementById(`blueprint-item-${nextItemIndex}`).offsetHeight;
                return nextItemHeight;
            }
            return 0; // For the last item, set height as 0
        });
        setItemHeights(heights);
    }, [items]);

    useEffect(() => {
        setIsDarkMode(theme === 'dark');
    }, [theme]);

    return (
        <>
            {items.map((blueprintItem, i) => {
                const isLastItem = i === items.length - 1;
                const isEvenIndex = i % 2 === 0;

                const itemClasses = classNames(
                    styles['blueprint-item'],
                    { [styles['dark-mode']]: isDarkMode }
                );

                const titleClasses = classNames(
                    'text-shadow',
                    { 'text-color-white': isDarkMode, 'text-color-black': !isDarkMode }
                );

                const subtitleClasses = classNames(
                    { 'text-color-red-pastel': isDarkMode, 'text-color-red-pastel-dark': !isDarkMode }
                );

                const arrowFirstLineClasses = classNames({
                    [styles.arrow]: true,
                    [styles['first-line']]: true,
                    'd-none': isLastItem,
                    [styles['left-arrow']]: isEvenIndex,
                    [styles['right-arrow']]: !isEvenIndex
                });

                const arrowSecondLineClasses = classNames({
                    [styles.arrow]: true,
                    [styles['second-line']]: true,
                    'd-none': i === items.length - 1,
                    [styles['left-arrow']]: i % 2 === 0,
                    [styles['right-arrow']]: i % 2 !== 0
                });

                const arrowThirdsecondLineClasses = classNames({
                    [styles.arrow]: true,
                    [styles['third-line']]: true,
                    'd-none': i === items.length - 1,
                    [styles['left-arrow']]: i % 2 === 0,
                    [styles['right-arrow']]: i % 2 !== 0
                });


                return (
                    <div
                        id={`blueprint-item-${i}`}
                        className={itemClasses}
                        key={i}
                    >
                        <Text classes={titleClasses} styleType={'h3-styles'} element='h3'>{blueprintItem.title}</Text>
                        <Text classes={subtitleClasses} element='p' styleType='p-styles'>{blueprintItem.subtitle}</Text>
                        <span className={arrowFirstLineClasses} />
                        <span
                            style={{ height: `${itemsHeight[i + 1] / 2 + 42 + itemsHeight[i] / 2}px` }}
                            className={arrowSecondLineClasses}
                        />
                        <span
                            style={{ bottom: `-${itemsHeight[i + 1] / 2 + 42}px` }}
                            className={arrowThirdsecondLineClasses}
                        />
                        {!isEvenIndex && (
                            <FontAwesomeIcon icon={faCaretLeft} className={i === items.length - 1 ? 'd-none' : ''}
                                style={{ color: '#726A86', position: 'absolute', bottom: `-${itemsHeight[i + 1] / 2 + 42 + 8}px`, right: -8 }} />
                        )}
                        {isEvenIndex && (
                            <FontAwesomeIcon icon={faCaretRight} className={i === items.length - 1 ? 'd-none' : ''}
                                style={{ color: '#726A86', position: 'absolute', bottom: `-${itemsHeight[i + 1] / 2 + 42 + 8}px`, left: -8 }} />
                        )}
                    </div>
                );
            })}
        </>
    )
})

export default BlueprintsItems;