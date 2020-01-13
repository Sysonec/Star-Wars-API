class UI {
  constructor() {
    this.searchContent = document.getElementById("search-content");
    this.quizContent = document.getElementById("quiz-content");
  }

  showCharacters(characters) {
    let output = "";

    characters.forEach(character => {
      output += `<div class="card card-body card-result mt-5">
      <h2>Name:<span class="ml-2">${character.name}</span></h2>
      <ul class="list-group list-group-horizontal mt-2 mx-auto list-group-custom">
        <li class="list-group-item">Height: ${character.height} cm</li>
        <li class="list-group-item">Mass: ${character.mass} kg</li>
        <li class="list-group-item">Hair Color: ${character.hair_color}</li>
        <li class="list-group-item">Skin Color: ${character.skin_color}</li>
      </ul>
      <ul class="list-group list-group-horizontal mt-3 mx-auto list-group-custom">
        <li class="list-group-item">Eye Color: ${character.eye_color}</li>
        <li class="list-group-item">Gender: ${character.gender}</li>
        <li class="list-group-item">Birth Year: ${character.birth_year}</li>
        </ul>
      </div>
    `;
    });

    document.getElementById("search-content").innerHTML = output;
  }

  showPlanets(planets) {
    let output = "";

    planets.forEach(planet => {
      output += `<div class="card card-body card-result mt-5">
      <h2>Name:<span class="ml-2">${planet.name}</span></h2>
      <ul class="list-group list-group-horizontal mt-2 mx-auto list-group-custom">
        <li class="list-group-item">Rotation Period: ${planet.rotation_period}</li>
        <li class="list-group-item">Orbital Period: ${planet.orbital_period}</li>
        <li class="list-group-item">Diameter: ${planet.diameter}</li>
        <li class="list-group-item">Climate: ${planet.climate}</li>
      </ul>
      <ul class="list-group list-group-horizontal mt-3 mx-auto list-group-custom">
        <li class="list-group-item">Gravity: ${planet.gravity}</li>
        <li class="list-group-item">Terrain: ${planet.terrain}</li>
        <li class="list-group-item">Surface Water: ${planet.surface_water}</li>
        <li class="list-group-item">Residents: ${planet.population}</li>
      </ul>
      </div>
    `;
    });

    document.getElementById("search-content").innerHTML = output;
  }

  showFilms(films) {
    let output = "";

    films.forEach(film => {
      output += `<div class="card card-body card-result mt-5">
      <h2>Title:<span class="ml-2">${film.title}</span></h2>
      <ul class="list-group list-group-horizontal mt-2 mx-auto list-group-custom">
        <li class="list-group-item">Episode: ${film.episode_id}</li>
        <li class="list-group-item">Director: ${film.director}</li>
      </ul>
      <ul class="list-group list-group-horizontal mt-3 mx-auto list-group-custom">
        <li class="list-group-item">Release Date: ${film.release_date}</li>
        <li class="list-group-item">Producer: ${film.producer}</li>
      </ul>
      </div>
    `;
    });

    document.getElementById("search-content").innerHTML = output;
  }

  showSpecies(species) {
    let output = "";

    species.forEach(species => {
      output += `<div class="card card-body card-result mt-5">
      <h2>Name:<span class="ml-2">${species.name}</span></h2>
      <ul class="list-group list-group-horizontal mt-2 mx-auto list-group-custom">
        <li class="list-group-item">Classification: ${species.classification}</li>
        <li class="list-group-item">Designation: ${species.designation}</li>
        <li class="list-group-item">Height: ${species.average_height}</li>
        <li class="list-group-item">Skin Colors: ${species.skin_colors}</li>
      </ul>
      <ul class="list-group list-group-horizontal mt-3 mx-auto list-group-custom">
        <li class="list-group-item">Hair Colors: ${species.hair_colors}</li>
        <li class="list-group-item">Eye Colors: ${species.eye_colors}</li>
        <li class="list-group-item">Lifespan: ${species.average_lifespan}</li>
        <li class="list-group-item">Language: ${species.language}</li>
      </ul>
      </div>
    `;
    });

    document.getElementById("search-content").innerHTML = output;
  }

  showStarships(starships) {
    let output = "";

    starships.forEach(starship => {
      output += `<div class="card card-body card-result mt-5">
      <h2>Name:<span class="ml-2">${starship.name}</span></h2>
      <ul class="list-group list-group-horizontal mt-2 mx-auto list-group-custom">
        <li class="list-group-item">Model: ${starship.model}</li>
        <li class="list-group-item">Manufacturer: ${starship.manufacturer}</li>
        <li class="list-group-item">Cost: ${starship.cost_in_credits} Credits</li>
        <li class="list-group-item">Length: ${starship.length}</li>
      </ul>
      <ul class="list-group list-group-horizontal mt-3 mx-auto list-group-custom">
        <li class="list-group-item">Max Speed: ${starship.max_atmosphering_speed}</li>
        <li class="list-group-item">Crew: ${starship.crew}</li>
        <li class="list-group-item">Passengers: ${starship.passengers}</li>
        <li class="list-group-item">Class: ${starship.starship_class}</li>
      </ul>
      </div>
    `;
    });

    document.getElementById("search-content").innerHTML = output;
  }

  playQuiz() {
    const quizQuestions = [
      {
        question: "What is the name of this character?",
        answers: {
          a: "Boba Fett",
          b: "Anakin Skywalker",
          c: "Kit Fisto"
        }
      },
      {
        question: "What is his/her weapon of choice",
        answers: {
          a: "Lightsaber",
          b: "Blaster",
          c: "Disruptor Rifle"
        }
      },
      {
        question: "Can he/she use the force?",
        answers: {
          a: "No",
          b: "Yes",
          c: "Partially"
        }
      }
    ];

    let output = "";

    output += `<div class="card card-body card-quiz mt-5">
    <h2 class="mb-4">Let's Test Your Knowledge</h2>
    <div class="quiz-questions">
    <img src="img/anakin.png" alt="character-img" class="img-fluid char-img mb-2">
      <div class="quiz-question text-center">
        <span class="question-content">${quizQuestions[0].question}</span>
        <div class="answers">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="char-name"
              value="question-check"
            />
            <label class="form-check-label" for="char-name">
            A: ${quizQuestions[0].answers.a}
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input
              correct-answer"
              type="radio"
              name="char-name"
              value="question-check"
            />
            <label class="form-check-label" for="char-name">
            B: ${quizQuestions[0].answers.b}
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="char-name"
              value="question-check"
            />
            <label class="form-check-label" for="char-name">
            C: ${quizQuestions[0].answers.c}
            </label>
          </div>
        </div>
      </div>
      <div class="quiz-question text-center mt-3">
        <span class="question-content">${quizQuestions[1].question}</span>
        <div class="answers">
          <div class="form-check">
            <input
              class="form-check-input correct-answer"
              type="radio"
              name="char-weapon"
              value="question-check"
            />
            <label class="form-check-label" for="char-weapon">
            ${quizQuestions[1].answers.a}
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="char-weapon"
              value="question-check"
            />
            <label class="form-check-label" for="char-weapon">
            ${quizQuestions[1].answers.b}
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="char-weapon"
              value="question-check"
            />
            <label class="form-check-label" for="char-weapon">
            ${quizQuestions[1].answers.c}
            </label>
          </div>
        </div>
      </div>
      <div class="quiz-question text-center mt-3">
        <span class="question-content">${quizQuestions[2].question}</span>
        <div class="answers">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="char-force"
              value="question-check"
            />
            <label class="form-check-label" for="char-force">
            ${quizQuestions[2].answers.a}
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input correct-answer"
              type="radio"
              name="char-force"
              value="question-check"
            />
            <label class="form-check-label" for="char-force">
            ${quizQuestions[2].answers.b}
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="char-force"
              value="question-check"
            />
            <label class="form-check-label" for="char-force">
            ${quizQuestions[2].answers.c}
            </label>
          </div>
        </div>
        </div>
        <div class="final-score">
        <span class="points-title">Points:</span>
        <span class="points ml-1">0</span>
      </div>
    </div>
  </div>`;

    document.getElementById("quiz-content").innerHTML = output;
  }

  displayAlert(msg, className) {
    // Create alert
    const divAlert = document.createElement("div");
    // Add a class
    divAlert.className = className;
    // Append message
    divAlert.appendChild(document.createTextNode(msg));
    // Get parent element
    const colQuiz = document.querySelector(".play-quiz");
    // Get button
    const btn = document.getElementById("play-quiz");
    // Insert before title
    colQuiz.insertBefore(divAlert, btn);
  }

  noResults() {
    this.searchContent.innerHTML = "";
  }

  closeQuiz() {
    this.quizContent.innerHTML = "";
  }
}
