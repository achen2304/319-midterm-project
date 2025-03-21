//Script to generate the navbar consistently across each park page

const navbar = document.getElementById('navbar');

navbar.innerHTML = `
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
                <a class="nav-link" href="../index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="arches.html">Arches</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="grandCanyon.html">Grand Canyon</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="redWood.html">Redwood</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="yellowStone.html">Yellowstone</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="yosemite.html">Yosemite</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="zion.html">Zion</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
`;
