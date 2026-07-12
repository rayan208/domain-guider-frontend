const DOMAIN_FIELDS = [
      { fields: [ // 0 - Cyber Security
          { name: "Penetration Testing", description: "Simulating real attacks to find exploitable weaknesses before they're used against you." },
          { name: "Ethical Hacking", description: "Legally probing systems, networks, and apps with an attacker's mindset." },
          { name: "Network Security", description: "Guarding traffic, firewalls, and infrastructure from intrusion." },
          { name: "Cryptography", description: "Designing and breaking the math that keeps data private and authentic." },
          { name: "Malware Analysis", description: "Reverse-engineering malicious code to understand how it behaves." },
          { name: "Digital Forensics", description: "Reconstructing exactly what happened on a system after an incident." },
          { name: "SOC & Incident Response", description: "Monitoring live systems and reacting fast when something breaks in." },
          { name: "Application Security", description: "Hardening the code and APIs that ship inside software products." }
      ]},
      { fields: [ // 1 - Web Development
          { name: "Frontend Development", description: "Building the interface people see and interact with in a browser." },
          { name: "Backend Development", description: "Handling data, logic, and requests behind the scenes." },
          { name: "Full-Stack Development", description: "Owning both the interface and the server that powers it." },
          { name: "API Design", description: "Defining how different pieces of software talk to each other." },
          { name: "Web Performance", description: "Making pages load and respond faster under real conditions." },
          { name: "Progressive Web Apps", description: "Making websites behave like installable native apps." }
      ]},
      { fields: [ // 2 - Mobile App Development
          { name: "Native iOS Development", description: "Building apps with Swift for Apple's ecosystem." },
          { name: "Native Android Development", description: "Building apps with Kotlin for Google's ecosystem." },
          { name: "Cross-Platform Development", description: "One codebase, using Flutter or React Native, shipping to both platforms." },
          { name: "Mobile UI/UX", description: "Designing touch-first interfaces that feel natural on small screens." },
          { name: "App Performance & Battery Optimization", description: "Keeping apps fast without draining the device." },
          { name: "Mobile Security", description: "Protecting on-device data and communication from tampering." }
      ]},
      { fields: [ // 3 - AI & Machine Learning
          { name: "Machine Learning Engineering", description: "Building and deploying models that learn from data." },
          { name: "Deep Learning", description: "Training neural networks for vision, language, and beyond." },
          { name: "Natural Language Processing", description: "Getting machines to understand and generate human language." },
          { name: "Computer Vision", description: "Teaching systems to interpret images and video." },
          { name: "MLOps", description: "Getting models into production and keeping them reliable there." },
          { name: "Reinforcement Learning", description: "Training agents that learn by trial, error, and reward." }
      ]},
      { fields: [ // 4 - Data Science & Analytics
          { name: "Data Analysis", description: "Finding patterns and answering questions hidden in data." },
          { name: "Data Engineering", description: "Building the pipelines that move and clean data at scale." },
          { name: "Business Intelligence", description: "Turning data into dashboards leadership actually reads." },
          { name: "Statistical Modeling", description: "Using math to explain relationships and predict outcomes." },
          { name: "Big Data Systems", description: "Working with data too large for a single machine to handle." }
      ]},
      { fields: [ // 5 - Cloud Computing
          { name: "Cloud Architecture", description: "Designing systems that run reliably on AWS, Azure, or GCP." },
          { name: "Cloud Security", description: "Locking down access and data across cloud environments." },
          { name: "Serverless Computing", description: "Running code without managing the servers underneath it." },
          { name: "Cloud Cost Optimization", description: "Keeping infrastructure spend under control at scale." },
          { name: "Multi-Cloud & Migration", description: "Moving systems between providers without breaking them." }
      ]},
      { fields: [ // 6 - DevOps & Site Reliability
          { name: "CI/CD Pipelines", description: "Automating how code moves from commit to production." },
          { name: "Infrastructure as Code", description: "Defining servers and networks in version-controlled files." },
          { name: "Site Reliability Engineering", description: "Keeping systems up, fast, and measurable under load." },
          { name: "Container Orchestration", description: "Running and scaling apps with Docker and Kubernetes." },
          { name: "Monitoring & Observability", description: "Knowing what's broken before customers have to tell you." }
      ]},
      { fields: [ // 7 - Blockchain & Web3
          { name: "Smart Contract Development", description: "Writing self-executing code that runs directly on a blockchain." },
          { name: "Decentralized App (dApp) Development", description: "Building front ends that talk to on-chain logic." },
          { name: "Blockchain Architecture", description: "Designing the ledger, consensus, and network layer itself." },
          { name: "Cryptography for Blockchain", description: "Applying crypto primitives that secure trustless systems." },
          { name: "Tokenomics", description: "Designing the economic rules a token or protocol runs on." }
      ]},
      { fields: [ // 8 - Database Systems
          { name: "Database Administration", description: "Keeping databases running, backed up, and tuned." },
          { name: "Database Design & Modeling", description: "Structuring how data relates before a line of code is written." },
          { name: "Data Warehousing", description: "Building the systems analytics teams query for history." },
          { name: "Query Optimization", description: "Making slow queries fast at scale." },
          { name: "Distributed Databases", description: "Keeping data consistent across many machines at once." }
      ]},
      { fields: [ // 9 - Game Development
          { name: "Gameplay Programming", description: "Coding the mechanics that make a game feel like a game." },
          { name: "Game Engine Development", description: "Building the tools and engines other developers build games with." },
          { name: "Graphics Programming", description: "Rendering the visuals a GPU actually draws on screen." },
          { name: "Game AI", description: "Scripting how NPCs perceive, decide, and react." },
          { name: "Multiplayer & Networking", description: "Keeping many players in sync in real time." }
      ]},
      { fields: [ // 10 - Networking & Systems
          { name: "Network Administration", description: "Keeping routers, switches, and connectivity running day to day." },
          { name: "Systems Administration", description: "Managing servers, OS configuration, and uptime." },
          { name: "Network Engineering", description: "Designing how data moves across an organization's infrastructure." },
          { name: "Wireless & Mobile Networks", description: "Building and tuning the networks phones connect to." },
          { name: "Software-Defined Networking", description: "Controlling network behavior through software, not hardware." }
      ]},
      { fields: [ // 11 - Embedded Systems & IoT
          { name: "Embedded Systems Programming", description: "Writing code that runs directly on microcontrollers." },
          { name: "Firmware Development", description: "Building the low-level software hardware boots into." },
          { name: "IoT Architecture", description: "Connecting sensors and devices into a working network." },
          { name: "Real-Time Systems", description: "Guaranteeing code responds within strict time limits." },
          { name: "Robotics Software", description: "Programming the perception and control loops robots run on." }
      ]},
      { fields: [ // 12 - UI/UX & Product Design
          { name: "User Research", description: "Talking to real users to learn what they actually need." },
          { name: "Interaction Design", description: "Designing how a product responds to what someone does." },
          { name: "Visual Design", description: "Deciding the color, type, and layout a product is built from." },
          { name: "Product Design", description: "Owning the whole experience, not just how it looks." },
          { name: "Design Systems", description: "Building the reusable components a whole product is assembled from." },
          { name: "Usability Testing", description: "Watching real people use a product to catch what's confusing." }
      ]},
      { fields: [ // 13 - Software Engineering & Systems Programming
          { name: "Systems Programming", description: "Writing low-level software that operating systems and runtimes depend on." },
          { name: "Operating Systems Development", description: "Building the software that manages hardware and every other program." },
          { name: "Compiler Engineering", description: "Building the tools that turn source code into something a machine runs." },
          { name: "Software Architecture", description: "Designing how large systems are structured before they're built." },
          { name: "Distributed Systems", description: "Building software that runs correctly across many machines at once." },
          { name: "Performance Engineering", description: "Finding and removing the reasons software is slow." }
      ]},
      { fields: [ // 14 - AR/VR & Spatial Computing
          { name: "AR Development", description: "Overlaying digital content onto the real world through a camera or headset." },
          { name: "VR Development", description: "Building fully immersive digital environments." },
          { name: "3D Graphics & Modeling", description: "Creating the models and environments spatial apps run on." },
          { name: "Spatial Interaction Design", description: "Designing how people move and interact in 3D space." },
          { name: "Hardware Integration", description: "Connecting software to headsets, sensors, and motion tracking." }
      ]},
      { fields: [ // 15 - Quality Assurance & Testing
          { name: "Manual Testing", description: "Using software the way a real user would to catch what's broken." },
          { name: "Automated Testing", description: "Writing code that tests other code without a human repeating it." },
          { name: "Test Automation Engineering", description: "Building the frameworks and pipelines automated tests run in." },
          { name: "Performance Testing", description: "Checking how software holds up under real load." },
          { name: "QA Process & Strategy", description: "Deciding what to test, when, and how much is enough." }
      ]},
      { fields: [ // 16 - Computer Science Theory & Research
          { name: "Algorithms & Data Structures", description: "Designing the fundamental building blocks every program relies on." },
          { name: "Computational Theory", description: "Studying what problems can and can't be solved by computers." },
          { name: "Formal Verification", description: "Mathematically proving software behaves the way it's supposed to." },
          { name: "Programming Language Design", description: "Designing the languages developers write code in." },
          { name: "Academic Research", description: "Publishing new ideas that eventually become tomorrow's tools." }
      ]},
      { fields: [ // 17 - IT Support & Technical Operations
          { name: "Technical Support", description: "Helping people solve problems with the systems they already use." },
          { name: "IT Operations", description: "Keeping an organization's day-to-day technology running." },
          { name: "Help Desk & Service Management", description: "Managing how technical issues get reported and resolved." },
          { name: "Hardware Support", description: "Diagnosing and fixing physical device and equipment issues." },
          { name: "IT Asset Management", description: "Tracking and managing an organization's technology inventory." }
      ]}
    ];

    // Function 1: Card se title aur description khud utha leta hai
