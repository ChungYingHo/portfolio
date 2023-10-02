import twitterImg from '../assets/portfolio/twitter.png'
import plantaeImg from '../assets/portfolio/plantae.png'
import colorImg from '../assets/portfolio/color.png'
import urlImg from '../assets/portfolio/url.png'

const portfolioList = [
    {
        id: 1,
        name: 'PLANTAE Taiwan',
        img: plantaeImg,
        des: "PLANTAE Taiwan is a studio showcase website created for a friend's team. I was responsible for all web layout design, UI/UX design, RWD design, and web development. (With the consent of the friend's team, this project has been added to the portfolio).",
        url: 'https://chungyingho.github.io/plantae-ver2/',
        rwd: '(Supports RWD)'
    },
    {
        id: 2,
        name: 'Front-End Toolbox',
        img: colorImg,
        des: 'This Front-End Toolbox allows users to easily look up color codes (including RGB, RGBA, Hex) and quickly experiment with various types of box shadow configurations, whether on a PC or a mobile device.',
        url: 'https://chungyingho.github.io/frontend-toolbox/',
        rwd: '(Supports RWD)'
    },
    {
        id: 3,
        name: 'URL Shortener',
        img: urlImg,
        des: 'The URL Shortener is a personal project developed using Express.js, Handlebars, and MySQL. This web application allows users to simplify long URLs into easily shareable short URLs, providing a convenient way to manage links on the web.',
        url: 'http://url-shortener-dev.ap-northeast-1.elasticbeanstalk.com/'
    },
    {
        id: 4,
        name: 'Simple Twitter',
        img: twitterImg,
        des: 'Our project, Simple Twitter, was developed by a four-person team using a front-end and back-end separation approach in two week. Our goal was to create a simple, multi-functional social platform that includes user registration, login, posting, commenting, liking, following features, and a convenient admin dashboard. (The API server has been deactivated, and now the project only consists of the frontend interface.)',
        url: 'https://chungyingho.github.io/Twitter/'
    }
]

export {portfolioList}