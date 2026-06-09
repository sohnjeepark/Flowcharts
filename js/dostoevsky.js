const chartWrap = document.querySelector(".dostoevsky-flowchart-wrap");
const chart = document.querySelector(".dostoevsky-flowchart");

const chartWidth = 1180;
const chartHeight = 1630;

function resizeChart() {
  const availableWidth = window.innerWidth - 120;

  let scale = availableWidth / chartWidth;

  if (scale > 0.92) scale = 0.92;
  if (scale < 0.35) scale = 0.35;

  chart.style.transform = `scale(${scale})`;
  chart.style.transformOrigin = "top left";

  chartWrap.style.width = `${chartWidth * scale}px`;
  chartWrap.style.height = `${chartHeight * scale}px`;
}

window.addEventListener("resize", resizeChart);
window.addEventListener("load", resizeChart);
resizeChart();

const bookDetails = {
  brothers: {
    title: "The Brothers Karamazov",
    image: "../images/dostoevsky-the-brothers-karamazov.jpg",
    meta: {
      year: "1880",
      originalTitle: "Братья Карамазовы",
      form: "Philosophical novel"
    },
    description:
      "Dostoevsky’s final novel centers on the Karamazov family: the sensual and irresponsible father Fyodor Pavlovich and his sons Dmitri, Ivan, Alyosha, and the servant Smerdyakov. Through a murder case, family conflict, religious doubt, and moral argument, the novel explores faith, guilt, freedom, patricide, and responsibility. It is one of Dostoevsky’s major late works and often read as the culmination of his religious and psychological concerns."
  },

  underground: {
    title: "Notes from Underground",
    image: "../images/dostoevsky-notes-from-underground.jpg",
    meta: {
      year: "1864",
      originalTitle: "Записки из подполья",
      form: "Novella"
    },
    description:
      "Notes from Underground is narrated by an isolated, bitter, self-contradictory man who attacks rational egoism and exposes his own humiliation, resentment, and paralysis. The first part is a philosophical monologue, while the second part recalls painful episodes from his social life. It is one of Dostoevsky’s most important shorter works and a key text for understanding his treatment of freedom, spite, self-consciousness, and modern alienation."
  },

  crime: {
    title: "Crime and Punishment",
    image: "../images/dostoevsky-crime-and-punishment.jpg",
    meta: {
      year: "1866",
      originalTitle: "Преступление и наказание",
      form: "Psychological novel"
    },
    description:
      "Crime and Punishment follows Rodion Raskolnikov, an impoverished former student in Saint Petersburg who murders an old pawnbroker and is then consumed by fear, pride, guilt, and spiritual crisis. The novel combines crime plot, psychological analysis, social observation, and moral questioning. It is one of Dostoevsky’s best-known works and a strong entry point into his exploration of conscience, suffering, and redemption."
  },

  idiot: {
    title: "The Idiot",
    image: "../images/dostoevsky-the-idiot.jpg",
    meta: {
      year: "1869",
      originalTitle: "Идиот",
      form: "Novel"
    },
    description:
      "The Idiot follows Prince Myshkin, a compassionate and unusually open-hearted man who returns to Russian society after treatment abroad. His innocence and moral sensitivity collide with vanity, desire, money, jealousy, and social performance, especially through his relationships with Nastasya Filippovna and Aglaya. Dostoevsky uses Myshkin to test whether a truly good person can survive in a corrupt and psychologically unstable world."
  },

  demons: {
    title: "Demons",
    image: "../images/dostoevsky-demons.jpg",
    meta: {
      year: "1872",
      originalTitle: "Бесы",
      form: "Political novel"
    },
    description:
      "Demons, also translated as The Devils or The Possessed, portrays a provincial town disrupted by radical politics, conspiracy, spiritual emptiness, and personal manipulation. Centered around figures such as Stavrogin, Verkhovensky, and Shatov, the novel examines ideological extremism, nihilism, moral corruption, and the destructive force of ideas detached from responsibility. It is Dostoevsky’s most explicitly political major novel."
  },

  adolescent: {
    title: "The Adolescent",
    image: "../images/dostoevsky-the-adolescent.jpg",
    meta: {
      year: "1875",
      originalTitle: "Подросток",
      form: "Novel"
    },
    description:
      "The Adolescent, also known as A Raw Youth, is narrated by Arkady Dolgoruky, a young man struggling with illegitimacy, ambition, pride, and his complicated relationship with his father, Versilov. The novel explores youth, money, family instability, social status, and the desire to form an independent identity. It is less commonly read than Dostoevsky’s most famous novels, but it belongs to his major late period."
  },

  "dead-house": {
    title: "Notes from a Dead House",
    image: "../images/dostoevsky-notes-from-a-dead-house.jpg",
    meta: {
      year: "1862",
      originalTitle: "Записки из Мёртвого дома",
      form: "Semi-autobiographical novel"
    },
    description:
      "Notes from a Dead House is based on Dostoevsky’s own years in a Siberian prison camp. Presented through the observations of a fictional narrator, the book describes convict life, punishment, violence, endurance, and moments of unexpected humanity. It is one of the first major literary works to examine Russian prison life from within and is essential for understanding how Dostoevsky’s later ideas about suffering and human dignity developed."
  },

  "poor-folk": {
    title: "Poor Folk",
    image: "../images/dostoevsky-poor-folk.jpg",
    meta: {
      year: "1846",
      originalTitle: "Бедные люди",
      form: "Epistolary novel"
    },
    description:
      "Poor Folk, Dostoevsky’s first novel, is written through letters between the poor clerk Makar Devushkin and the young woman Varvara Dobroselova. Through their correspondence, the novel portrays poverty, shame, tenderness, social vulnerability, and the struggle to preserve dignity under economic pressure. It established Dostoevsky’s reputation and already shows his interest in marginal lives and psychological suffering."
  },

  netochka: {
    title: "Netochka Nezvanova",
    image: "../images/dostoevsky-netochka-nezvanova.jpg",
    meta: {
      year: "1849",
      originalTitle: "Неточка Незванова",
      form: "Unfinished novel"
    },
    description:
      "Netochka Nezvanova is an unfinished early novel that begins with the childhood of Netochka and her relationship to her stepfather, a failed and obsessive musician. The narrative moves through dependency, fantasy, artistic ambition, family instability, and psychological vulnerability. Dostoevsky’s arrest in 1849 interrupted the work, leaving it unfinished, but it remains important for seeing his early interest in wounded consciousness and artistic obsession."
  },

  "double": {
    title: "The Double and The Gambler",
    image: "../images/dostoevsky-the-double-and-the-gambler.jpg",
    meta: {
      year: "1846 / 1866",
      originalTitle: "Двойник / Игрок",
      form: "Novella and short novel"
    },
    description:
      "The Double follows the clerk Golyadkin, whose life collapses after the appearance of a more confident double who seems to replace him socially and psychologically. The Gambler, written two decades later, is set around roulette, debt, desire, and emotional compulsion in a European resort town. This combined edition brings together two shorter works that show Dostoevsky’s interest in fractured identity, humiliation, obsession, and self-destruction."
  },

  humiliated: {
    title: "Humiliated and Insulted",
    image: "../images/dostoevsky-humiliated-and-insulted.jpg",
    meta: {
      year: "1861",
      originalTitle: "Униженные и оскорблённые",
      form: "Novel"
    },
    description:
      "Humiliated and Insulted follows a young writer, Ivan Petrovich, and a network of damaged relationships involving love, betrayal, family conflict, and social cruelty. The novel was written after Dostoevsky’s return from Siberian exile and combines melodrama with themes of suffering, moral injury, compassion, and the vulnerability of the powerless. It bridges his early social fiction and the larger psychological novels that followed."
  }
};

const detailOverlay = document.getElementById("bookDetailOverlay");
const detailPanel = document.getElementById("bookDetailPanel");
const detailBookImage = document.getElementById("detailBookImage");
const detailBookTitle = document.getElementById("detailBookTitle");
const detailBookMeta = document.getElementById("detailBookMeta");
const detailBookDescription = document.getElementById("detailBookDescription");

const bookTriggers = document.querySelectorAll(".book-detail-trigger");

bookTriggers.forEach((book) => {
  book.addEventListener("click", () => {
    const bookKey = book.dataset.book;
    const detail = bookDetails[bookKey];

    if (!detail) return;

    detailBookImage.src = detail.image;
    detailBookTitle.textContent = detail.title;
    detailBookDescription.textContent = detail.description;

    if (detail.meta) {
      detailBookMeta.innerHTML = `
        <span>${detail.meta.year}</span>
        <span>${detail.meta.originalTitle}</span>
        <span>${detail.meta.form}</span>
      `;
    } else {
      detailBookMeta.innerHTML = "";
    }

    detailOverlay.classList.add("active");
  });
});

detailOverlay.addEventListener("click", () => {
  detailOverlay.classList.remove("active");
});

detailPanel.addEventListener("click", (event) => {
  event.stopPropagation();
});
