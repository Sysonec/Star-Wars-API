// Init star wars
const starWars = new StarWars();

// Init UI
const ui = new UI();

// Get search input
const searchStuff = document.getElementById("searchStuff");

// Add event listener
searchStuff.addEventListener("keyup", e => {
  // Get typed text
  searchText = e.target.value;

  if (searchText !== "") {
    // Make http call
    starWars.searchStuff(searchText).then(data => {
      if (data.stuff.results !== null) {
        // Show results
        ui.showCharacters(data.stuff.results);
      }
    });
  } else {
    // Clear profile
    ui.noResults();
  }
});

// Show chosen category
document.querySelector(".quick-links").addEventListener("click", e => {
  linkVal = e.target.textContent.toLowerCase();
  if (linkVal === "people") {
    starWars.getStuff(linkVal).then(data => {
      ui.showCharacters(data);
    });
  }
  if (linkVal === "planets") {
    starWars.getStuff(linkVal).then(data => {
      ui.showPlanets(data);
    });
  }
  if (linkVal === "films") {
    starWars.getStuff(linkVal).then(data => {
      ui.showFilms(data);
    });
  }
  if (linkVal === "species") {
    starWars.getStuff(linkVal).then(data => {
      ui.showSpecies(data);
    });
  }
  if (linkVal === "starships") {
    starWars.getStuff(linkVal).then(data => {
      ui.showStarships(data);
    });
  }
});

// Clear search
const clearBtn = document.getElementById("clearStuff");
clearBtn.addEventListener("click", clearSearch);

function clearSearch() {
  ui.noResults();
}

// Change button state if the quiz is started or closed
document.getElementById("play-quiz").addEventListener("click", e => {
  if (e.target.value === "play-quiz") {
    ui.playQuiz();
    e.target.value = "close-quiz";
    e.target.innerHTML = "Close the quiz";
  } else if (e.target.value === "close-quiz") {
    ui.closeQuiz();
    e.target.value = "play-quiz";
    e.target.innerHTML = "Play the quiz";
  }
});

// Count points while playing the quiz
document.addEventListener("click", e => {
  const points = document.querySelectorAll(".points");

  if (e.target.classList.contains("correct-answer")) {
    e.target.disabled = true;
    for (i = 0; i < points.length; i++) {
      if (points.innerHTML !== "") {
        points[i].innerHTML++;
      }
    }
  }
});

// Change height to fit in the quiz card
document.addEventListener("click", e => {
  const mainContent = document.querySelector("#main-content");
  if (e.target.value === "close-quiz") {
    mainContent.style.height = "150vh";
  } else {
    mainContent.style.height = "100vh";
  }
});
