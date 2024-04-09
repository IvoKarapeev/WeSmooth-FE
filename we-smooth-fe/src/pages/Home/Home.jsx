import { useState } from 'react'
import { useSelector } from 'react-redux';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Carousel from '../../components/Carousel/Carousel';
import Button from '../../components/Button/Button';
import ImageContent from '../../components/ImageContent/ImageContent';
import Text from '../../components/Text/Text';
import styles from './home.module.scss';
// Image for test
import img from './image_1.png';
import { mockDataCarousel, mockDataLinkSection } from '../../helpers/mock-data';

const Home = () => {
    const theme = useSelector((state) => state.theme);

    const [sectionData, setSectionData] = useState(mockDataLinkSection);

    const { scrollY } = useScroll();

    const YText = useTransform(scrollY, [0, 200, 300, 400], [1, 100, 130, 140]);
    const scaleText = useTransform(scrollY, [0, 800, 700], [1, 0.5, 0]);
    const textOpacity = useTransform(scrollY, [0, 200, 500], [1, 0, 0]);

    const secondTextY = useTransform(scrollY, [200, 300, 400, 600], [350, 230, 100, 1]);
    const textOpacity2 = useTransform(scrollY, [400, 500, 600], [0, 0.5, 1]);

    const handleClickSectionItem = (event, index) => {
        event.stopPropagation();

        setSectionData(prevState => {
            const updatedItems = [...prevState];

            updatedItems[index] = {
                ...updatedItems[index],
                isOpen: !updatedItems[index].isOpen,
                hasBeenClicked: true
            };

            return updatedItems;
        });
    };

    return (
        <main className={`${styles['main-content']} ${theme === 'dark' ? styles['dark-mode'] : styles['light-mode']}`}>
            <motion.h1 className={styles.title} style={{ y: YText, scale: scaleText, opacity: textOpacity }}>We Smooth</motion.h1>
            <motion.h3 className={styles.subtitle} style={{ y: YText, scale: scaleText, opacity: textOpacity }}>WeSmooth is a powerful workflow engine with a visual scripting approach, designed to streamline and automate your workflows with ease.</motion.h3>
            <div className={styles['carousel-wrapper']}>
                <Carousel items={mockDataCarousel} />
            </div>
            <svg className={styles['todo-icon']} width="269" height="371" viewBox="0 0 269 371" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_227_529)">
                    <path d="M261.06 8.412H8.20999V363.312H261.06V8.412Z" stroke="#C1B6DD" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M239.609 53.0695C239.609 47.6905 235.248 43.33 229.87 43.33C224.491 43.33 220.13 47.6905 220.13 53.0695C220.13 58.4485 224.491 62.809 229.87 62.809C235.248 62.809 239.609 58.4485 239.609 53.0695Z" stroke="#C1B6DD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M225.12 51.17L230.715 56.7646L245.681 41.7986" stroke="#C1B6DD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M239.609 91.0095C239.609 85.6305 235.248 81.27 229.87 81.27C224.491 81.27 220.13 85.6305 220.13 91.0095C220.13 96.3885 224.491 100.749 229.87 100.749C235.248 100.749 239.609 96.3885 239.609 91.0095Z" stroke="#C1B6DD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M225.12 89.11L230.715 94.7046L245.681 79.7386" stroke="#C1B6DD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M33.22 53.07H200.06" stroke="#C1B6DD" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M33.22 91.01H179.42" stroke="#C1B6DD" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M33.22 128.95H184.01" stroke="#C1B6DD" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M33.22 166.89H195.48" stroke="#C1B6DD" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M33.22 204.83H198.92" stroke="#C1B6DD" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M33.22 242.77H200.06" stroke="#C1B6DD" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M33.22 280.71H195.48" stroke="#C1B6DD" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M33.22 318.65H181.14" stroke="#C1B6DD" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M239.609 128.949C239.609 123.571 235.248 119.21 229.87 119.21C224.491 119.21 220.13 123.571 220.13 128.949C220.13 134.328 224.491 138.689 229.87 138.689C235.248 138.689 239.609 134.328 239.609 128.949Z" stroke="#C1B6DD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M225.12 127.05L230.715 132.645L245.681 117.679" stroke="#C1B6DD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M239.609 166.889C239.609 161.511 235.248 157.15 229.87 157.15C224.491 157.15 220.13 161.511 220.13 166.889C220.13 172.268 224.491 176.629 229.87 176.629C235.248 176.629 239.609 172.268 239.609 166.889Z" stroke="#C1B6DD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M239.609 204.829C239.609 199.451 235.248 195.09 229.87 195.09C224.491 195.09 220.13 199.451 220.13 204.829C220.13 210.208 224.491 214.569 229.87 214.569C235.248 214.569 239.609 210.208 239.609 204.829Z" stroke="#C1B6DD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M239.609 242.77C239.609 237.391 235.248 233.03 229.87 233.03C224.491 233.03 220.13 237.391 220.13 242.77C220.13 248.148 224.491 252.509 229.87 252.509C235.248 252.509 239.609 248.148 239.609 242.77Z" stroke="#C1B6DD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M225.12 240.87L230.715 246.465L245.681 231.499" stroke="#C1B6DD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M239.609 280.71C239.609 275.331 235.248 270.97 229.87 270.97C224.491 270.97 220.13 275.331 220.13 280.71C220.13 286.088 224.491 290.449 229.87 290.449C235.248 290.449 239.609 286.088 239.609 280.71Z" stroke="#C1B6DD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M225.12 278.81L230.715 284.405L245.681 269.439" stroke="#C1B6DD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M239.609 318.649C239.609 313.271 235.248 308.91 229.87 308.91C224.491 308.91 220.13 313.271 220.13 318.649C220.13 324.028 224.491 328.389 229.87 328.389C235.248 328.389 239.609 324.028 239.609 318.649Z" stroke="#C1B6DD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <rect x="0.5" y="0.5" width="268" height="370" />
                <defs>
                    <clipPath id="clip0_227_529">
                        <rect width="269" height="371" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <motion.h2 className={styles['lower-content-title']} style={{ y: secondTextY, opacity: textOpacity2 }}>All about WeSmooth in one place</motion.h2>
            <motion.div className='d-flex justify-content-center' style={{ y: secondTextY, opacity: textOpacity2 }}>
                <Button className='mr-m'>Create Account</Button>
                <Button type='secondary'>Help</Button>
            </motion.div>

            <div className={styles['lower-content-wrapper']}>

                <div className={styles['img-content-wrapper']}>
                    <ImageContent image={img} />
                </div>

                <div className={styles['link-section']} >
                    {sectionData.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className={styles['link-item-wrapper']}>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='cursor-pointer' onClick={(e) => handleClickSectionItem(e, index)}>
                                            <Text classes={'text-color-white font-weight-normal'} styleType={'h1-styles'}>{item.title}</Text>
                                        </div>
                                        <svg onClick={(e) => handleClickSectionItem(e, index)} className={`${styles['section-item-icon']} ${item.hasBeenClicked && item.isOpen ? styles['icon-rotate-down'] : ''}`} width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M31.5 15L21.25 25.25L11 15" stroke="#C1B6DD" strokeWidth="3" />
                                        </svg>
                                    </div>
                                    <AnimatePresence>
                                        {item.isOpen &&
                                            <motion.div
                                                className={styles['descr-wrapper']}
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
                                <hr className={styles.devider} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </main >
    )
}

export default Home;