//Scripts to load each park card and also the navbar

const cardDiv = document.getElementById('card-div');
const navBar = document.getElementById('navbar');
const footer = document.getElementById('footer');

fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    loadHomePage(data);
    loadFooter(data);
  });

function loadHomePage(data) {
  const parks = data.parks;
  for (let i = 0; i < parks.length; i += 2) {
    cardDiv.innerHTML += `
      <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div
          class="bg-body-tertiary shadow-lg me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
          style="border-radius: 30px; flex: 1; width: 50%;"
          >
          <div class="my-3 p-3">
          <a href="pages/${parks[i].id}.html" style="color: black;">
            <h2 class="display-5">${parks[i].name}</h2>
          </a>
            <p class="lead">${parks[i].location}.</p>
          </div>
          <div
            class="bg-body border-radius: 21px 21px 0 0 shadow-sm mx-auto overflow-hidden"
            style="width: 80%; height: 300px; border-radius: 21px 21px 0 0"
          ><img src="${parks[i].images['Image 1'].url}"></div>
        </div>
        <div
          class="bg-body-tertiary shadow-lg pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
          style="border-radius: 30px; flex: 1; width: 50%;"
        >
          <div class="my-3 py-3">
            <a href="pages/${parks[i + 1].id}.html" style="color: black;">
              <h2 class="display-5">${parks[i + 1].name}</h2>
            </a>
            <p class="lead">${parks[i + 1].location}.</p>
          </div>
          <div
            class="bg-body shadow-sm mx-auto overflow-hidden"
            style="width: 80%; height: 300px; border-radius: 21px 21px 0 0"
          ><img src="${parks[i + 1].images['Image 1'].url}"></div>
          </div>
        </div>
      </div>
  `;
  }
}

function loadFooter(data) {
  const about = data.about;
  footer.innerHTML = `
      <div class="row">
        <div class="col-12 text-center pt-3">
          <small class="d-block mb-2 text-body-secondary">
            &copy; ${about[0].Course}
          </small>
          <small class="d-block mb-2 text-body-secondary">
            ${about[0].students[0].email} | ${about[0].students[1].email}
          </small>
        </div>
      </div>
`;
}

const addNavBar = () => {
  navBar.innerHTML = `
        <div class="container">
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvas"
          aria-labelledby="offcanvasLabel"
        >
          <div class="offcanvas-body">
            <ul class="navbar-nav flex-grow-1 justify-content-between">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/arches.html">Arches</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/grandCanyon.html"
                  >Grand Canyon</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/redWood.html">Redwood</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/yellowStone.html"
                  >Yellowstone</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/yosemite.html">Yosemite</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/zion.html">Zion</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/about.html">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;
};

addNavBar();
