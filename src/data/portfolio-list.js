import twitterImg from '../assets/portfolio/twitter.png'
import plantaeImg from '../assets/portfolio/plantae.png'
import colorImg from '../assets/portfolio/color.png'
import urlImg from '../assets/portfolio/url.png'
import clockImg from '../assets/portfolio/clock.png'

const portfolioList = [
    {
        id: 1,
        name: 'Simple Twitter',
        img: twitterImg,
        des: 'Our project, Simple Twitter, was developed by a four-person team using a front-end and back-end separation approach in two week. Our goal was to create a simple, multi-functional social platform that includes user registration, login, posting, commenting, liking, following features, and a convenient admin dashboard.',
        url: 'https://chungyingho.github.io/Twitter/'
    },
    {
        id: 2,
        name: 'PLANTAE Taiwan',
        img: plantaeImg,
        des: 'This project is a showcase website for the PLANTAE Taiwan workshop with basic responsive web design (RWD) implemented. In this project, I was responsible for designing the entire web layout and developing it using React. The goal was to create a visually appealing and user-friendly showcase website.',
        url: 'https://chungyingho.github.io/plantae-taiwan/'
    },
    {
        id: 3,
        name: 'Color Converter',
        img: colorImg,
        des: 'Color Converter allows users to easily and freely convert between RGB and Hex color codes on both PC and mobile devices. It also provides opacity previews, saving users time on searching for color code conversions. This project is developed using React and accelerates web development through React Bootstrap.',
        url: 'https://chungyingho.github.io/color-converter/'
    },
    {
        id: 4,
        name: 'URL Shortener',
        img: urlImg,
        des: 'The URL Shortener is a personal project developed using Express.js, Handlebars, and MongoDB Atlas. This web application allows users to simplify long URLs into easily shareable short URLs, providing a convenient way to manage links on the web.',
        url: 'https://github.com/ChungYingHo/URL-Shortener/tree/main'
    },
    {
        id: 5,
        name: 'Analog Clock',
        img: clockImg,
        des: `This Analog Clock project showcases my integrated application skills in HTML, CSS, and JavaScript. I used HTML to create the basic structure of the clock, including the hour hand, minute hand, and second hand. CSS was employed to define the positions of these elements and to style the clock's appearance. JavaScript was responsible for the actual functionality of the clock.`,
        url: 'https://chungyingho.github.io/Analog-Clock/'
    }
]

export {portfolioList}