import eCommerseImg from '../assets/portfolio/e-commerce.png'
import lemonImg from '../assets/portfolio/lemon.png'
import shopImg from '../assets/portfolio/alpha-shop.png'
import todoImg from '../assets/portfolio/todo-list.png'

const practiceList = [
    {
        id: 1,
        name: 'E-commerce Website',
        img: eCommerseImg,
        des: 'This is a front-end development exercise for an e-commerce platform. This practice project includes responsive web design (RWD) that supports various screen sizes and incorporates CSS design (without using JavaScript) to add interactivity, such as the presentation of product images to the webpage.',
        url: 'https://chungyingho.github.io/E-commerce-Layout/',
        rwd: '(Supports RWD)'
    },
    {
        id: 2,
        name: 'Little Lemon',
        img: lemonImg,
        des: 'The Little Lemon project is my React front-end development exercise, simulating a restaurant called Little Lemon that requires a website to showcase its services. As a front-end engineer, I am responsible for the design and construction of the homepage.',
        url: 'https://chungyingho.github.io/Little-Lemon/'
    },
    {
        id: 3,
        name: 'ALPHA Shop',
        img: shopImg,
        des: 'ALPHA Shop is a React front-end development exercise project that simulates an e-commerce checkout platform. Within this project, basic shopping cart functionality has also been implemented.',
        url: 'https://chungyingho.github.io/ALPHA-shop/'
    },
    {
        id: 4,
        name: 'Todo List',
        img: todoImg,
        des: 'This to-do list project is developed using Express, manages data with MongoDB Atlas, and accelerates the creation of the website interface using Bootstrap. Users can easily add, edit, and delete their to-do items.',
        url: 'https://github.com/ChungYingHo/Todo-List-v1.0'
    }
]

export {practiceList}