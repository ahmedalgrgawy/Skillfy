import img1 from "./homePage/01.png"
import img2 from "./homePage/02.png"
import img3 from "./homePage/03.png"
import LogoImg from "./homePage/Logo.svg";
import halfCircleImg from "./homePage/halfcyrcle.png"
import img4 from "./homePage/04.png"
import img5 from "./homePage/05.png"
import img6 from "./homePage/06.png"
import borderImg from "./homePage/border.png"
import grayImg from "./homePage/bggray.png"
import vectorImg from "./homePage/Vector 2.png"
import searchImg from "./homePage/Search.svg"
import homeImg from "./homePage/Home.svg"
import NotificationImg from "./homePage/Notification.svg"
import profileImg from "./homePage/photoProfile.svg"
import starImg from "./homePage/star.svg"
import teacherImg from "./homePage/teacher.svg"
import payImg from "./homePage/Pay.svg"
import card1 from "./homePage/card1.png"
import card2 from "./homePage/card2.png"
import card3 from "./homePage/card3.png"
import card4 from "./homePage/card4.png"
import card5 from "./homePage/card5.png"
import card6 from "./homePage/card6.png"
import bellImg from "./homePage/bell.png"
import greenStarImg from "./homePage/greenStarImg.png"
import orangeStar from "./courses/Tier-2.png"
import greenStar from "./courses/Tier.png"
import redStar from "./courses/Tier-3.png"
import pinkStar from "./courses/Tier-1.png"

export const whatDoYouLikeOptions = [
    {
        id: "digital",
        text: "Digital Design"
    },
    {
        id: "computer",
        text: "Computer Programming"
    },
    {
        id: "data",
        text: "Data Analysis"
    },
    {
        id: "enter",
        text: "Entrepreneurship"
    }
]


export const welcomeImgs = {
    logoImg: LogoImg,
    startImg: img1,
    startImgTwo: img2,
    startImgThree: img3,
    halfCircleImg: halfCircleImg,
    welcomeImg: img4,
    welcomeImgTwo: img5,
    welcomeImgThree: img6,
    borderImg: borderImg,
    grayImg: grayImg,
    vectorImg: vectorImg
}

export const homePageImgs = {
    searchImg: searchImg,
    homeImg: homeImg,
    NotificationImg: NotificationImg,
    profileImg: profileImg,
    starImg: starImg,
    teacherImg: teacherImg,
    payImg: payImg,
    card1: card1,
    card2: card2,
    card3: card3,
    card4: card4,
    card5: card5,
    card6: card6,
    bellImg: bellImg,
    greenStarImg: greenStarImg
}

export const tiersFilter = [
    {
        tierName: "F",
        tierImg: greenStar
    },
    {
        tierName: "S",
        tierImg: pinkStar
    },
    {
        tierName: "I",
        tierImg: orangeStar
    },
    {
        tierName: "E",
        tierImg: redStar
    },
]

export const Levels = ['All Levels', 'Beginner', 'intermediate', 'Expert']

export const ratings = [
    {
        value: 4.5,
        text: "4.5 & Up"
    },
    {
        value: 4,
        text: "4 & Up"
    },
    {
        value: 3.5,
        text: "3.5 & Up"
    },
    {
        value: 3,
        text: "3 & Up"
    }
]

export const courseData = [
    {
        title: 'Html',
        description: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript)",
        id: 1,
        content: [
            {
                contentName: 'Introduction to Course',
                contentType: 'video',
                contentTime: '10 min'
            },
            {
                contentName: 'Reading Name',
                contentType: 'reading',
                contentTime: '2 min'
            },
            {
                contentName: 'Video Name',
                contentType: 'video',
                contentTime: '7 min'
            },
            {
                contentName: 'Reading Name',
                contentType: 'reading',
                contentTime: '7 min'
            },
        ]
    },
    {
        title: 'Css',
        description: "CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.",
        id: 2,
        content: [
            {
                contentName: 'Introduction to Course',
                contentType: 'video',
                contentTime: '10 min'
            },
            {
                contentName: 'Reading Name',
                contentType: 'reading',
                contentTime: '2 min'
            },
            {
                contentName: 'Video Name',
                contentType: 'video',
                contentTime: '7 min'
            },
            {
                contentName: 'Video Name',
                contentType: 'video',
                contentTime: '9 min'
            },
        ]
    },
    {
        title: 'Javascript',
        description: "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes,",
        id: 3,
        content: [
            {
                contentName: 'Introduction to Course',
                contentType: 'video',
                contentTime: '10 min'
            },
            {
                contentName: 'Reading Name',
                contentType: 'reading',
                contentTime: '2 min'
            },
            {
                contentName: 'Video Name',
                contentType: 'video',
                contentTime: '7 min'
            },
            {
                contentName: 'Video Name',
                contentType: 'video',
                contentTime: '9 min'
            },
        ]
    },
    {
        title: 'React',
        description: "React (also known as React. js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React. Original author(s)",
        id: 4,
        content: [
            {
                contentName: 'Introduction to Course',
                contentType: 'video',
                contentTime: '10 min'
            },
            {
                contentName: 'Reading Name',
                contentType: 'reading',
                contentTime: '2 min'
            },
            {
                contentName: 'Video Name',
                contentType: 'video',
                contentTime: '7 min'
            },
            {
                contentName: 'Video Name',
                contentType: 'video',
                contentTime: '9 min'
            },
        ]
    },
    {
        title: 'Tailwind',
        description: "Tailwind CSS is an open-source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.",
        id: 5,
        content: [
            {
                contentName: 'Introduction to Course',
                contentType: 'video',
                contentTime: '10 min'
            },
            {
                contentName: 'Reading Name',
                contentType: 'reading',
                contentTime: '2 min'
            },
            {
                contentName: 'Video Name',
                contentType: 'video',
                contentTime: '7 min'
            },
        ]
    },
];