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

interface LinkSectionItem {
    hasBeenClicked: boolean, // this will be coming from FE - no need to be passed from backend;
    isOpen: boolean, // this will be coming from FE - no need to be passed from backend;
    title: string,
    description: string,
    link?: string,
    linkTitle?: string
}

interface CarouselItem {
    title: string,
    leftLinkTitle?: string,
    leftLink?: string,
    rightLinkTitle?: string,
    rightLink?: string
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


export const mockDataLinkSection: LinkSectionItem[] = [
    { hasBeenClicked: false, isOpen: false, title: 'Quick Intro tutorial', description: 'By clicking the link below you will be taken to a page where a quick intro will be reproduced for you to get a feeling how to work with our application.', link: '/', linkTitle: 'Quick Intro' },
    { hasBeenClicked: false, isOpen: false, title: 'Why to choose us', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { hasBeenClicked: false, isOpen: false, title: 'Automation', description: 'What is automation and how does our application help you with automation tasks you can find here.', link: '/', linkTitle: 'What is Automation' },
    { hasBeenClicked: false, isOpen: false, title: 'What is workflow', description: 'Worfklow is a sequence of steps or tasks that need to be completed to accomplish a specific goal or process. It outlines the order in which actions should be performed, helping to streamline operations and ensure consistency in how tasks are executed. Workflows are often used in various contexts, such as business processes, project management, software development, and everyday tasks, to facilitate efficient and organized work.' },
    { hasBeenClicked: false, isOpen: false, title: 'Create account', description: 'You can create account by clicking the link below', link: '/', linkTitle: 'Create Account' }
];

export const mockDataCarousel: CarouselItem[] = [{ title: 'Start creating your workflows with this quick tutorial and save yourself time with our app', leftLinkTitle: 'Take guided tour', leftLink: '/', rightLinkTitle: 'Create Blueprint', rightLink: '/' }, { title: 'Did you know that this application is the best out there yet?', leftLinkTitle: 'Yes, ofcourse', leftLink: '/', rightLinkTitle: 'Well, not yet', rightLink: '/' }]
