const siteData = {
    title: "Kaitlin Calimbahin – Portfolio",
    description: "Projects, experience, and contact info for Kaitlin Calimbahin.",
    avatar: "img/avatar.jpg",
    name: "Kaitlin Calimbahin",
    tagline: "Electrical Engineering • University California, San Diego",
  
    heroTitle: "I build delightful hardware & intelligent systems.",
    heroSubtitle: "",
    about:
      "I'm an EE focused on controls and embedded systems. I like turning wild ideas into working, well-designed hardware—clean schematics, readable firmware, and thoughtful UX. Currently exploring mobile manipulation and haptics.",
  
    emailHref: "mailto:kcalimbahin@ucsd.edu",
    linkedinHref: "https://www.linkedin.com/in/kaitlin-calimbahin",
  
    highlights: {
      projects: ["kitty-robot", "haptic-glove", "spider-mask"],
      experience: ["ng-intern", "robotics-lead"],
      extracurriculars: ["auv-team", "outreach"]
    },
  
    // Tag projects with category: "personal" or "academic"
    projects: [
      { id: "kitty-robot",  title: "Autonomous Kitty Robot",
        desc: "Obstacle-avoiding bot with expressive OLED eyes, ultrasonic sensing, and adaptive behaviors.",
        img:  "img/kitty.jpg",
        category: "personal" },
  
      { id: "haptic-glove", title: "Haptic Glove for Teleoperation",
        desc: "Force-feedback glove tested in a peg-in-hole study; reduced task time vs visual-only.",
        img:  "img/glove.jpg",
        category: "academic" },
  
      { id: "spider-mask",  title: "Spider-Mask Animatronics",
        desc: "3D-printed moving lenses with IR gesture control and low-latency servo actuation.",
        img:  "img/spider.jpg",
        category: "personal" }
    ],
  
    experience: [
      { id: "ng-intern", title: "Northrop Grumman – Integration & Test Intern",
        details: "Automated hardware validation (Python) adopted in field workflows; collaborated with a 25-person team.",
        img: "img/ng.jpg" },
      { id: "robotics-lead", title: "Robotics Club – Electronics Subteam Lead",
        details: "Owned motor control stack (Teensy + FOC); mentored 5 teammates; cut bring-up time by 40%.",
        img: "img/robotics.jpg" }
    ],
  
    extracurriculars: [
      { id: "auv-team", title: "AUV Subteam (Electronics)",
        details: "Supported design/bring-up for autonomous underwater vehicle electronics.",
        img: "img/auv.jpg" },
      { id: "outreach", title: "Robotics Outreach / Workshops",
        details: "Organized demos and beginner workshops for student orgs and local schools.",
        img: "img/outreach.jpg" }
    ]
  };
  