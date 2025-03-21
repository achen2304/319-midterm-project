const footer = document.getElementById('footer');
fetch('../data.json')
  .then((response) => response.json())
  .then((data) => loadFooter(data));

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
