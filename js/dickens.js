const chartWrap = document.querySelector(".dickens-flowchart-wrap");
const chart = document.querySelector(".dickens-flowchart");

const chartWidth = 1180;
const chartHeight = 1640;

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
  carol: {
    title: "A Christmas Carol",
    image: "../images/dickens-a-christmas-carol.jpg",
    meta: {
      year: "1843",
      form: "Novella",
      genre: "Christmas ghost story"
    },
    description:
      "A Christmas Carol follows Ebenezer Scrooge, a cold and miserly businessman who is visited on Christmas Eve by the ghost of Jacob Marley and the spirits of Christmas Past, Present, and Yet to Come. Through this supernatural journey, Scrooge confronts his own greed, loneliness, and moral failure. The book is short, direct, and emotionally powerful, making it one of the best entry points into Dickens’s social imagination."
  },

  oliver: {
    title: "Oliver Twist",
    image: "../images/dickens-oliver-twist.jpg",
    meta: {
      year: "1838",
      form: "Novel",
      genre: "Social novel"
    },
    description:
      "Oliver Twist follows an orphan raised in a workhouse who escapes to London and becomes entangled with a gang of child pickpockets led by Fagin. Through Oliver’s vulnerability, Dickens exposes poverty, child exploitation, criminal networks, and the cruelty of institutional charity. It is one of Dickens’s most famous early novels and a strong example of his social criticism."
  },

  expectations: {
    title: "Great Expectations",
    image: "../images/dickens-great-expectations.jpg",
    meta: {
      year: "1861",
      form: "Novel",
      genre: "Bildungsroman"
    },
    description:
      "Great Expectations follows Pip, an orphan who dreams of becoming a gentleman after receiving support from a mysterious benefactor. As he moves between poverty, ambition, shame, love, and disappointment, the novel examines class desire, moral growth, self-deception, and the painful process of maturity. It is one of Dickens’s major later novels."
  },

  edwin: {
    title: "The Mystery of Edwin Drood",
    image: "../images/dickens-the-mystery-of-edwin-drood.jpg",
    meta: {
      year: "1870",
      form: "Unfinished novel",
      genre: "Mystery novel"
    },
    description:
      "The Mystery of Edwin Drood was Dickens’s final novel and remained unfinished at the time of his death in 1870. It centers on Edwin Drood, his uncle John Jasper, and a dark atmosphere of obsession, secrecy, and possible murder. Because Dickens died before completing it, the solution to the mystery remains unresolved, making the book especially fascinating for readers interested in Dickens’s darker late style."
  },

  little: {
    title: "Little Dorrit",
    image: "../images/dickens-little-dorrit.jpg",
    meta: {
      year: "1857",
      form: "Novel",
      genre: "Social novel"
    },
    description:
      "Little Dorrit centers on Amy Dorrit, born and raised in the Marshalsea debtors’ prison, and Arthur Clennam, who becomes involved with her family’s hidden history. The novel is deeply concerned with debt, bureaucracy, imprisonment, family obligation, and social hypocrisy. It is one of Dickens’s strongest critiques of institutions and financial society."
  },

  bleak: {
    title: "Bleak House",
    image: "../images/dickens-bleak-house.jpg",
    meta: {
      year: "1853",
      form: "Novel",
      genre: "Social and legal satire"
    },
    description:
      "Bleak House revolves around the endless legal case Jarndyce and Jarndyce, which ruins lives while remaining trapped in the Court of Chancery. Through multiple characters and a complex narrative structure, Dickens attacks legal bureaucracy, social neglect, poverty, disease, and moral indifference. It is often considered one of his most ambitious and formally powerful novels."
  },

  tale: {
    title: "A Tale of Two Cities",
    image: "../images/dickens-a-tale-of-two-cities.jpg",
    meta: {
      year: "1859",
      form: "Novel",
      genre: "Historical novel"
    },
    description:
      "A Tale of Two Cities is set in London and Paris before and during the French Revolution. The novel follows characters caught between personal sacrifice, political violence, revenge, and redemption. Compared with many of Dickens’s other novels, it is tighter and more historical in scope, and it remains one of his most widely read works."
  },

  nicholas: {
    title: "Nicholas Nickleby",
    image: "../images/dickens-nicholas-nickleby.jpg",
    meta: {
      year: "1839",
      form: "Novel",
      genre: "Comic social novel"
    },
    description:
      "Nicholas Nickleby follows a young man who must support his mother and sister after his father’s death, leading him through abusive schools, theatrical adventures, and encounters with cruelty and generosity. The novel attacks exploitative education and social injustice while also showing Dickens’s early comic energy and gift for vivid characters."
  },

  hard: {
    title: "Hard Times",
    image: "../images/dickens-hard-times.jpg",
    meta: {
      year: "1854",
      form: "Novel",
      genre: "Industrial social novel"
    },
    description:
      "Hard Times is set in the fictional industrial town of Coketown and follows characters shaped by utilitarian education, factory labor, and emotional repression. Through figures like Thomas Gradgrind and the workers of the town, Dickens criticizes a worldview based only on facts, profit, and mechanical efficiency. It is one of his most direct social critiques."
  },

  curiosity: {
    title: "The Old Curiosity Shop",
    image: "../images/dickens-the-old-curiosity-shop.jpg",
    meta: {
      year: "1841",
      form: "Novel",
      genre: "Sentimental novel"
    },
    description:
      "The Old Curiosity Shop follows Little Nell and her grandfather as they flee from debt, exploitation, and the grotesque figure of Quilp. The novel combines sentiment, melodrama, wandering, and social observation. It was extremely popular in its time and shows Dickens’s early ability to blend emotional pathos with eccentric characters."
  },

  david: {
    title: "David Copperfield",
    image: "../images/dickens-david-copperfield.jpg",
    meta: {
      year: "1850",
      form: "Novel",
      genre: "Autobiographical Bildungsroman"
    },
    description:
      "David Copperfield follows its narrator from childhood through hardship, work, love, failure, and self-formation. Many elements draw on Dickens’s own experiences, including childhood insecurity and work in a blacking factory. Because of its autobiographical resonance and emotional range, it is one of the most important novels for understanding Dickens’s own life and imagination."
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
        <span>${detail.meta.form}</span>
        <span>${detail.meta.genre}</span>
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
