// Customize everything for the date here. No backend, analytics, cookies, or APIs.
const CONFIG = {
  guestName: "Nazlıcan",
  date: "Çarşamba",
  time: "21:00",
  hostCountry: "Kosova",
  guestCountry: "Türkiye",
  hostFlag: "🇽🇰",
  guestFlag: "🇹🇷",
  whatsappNumber: "38344449108",
  bookingCode: "REMOTE-DATE-001",
  movies: [
    {
      title: "Coherence",
      poster: "assets/posters/coherence.jpg",
      year: "2013",
      label: "1. SEÇENEK",
      teaser: "Beyin yakan"
    },
    {
      title: "The Game",
      poster: "assets/posters/the-game.jpg",
      year: "1997",
      label: "2. SEÇENEK",
      teaser: "Oyun ama öyle böyle değil"
    },
    {
      title: "Arrival",
      poster: "assets/posters/arrival.jpg",
      year: "2016",
      label: "3. SEÇENEK",
      teaser: "Uzaylılar falan"
    },
    {
      title: "The Prestige",
      poster: "assets/posters/the-prestige.jpg",
      year: "2006",
      label: "4. SEÇENEK",
      teaser: "Büyücülük işleri"
    },
    {
      title: "Source Code",
      poster: "assets/posters/source-code.jpg",
      year: "2011",
      label: "ACİL DURUM 1",
      teaser: "Aynı sekiz dakika",
      emergency: true
    },
    {
      title: "Predestination",
      poster: "assets/posters/predestination.jpg",
      year: "2014",
      label: "ACİL DURUM 2",
      teaser: "Kim kimdi şimdi",
      emergency: true
    }
  ]
};

const STORAGE_KEY = "wednesdayCinemaTicketV2";
const SCORE_STORAGE_KEY = "wednesdayCinemaScoreV2";

const state = {
  revealed: new Set(),
  showEmergency: false
};

const elements = {
  entrance: document.querySelector("#entrance"),
  screenings: document.querySelector("#screenings"),
  ticketSection: document.querySelector("#ticket-section"),
  movieGrid: document.querySelector("#movie-grid"),
  ticketOutput: document.querySelector("#ticket-output"),
  toastRegion: document.querySelector(".toast-region")
};

function init() {
  hydrateConfigText();
  renderMovies();
  bindEvents();

  const savedIndex = getSavedTicketIndex();
  if (savedIndex !== null && CONFIG.movies[savedIndex]) {
    state.revealed.add(savedIndex);
    showScreen(elements.ticketSection);
    renderTicket(savedIndex, true);
  }
}

function hydrateConfigText() {
  document.querySelectorAll("[data-config]").forEach((node) => {
    const key = node.dataset.config;
    node.textContent = CONFIG[key] || "";
  });
}

function bindEvents() {
  document.querySelector("[data-enter-cinema]").addEventListener("click", () => {
    showScreen(elements.screenings);
  });

  document.querySelector("[data-reset-ticket]").addEventListener("click", resetTicket);
  document.querySelector("[data-show-emergency]").addEventListener("click", toggleEmergencyMovies);
  document.querySelector("[data-no-refunds]").addEventListener("click", () => {
    showToast("Bizde iade miade yok kusura bakma");
  });

  elements.movieGrid.addEventListener("click", (event) => {
    const revealButton = event.target.closest("[data-reveal-movie]");
    const chooseButton = event.target.closest("[data-choose-movie]");

    if (revealButton) {
      revealMovie(Number(revealButton.dataset.revealMovie));
    }

    if (chooseButton) {
      issueTicket(Number(chooseButton.dataset.chooseMovie));
    }
  });

  elements.ticketOutput.addEventListener("click", (event) => {
    const scoreButton = event.target.closest("[data-score]");
    if (scoreButton) saveScore(Number(scoreButton.dataset.score));
  });
}

