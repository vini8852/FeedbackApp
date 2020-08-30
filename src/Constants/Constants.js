import {Dimensions} from 'react-native';
import {Logos, Icons} from './Assets';

export const ScreenWidth = Dimensions.get('window').width;
export const ScreenHeight = Dimensions.get('window').height;

export const Place = {
  url1:
    'https://www.wien.info/media/images/40367-graben-einkaufen-shopping-altstadt-einkaufsstrassen-3to2.jpeg/image_teaser-lead',
  url2:
    'https://www.studying-in-germany.org/wp-content/uploads/2018/07/German-Culture-and-Traditions.jpg',
  url3:
    'https://www.thelocal.de/userdata/images/article/3055de7f5332b984d7dade29667f67254eb8887766d5b91c179e435d412aa8d7.jpg',
  url4:
    'https://www.holidify.com/images/cmsuploads/compressed/Wayanad_20180308231859.jpg',
  url5:
    'https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/paris-cityscape-overview-guide.jpg?imwidth=1400',
  url6: 'https://www.holidify.com/blog/wp-content/uploads/2014/06/hampi.jpg',
};

export const detailString =
  "Feedback that fosters a growth mindset: “You are working hard to understand this . ...";

export const GetStartedData = [
  {
    id: '1',
    image: Logos.connect,
    name: 'Connect',
    detail: detailString,
  },
  {
    id: '2',
    image: Logos.engage,
    name: 'Engage',
    detail: detailString,
  },
  {
    id: '3',
    image: Logos.grow,
    name: 'Grow',
    detail: detailString,
  },
];

export const DepartmentsData = [
  {id: '1', name: 'design'},
  {id: '2', name: 'developer'},
  {id: '3', name: 'digital marketer'},
  {id: '4', name: 'project manager'},
  {id: '5', name: 'crm'},
];

export const TeamData = [
  {
    id: '1',
    name: 'Nicolas jaar',
    email: 'nico@andwalsh.com',
    image: Icons.user,
    isSelected: false,
  },
  {
    id: '2',
    name: 'Nicolas jaar',
    email: 'nico@andwalsh.com',
    image: Icons.user,
    isSelected: false,
  },
  {
    id: '3',
    name: 'Nicolas jaar',
    email: 'nico@andwalsh.com',
    image: Icons.user,
    isSelected: false,
  },
  {
    id: '4',
    name: 'Nicolas jaar',
    email: 'nico@andwalsh.com',
    image: Icons.user,
    isSelected: false,
  },
  {
    id: '5',
    name: 'Nicolas jaar',
    email: 'nico@andwalsh.com',
    image: Icons.user,
    isSelected: false,
  },
];

export const welcomeNote = "By tapping Continue or Sign in with Google, \nI agree to Dockabl’s Terms of service & \nPrivacy Policy"