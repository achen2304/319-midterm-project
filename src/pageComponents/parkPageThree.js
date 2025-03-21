const parkId = window.location.pathname.split('/').pop();
const mainContainer = document.getElementById('main-container');

let parkData;
let parkName;

switch (parkId) {
  case 'grandCanyon.html':
    parkName = 'Grand Canyon National Park';
    break;
  case 'yosemite.html':
    parkName = 'Yosemite National Park';
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
  console.log(park.images);
  mainContainer.innerHTML += `
  <div class="container pt-5">
  <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <div class="col-lg-6 px-0 p-5">
      <h1 class="display-4 fst-italic">${park.name}</h1>
      <p class="lead my-3">${park.description}</p>
      <p class="lead mb-0"><a href="${park.link}" class="text-body-emphasis fw-bold">Click Here for More Information</a></p>
    </div>
  </div>
      <div class="album py-5 bg-body-tertiary">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
                <div class="col">
                    <div class="card shadow-sm">
                    <img src=${park.images['Image 1'].url}
                    class="card-img-top" alt="..."
                    >
                    <div class="card-body">
                      <h3 class="card-text">  ${park.images['Image 1'].caption} </h3>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm">
                    <img src=${park.images['Image 2'].url}
                    class="card-img-top" alt="..."
                    >
                    <div class="card-body">
                      <h3 class="card-text">  ${park.images['Image 2'].caption} </h3>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm">
                    <img src=${park.images['Image 3'].url}
                    class="card-img-top" alt="..."
                    >
                    <div class="card-body">
                      <h3 class="card-text">  ${park.images['Image 3'].caption} </h3>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm">
                    <img src=${park.images['Image 4'].url}
                    class="card-img-top" alt="..."
                    >
                    <div class="card-body">
                      <h3 class="card-text">  ${park.images['Image 4'].caption} </h3>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm">
                    <img src=${park.images['Image 5'].url}
                    class="card-img-top" alt="..."
                    >
                    <div class="card-body">
                      <h3 class="card-text">  ${park.images['Image 5'].caption} </h3>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm">
                    <img src=${park.images['Image 6'].url}
                    class="card-img-top" alt="..."
                    >
                    <div class="card-body">
                      <h3 class="card-text">  ${park.images['Image 6'].caption} </h3>
                    </div>
                </div>
            </div>

        </div>
      </div>

`;
};
