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
        <div class="card text-center p-3 h-100 shadow card-hover">
          <img src="${os.image}" alt="${os.name}" class="os-img">
          <div class="card-body">
            <h5 class="card-title text-black">${os.name}</h5>
            ${os.versions.map(version => `<p class="card-text text-black">${version}</p>`).join('')}
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