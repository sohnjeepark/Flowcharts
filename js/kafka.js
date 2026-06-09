const chartWrap = document.querySelector(".kafka-flowchart-wrap");
const chart = document.querySelector(".kafka-flowchart");

const chartWidth = 1180;
const chartHeight = 1400;

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
  metamorphosis: {
    title: "The Metamorphosis",
    image: "../images/kafka-the-metamorphosis.jpg",
    meta: {
      year: "1915",
      originalTitle: "Die Verwandlung",
      form: "Novella"
    },
    description:
      "The Metamorphosis follows Gregor Samsa, a traveling salesman who wakes one morning to find himself transformed into an insect-like creature. The story focuses less on the cause of the transformation than on Gregor’s isolation, his family’s changing attitude toward him, and the collapse of his ordinary human identity. It is one of Kafka’s most famous works and a central example of his themes of alienation, guilt, family pressure, and absurd existence."
  },

  trial: {
    title: "The Trial",
    image: "../images/kafka-the-trial.jpg",
    meta: {
      year: "1925",
      originalTitle: "Der Prozess",
      form: "Unfinished novel"
    },
    description:
      "The Trial follows Josef K., a bank officer who is arrested without being told the nature of his crime. As he tries to understand the invisible legal system surrounding him, he encounters offices, officials, procedures, and accusations that never become clear. Published after Kafka’s death, the novel is one of the strongest sources of the word ‘Kafkaesque,’ with its atmosphere of bureaucracy, guilt, anxiety, and unreachable authority."
  },

  amerika: {
    title: "Amerika",
    image: "../images/kafka-amerika.jpg",
    meta: {
      year: "1927",
      originalTitle: "Der Verschollene",
      form: "Unfinished novel"
    },
    description:
      "Amerika, also known by its original German title Der Verschollene, follows the young Karl Roßmann after he is sent to America by his family. Compared with The Trial and The Castle, it often feels more outwardly adventurous, but it still presents a world of unstable social roles, confusing institutions, dependence, humiliation, and displacement. It was published posthumously by Max Brod."
  },

  complete: {
    title: "The Complete Stories",
    image: "../images/kafka-the-complete-stories.jpg",
    meta: {
      year: "1904–1924",
      originalTitle: "Stories and fragments",
      form: "Short fiction collection"
    },
    description:
      "The Complete Stories gathers Kafka’s short fiction, including major pieces such as The Judgment, In the Penal Colony, A Country Doctor, A Hunger Artist, and many shorter fragments. These stories show Kafka’s range in compressed form: strange legal systems, bodily anxiety, punishment, failed communication, animal perspectives, spiritual uncertainty, and sudden shifts between ordinary detail and nightmare logic."
  },

  castle: {
    title: "The Castle",
    image: "../images/kafka-the-castle.jpg",
    meta: {
      year: "1926",
      originalTitle: "Das Schloss",
      form: "Unfinished novel"
    },
    description:
      "The Castle follows a land surveyor known as K., who arrives in a village and tries to gain access to the mysterious castle authorities who supposedly control his position. His efforts lead into endless misunderstandings, evasive officials, messengers, and social obstacles. Published after Kafka’s death, the novel presents one of Kafka’s clearest visions of distance from power, failed communication, and unreachable systems."
  },

  diaries: {
    title: "Diaries",
    image: "../images/kafka-diaries.jpg",
    meta: {
      year: "1909–1923",
      originalTitle: "Tagebücher",
      form: "Diaries"
    },
    description:
      "Kafka’s diaries contain observations, dreams, self-criticism, travel notes, drafts, literary fragments, and reflections on writing. They are not a conventional autobiography, but they reveal the working process behind his fiction and the emotional atmosphere from which many of his stories emerged. The diaries are especially valuable for understanding Kafka’s uncertainty, discipline, illness, social life, and intense relationship to writing."
  },

  letter: {
    title: "Letter to the Father",
    image: "../images/kafka-letter-to-the-father.jpg",
    meta: {
      year: "1919",
      originalTitle: "Brief an den Vater",
      form: "Letter"
    },
    description:
      "Letter to the Father is a long letter Kafka wrote to his father, Hermann Kafka, in 1919, though it was never delivered to him. In it, Kafka describes fear, guilt, emotional pressure, and the overwhelming authority he associated with his father. The text is essential for understanding Kafka’s family anxiety and the emotional background behind many of his fictional situations involving judgment, power, shame, and helplessness."
  },

  aphorisms: {
    title: "Aphorisms",
    image: "../images/kafka-aphorisms.jpg",
    meta: {
      year: "1917–1918",
      originalTitle: "Zürau Aphorisms",
      form: "Aphorisms"
    },
    description:
      "Kafka’s aphorisms, often associated with the Zürau period of 1917–1918, are short, compressed reflections on truth, error, evil, belief, exile, and spiritual struggle. They are much more abstract than his fiction, but they share the same sense of paradox and impossible clarity. They work well for readers who want Kafka’s thought in its most concentrated and philosophical form."
  },

  underground: {
    title: "The Diaries of Franz Kafka",
    image: "../images/kafka-the-diaries-of-franz-kafka.jpg",
    meta: {
      year: "1909–1923",
      originalTitle: "Tagebücher",
      form: "Diaries"
    },
    description:
      "The Diaries of Franz Kafka offers a fuller view of Kafka’s private notebooks, where literary drafts, daily observations, anxieties, dreams, and reflections on writing appear side by side. The notebooks show that Kafka’s fiction did not emerge from a simple, fixed system, but from fragments, revisions, interruptions, and constant self-questioning. They are especially useful after reading the major stories and novels."
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
