const chartWrap = document.querySelector(".pynchon-flowchart-wrap");
const chart = document.querySelector(".pynchon-flowchart");

const chartWidth = 1180;
const chartHeight = 1550;

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
  v: {
    title: "V.",
    image: "../images/pynchon-v.jpg",
    meta: {
      year: "1963",
      originalTitle: "V.",
      form: "Postmodern novel"
    },
    description:
      "V. is Pynchon’s first novel and introduces many of the patterns that would define his later work: unstable quests, historical fragments, paranoia, jokes, songs, and shifting perspectives. The novel follows characters including Benny Profane and Herbert Stencil, whose search for the mysterious figure or idea called “V.” leads across different times, places, and narratives. It is less compact than The Crying of Lot 49, but it is essential for seeing the beginning of Pynchon’s fictional world."
  },

  lot49: {
    title: "The Crying of Lot 49",
    image: "../images/pynchon-the-crying-of-lot-49.jpg",
    meta: {
      year: "1966",
      originalTitle: "The Crying of Lot 49",
      form: "Postmodern novel"
    },
    description:
      "The Crying of Lot 49 follows Oedipa Maas, who becomes executor of a former lover’s estate and begins investigating signs of a possible underground postal system called Trystero. The novel is short compared with Pynchon’s larger books, but it contains many of his central concerns: conspiracy, communication networks, paranoia, American culture, and the uncertainty of interpretation. It is often the most manageable entry point into Pynchon."
  },

  gravity: {
    title: "Gravity’s Rainbow",
    image: "../images/pynchon-gravitys-rainbow.jpg",
    meta: {
      year: "1973",
      originalTitle: "Gravity’s Rainbow",
      form: "Postmodern novel"
    },
    description:
      "Gravity’s Rainbow is set largely in Europe near the end of World War II and follows a vast network of characters, technologies, intelligence operations, sexual obsessions, and rocket systems, especially the German V-2 rocket. The novel is famous for its difficulty, encyclopedic scope, dark comedy, paranoia, and mixture of history, science, politics, and fantasy. It won the 1974 National Book Award and is widely treated as Pynchon’s major work."
  },

  inherent: {
    title: "Inherent Vice",
    image: "../images/pynchon-inherent-vice.jpg",
    meta: {
      year: "2009",
      originalTitle: "Inherent Vice",
      form: "Noir detective novel"
    },
    description:
      "Inherent Vice follows private investigator Doc Sportello in early 1970s Los Angeles as he becomes involved in a tangled case of disappearance, real estate schemes, drugs, police power, and fading counterculture. Compared with Pynchon’s largest novels, it is more accessible and openly shaped by detective fiction, but it still carries his interest in paranoia, systems, and the strange afterlife of American dreams."
  },

  bleeding: {
    title: "Bleeding Edge",
    image: "../images/pynchon-bleeding-edge.jpg",
    meta: {
      year: "2013",
      originalTitle: "Bleeding Edge",
      form: "Tech-noir novel"
    },
    description:
      "Bleeding Edge is set in New York around the collapse of the dot-com bubble and the period leading up to and after September 11, 2001. It follows Maxine Tarnow, a fraud investigator, as she moves through tech companies, money trails, online worlds, organized crime, and conspiracy. The novel connects Pynchon’s long-standing interest in paranoia and hidden systems with the internet age."
  },

  mason: {
    title: "Mason and Dixon",
    image: "../images/pynchon-mason-and-dixon.jpg",
    meta: {
      year: "1997",
      originalTitle: "Mason & Dixon",
      form: "Historical postmodern novel"
    },
    description:
      "Mason & Dixon follows the eighteenth-century surveyors Charles Mason and Jeremiah Dixon, best known for the Mason-Dixon line. Written in a stylized eighteenth-century prose, the novel mixes history, science, colonialism, astronomy, friendship, and myth. It is one of Pynchon’s large historical novels and is especially notable for its language and its meditation on borders, measurement, and empire."
  },

  against: {
    title: "Against the Day",
    image: "../images/pynchon-against-the-day.jpg",
    meta: {
      year: "2006",
      originalTitle: "Against the Day",
      form: "Historical postmodern novel"
    },
    description:
      "Against the Day is a very large historical novel moving from the late nineteenth century into the period around World War I. It includes anarchists, mathematicians, airships, spies, labor struggles, alternate science, and global travel. Like Gravity’s Rainbow and Mason & Dixon, it is expansive and dense, using adventure forms to examine capitalism, violence, technology, and modernity."
  },

  slow: {
    title: "Slow Learner",
    image: "../images/pynchon-slow-learner.jpg",
    meta: {
      year: "1984",
      originalTitle: "Slow Learner",
      form: "Short story collection"
    },
    description:
      "Slow Learner collects Pynchon’s early short stories and includes an introduction by Pynchon looking back on his younger writing. The collection is useful for seeing early versions of his themes and techniques before the major novels: youthful experimentation, satire, paranoia, science, social systems, and American absurdity. It is not as central as the novels, but it helps reveal the development of his style."
  },

  vineland: {
    title: "Vineland",
    image: "../images/pynchon-vineland.jpg",
    meta: {
      year: "1990",
      originalTitle: "Vineland",
      form: "Postmodern novel"
    },
    description:
      "Vineland is set mostly in 1980s California and looks back toward the counterculture, political repression, television culture, family history, and the aftermath of the 1960s. The novel follows characters connected to Zoyd Wheeler, Prairie, Frenesi, and federal agent Brock Vond. It is often read as a bridge between Pynchon’s earlier political paranoia and his later, more contemporary American settings."
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
