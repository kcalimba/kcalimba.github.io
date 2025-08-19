const siteData = {
    title: "Kaitlin Calimbahin – Portfolio",
    description: "Projects, experience, and contact info for Kaitlin Calimbahin.",
    avatar: "/img/avatar.jpg",
    name: "Kaitlin Calimbahin",
    tagline: "Electrical Engineering • University California, San Diego",
  
    heroTitle: "Hi, I'm <span class='hero-name'>Kaitlin!</span> I build delightful hardware & robotic systems.",
    heroSubtitle: "",
    about:
      "I'm an Eletrical Engineering undergraduate student at the University of California, San Diego with a focus on machine learning and controls. I build interactive systems that turn ideas into experiences!",
  
    emailHref: "mailto:kcalimbahin@ucsd.edu",
    linkedinHref: "https://www.linkedin.com/in/kaitlin-calimbahin",
  
    highlights: {
      projects: ["haptic-glove", "kitty-robot", "ironman"],
      experience: ["robotics-lead", "ng-intern"],
      extracurriculars: ["ieee", "tea"]
    },
  
    // Tag projects with category: "personal" or "academic"
    projects: [
      { id: "pinball", title: "Star Wars: Pinball Machine",
      desc: "Force-feedback glove tested in a peg-in-hole study; reduced task time vs visual-only.",
      img:  "img/pinball.png",
      video:  "media/projects/pinball.mp4",   // <-- add
      poster: "media/projects/pinball.png"},

      { id: "haptic-glove", title: "Haptic Glove for Teleoperation",
        desc: "Collaborated with a multidisciplinary team to develop a haptic glove for teleoperation and virtual world physical exploration, completing the immersiveness of virtual experiences.",
        img:  "img/haptic.png",
        category: "academic" },

      { id: "kitty-robot",  title: "Face Recognition Study Buddy Robot",
        desc: "Designed an interactive robot companion to help students stay focused by using computer vision to detect phone usage and presence.",
        img:  "img/kitty.jpg",
        video:  "media/projects/kitty-robot.mp4",   // <-- add
        poster: "media/projects/kitty-robot.png"},    // <-- add (first frame) },
  
      { id: "ironman",  title: "Motorized Iron Man Helmet",
        desc: "Developed a 3D-printed Iron Man helmet powered by servos, dual relays, and switches to control a motorized faceplate and LED eyes. ",
        img:  "img/spider.jpg",
        video:  "media/projects/ironman.mp4",
        poster: "media/projects/ironman.png" },

      { id: "spider-mask", title: "Dynamic Spider-Man Mask",
      desc: "Force-feedback glove tested in a peg-in-hole study; reduced task time vs visual-only.",
      img:  "img/glove.jpg",
      video:  "media/projects/spider-mask.mp4",   // <-- add
      poster: "media/projects/spider-mask.png"},
    ],
  
    experience: [
      { id: "robotics-lead", title: "Advanced Robotics and Control Lab – Electronics Team",
        details: "Collaborated with lab partners to develop a multi-fingered haptic glove capable of rendering 2D directional forces on each finger, enabling users to realistically perceive interactions such as slip, shear, and probing during teleoperation and virtual environments.",
        img: "img/robotics.jpg" },
      { id: "ng-intern", title: "Northrop Grumman – Systems Engineer Intern",
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
  