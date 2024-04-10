import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import Text from '../../components/Text/Text';
import BlueprintsItems from '../../components/BlueprintItems/BlueprintItems';

import styles from './blueprint.module.scss';
import { mockBlueprintItems, mockDataSectionsItems } from '../../helpers/mock-data';

const Blueprint = () => {
    const theme = useSelector((state) => state.theme);
    const [sectionItems, setSectionItems] = useState([]);
    const [blueprintData, setBlueprintData] = useState([]);
    const [activeTab, setActiveTab] = useState(1);

    useEffect(() => {
        setSectionItems(mockDataSectionsItems);
        setBlueprintData(mockBlueprintItems);
    }, []);

    const handleTabClick = () => {
        return (tabNumber) => {
            setActiveTab(tabNumber);
        }
    };

    // For test purposes
    const onAddItem = () => {
        setBlueprintData((oldState) => {
            return [...oldState, { title: 'Get files in folder', subtitle: 'Retrieve the files in folder: ../pathName' }];
        });
    };

    const handleClickSectionItem = () => {
        return (index) => {
            setSectionItems(prevState => {
                const updatedItems = [...prevState];

                updatedItems[index] = {
                    ...updatedItems[index],
                    areOptionsOpen: !updatedItems[index].areOptionsOpen,
                    hasBeenClicked: true
                };

                return updatedItems;
            });
        }
    };

    return (
        <div>
            <Sidebar sectionItems={sectionItems} handleClickSectionItem={handleClickSectionItem} />
            <div className={styles.content}>
                <div className={styles['tabs-container']}>
                    <div className={`${styles['tabs-top']} ${theme === 'dark' ? styles['dark-mode'] : ''}`}>
                        <svg className={styles['save-icon']} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.12868 4.12868C3.25 5.00736 3.25 6.42157 3.25 9.25V16.75C3.25 19.5784 3.25 20.9926 4.12868 21.8713C4.8148 22.5574 5.82744 22.7078 7.58496 22.7408C7.58333 22.5114 7.58333 22.265 7.58333 22V20.25C7.58333 18.3644 7.58333 17.4216 8.16912 16.8358C8.75491 16.25 9.69771 16.25 11.5833 16.25H13.3333C15.219 16.25 16.1618 16.25 16.7475 16.8358C17.3333 17.4216 17.3333 18.3644 17.3333 20.25V22C17.3333 22.2684 17.3333 22.5178 17.3316 22.7497C19.7766 22.7456 21.0551 22.6876 21.8713 21.8713C22.75 20.9926 22.75 19.5784 22.75 16.75V8.41176C22.75 8.00301 22.75 7.79863 22.6739 7.61486C22.5978 7.43109 22.4532 7.28658 22.1642 6.99755L19.0025 3.83579C18.7134 3.54676 18.5689 3.40224 18.3851 3.32612C18.2014 3.25 17.997 3.25 17.5882 3.25H9.25C6.42157 3.25 5.00736 3.25 4.12868 4.12868Z" fill="#7E869E" fillOpacity="0.25" />
                            <path d="M17.3333 22.75V20.25C17.3333 18.3644 17.3333 17.4216 16.7475 16.8358C16.1617 16.25 15.2189 16.25 13.3333 16.25H11.5833C9.69763 16.25 8.75482 16.25 8.16904 16.8358C7.58325 17.4216 7.58325 18.3644 7.58325 20.25V22.75" stroke={`${theme === 'dark' ? '#F9F5F5' : "#222222"}`} strokeWidth="1.2" />
                            <path d="M7.58325 8.66669H12.9999" stroke={`${theme === 'dark' ? '#F9F5F5' : "#222222"}`} strokeWidth="1.2" strokeLinejoin="round" />
                            <path d="M3.25 9.25C3.25 6.42157 3.25 5.00736 4.12868 4.12868C5.00736 3.25 6.42157 3.25 9.25 3.25H17.5882C17.997 3.25 18.2014 3.25 18.3851 3.32612C18.5689 3.40224 18.7134 3.54676 19.0025 3.83579L22.1642 6.99755C22.4532 7.28658 22.5978 7.43109 22.6739 7.61486C22.75 7.79863 22.75 8.00301 22.75 8.41176V16.75C22.75 19.5784 22.75 20.9926 21.8713 21.8713C20.9926 22.75 19.5784 22.75 16.75 22.75H9.25C6.42157 22.75 5.00736 22.75 4.12868 21.8713C3.25 20.9926 3.25 19.5784 3.25 16.75V9.25Z" stroke={`${theme === 'dark' ? '#F9F5F5' : "#222222"}`} strokeWidth="1.2" />
                        </svg>
                        <Text classes={`text-color-black ${theme === 'dark' ? 'text-color-white' : 'text-color-black'}`} link='/' element={'Link'} styleType='link-styles'>Start</Text>
                        <svg className={styles['run-icon']} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path d="M17.7111 12.1056L10.4033 8.45164C9.60544 8.0527 8.66667 8.6329 8.66667 9.52495V16.475C8.66667 17.3671 9.60544 17.9473 10.4033 17.5483L17.7111 13.8944C18.4482 13.5259 18.4482 12.4741 17.7111 12.1056Z" fill="#7E869E" fillOpacity="0.25" stroke={`${theme === 'dark' ? '#F9F5F5' : "#222222"}`} strokeLinejoin="round" />
                        </svg>
                        <Text classes={`text-color-black ${theme === 'dark' ? 'text-color-white' : 'text-color-black'}`} link='/' element={'Link'} styleType='link-styles'>Run</Text>
                    </div>
                    <div className={`${styles['tabs-bottom']} ${theme === 'dark' ? styles['dark-mode'] : ''}`}>
                        <div className={`${styles['tab-bottom-el']} ${activeTab === 1 && styles['active']} ${theme === 'dark' ? styles['dark-mode'] : ''}`} onClick={() => handleTabClick(1)}>
                            <Text element={'h3'} styleType={'h3-styles'} classes={`cursor-pointer ${theme === 'dark' ? 'text-color-white' : 'text-color-black'}`}>Main</Text>
                        </div>
                        <div className={`${styles['tab-bottom-el']} ${activeTab === 2 && styles['active']} ${theme === 'dark' ? styles['dark-mode'] : ''}`} onClick={() => handleTabClick(2)}>
                            <Text element={'h3'} styleType={'h3-styles'} classes={`cursor-pointer ${theme === 'dark' ? 'text-color-white' : 'text-color-black'}`}>Configurations Tabs</Text>
                        </div>
                    </div>
                </div>
                <div className={`${styles['blueprints-container']} ${theme === 'dark' ? styles['dark-mode'] : ''}`}>
                    <BlueprintsItems items={blueprintData} theme={theme} />
                    {/* For test purposes */}
                    <button onClick={onAddItem}>Add one more item</button>
                </div>
            </div>
        </div >
    )
}

export default Blueprint;