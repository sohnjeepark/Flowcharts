const chartWrap = document.querySelector(".kundera-flowchart-wrap");
const chart = document.querySelector(".kundera-flowchart");

const chartWidth = 1180;
const chartHeight = 1580;

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
  laughable: {
    title: "Laughable Loves",
    image: "../images/kundera-laughable-loves.jpg",
    meta: {
      year: "1969",
      originalTitle: "Směšné lásky",
      form: "Short story collection"
    },
    description:
      "Laughable Loves is a collection of stories about erotic games, failed seductions, vanity, role-playing, and the comic cruelty of desire. Many of Kundera’s later themes already appear here: identity as performance, love as misunderstanding, and humor as a way of exposing human self-deception. It is one of the most approachable entry points into his fictional world."
  },

  joke: {
    title: "The Joke",
    image: "../images/kundera-the-joke.jpg",
    meta: {
      year: "1967",
      originalTitle: "Žert",
      form: "Novel"
    },
    description:
      "The Joke follows Ludvik Jahn, whose life is damaged after a careless political joke is treated as a serious ideological offense in communist Czechoslovakia. The novel moves between revenge, memory, love, folklore, and political absurdity. It is Kundera’s first novel and one of his most direct explorations of how private life can be distorted by political power."
  },

  life: {
    title: "Life Is Elsewhere",
    image: "../images/kundera-life-is-elsewhere.jpg",
    meta: {
      year: "1973",
      originalTitle: "Život je jinde",
      form: "Novel"
    },
    description:
      "Life Is Elsewhere follows Jaromil, a young poet whose artistic ambition, immaturity, and need for recognition unfold against the background of ideological enthusiasm. Kundera treats lyric poetry, youth, revolutionary fantasy, and narcissism with sharp irony. The novel is especially important for understanding his suspicion of grand gestures and poetic self-mythology."
  },

  farewell: {
    title: "Farewell Waltz",
    image: "../images/kundera-farewell-waltz.jpg",
    meta: {
      year: "1972",
      originalTitle: "Valčík na rozloučenou",
      form: "Novel"
    },
    description:
      "Farewell Waltz takes place around a spa town and follows a network of characters caught in erotic confusion, pregnancy, jealousy, and moral evasion. Compared with Kundera’s larger philosophical novels, it has a lighter, almost farcical structure, but it still examines chance, desire, and the comic instability of human choices."
  },

  unbearable: {
    title: "The Unbearable Lightness of Being",
    image: "../images/kundera-the-unbearable-lightness-of-being.jpg",
    meta: {
      year: "1984",
      originalTitle: "Nesnesitelná lehkost bytí",
      form: "Philosophical novel"
    },
    description:
      "The Unbearable Lightness of Being follows Tomas, Tereza, Sabina, and Franz during and after the Prague Spring of 1968. Through love, betrayal, exile, political pressure, and the contrast between lightness and weight, Kundera turns a private story into a philosophical meditation on freedom, history, and the impossibility of living life twice."
  },

  immortality: {
    title: "Immortality",
    image: "../images/kundera-immortality.jpg",
    meta: {
      year: "1990",
      originalTitle: "Nesmrtelnost",
      form: "Novel"
    },
    description:
      "Immortality is one of Kundera’s most self-reflexive novels, moving between fictional characters, authorial commentary, Goethe, Hemingway, image, gesture, and the desire to survive through memory. Rather than following a single conventional plot, the novel examines how people construct identities and how public images can outlive actual lives."
  },

  laughter: {
    title: "The Book of Laughter and Forgetting",
    image: "../images/kundera-the-book-of-laughter-and-forgetting.jpg",
    meta: {
      year: "1979",
      originalTitle: "Kniha smíchu a zapomnění",
      form: "Novel in seven parts"
    },
    description:
      "The Book of Laughter and Forgetting is composed of linked sections that move through memory, exile, erotic life, political erasure, and personal loss. Kundera connects private forgetting with historical forgetting, especially in the context of Czechoslovakia after the Soviet invasion. It is one of his most important works on memory, politics, and fragmentation."
  },

  testaments: {
    title: "Testaments Betrayed",
    image: "../images/kundera-testaments-betrayed.jpg",
    meta: {
      year: "1993",
      originalTitle: "Les Testaments trahis",
      form: "Essay collection"
    },
    description:
      "Testaments Betrayed is an essay collection about the novel, modern art, translation, interpretation, and the ways artists can be misunderstood or betrayed after death. Kundera discusses writers and composers while defending the autonomy of the artwork. It is useful for understanding his ideas about form, authorship, and the history of the European novel."
  },

  art: {
    title: "The Art of the Novel",
    image: "../images/kundera-the-art-of-the-novel.jpg",
    meta: {
      year: "1986",
      originalTitle: "L’Art du roman",
      form: "Essay collection"
    },
    description:
      "The Art of the Novel gathers Kundera’s reflections on the European novel, including Cervantes, Kafka, Broch, Musil, and his own fiction. Rather than offering academic theory, it explains how Kundera understands the novel as a form of inquiry into existence. It is one of the best companion texts for reading his fiction."
  },

  encounter: {
    title: "Encounter : Essays",
    image: "../images/kundera-encounter-essays.jpg",
    meta: {
      year: "2009",
      originalTitle: "Une rencontre",
      form: "Essay collection"
    },
    description:
      "Encounter is a later collection of essays on literature, music, painting, exile, and artistic memory. Kundera writes about writers and artists who shaped his imagination, while returning to his long-standing concerns with modernity, form, irony, and the fragile survival of art. It is best read after becoming familiar with his major novels and essays."
  },

  jacques: {
    title: "Jacques and His Master",
    image: "../images/kundera-jacques-and-his-master.jpg",
    meta: {
      year: "1981",
      originalTitle: "Jacques et son maître",
      form: "Play"
    },
    description:
      "Jacques and His Master is Kundera’s theatrical variation on Denis Diderot’s Jacques the Fatalist. The play is not simply an adaptation, but a playful homage that reflects Kundera’s interest in freedom, chance, storytelling, and the European comic tradition. It connects strongly with his broader ideas about the novel as a space of variation and play."
  },

  curtain: {
    title: "The Curtain",
    image: "../images/kundera-the-curtain.jpg",
    meta: {
      year: "2005",
      originalTitle: "Le Rideau",
      form: "Essay collection"
    },
    description:
      "The Curtain is a later essay collection about the history and art of the novel. Kundera discusses how novels reveal aspects of existence that ordinary perception often hides, and he returns to writers such as Cervantes, Kafka, Flaubert, and others. It works well as a compact statement of his mature literary aesthetics."
  },

  slowness: {
    title: "Slowness",
    image: "../images/kundera-slowness.jpg",
    meta: {
      year: "1995",
      originalTitle: "La Lenteur",
      form: "Novel"
    },
    description:
      "Slowness is Kundera’s first novel written originally in French. It contrasts eighteenth-century libertine elegance with modern speed, publicity, performance, and forgetfulness. Short and playful, the novel uses parallel stories to think about memory, pleasure, slowness, and the absurdity of contemporary self-display."
  },

  identity: {
    title: "Identity",
    image: "../images/kundera-identity.jpg",
    meta: {
      year: "1998",
      originalTitle: "L’Identité",
      form: "Novel"
    },
    description:
      "Identity follows Chantal and Jean-Marc, a couple whose relationship begins to unravel through misrecognition, insecurity, and anonymous letters. The novel is short, strange, and psychologically unstable, exploring love, perception, aging, desire, and the fear that one’s identity depends on being seen by another person."
  },

  ignorance: {
    title: "Ignorance",
    image: "../images/kundera-ignorance.jpg",
    meta: {
      year: "2000",
      originalTitle: "L’Ignorance",
      form: "Novel"
    },
    description:
      "Ignorance follows émigré characters returning to the Czech lands after years abroad. Kundera examines exile, nostalgia, memory, return, and the painful gap between the homeland imagined in absence and the place that actually exists. It is one of his clearest later novels about displacement and the impossibility of fully going home."
  },

  festival: {
    title: "The Festival of Insignificance",
    image: "../images/kundera-the-festival-of-insignificance.jpg",
    meta: {
      year: "2014",
      originalTitle: "La fête de l’insignifiance",
      form: "Novel"
    },
    description:
      "The Festival of Insignificance is Kundera’s final novel, a short and light-toned work built around conversations, anecdotes, jokes, Stalin, friendship, and the idea of insignificance. Rather than aiming for dramatic plot, it reflects on triviality, comedy, aging, and the strange freedom that may come from taking human seriousness less seriously."
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
