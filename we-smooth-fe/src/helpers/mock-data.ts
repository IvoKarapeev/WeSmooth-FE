interface Option {
    title: string;
}

interface SectionItem {
    title: string;
    areOptionsOpen: boolean;
    hasBeenClicked: boolean;
    options: Option[];
}

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