function getCardInfo(index) {
  const cards = document.querySelectorAll(".homeview .click");  // sab cards dhoondo
  const card = cards[index];                                    // jo number diya, wahi card uthao
  const title = card.querySelector("h1").innerText.trim();       // uska title nikalo
  const desc = card.querySelector("p").innerText.trim();         // uski description nikalo
  return { title, description: desc };
}

// Function 2: Ye chalega jab koi card click hoga (onclick="showdomain(0)")
function showdomain(index) {
  const info = getCardInfo(index);              // card ka title/desc uthao
  const fields = DOMAIN_FIELDS[index].fields;    // usi index ki fields uthao

  // detail page mein data bhar do
  document.getElementById("detailTitle").innerText = info.title;
  document.getElementById("detailDesc").innerText = info.description;
  document.getElementById("fieldCount").innerText = fields.length + " fields inside this domain";

  const fieldList = document.getElementById("fieldList");
  fieldList.innerHTML = "";   // purani fields saaf karo

  // har field ke liye ek naya card banao
  fields.forEach((field, i) => {
    const row = document.createElement("div");
    row.className = "rounded-2xl h-auto " + (i % 2 === 0 ? "card" : "card2") + " px-10 py-4 my-8 bg-amber-50 text-black";
    row.innerHTML = `
      <h1 class="${i % 2 === 0 ? 'heading' : 'header'} text-xl">${field.name}</h1>
      <p class="show py-7">${field.description}</p>
    `;
    fieldList.appendChild(row);
  });

  // home chhupao, detail dikhao
  document.querySelector(".homeview").style.display = "none";
  document.getElementById("detailView").style.display = "block";
  window.scrollTo(0, 0);
}

// Function 3: Back button ke liye (onclick="goBack()")
function goBack() {
  document.getElementById("detailView").style.display = "none";
  document.querySelector(".homeview").style.display = "block";
  window.scrollTo(0, 0);
}