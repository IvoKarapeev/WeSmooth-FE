import { memo, useEffect, useState } from 'react';
import classNames from 'classnames';

import styles from './blueprintItems.module.scss';
import Text from '../Text/Text';

const BlueprintsItems = memo(({ items, theme }) => {
    const [itemsHeight, setItemHeights] = useState([]);

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

    return (
        <>
            {items.map((blueprintItem, i) => {
                const isDarkMode = theme === 'dark';
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
                            <div
                                className={i === items.length - 1 ? 'd-none' : ''}
                                style={{ position: 'absolute', right: -15, bottom: `-${itemsHeight[i + 1] / 2 + 42 + 15}px` }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.23047 11.8079L13.6879 8.09346C14.2089 7.65924 15 8.02976 15 8.70803V15.292C15 15.9702 14.2089 16.3408 13.6879 15.9065L9.23047 12.1921C9.11053 12.0921 9.11053 11.9079 9.23047 11.8079Z" fill="#726A86" />
                                </svg>
                            </div>
                        )}
                        {isEvenIndex && (
                            <div
                                className={i === items.length - 1 ? 'd-none' : ''}
                                style={{ position: 'absolute', bottom: `-${itemsHeight[i + 1] / 2 + 42 + 15}px`, left: -15 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M14.7695 11.8079L10.3121 8.09346C9.79109 7.65924 9 8.02976 9 8.70803V15.292C9 15.9702 9.79109 16.3408 10.3121 15.9065L14.7695 12.1921C14.8895 12.0921 14.8895 11.9079 14.7695 11.8079Z" fill="#726A86" />
                                </svg>
                            </div>
                        )}
                    </div>
                );
            })}
        </>
    )
})

export default BlueprintsItems;