function renderMovies() {
  const visibleMovies = CONFIG.movies
    .map((movie, index) => ({ movie, index }))
    .filter(({ movie }) => Boolean(movie.emergency) === state.showEmergency);

  elements.movieGrid.classList.toggle("emergency-open", state.showEmergency);
  elements.movieGrid.innerHTML = visibleMovies
    .map(({ movie, index }) => movieCardTemplate(movie, index))
    .join("");
}

function toggleEmergencyMovies() {
  state.showEmergency = !state.showEmergency;
  state.revealed.clear();
  renderMovies();
  const emergencyButton = document.querySelector("[data-show-emergency]");
  emergencyButton.textContent = state.showEmergency
    ? "Normal seçeneklere dön"
    : "Hiçbiri olmadıysa acil durum filmlerini çıkar";

  if (state.showEmergency) showToast("Hiçbiri olmadıysa diye...");
}

function movieCardTemplate(movie, index) {
  return `
    <article class="movie-card" data-movie-card="${index}">
      <div class="movie-label">${escapeHtml(movie.label)}</div>
      <div class="movie-content" data-movie-content="${index}">
        ${hiddenMovieTemplate(movie)}
      </div>
      <div class="movie-details">
        <h3>${escapeHtml(movie.teaser)}</h3>
        <p hidden></p>
        <div class="card-actions">
          <button class="secondary-action" type="button" data-reveal-movie="${index}">
            Filmi aç
          </button>
          <button class="ghost-action" type="button" data-choose-movie="${index}" disabled>
            Bunu seçiyorum
          </button>
        </div>
      </div>
    </article>
  `;
}

function hiddenMovieTemplate(movie) {
  return `
    <div class="hidden-movie">
      <strong>Sürpriz</strong>
    </div>
  `;
}

function revealedMovieTemplate(movie) {
  const posterMarkup = movie.poster
    ? `
      <img class="poster-backdrop" src="${escapeAttribute(movie.poster)}" alt="" aria-hidden="true">
      <img class="poster-art" src="${escapeAttribute(movie.poster)}" alt="${escapeAttribute(movie.title)} afişi">
    `
    : `<div class="poster-placeholder"><strong>${escapeHtml(getInitials(movie.title))}</strong><span>Afiş birazdan gelir</span></div>`;

  return `
    <div class="poster">${posterMarkup}</div>
  `;
}

function revealMovie(index) {
  const movie = CONFIG.movies[index];
  const card = elements.movieGrid.querySelector(`[data-movie-card="${index}"]`);
  const content = card.querySelector(`[data-movie-content="${index}"]`);
  const title = card.querySelector("h3");
  const teaser = card.querySelector(".movie-details p");
  const chooseButton = card.querySelector("[data-choose-movie]");
  const revealButton = card.querySelector("[data-reveal-movie]");

  state.revealed.add(index);
  card.classList.add("is-revealed");
  content.innerHTML = revealedMovieTemplate(movie);
  title.textContent = movie.title;
  teaser.hidden = false;
  teaser.innerHTML = `
    <span class="movie-meta">${escapeHtml(movie.year)}</span><br>
    ${escapeHtml(movie.teaser)}
  `;
  chooseButton.disabled = false;
  chooseButton.textContent = "Bunu seçiyorum";
  revealButton.hidden = true;
}

function issueTicket(index) {
  saveTicketIndex(index);
  renderTicket(index);
  showScreen(elements.ticketSection);
}

