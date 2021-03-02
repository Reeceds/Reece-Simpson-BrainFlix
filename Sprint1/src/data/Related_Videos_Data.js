import { v4 as uuidv4} from 'uuid';
import Image0 from '../assets/Images/video-list-0.jpg';
import Image1 from '../assets/Images/video-list-1.jpg';
import Image3 from '../assets/Images/video-list-3.jpg';
import Image2 from '../assets/Images/video-list-2.jpg';
import Image4 from '../assets/Images/video-list-4.jpg';
import Image5 from '../assets/Images/video-list-5.jpg';
import Image6 from '../assets/Images/video-list-6.jpg';
import Image7 from '../assets/Images/video-list-7.jpg';
import Image8 from '../assets/Images/video-list-8.jpg';

const VideoList = [
    {
        id: uuidv4(), 
        title: 'BMX Rampage: 2018 Highlights', 
        channel: 'By Red Cow', 
        image: Image0 
    },

    {
        id: uuidv4(), 
        title: 'Become A Travel Pro In One Easy Lesson', 
        channel: 'Todd Welch', 
        image: Image1 
    },

    {
        id: uuidv4(), 
        title: 'Les Houches The Hidden Gem Of The Chamonix', 
        channel: 'Cornelia Blair', 
        image: Image2  
    },

    {
        id: uuidv4(), 
        title: 'Travel Health Useful Medical Information For', 
        channel: 'Glen Harper', 
        image: Image3  
    },

    {
        id: uuidv4(), 
        title: 'Cheap Airline Tickets Great Ways To Save', 
        channel: 'Emily Harper', 
        image: Image4  
    },

    {
        id: uuidv4(), 
        title: 'Take A Romantic Break In A Boutique Hotel', 
        channel: 'Ethan Owen', 
        image: Image5  
    },

    {
        id: uuidv4(), 
        title: 'Choose The Perfect Accommodations', 
        channel: 'Lydia Perez', 
        image: Image6  
    },

    {
        id: uuidv4(), 
        title: 'Cruising Destination Ideas', 
        channel: 'Timothy Austin', 
        image: Image7  
    },

    {
        id: uuidv4(), 
        title: 'Train Travel On Track For Safety', 
        channel: 'Scotty Cranmer', 
        image: Image8  
    },
];

export default VideoList;