import { useState } from 'react';
import styles from './carousel.module.scss';
import Button from '../Button/Button';
import Text from '../Text/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = (disabled) => {
        if (!disabled) {
            setCurrentIndex((prevIndex) => {
                if (prevIndex !== items.length - 1) {
                    return prevIndex + 1
                }
            });
        };
    };

    const prevSlide = (disabled) => {
        if (!disabled) {
            setCurrentIndex((prevIndex) => {
                if (prevIndex > 0) {
                    return prevIndex - 1;
                }
            });
        };
    };

    return (
        <div className={styles.carousel}>
            <button
                className={`${styles.prevButton} ${currentIndex === 0 ? styles.disabled : ''}`}
                onClick={() => prevSlide(currentIndex === 0)}
            >
                <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
            </button>

            <div
                className={styles.carouselContainer}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {items.map((item, index) => (
                    <div className={styles.carouselSlide} key={index}>
                        <div className={styles['title-wrapper']}>
                            <Text
                                classes="text-color-white text-center font-weight-normal"
                                styleType={'h1-styles'}
                            >
                                {item.title}
                            </Text>
                        </div>
                        <div className="d-flex mt-l">
                            {item.leftLinkTitle && (
                                <Button
                                    to={item.rightLink}
                                    className={item.rightLinkTitle ? 'mr-m' : null}
                                >
                                    {item.leftLinkTitle}
                                </Button>
                            )}
                            {item.rightLinkTitle && (
                                <Button to={item.leftLink} type="secondary">
                                    {item.rightLinkTitle}
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <button
                className={`${styles.nextButton} ${currentIndex === items.length - 1 ? styles.disabled : ''}`}
                onClick={() => nextSlide(currentIndex === items.length - 1)}
            >
                <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
            </button>
        </div>
    );
};

export default Carousel;
