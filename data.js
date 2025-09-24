const siteData = {
    title: "Kaitlin Calimbahin – Portfolio",
    description: "Projects, experience, and contact info for Kaitlin Calimbahin.",
    avatar: "/img/avatar.jpg",
    name: "Kaitlin Calimbahin",
    tagline: "Electrical Engineering • University California, San Diego",
  
    heroTitle: "Hi, I'm <span class='hero-name'>Kaitlin!</span> I build delightful hardware & robotic systems.",
    heroSubtitle: "",
    about:
      "I'm an Electrical Engineering undergraduate student at the University of California, San Diego with a focus on machine learning and controls. I build interactive systems that turn ideas into experiences!",
  
    emailHref: "mailto:kcalimbahin@ucsd.edu",
    linkedinHref: "https://www.linkedin.com/in/kaitlin-calimbahin",
  
    highlights: {
      projects: ["haptic-glove", "kitty-robot", "ironman"],
      experience: ["robotics-lead", "ng-intern"],
      extracurriculars: ["ieee", "tea"]
    },
  
    // Tag projects with category: "personal" or "academic"
    projects: [
      {
        id: "pinball",
        title: "Star Wars: Pinball Machine",
        homeDesc: "",
        desc: "A custom, fully functional Star Wars–themed pinball machine with a laser-cut playfield and 3D-printed mechanisms. An Arduino Mega drives lights, sounds, and features like a hyperspace auto-launcher, AT-AT pop bumpers, a motorized spinning R2-D2, and glowing Death Star.",
        img:  "img/pinball.png",
        video: "media/projects/pinball.mp4",
        poster:"media/projects/pinball.png"
      },
      {
        id: "haptic-glove",
        title: "The N2D Haptic Glove",
        homeDesc: "Collaborated with a multidisciplinary team to develop a haptic glove for contact-rich robotic teleoperation and virtual reality to enhance the immersiveness of teleoperation and virtual experiences.",
        desc: "The N2D Haptic Glove is a multi-finger glove capable of rendering 2D directional forces, allowing users to feel axial and transverse probing during teleoperation and virtual reality. Compact linkages, gimbal motors with encoders, and a Teensy 4.1 enable high-frequency control and realistic, precise feedback for contact-rich interaction.",
        img: "media/projects/haptic-glove1.png",
        paper: "/papers/Haptic_Glove_Paper.pdf",   // <-- update path if different
        demo:  "/demo/haptic-glove.mp4"          // <-- optional: direct demo file
      },
      {
        id: "kitty-robot",
        title: "Face Recognition Study Robot",
        homeDesc: "Developed a robotic cat that uses machine learning and computer vision to tell when students are on their phones, responding with expressive emotions and tail movements to encourage students to stay focus and reduce distractions.",
        desc: "A cat study-buddy robot that uses an ESP32 Camera module to implement a supervised machine learning algorithm and computer vision to detect people versus phones while reacting in real time. Expressive OLED eyes and a servo-driven tail reflect emotions, with motion sensors for “petting” interactions.",
        img: "img/kitty.jpg",
        video: "media/projects/kitty-robot.mp4",
        poster:"media/projects/kitty-robot.png"
      },
      {
        id: "ironman",
        title: "Motorized Iron Man Helmet",
        homeDesc: "Engineered a wearable Iron Man helmet featuring an analog control system that opens and closes the helmet's faceplate while LED eyes respond accordingly to the faceplate's position.",
        desc: "A wearable 3D-printed Iron Man helmet with a motorized faceplate and LED eyes, driven entirely by an analog circuit featuring a relay, switches, and servos. Power and control were tuned for smooth faceplate motion and maximum safe LED brightness.",
        img: "img/spider.jpg",
        video:"media/projects/ironman.mp4",
        poster:"media/projects/ironman.png"
      },
      {
        id: "spider-mask",
        title: "Dynamic Spider-Man Mask",
        homeDesc: "",
        desc: "A wearable 3D-printed Spider-Man mask with mechanical eyes that widen and squint to express motion based on user input. An Arduino Nano and dual infrared sensors coordinate smooth servo actuation and detect user input for real-time exppressions.",
        img: "img/glove.jpg",
        video:"media/projects/spider-mask.mp4",
        poster:"media/projects/spider-mask.png"
      }
    ],    
  
    experience: [
      {
        id: "robotics-lead",
        title: "Advanced Robotics and Control Lab – Research Engineer Intern",
        details: "Collaborated with lab partners to develop a multi-fingered haptic glove capable of rendering 2D directional, enabling users to realistically perceive interactions such axial and transverse probing during robotic teleoperation and virtual reality environments.",
        img: "img/robotics.jpg",
        projectId: "haptic-glove",              // used to route demo.html?id=...
        paper: "/papers/N2D_Haptic_Glove.pdf"  // update path if needed
      },      
      { id: "ng-intern", title: "Northrop Grumman – System Engineer Intern",
      details: "Collaborated with multiple engineering teams on the BACN program, developing an automated hardware checkout script that streamlined validation procedures, reduced manual testing time, and supported system integration efforts across hardware and software components.",
      img: "img/ng.jpg" }
    ],
  
    extracurriculars: [
      {
        id: "tea",
        title: "Themed Entertainment Association (TEA) – Technical Director",
        details: "Collaborated closely with the creative team to design and build technical elements for student showcases while translating creative concepts into functional prototypes.",
        // Fallback image (used if posterLeft is missing)
        img: "/media/extracurriculars/tea1.png",
    
        // Two-frame media for this card (both live in data.js now)
        posterLeft:  "/media/extracurriculars/tea3.png", // left still image
        videoPoster: "/media/extracurriculars/tea5.png", // right underlay image
        video:       "/media/extracurriculars/tea4.mp4", // right video
    
        // Independent tuning + percent shrink (like portfolio)
        tune: {
          percent: 120, // 0–100 (desktop). Mobile goes full-width automatically.
          poster: {     // LEFT frame (still)
            ratio: "10 / 13",
            x: "50%", y: "1%", zoom: 1.00
          },
          video: {      // RIGHT frame (poster-underlay + video)
            ratio: "10 / 13",
            x: "50%", y: "50%", zoom: 1.00
          }
        }
      },
      {
        id: "ieee",
        title: "Institute of Electrical and Electronics Engineers (IEEE) – Technical Lead",
        details: "Led workshops on electronics and programming, to help students build technical skills through hands-on projects, in addition to coordinating outreach events with local community college students to better prepare them on a path towards engineering.",
        img: "/media/extracurriculars/outreach1.png",
        tune: {
          percent: 110,
          poster: { ratio: "16 / 9", x: "55%", y: "45%", zoom: 1.60 }
        }
      },
      {
        id: "empower",
        title: "EMPOWER Scholar",
        details: "Selected as a low‑income transfer student for the NSF‑backed EMPOWER Scholars program at UC San Diego’s Jacobs School of Engineering, I received need‑based scholarship support, faculty and alumni mentoring, and summer research opportunities to advance my engineering career. On campus, I’ve worked to pay it forward by organizing peer study sessions, mentoring incoming transfer students, and helping run engineering events that bridge academic learning with hands-on experiences.",
        img: "/media/extracurriculars/empower.png",
        tune: {
          percent: 85,
          poster: { ratio: "16 / 15", x: "50%", y: "50%", zoom: 1.00 }
        }
      }
    ]    

  };
  