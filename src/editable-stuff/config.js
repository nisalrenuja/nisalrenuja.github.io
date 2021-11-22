// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Nisal",
  middleName: "Renuja",
  lastName: "Palliyaguru",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/nisalrenuja",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/nisal.renuja.56",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/nisal.97/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nisal-palliyaguru-899a73163/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/NisalRenuja/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/nisalrenuja.jpg"),
  imageSize: 375,
  message:
    "My name is Nisal Renuja Palliyaguru. I’m following a Software Engineering Degree at SLIIT. I focus on UI/UX Design, Web Design, and Programming. In my free time I like working on open source projects.",
  resume:
    "https://drive.google.com/file/d/1W8Tcy0whv202wY63aQO-IbBO1uT6sUnm/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "nisalrenuja", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "My Gallery",
  message: "",
  images: [
    {
      img: require("../editable-stuff/foss21_22.jpg"),
      label: "",
      paragraph: "",
    },
    {
      img: require("../editable-stuff/foss20_21.jpg"),
      label: "",
      paragraph: "",
    },
    {
      img: require("../editable-stuff/mozillaDM.jpg"),
      label: "",
      paragraph: "",
    },
    {
      img: require("../editable-stuff/sfd18.jpg"),
      label: "",
      paragraph: "",
    },
    {
      img: require("../editable-stuff/blog2.jpg"),
      label: "",
      paragraph: "",
    },
    {
      img: require("../editable-stuff/blog1.jpg"),
      label: "",
      paragraph: "",
    },
    {
      img: require("../editable-stuff/minihack.png"),
      label: "",
      paragraph: "",
    },
    {
      img: require("../editable-stuff/fcsc.jpg"),
      label: "",
      paragraph: "",
    },
  ],
  imageSize: {
    width: "1000",
    height: "300",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "MySQL/SQL", value: 75 },
    { name: "Java", value: 85 },
    { name: "C/C++", value: 70 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 85 },
    { name: "HTML/CSS", value: 90 },
    { name: "Node.js", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "nrenuja@gmail.com",
};

const experiences = {
  show: true,
  heading: "Education",
  data: [
    {
      role: "Royal College - Colombo 07",
      companylogo: require("../assets/img/royalcollege.png"),
      date: "G.C.E Advanced Level Successfully completed in Biology Stream",
    },
    {
      role: "Sri Lanka Institute of Information Technology",
      companylogo: require("../assets/img/sliit.png"),
      date: "2020 - 2023",
    },
  ],
};

// Blog SECTION
const blog = {
  show: true,
  title: "My First Blog",
  image: "img",
  description:
    "Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident similique corporis rem ullam odio excepturi voluptas harum, architecto sit!",
};

export {
  blog,
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
