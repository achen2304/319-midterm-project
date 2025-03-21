const mainContainer = document.getElementById('main-container');

fetch('../data.json')
  .then((response) => response.json())
  .then((data) => {
    renderAbout(data);
    console.log(data);
  });

const renderAbout = (data) => {
  mainContainer.innerHTML = `


  <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <div class="col-lg-6 px-0">

    <h1 class="display-4 fst-italic">${data.about[0].Course}</h1>
    <h2>${data.about[0].Date}</h2>

    <br>
    <h4>Created By:</h4>
      <p class="lead my-3"> ${data.about[0].students[0].name} | ${data.about[0].students[0].email}
      <br>
      ${data.about[0].students[1].name} | ${data.about[0].students[1].email}</p>

      </div>
  </div>



    
  `;
};
