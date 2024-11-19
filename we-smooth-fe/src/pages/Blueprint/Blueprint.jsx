import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import Text from '../../components/Text/Text';
import BlueprintsItems from '../../components/BlueprintItems/BlueprintItems';

import styles from './blueprint.module.scss';
import { mockBlueprintItems, mockDataSectionsItems } from '../../helpers/mock-data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faPlay } from '@fortawesome/free-solid-svg-icons';

const Blueprint = () => {
    const theme = useSelector((state) => state.theme);
    const [sectionItems, setSectionItems] = useState([]);
    const [blueprintData, setBlueprintData] = useState([]);
    const [activeTab, setActiveTab] = useState(1);

    useEffect(() => {
        setSectionItems(mockDataSectionsItems);
        setBlueprintData(mockBlueprintItems);
    }, []);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    }

    // For test purposes
    const onAddItem = () => {
        setBlueprintData((oldState) => {
            return [...oldState, { title: 'Get files in folder', subtitle: 'Retrieve the files in folder: ../pathName' }];
        });
    };

    const handleClickSectionItem = (index) => {
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

    return (
        <div>
            <Sidebar sectionItems={sectionItems} handleClickSectionItem={handleClickSectionItem} />
            <div className={styles.content}>
                <div className={styles['tabs-container']}>
                    <div className={`${styles['tabs-top']} ${theme === 'dark' ? styles['dark-mode'] : ''}`}>
                        <FontAwesomeIcon className={`${styles['save-icon']} ${theme === 'dark' && styles['dark-theme-icon']}`} icon={faFloppyDisk} />
                        <Text classes={`text-color-black ${theme === 'dark' ? 'text-color-white' : 'text-color-black'}`} link='/' element={'Link'} styleType='link-styles'>Start</Text>
                        <FontAwesomeIcon className={`${styles['run-icon']}  ${theme === 'dark' && styles['dark-theme-icon']}`} icon={faPlay} />
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