function renderTicket(index, isReturnVisit = false) {
  const movie = CONFIG.movies[index];
  elements.ticketOutput.innerHTML = `
    <article class="ticket" aria-label="Dijital sinema bileti">
      <div class="ticket-top">
        <div class="ticket-brand">
          <strong>Çarşamba Sineması</strong>
          <span>İki kişilik<br>minik seans</span>
        </div>
        <p class="ticket-kicker">Seçilen film</p>
        <h3 class="ticket-movie">${escapeHtml(movie.title)}</h3>
      </div>

      <div class="ticket-bottom">
        <div class="ticket-meta">
          ${ticketItem("Ne zaman?", CONFIG.time ? `${CONFIG.date} · ${CONFIG.time}` : CONFIG.date)}
          ${ticketItem("Başrol", CONFIG.guestName)}
          ${ticketItem("Koltuk A", `${CONFIG.hostFlag} ${CONFIG.hostCountry}`)}
          ${ticketItem("Koltuk B", `${CONFIG.guestFlag} ${CONFIG.guestCountry}`)}
          ${ticketItem("Salon", "Salon 01")}
          ${ticketItem("Bilet tipi", "Uzaktan")}
          ${ticketItem("İade", "Yok öyle bir şey")}
          ${ticketItem("Atıştırmalık", "Mecburi")}
          ${ticketItem("Kıyafet", "Neyle rahatsan takıl kafana göre")}
        </div>
        <div class="barcode" aria-hidden="true"></div>
      </div>
    </article>
    ${isReturnVisit ? ratingTemplate(movie) : `
      <div class="return-note">
        <strong>Film bitince burayı unutma 👀</strong>
        <span>Aynı linki tekrar aç, puanlama bekliyorumm</span>
      </div>
    `}
  `;
}

function ratingTemplate(movie) {
  const savedScore = getSavedScore();
  return `
    <section class="rating-panel" aria-labelledby="rating-title">
      <p class="eyebrow">Film sonrası puan</p>
      <p>${savedScore ? `Kararın: ${savedScore}/10` : "Dürüst ol"}</p>
      <div class="score-buttons" aria-label="Filme 10 üzerinden puan ver">
        ${Array.from({ length: 10 }, (_, index) => {
          const score = index + 1;
          return `<button type="button" data-score="${score}" aria-label="10 üzerinden ${score} puan" ${savedScore === score ? 'aria-pressed="true"' : 'aria-pressed="false"'}>${score}</button>`;
        }).join("")}
      </div>
      ${savedScore ? `
        <a class="whatsapp-action" href="${whatsappLink(`${movie.title}: ${savedScore}/10`)}" target="_blank" rel="noopener noreferrer">
          Puanı WhatsApp'tan gönder
        </a>
      ` : ""}
    </section>
  `;
}

function whatsappLink(message) {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function saveScore(score) {
  if (!Number.isInteger(score) || score < 1 || score > 10) return;
  localStorage.setItem(SCORE_STORAGE_KEY, String(score));
  const savedIndex = getSavedTicketIndex();
  if (savedIndex !== null && CONFIG.movies[savedIndex]) renderTicket(savedIndex, true);
  showToast(`${score}/10 kaydedildi`);
}

function getSavedScore() {
  const score = Number(localStorage.getItem(SCORE_STORAGE_KEY));
  return Number.isInteger(score) && score >= 1 && score <= 10 ? score : null;
}

function ticketItem(label, value) {
  return `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
}

function showScreen(screen) {
  [elements.entrance, elements.screenings, elements.ticketSection].forEach((section) => {
    section.classList.remove("active");
    section.hidden = true;
  });

  screen.hidden = false;
  requestAnimationFrame(() => {
    screen.classList.add("active");
    screen.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  elements.toastRegion.append(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 3600);
}

function saveTicketIndex(index) {
  localStorage.setItem(STORAGE_KEY, String(index));
}

function getSavedTicketIndex() {
  const rawValue = localStorage.getItem(STORAGE_KEY);
  if (rawValue === null) return null;

  const index = Number(rawValue);
  return Number.isInteger(index) ? index : null;
}

function resetTicket() {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(SCORE_STORAGE_KEY);
  state.revealed.clear();
  state.showEmergency = false;
  elements.ticketOutput.innerHTML = "";
  renderMovies();
  document.querySelector("[data-show-emergency]").textContent = "Hiçbiri olmadıysa acil durum filmlerini çıkar";
  showScreen(elements.entrance);
  showToast("Hiçbir şey olmamış gibi devammm");
}

function getInitials(title) {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0])
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

init();
