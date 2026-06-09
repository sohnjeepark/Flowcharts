const chartWrap = document.querySelector(".joyce-flowchart-wrap");
const chart = document.querySelector(".joyce-flowchart");

const chartWidth = 1180;
const chartHeight = 1680;

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
  dubliners: {
    title: "Dubliners",
    image: "../images/joyce-dubliners.jpg",
    meta: {
      year: "1914",
      originalTitle: "Dubliners",
      form: "Short story collection"
    },
    description:
      "Dubliners is a collection of fifteen short stories set in and around Dublin. The stories move from childhood to public life, ending with the famous final story, The Dead. Joyce uses ordinary moments, social paralysis, memory, religion, class, and missed possibilities to create a precise portrait of early twentieth-century Dublin. It is often the most accessible starting point for reading Joyce."
  },

  portrait: {
    title: "A Portrait of the Artist as a Young Man",
    image: "../images/joyce-a-portrait-of-the-artist-as-a-young-man.jpg",
    meta: {
      year: "1916",
      originalTitle: "A Portrait of the Artist as a Young Man",
      form: "Künstlerroman"
    },
    description:
      "A Portrait of the Artist as a Young Man follows Stephen Dedalus from childhood through adolescence and into his decision to pursue life as an artist. The novel traces family pressure, Catholic education, guilt, sexuality, language, nationalism, and artistic awakening. Its style grows more complex as Stephen matures, making it a key bridge between Dubliners and Ulysses."
  },

  ulysses: {
    title: "Ulysses",
    image: "../images/joyce-ulysses.jpg",
    meta: {
      year: "1922",
      originalTitle: "Ulysses",
      form: "Modernist novel"
    },
    description:
      "Ulysses takes place over a single day, 16 June 1904, in Dublin, following Leopold Bloom, Stephen Dedalus, and Molly Bloom. The novel loosely parallels Homer’s Odyssey while transforming everyday movements, thoughts, conversations, memories, and bodily life into an experimental modernist epic. It is one of Joyce’s central works and one of the most influential novels of the twentieth century."
  },

  finnegans: {
    title: "Finnegans Wake",
    image: "../images/joyce-finnegans-wake.jpg",
    meta: {
      year: "1939",
      originalTitle: "Finnegans Wake",
      form: "Experimental novel"
    },
    description:
      "Finnegans Wake is Joyce’s final and most linguistically experimental novel. Built around dream logic, multilingual wordplay, myth, family figures, Irish history, and cyclical time, it resists ordinary plot summary. The book is famously difficult because its language constantly shifts meaning, sound, and reference, making it the extreme endpoint of Joyce’s formal experimentation."
  },

  skeleton: {
    title: "A Skeleton Key to Finnegans Wake",
    image: "../images/joyce-a-skeleton-key-to-finnegans-wake.jpg",
    meta: {
      year: "1944",
      originalTitle: "A Skeleton Key to Finnegans Wake",
      form: "Critical guide"
    },
    description:
      "A Skeleton Key to Finnegans Wake is not a work by Joyce, but a guide by Joseph Campbell and Henry Morton Robinson. It offers a general overview and explanatory outline of Finnegans Wake, helping readers approach the book’s structure, characters, myths, and repeated patterns. It is useful as a companion text rather than a primary Joyce work."
  },

  poems: {
    title: "Collected Poems of James Joyce",
    image: "../images/joyce-collected-poems-of-james-joyce.jpg",
    meta: {
      year: "1936",
      originalTitle: "Collected Poems",
      form: "Poetry collection"
    },
    description:
      "Collected Poems brings together Joyce’s poetry, including work from Chamber Music and Pomes Penyeach. Compared with his major fiction, the poems are more lyrical, musical, and compact, showing Joyce’s attention to rhythm, song, and emotional restraint. They reveal another side of his writing beyond the large modernist novels."
  },

  exiles: {
    title: "Exiles",
    image: "../images/joyce-exiles.jpg",
    meta: {
      year: "1918",
      originalTitle: "Exiles",
      form: "Play"
    },
    description:
      "Exiles is Joyce’s only published play. It follows Richard Rowan, Bertha, and Robert Hand through questions of love, freedom, jealousy, fidelity, and emotional power. The play is less frequently read than Joyce’s fiction, but it connects strongly to his recurring concerns with exile, intimacy, betrayal, and the difficulty of human relationships."
  },

  "cat-devil": {
    title: "The Cat and the Devil",
    image: "../images/joyce-the-cat-and-the-devil.jpg",
    meta: {
      year: "1936 / 1964",
      originalTitle: "The Cat and the Devil",
      form: "Children’s story"
    },
    description:
      "The Cat and the Devil began as a letter Joyce wrote in 1936 to his grandson Stephen. The story retells a local legend from Beaugency, France, involving a bridge, the Devil, and a clever cat. It is playful and much simpler than Joyce’s major fiction, but it shows his humor, storytelling ease, and affection in a family context."
  },

  cats: {
    title: "The Cats of Copenhagen",
    image: "../images/joyce-the-cats-of-copenhagen.jpg",
    meta: {
      year: "1936 / 2012",
      originalTitle: "The Cats of Copenhagen",
      form: "Children’s story"
    },
    description:
      "The Cats of Copenhagen also comes from a 1936 letter Joyce wrote for his grandson Stephen. It is a short, comic piece imagining a city without cats, with a satirical edge beneath its playful surface. The text was published as a separate illustrated book much later, so it is best understood as a minor family letter text rather than a major Joyce work."
  },

  letters: {
    title: "Letters of James Joyce",
    image: "../images/joyce-letters-of-james-joyce.jpg",
    meta: {
      year: "1957 / 1966",
      originalTitle: "Letters of James Joyce",
      form: "Letters"
    },
    description:
      "Letters of James Joyce collects Joyce’s correspondence, giving insight into his writing process, publication struggles, finances, family relationships, exile, friendships, and literary ambitions. The letters are especially valuable after reading the fiction because they show Joyce as a working writer negotiating practical difficulties while developing some of the most demanding works of modern literature."
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
