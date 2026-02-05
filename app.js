const getCards = async function (endpoint) {
  const response = await fetch(endpoint);
  return response.json();
};

// Render activities projects
const renderCardsActivitie = async function (parentEl, jsonFile) {
  const container = document.querySelector(`#${parentEl}`);

  const { cardsActivity } = await getCards(jsonFile);

  cardsActivity.forEach((card) => {
    console.log(card);
    const html = `
    <div class="project">
      <h3><a href="${card.gitHref}" target="_blank" rel="noopener noreferrer">${card.tittle}</a></h3>
      <p>${card.description}</p>

      <div class="logos">
        <div class="technologies">
          <img src="${card.technologie}" alt="" />
          ${card.technologie1 ? `<img src="${card.technologie1}" alt="" />` : ""}
          ${card.technologie2 ? `<img src="${card.technologie2}" alt="" />` : ""}
          ${card.technologie3 ? `<img src="${card.technologie3}" alt="" />` : ""}
        </div>
        <a href="${card.gitHref}" target="_blank" rel="noopener noreferrer">
          <img src="${card.gitLogo}" alt="" />
        </a>
      </div>
    </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
  });
};

// Render moodle

const renderCardsMoodle = async function (parentEl, jsonFile) {
  const container = document.querySelector(`#${parentEl}`);
  console.log(container, parentEl);

  const { cardsMoodle } = await getCards(jsonFile);

  cardsMoodle.forEach((card) => {
    const html = `
    <div class="project">
      <h3><a href="${card.gitHref}" target="_blank" rel="noopener noreferrer">${card.tittle}</a></h3>
      <div class="logos">
        <div class="technologies">
          <img src="${card.technologie}" alt="" />
          ${card.technologie1 ? `<img src="${card.technologie1}" alt="" />` : ""}
          ${card.technologie2 ? `<img src="${card.technologie2}" alt="" />` : ""}
          ${card.technologie3 ? `<img src="${card.technologie3}" alt="" />` : ""}
        </div>
        <a href="${card.gitHref}" target="_blank" rel="noopener noreferrer">
          <img src="${card.gitLogo}" alt="" />
        </a>
      </div>
    </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
  });
};

// Render test

const renderTest = async function (parentEl, jsonFile) {
  const container = document.querySelector(`#${parentEl}`);

  const { finalTests } = await getCards(jsonFile);

  finalTests.forEach((card) => {
    const html = `
        <h2>Test</h2>
      <div class="project">
    <h3>
      <a href="${card.gitHref}" target="_blank" rel="noopener noreferrer">${card.tittle}</a
      >
    </h3>
    <p>${card.description}</p>
    <div class="logos">
      <div class="technologies">
        <img src="${card.technologie}" alt="" />
        ${card.technologie1 ? `<img src="${card.technologie1}" alt="" />` : ""}
        ${card.technologie2 ? `<img src="${card.technologie2}" alt="" />` : ""}
        ${card.technologie3 ? `<img src="${card.technologie3}" alt="" />` : ""}
      </div>
      <a href="${card.gitHref}" target="_blank" rel="noopener noreferrer">
        <img src="assets/logos/github-logo.png" alt="" />
      </a>
    </div>
  </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
  });
};

const robinProjects = document.querySelector("#robinProjects");
const moodleProjects = document.querySelector("#moodleProjects");
const finalTests = document.querySelector("#finalTests");

const m1 = document.querySelector("#m1");
const m2 = document.querySelector("#m2");
const m3 = document.querySelector("#m3");

window.addEventListener("DOMContentLoaded", function () {
  renderCardsActivitie("robinProjects", "m3.json");
  renderCardsMoodle("moodleProjects", "m3.json");
  renderTest("finalTests", "m3.json");
});

m1.addEventListener("click", function () {
  robinProjects.innerHTML = "";
  moodleProjects.innerHTML = "";
  finalTests.innerHTML = "";

  renderCardsActivitie("robinProjects", "m1.json");
  renderCardsMoodle("moodleProjects", "m1.json");
  renderTest("finalTests", "m1.json");
});

m2.addEventListener("click", function () {
  robinProjects.innerHTML = "";
  moodleProjects.innerHTML = "";
  finalTests.innerHTML = "";
  renderCardsActivitie("robinProjects", "m2.json");
  renderCardsMoodle("moodleProjects", "m2.json");
  renderTest("finalTests", "m2.json");
});

m3.addEventListener("click", function () {
  robinProjects.innerHTML = "";
  moodleProjects.innerHTML = "";
  finalTests.innerHTML = "";
  renderCardsActivitie("robinProjects", "m3.json");
  renderCardsMoodle("moodleProjects", "m3.json");
  renderTest("finalTests", "m3.json");
});
