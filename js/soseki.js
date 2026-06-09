const chartWrap = document.querySelector(".soseki-flowchart-wrap");
const chart = document.querySelector(".soseki-flowchart");

const chartWidth = 1180;
const chartHeight = 1950;

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
  cat: {
    title: "I Am a Cat",
    image: "../images/soseki-i-am-a-cat.jpg",
    meta: {
      year: "1905–1906",
      originalTitle: "吾輩は猫である",
      form: "Satirical novel"
    },
    description:
      "I Am a Cat is narrated by a nameless housecat who observes the absurd habits, vanity, and intellectual pretensions of his human master and his circle. The novel began Soseki’s career as a fiction writer and is known for its sharp humor, social satire, and playful critique of Meiji-era intellectual life."
  },

  nowaki: {
    title: "Nowaki",
    image: "../images/soseki-nowaki.jpg",
    meta: {
      year: "1907",
      originalTitle: "野分",
      form: "Novel"
    },
    description:
      "Nowaki follows young intellectuals struggling with ideals, poverty, ambition, and their place in modern society. The novel is less widely read than Soseki’s major works, but it shows his early concern with moral seriousness, individual conviction, and the pressures placed on young people in a changing Japan."
  },

  kokoro: {
    title: "Kokoro",
    image: "../images/soseki-kokoro.jpg",
    meta: {
      year: "1914",
      originalTitle: "こころ",
      form: "Novel"
    },
    description:
      "Kokoro centers on the relationship between a young student and an older man he calls Sensei. Through memory, confession, friendship, guilt, and betrayal, the novel explores loneliness and the spiritual isolation of modern life. It is one of Soseki’s best-known works and a central novel of modern Japanese literature."
  },

  botchan: {
    title: "Botchan",
    image: "../images/soseki-botchan.jpg",
    meta: {
      year: "1906",
      originalTitle: "坊っちゃん",
      form: "Comic novel"
    },
    description:
      "Botchan follows a blunt, impulsive young teacher from Tokyo who takes a job in a provincial school. Based partly on Soseki’s own experience teaching in Matsuyama, the novel is fast, comic, and satirical, exposing hypocrisy, small-town politics, and the conflict between honesty and social performance."
  },

  kusamakura: {
    title: "Kusamakura",
    image: "../images/soseki-kusamakura.jpg",
    meta: {
      year: "1906",
      originalTitle: "草枕",
      form: "Experimental novel"
    },
    description:
      "Kusamakura, often translated as The Three-Cornered World or Grass Pillow, follows an artist who retreats to a mountain village in search of an aesthetic distance from ordinary emotion. The novel is lyrical, reflective, and experimental, combining painting, poetry, beauty, and the desire to see life as art."
  },

  miner: {
    title: "The Miner",
    image: "../images/soseki-the-miner.jpg",
    meta: {
      year: "1908",
      originalTitle: "坑夫",
      form: "Novel"
    },
    description:
      "The Miner follows a young man who leaves home after emotional turmoil and ends up entering a mining community. More unusual and psychologically strange than many of Soseki’s other novels, it focuses on alienation, disorientation, and the experience of drifting through unfamiliar social spaces."
  },

  sanshiro: {
    title: "Sanshiro",
    image: "../images/soseki-sanshiro.jpg",
    meta: {
      year: "1908",
      originalTitle: "三四郎",
      form: "Novel"
    },
    description:
      "Sanshiro follows a young student from rural Kyushu who moves to Tokyo and encounters university life, modern ideas, romantic uncertainty, and urban sophistication. The novel captures youth, hesitation, and the shock of modernity, and it is often treated as the first novel in Soseki’s early trilogy with And Then and The Gate."
  },

  then: {
    title: "And Then",
    image: "../images/soseki-then.jpg",
    meta: {
      year: "1909",
      originalTitle: "それから",
      form: "Novel"
    },
    description:
      "And Then centers on Daisuke, an educated man who refuses conventional work and lives in a state of dependence and emotional indecision. When he becomes involved with the wife of a friend, the novel turns into a subtle exploration of desire, responsibility, individualism, and moral paralysis in modern society."
  },

  gate: {
    title: "The Gate",
    image: "../images/soseki-the-gate.jpg",
    meta: {
      year: "1910",
      originalTitle: "門",
      form: "Novel"
    },
    description:
      "The Gate follows Sosuke and Oyone, a quiet married couple living in isolation after a painful past relationship cut them off from ordinary social life. Compared with Sanshiro and And Then, it is more subdued and inward, focusing on guilt, resignation, routine, and the search for spiritual peace."
  },

  higan: {
    title: "Higan Sugi Made",
    image: "../images/soseki-higan-sugi-made.jpg",
    meta: {
      year: "1912",
      originalTitle: "彼岸過迄",
      form: "Novel"
    },
    description:
      "Higan Sugi Made, often translated as To the Spring Equinox and Beyond, is a multi-part novel that follows several connected characters and shifts between observation, investigation, and psychological reflection. It marks the beginning of Soseki’s later, darker phase, where human relations become increasingly opaque and difficult to understand."
  },

  wayfarer: {
    title: "The Wayfarer",
    image: "../images/soseki-the-wayfarer.jpg",
    meta: {
      year: "1912",
      originalTitle: "行人",
      form: "Novel"
    },
    description:
      "The Wayfarer follows Ichiro, a troubled intellectual whose suspicion, emotional isolation, and inability to trust others gradually dominate his relationships. The novel explores marriage, jealousy, egoism, loneliness, and the difficulty of truly knowing another person."
  },

  poppy: {
    title: "The Poppy",
    image: "../images/soseki-the-poppy.jpg",
    meta: {
      year: "1907",
      originalTitle: "虞美人草",
      form: "Novel"
    },
    description:
      "The Poppy is an early novel concerned with love, pride, social expectation, and emotional conflict. It is more melodramatic and decorative than Soseki’s later psychological works, but it already shows his interest in modern relationships, self-consciousness, and the conflict between appearance and feeling."
  },

  light: {
    title: "Light and Darkness",
    image: "../images/soseki-light-and-darkness.jpg",
    meta: {
      year: "1916",
      originalTitle: "明暗",
      form: "Unfinished novel"
    },
    description:
      "Light and Darkness, also known as Light and Dark, was Soseki’s final and unfinished novel. It follows the strained marriage of Tsuda and O-Nobu and examines egoism, suspicion, money, illness, and emotional distance with remarkable psychological precision. Soseki died before completing it."
  },

  grass: {
    title: "Grass on the Wayside",
    image: "../images/soseki-grass-on-the-wayside.jpg",
    meta: {
      year: "1915",
      originalTitle: "道草",
      form: "Autobiographical novel"
    },
    description:
      "Grass on the Wayside is Soseki’s most openly autobiographical novel, drawing on his childhood adoption and difficult family circumstances. It follows a man whose ordinary adult life is disrupted by the return of an adoptive father figure, exploring memory, obligation, resentment, marriage, and the lingering weight of the past."
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
