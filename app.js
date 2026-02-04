const getCards = async function () {
  const response = await fetch("data.json");
  return response.json();
};

// Render activities projects
const renderCardsActivitie = async function (parentEl) {
  const container = document.querySelector(`#${parentEl}`);

  const { cardsActivity } = await getCards();

  cardsActivity.forEach((card) => {
    console.log(card);
    const html = `
    <div class="project">
      <h3><a href="${card.tittleGitHref}" target="_blank" rel="noopener noreferrer">${card.tittle}</a></h3>
      <p>${card.description}</p>

      <div class="logos">
        <div class="technologies">
          <img src="${card.technologie}" alt="" />
          ${card.technologie1 ? `<img src="${card.technologie1}" alt="" />` : ""}
        </div>
        <a href="${card.logoGitHref}" target="_blank" rel="noopener noreferrer">
          <img src="${card.gitLogo}" alt="" />
        </a>
      </div>
    </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
  });
};

renderCardsActivitie("robinProjects");

// Render moodle

const renderCardsMoodle = async function (parentEl) {
  const container = document.querySelector(`#${parentEl}`);
  console.log(container, parentEl);

  const { cardsMoodle } = await getCards();

  cardsMoodle.forEach((card) => {
    const html = `
    <div class="project">
      <h3><a href="${card.tittleGitHref}">${card.tittle}</a></h3>
      <div class="logos">
        <div class="technologies">
          <img src="${card.technologie}" alt="" />
          ${card.technologie1 ? `<img src="${card.technologie1}" alt="" />` : ""}
          ${card.technologie2 ? `<img src="${card.technologie2}" alt="" />` : ""}
        </div>
        <a href="${card.logoGitHref}">
          <img src="${card.gitLogo}" alt="" />
        </a>
      </div>
    </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
  });
};

renderCardsMoodle("moodleProjects");
