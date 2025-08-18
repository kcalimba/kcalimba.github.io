const siteData = {
    title: "Kaitlin Calimbahin – Portfolio",
    description: "Projects, experience, and contact info for Kaitlin Calimbahin.",
    avatar: "/img/avatar.jpg",
    name: "Kaitlin Calimbahin",
    tagline: "Electrical Engineering • University California, San Diego",
  
    heroTitle: "I build delightful hardware & intelligent systems.",
    heroSubtitle: "",
    about:
      "I'm an EE focused on controls and embedded systems. I like turning wild ideas into working, well-designed hardware—clean schematics, readable firmware, and thoughtful UX. Currently exploring mobile manipulation and haptics.",
  
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
        desc: "Force-feedback glove tested in a peg-in-hole study; reduced task time vs visual-only.",
        img:  "img/haptic.png",
        category: "academic" },

      { id: "kitty-robot",  title: "Autonomous Kitty Robot",
        desc: "Obstacle-avoiding bot with expressive OLED eyes, ultrasonic sensing, and adaptive behaviors.",
        img:  "img/kitty.jpg",
        video:  "media/projects/kitty-robot.mp4",   // <-- add
        poster: "media/projects/kitty-robot.png"},    // <-- add (first frame) },
  
      { id: "ironman",  title: "Motorized Iron Man Helmet",
        desc: "3D-printed moving lenses with IR gesture control and low-latency servo actuation.",
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
      { id: "robotics-lead", title: "Advanced Robotics and Control Lab <br>– Electronics Team",
        details: "Owned motor control stack (Teensy + FOC); mentored 5 teammates; cut bring-up time by 40%.",
        img: "img/robotics.jpg" },
      { id: "ng-intern", title: "Northrop Grumman <br>– Systems Engineer Intern",
      details: "Automated hardware validation (Python) adopted in field workflows; collaborated with a 25-person team.",
      img: "img/ng.jpg" }
    ],
  
    extracurriculars: [
      {
        id: "tea",
        title: "Themed Entertainment Association (TEA) <br>– Technical Director",
        details: "Organized demos and beginner workshops for student orgs and local schools.",
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
        title: "Institute of Electrical and Electronics Engineers (IEEE) <br>– Technical Lead",
        details: "Supported design/bring-up for autonomous underwater vehicle electronics.",
        img: "/media/extracurriculars/outreach1.png",
        tune: {
          percent: 110,
          poster: { ratio: "16 / 9", x: "55%", y: "45%", zoom: 1.60 }
        }
      },
      {
        id: "empower",
        title: "UCSD EMPOWER Scholar",
        details: "Add details here",
        img: "/media/extracurriculars/empower.png",
        tune: {
          percent: 85,
          poster: { ratio: "16 / 15", x: "50%", y: "50%", zoom: 1.00 }
        }
      }
    ]    

  };
  