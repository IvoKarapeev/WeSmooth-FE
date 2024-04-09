interface Option {
    title: string;
}

interface SectionItem {
    title: string;
    areOptionsOpen: boolean; // this will be coming from FE - no need to be passed from backend;
    hasBeenClicked: boolean; // this will be coming from FE - no need to be passed from backend;
    options: Option[];
}

interface BlueprintItem {
    title: string;
    subtitle: string;
}

// Important: We would need ID for the functionallity of clicking on item.
// Important: The areOptionsOpen and the hasBeenClicked will come after mapping the items from the db,
//            initially we don't need them from the back-end and we do not send them as well.
export const mockDataSectionsItems: SectionItem[] = [
    {
        title: 'File',
        areOptionsOpen: false,
        hasBeenClicked: false,
        options: [
            { title: 'Launch File' },
            { title: 'Move File' },
            { title: 'Rename File' },
        ]
    },
    {
        title: 'System',
        areOptionsOpen: false,
        hasBeenClicked: false,
        options: [
            { title: 'Launch File' },
            { title: 'Move File' },
            { title: 'Rename File' },
        ]
    },
    {
        title: 'Folder',
        areOptionsOpen: false,
        hasBeenClicked: false,
        options: [
            { title: 'Launch File' },
            { title: 'Move File' },
            { title: 'Rename File' },
        ]
    },
    {
        title: 'UI Automation',
        areOptionsOpen: false,
        hasBeenClicked: false,
        options: [
            { title: 'Launch File' },
            { title: 'Move File' },
            { title: 'Rename File' },
        ]
    },
    {
        title: 'Web',
        areOptionsOpen: false,
        hasBeenClicked: false,
        options: [
            { title: 'Launch File' },
            { title: 'Move File' },
            { title: 'Rename File' },
        ]
    },
    {
        title: 'Database',
        areOptionsOpen: false,
        hasBeenClicked: false,
        options: [
            { title: 'Launch File' },
            { title: 'Move File' },
            { title: 'Rename File' },
        ]
    },
    {
        title: 'Excel',
        areOptionsOpen: false,
        hasBeenClicked: false,
        options: [
            { title: 'Launch File' },
            { title: 'Move File' },
            { title: 'Rename File' },
        ]
    },
    {
        title: 'Outlook',
        areOptionsOpen: false,
        hasBeenClicked: false,
        options: [
            { title: 'Launch File' },
            { title: 'Move File' },
            { title: 'Rename File' },
        ]
    },
    {
        title: 'Email',
        areOptionsOpen: false,
        hasBeenClicked: false,
        options: [
            { title: 'Launch File' },
            { title: 'Move File' },
            { title: 'Rename File' },
        ]
    },
    {
        title: 'Variables',
        areOptionsOpen: false,
        hasBeenClicked: false,
        options: [
            { title: 'Launch File' },
            { title: 'Move File' },
            { title: 'Rename File' },
        ]
    },
    {
        title: 'Conditions',
        areOptionsOpen: false,
        hasBeenClicked: false,
        options: [
            { title: 'Launch File' },
            { title: 'Move File' },
            { title: 'Rename File' },
        ]
    },
    {
        title: 'Loops',
        areOptionsOpen: false,
        hasBeenClicked: false,
        options: [
            { title: 'Launch File' },
            { title: 'Move File' },
            { title: 'Rename File' },
        ]
    },
    {
        title: 'Variables',
        areOptionsOpen: false,
        hasBeenClicked: false,
        options: [
            { title: 'Launch File' },
            { title: 'Move File' },
            { title: 'Rename File' },
        ]
    },
    {
        title: 'Web Automation',
        areOptionsOpen: false,
        hasBeenClicked: false,
        options: [
            { title: 'Launch File' },
            { title: 'Move File' },
            { title: 'Rename File' },
        ]
    }
];

// Again, we should have ID for each el in the array.
export const mockBlueprintItems: BlueprintItem[] = [
    { title: 'Get files in folder', subtitle: 'Retrieve the files in folder: ../pathName' },
    { title: 'Launch Excel', subtitle: 'Launch Excel and open file.' },
    { title: 'Get files in folder', subtitle: 'Retrieve the files in folder: ../pathNameLaunch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Retrieve the files in folder: ../pathNameLaunch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Retrieve the files in folder: ../pathNameLaunch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Retrieve the files in folder: ../pathNameLaunch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Retrieve the files in folder: ../pathNameLaunch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Retrieve the files in folder: ../pathNameLaunch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.Launch Excel and open file.' },
    { title: 'Launch Excel', subtitle: 'Launch Excel and open file.' },
    { title: 'Get files in folder', subtitle: 'Retrieve the files in folder: ../pathName' },
    { title: 'Launch Excel', subtitle: 'Launch Excel and open file.' },
    { title: 'Get files in folder', subtitle: 'Retrieve the files in folder: ../pathName' },
];
