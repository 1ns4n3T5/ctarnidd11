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
        <div class="card h-100 shadow theme card-hover">
          <div class="icon-circle">
            <i class="bi ${cardData.icon} ${cardData.iconColor} display-5"></i>
          </div>
          <div class="card-body">
            <h5 class="card-title text-white mt-5">${cardData.title}</h5>
            <p class="card-text text-white">${cardData.content}</p>
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
  

  //supported-os
  // 1) Define an array for all your OS data

const osData = [
  {
    name: "Fedora",
    versions: ["Fedora 37 x64", "Fedora 38 x64"],
    image: "../assets/img/cards/fedora.png"
  },
  {
    name: "Debian",
    versions: ["Debian 10 x64", "Debian 11 x64", "Debian 12 x64"],
    image: "../assets/img/cards/debian.png"
  },
  {
    name: "Ubuntu",
    versions: ["Ubuntu 20.04 LTS x64", "Ubuntu 22.04 LTS x64", "Ubuntu 23.04 x64"],
    image: "../assets/img/cards/ubuntu.png"
  },
  {
    name: "CentOS",
    versions: ["CentOS Stream 8 x64", "CentOS Stream 9 x64"],
    image: "../assets/img/cards/centos.png"
  }
];

// 2) Function to build each card’s HTML
function createCard(os) {
  return `
    <div class="col">
      <div class="card text-center p-3 h-100 shadow-sm theme card-hover">
        <img src="${os.image}" alt="${os.name}" class="os-img">
        <div class="card-body">
          <h5 class="card-title text-white">${os.name}</h5>
          ${os.versions.map(version => `<p class="card-text text-white">${version}</p>`).join('')}
        </div>
      </div>
    </div>
  `;
}

// 3) Insert cards into the row
const osCardsContainer = document.getElementById('os-cards');
osData.forEach(os => {
  osCardsContainer.innerHTML += createCard(os);
});
