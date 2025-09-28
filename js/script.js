// Cambia tema (chiaro/scuro)
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Animazione fade-in al caricamento
function startFadeIn() {
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.style.animationDelay = `${i * 0.3}s`;
  });
}

// Progetti per il modale
const projects = {
  1: {
    title: "Progetto 1",
    description: "Progetto.",
    image: "img/Sin título-1_Mesa de trabajo 1 copia.jpg"
  },
  2: {
    title: "Progetto 2",
    description: "Progetto.",
    image: "img/1_Mesa de trabajo 1.jpg"
  },
  3: {
    title: "Progetto 3",
    description: "Progetto.",
    image: "img/Sin título3.jpg"
  }
 
};

// Apri modale con contenuto del progetto
function openModal(id) {
  const project = projects[id];
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
    <h2>${project.title}</h2>
    <img src="${project.image}" alt="${project.title}" style="width:100%; border-radius:5px; margin-bottom:15px;" />
    <p>${project.description}</p>
  `;
  document.getElementById("modal").style.display = "block";
}

// Chiudi modale
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Chiudi modale cliccando fuori
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Aggiungi evento click alle card
document.querySelectorAll('.card[data-id]').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-id');
    openModal(id);
  });
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");

  if (!name || !email || !message) {
    status.textContent = "Compila tutti i campi.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Messaggio inviato con successo!";
  status.style.color = "green";
  this.reset();
});
const phrases = [
  "Portfolio multidisciplinare",
  "Design & sviluppo",
  "Creatività con artigli"
];

let i = 0, j = 0;
let currentPhrase = [];
let isDeleting = false;
let typewriter = document.getElementById("typewriter");

function loop() {
  typewriter.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j >= 0) {
      currentPhrase.pop();
      j--;
    }

    if (j === phrases[i].length) {
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
  }

  setTimeout(loop, isDeleting ? 50 : 100);
}

loop();


