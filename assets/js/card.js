/* script.js */

// Initialize AOS animations
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });
  
  // Data for Cloud Cards
  const cloudCards = [
    {
      title: "Virtual Servers",
      content: "We provide rental service for cloud servers for our customers' websites or services where they can choose to manage them by themselves or let our professional team handle it.",
      icon: "bi-cloud",
      iconColor: "text-primary",
      aosDelay: 0
    },
    {
      title: "Cloud Network Devices",
      content: "Enhance your digital infrastructure with customized network devices featuring state-of-the-art load balancers, VPNs, and comprehensive security solutions.",
      icon: "bi-hdd-network",
      iconColor: "text-success",
      aosDelay: 100
    },
    {
      title: "System Administration",
      content: "Benefit from our dedicated Linux system administration services that ensure flawless server deployment, seamless installation, and expert configuration.",
      icon: "bi-terminal",
      iconColor: "text-warning",
      aosDelay: 200
    },
    {
      title: "99.99% Uptime",
      content: "Enjoy peace of mind with our industry-leading 99.99% uptime guarantee, ensuring continuous and reliable operation of your services.",
      icon: "bi-clock-history",
      iconColor: "text-danger",
      aosDelay: 300
    },
    {
      title: "24/7 Monitored",
      content: "Stay ahead with round-the-clock monitoring where our team detects and addresses issues immediately to keep your operations secure.",
      icon: "bi-shield-check",
      iconColor: "text-info",
      aosDelay: 400
    }
  ];
  
  // Data for Infrastructure Cards
  const infraCards = [
    {
      title: "Linux Server Administration",
      content: "Comprehensive administration services including installation, configuration, management, and maintenance for both physical and cloud servers.",
      icon: "bi-terminal",
      iconColor: "text-success",
      aosDelay: 0
    },
    {
      title: "Server Security",
      content: "Robust protection at the OS and service levels. We configure firewalls and security measures to prevent unauthorized access.",
      icon: "bi-shield-lock",
      iconColor: "text-danger",
      aosDelay: 100
    },
    {
      title: "Regular Data Backup",
      content: "Secure and efficient backup solutions to protect your valuable data, ensuring rapid recovery when needed.",
      icon: "bi-hdd",
      iconColor: "text-primary",
      aosDelay: 200
    },
    {
      title: "Infrastructure Planning & Implementation",
      content: "Scalable, future-ready infrastructure design and implementation that efficiently handles high traffic loads.",
      icon: "bi-diagram-3",
      iconColor: "text-warning",
      aosDelay: 300
    },
    {
      title: "Service Level Agreement (SLA)",
      content: "All our services come with a comprehensive SLA to guarantee reliability and performance.",
      icon: "bi-file-earmark-text",
      iconColor: "text-info",
      aosDelay: 400
    },
    {
      title: "Infrastructure Monitoring",
      content: "Our 24/7 Network Operations Center continuously monitors system performance and network health with real-time alerts.",
      icon: "bi-speedometer2",
      iconColor: "text-secondary",
      aosDelay: 500
    },
    {
      title: "Disaster Recovery",
      content: "Expert disaster recovery planning and implementation ensuring minimal downtime for your online services.",
      icon: "bi-life-preserver",
      iconColor: "text-dark",
      aosDelay: 600
    }
  ];
  
  // Function to generate a card's HTML
  function generateCard(cardData) {
    return `
      <div class="col-md-4 mb-3 mt-5" data-aos="fade-up" data-aos-delay="${cardData.aosDelay}">
        <div class="card h-100 shadow card-hover">
          <div class="icon-circle">
            <i class="bi ${cardData.icon} ${cardData.iconColor} display-5"></i>
          </div>
          <div class="card-body">
            <h5 class="card-title text-black mt-5">${cardData.title}</h5>
            <p class="card-text text-black">${cardData.content}</p>
          </div>
        </div>
      </div>
    `;
  }
  
  // Insert Cloud Cards into the Cloud section
  const cloudContainer = document.getElementById('cloud-cards');
  cloudCards.forEach(card => {
    cloudContainer.innerHTML += generateCard(card);
  });
  
  // Insert Infrastructure Cards into the Infra section
  const infraContainer = document.getElementById('infra-cards');
  infraCards.forEach(card => {
    infraContainer.innerHTML += generateCard(card);
  });
  

  




//Developing Services 

