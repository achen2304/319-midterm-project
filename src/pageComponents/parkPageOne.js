const parkId = window.location.pathname.split('/').pop();
const mainContainer = document.getElementById('main-container');

let parkData;
let parkName;

switch (parkId) {
  case 'arches.html':
    parkName = 'Arches National Park';
    break;
  case 'yellowStone.html':
    parkName = 'Yellowstone National Park';
    break;
}

fetch('../data.json')
  .then((response) => response.json())
  .then((data) => {
    parkData = data;
    let park = parkData.parks.find((park) => park.name === parkName);
    console.log(park);
    renderPark(park);
  });

const renderPark = (park) => {
  mainContainer.innerHTML = `
<div class="container pt-5">
  <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <div class="col-lg-6 px-0 p-5">
      <h1 class="display-4 fst-italic">${park.name}</h1>
      <p class="lead my-3">${park.description}</p>
      <p class="lead mb-0"><a href="${park.link}" class="text-body-emphasis fw-bold">Click Here for More Information</a></p>
    </div>
  </div>
  </div>
  <div class="container">
      <div id="imageSlider" class="carousel slide" data-bs-ride="carousel">
          <!-- Indicators -->
          <div class="carousel-indicators">
              <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="0" class="active"></button>
              <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="2"></button>
              <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="3"></button>
              <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="4"></button>
              <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="5"></button>
          </div>

          <!-- Slides -->
          <div class="carousel-inner rounded">
              <div class="carousel-item active">
                  <img src="${park.images['Image 1'].url}" class="d-block w-100" alt="Beautiful Mountain">
                  <div class="carousel-caption d-none d-md-block">
                      <h2 class="p-3">${park.images['Image 1'].caption}</h2>
                  </div>
              </div>
              <div class="carousel-item">
                  <img src="${park.images['Image 2'].url}" class="d-block w-100" alt="Serene Beach">
                  <div class="carousel-caption d-none d-md-block">
                      <h2 class="p-3">${park.images['Image 2'].caption}</h2>
                  </div>
              </div>
              <div class="carousel-item">
                  <img src="${park.images['Image 3'].url}" class="d-block w-100" alt="Lush Forest">
                  <div class="carousel-caption d-none d-md-block">
                      <h2 class="p-3">${park.images['Image 3'].caption}</h2>
                  </div>
              </div>
              <div class="carousel-item">
                  <img src="${park.images['Image 4'].url}" class="d-block w-100" alt="Lush Forest">
                  <div class="carousel-caption d-none d-md-block">
                      <h2 class="p-3">${park.images['Image 4'].caption}</h2>
                  </div>
              </div>
              <div class="carousel-item">
                  <img src="${park.images['Image 5'].url}" class="d-block w-100" alt="Lush Forest">
                  <div class="carousel-caption d-none d-md-block">
                      <h2 class="p-3">${park.images['Image 5'].caption}</h2>
                  </div>
              </div>
              <div class="carousel-item">
                  <img src="${park.images['Image 6'].url}" class="d-block w-100" alt="Lush Forest">
                  <div class="carousel-caption d-none d-md-block">
                      <h2 class="p-3">${park.images['Image 6'].caption}</h2>
                  </div>
              </div>
          </div>

          <!-- Controls -->
          <button class="carousel-control-prev" type="button" data-bs-target="#imageSlider" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#imageSlider" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
          </button>
      </div>
  </div>
`;
  const panels = document.querySelectorAll('.panel');

  panels.forEach((panel) => {
    panel.addEventListener('click', () => {
      console.log('clicked');
      removeActiveClasses();
      panel.classList.add('active');
    });
  });

  function removeActiveClasses() {
    panels.forEach((panel) => {
      panel.classList.remove('active');
    });
  }
};
