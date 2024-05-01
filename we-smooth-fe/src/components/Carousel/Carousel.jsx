import { useState } from 'react';
import styles from './carousel.module.scss';
import Button from '../Button/Button';
import Text from '../Text/Text';

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
            <button className={`${styles.prevButton} ${currentIndex === 0 ? styles.disabled : ''}`} onClick={() => prevSlide(currentIndex === 0)}>
                <svg width="75" height="74" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill='transparent' d="M46.875 18.4859L28.125 36.9718L46.875 55.4577" stroke="#C1B6DD" strokeWidth="6" />
                </svg>
            </button>
            <div
                className={styles.carouselContainer}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {items.map((item, index) => (
                    <div className={styles.carouselSlide} key={index}>
                        <div className={styles['title-wrapper']}>
                            <Text classes='text-color-white text-center font-weight-normal' styleType={'h1-styles'}>{item.title}</Text>
                        </div>
                        {/* If there is a need of a button (action) in the carousel that should not be a link we should discuss what kind of a prop should be passed from the backend which will be the identificator that we need another type of action for a current tap of the carousel. */}
                        <div className='d-flex'>
                            {item.leftLinkTitle && <Button to={item.rightLink} className={item.rightLinkTitle ? 'mr-m' : null}>{item.leftLinkTitle}</Button>}
                            {item.rightLinkTitle && <Button to={item.leftLink} type='secondary'>{item.rightLinkTitle}</Button>}
                        </div>
                    </div>
                ))}
            </div>

            <button className={`${styles.nextButton} ${currentIndex === items.length - 1 ? styles.disabled : ''}`} onClick={() => nextSlide(currentIndex === items.length - 1)}>
                <svg width="75" height="74" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.125 55.4577L46.875 36.9718L28.125 18.4859" stroke="#C1B6DD" strokeWidth="6" />
                </svg>
            </button>
        </div >
    )
}

export default Carousel;