const devServices = [
  {
    title: "Website/Application Development",
    content: "We build modern websites and web applications that help your business grow with scalable, robust solutions.",
    icon: "bi-code-slash",
    iconColor: "text-primary",
    aosDelay: 0
  },
  {
    title: "Website/Application Maintenance",
    content: "We keep your site and apps running smoothly with regular updates and support for both minor tweaks and major changes.",
    icon: "bi-tools",
    iconColor: "text-secondary",
    aosDelay: 100
  },
  {
    title: "Customized Websites",
    content: "We design custom web applications tailored to your needs—from e-commerce to back-office systems—so you stand out.",
    icon: "bi-sliders",
    iconColor: "text-warning",
    aosDelay: 200
  },
  {
    title: "Mobile Application Development",
    content: "We create mobile apps for Android and iOS, whether native or hybrid, ensuring your business stays connected on any device.",
    icon: "bi-phone",
    iconColor: "text-success",
    aosDelay: 300
  },
  {
    title: "Opensource Codes",
    content: "We offer source codes under a separate agreement, giving you full control over your project for easy customization.",
    icon: "bi-github",
    iconColor: "text-dark",
    aosDelay: 400
  },
  {
    title: "SLA & Milestones",
    content: "Our projects follow clear milestones and Service Level Agreements to ensure timely, quality delivery every time.",
    icon: "bi-card-checklist",
    iconColor: "text-danger",
    aosDelay: 500
  }
];

// Helper function to create a card's HTML using Bootstrap classes
function createDevCard(service) {
  return `
    <div class="col gy-5">
      <div class="card h-100 text-center card-hover shadow">
        <div class="icon-circle">
          <i class="bi ${service.icon} ${service.iconColor} fs-1"></i>
        </div>
        <div class="card-body">
          <h5 class="card-title mt-5 text-black">${service.title}</h5>
          <p class="card-text mt-3 text-black">${service.content}</p>
        </div>
      </div>
    </div>
  `;
}

// Insert generated cards into the container with id "dev-cards"
const devCardsContainer = document.getElementById('dev-cards');
devServices.forEach(service => {
  devCardsContainer.innerHTML += createDevCard(service);
});

// Premium Hosting
const premiumData = [
  {
    title: "Dedicated Support",
    content:
      "With our customer support staff, we provide dedicated communication channels for all managed services.",
    icon: "bi-headset",
    iconColor: "text-primary" // Primary color for dedicated support
  },
  {
    title: "24/7 Monitored",
    content:
      "All Premium Web Hosting websites are monitored round-the-clock, ensuring immediate action on any issues.",
    icon: "bi-clock-history",
    iconColor: "text-info" // Info color works well for monitoring
  },
  {
    title: "Fully Managed",
    content:
      "Our SysAdmin team manages all server & network configurations for your Premium Web Hosting services.",
    icon: "bi-gear",
    iconColor: "text-secondary" // Secondary color for management
  },
  {
    title: "Auto Data Backup",
    content:
      "Your data is automatically backed up onto our secure cloud backup servers, keeping it safe and recoverable.",
    icon: "bi-cloud-upload",
    iconColor: "text-success" // Success color indicates reliability
  },
  {
    title: "Flexible Pricing",
    content:
      "Our pricing adapts to your requirements and budget, offering cost-effective solutions for your hosting needs.",
    icon: "bi-currency-dollar",
    iconColor: "text-danger" // Danger color can indicate affordability challenges or urgency
  },
  {
    title: "Service Level Agreement",
    content:
      "All Premium Web Hosting services include SLAs, guaranteeing reliable performance and uptime.",
    icon: "bi-card-checklist",
    iconColor: "text-warning" // Warning color works nicely for agreements
  }
];

const freeData = [
  {
    title: "Free Domain",
    content:
      "Register a free domain (e.g., .com, .net) with every Dedicated Web Hosting package.",
    icon: "bi-globe",
    iconColor: "text-primary" // Primary color for global presence
  },
  {
    title: "Free CMS Deployment",
    content:
      "We’ll install and configure popular CMS platforms like WordPress, Drupal, or Joomla at no extra cost.",
    icon: "bi-file-earmark-text",
    iconColor: "text-info" // Info color for documentation or text
  },
  {
    title: "Free System Deployment",
    content:
      "Get your site up and running with our free system deployment and tuning on powerful Linux OS.",
    icon: "bi-server",
    iconColor: "text-secondary" // Secondary color for system services
  },
  {
    title: "Free System Security",
    content:
      "We provide basic OS-level and cloud firewall security to keep your environment protected.",
    icon: "bi-shield-lock",
    iconColor: "text-success" // Success color to indicate security/safety
  }
];

// Reusable function to build a card's HTML
function createCard(item) {
  return `
    <div class="col gy-5">
      <div class="card h-100 shadow card-hover">
        <div class="icon-circle">
          <i class="bi ${item.icon} ${item.iconColor} fs-1"></i>
        </div>
       <div class="card-body">
        <h5 class="card-title mt-5">${item.title}</h5>
        <p>${item.content}</p>
       </div>
      </div>
    </div>
  `;
}

// Insert Premium Services cards
const premiumRow = document.getElementById("premium-row");
premiumData.forEach((item) => {
  premiumRow.innerHTML += createCard(item);
});

// Insert Free Items cards
const freeRow = document.getElementById("free-row");
freeData.forEach((item) => {
  freeRow.innerHTML += createCard(item);
});







