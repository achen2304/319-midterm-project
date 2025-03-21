const parkId = window.location.pathname.split('/').pop();
const mainContainer = document.getElementById('main-container');

let parkData;
let parkName;

console.log(parkId);
switch (parkId) {
  case 'redWood.html':
    parkName = 'Redwood National Parks';
    break;
  case 'zion.html':
    parkName = 'Zion National Park';
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
  console.log(park.location);
  console.log(park.description);
  console.log(park.link);
  let image1 = park.images['Image 1'];
  let image2 = park.images['Image 2'];
  let image3 = park.images['Image 3'];
  let image4 = park.images['Image 4'];
  let image5 = park.images['Image 5'];
  let image6 = park.images['Image 6'];
  console.log(image1);

  mainContainer.innerHTML = `
<main class="container">

  <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary mt-5">
    <div class="col-lg-6 px-0">
      <h1 class="display-4 fst-italic">${park.name}</h1>
      <p class="lead my-3">${park.location}</p>
      <p class="lead my-3">${park.description}</p>

      <p class="lead mb-0"><a href="${park.link}">${park.link}</a></p>
    </div>
  </div>
    
  <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src=${image1.url} class="bd-placeholder-img" width="100%" height="100%" >
        <div class="container">
          <div class="carousel-caption text-start pb-5">
            <h1>${image1.caption}</h1>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src=${image2.url} class="bd-placeholder-img" width="100%" height="100%" >        
        <div class="container">
          <div class="carousel-caption pb-5">
            <h1>${image2.caption}</h1>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src=${image3.url} class="bd-placeholder-img" width="100%" height="100%" >
        <div class="container">
          <div class="carousel-caption text-end pb-5">
            <h1>${image3.caption}</h1>
          </div>
        </div>
      </div>
            <div class="carousel-item">
        <img src=${image4.url} class="bd-placeholder-img" width="100%" height="100%" >
        <div class="container">
          <div class="carousel-caption text-end pb-5">
            <h1>${image4.caption}</h1>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src=${image5.url} class="bd-placeholder-img" width="100%" height="100%" >
        <div class="container">
          <div class="carousel-caption text-end pb-5">
            <h1>${image5.caption}</h1>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src=${image6.url} class="bd-placeholder-img" width="100%" height="100%" >
        <div class="container">
          <div class="carousel-caption text-end pb-5">
            <h1>${image6.caption}</h1>
          </div>
        </div>
      </div>

    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</main>

  `;
};
