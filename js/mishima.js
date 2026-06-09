const chartWrap = document.querySelector(".mishima-flowchart-wrap");
const chart = document.querySelector(".mishima-flowchart");

const chartWidth = 1180;
const chartHeight = 1650;

const detailBgSymbol = document.getElementById("detailBgSymbol");

function resizeChart() {
  const availableWidth = window.innerWidth - 120;

  let scale = availableWidth / chartWidth;

  if (scale > 0.92) {
    scale = 0.92;
  }

  if (scale < 0.35) {
    scale = 0.35;
  }

  chart.style.transform = `scale(${scale})`;
  chart.style.transformOrigin = "top left";

  chartWrap.style.width = `${chartWidth * scale}px`;
  chartWrap.style.height = `${chartHeight * scale}px`;
}

window.addEventListener("resize", resizeChart);
window.addEventListener("load", resizeChart);
resizeChart();

const bookDetails = {
  golden: {
    title: "The Temple of the Golden Pavilion",
    image: "../images/mishima-the-temple-of-the-golden-pavilion.jpg",
    bgImage: "../images/golden-pavilion-bg.png",
    meta: {
      year: "1956",
      originalTitle: "金閣寺",
      genre: "Psychological novel"
    },
    description:
  "Inspired by the real burning of Kyoto’s Golden Pavilion in 1950, the novel follows Mizoguchi, a socially isolated young acolyte who becomes obsessively fixated on the temple’s beauty. As his feelings of inferiority, resentment, and fascination deepen, beauty itself begins to feel unbearable to him. One of Mishima’s major works, the novel combines psychological intensity with themes of obsession, destruction, envy, and the relationship between aesthetics and violence."
  },

  sailor: {
    title: "The Sailor Who Fell from Grace with the Sea",
    image: "../images/mishima-the-sailor-who-fell-from-grace-with-the-sea.jpeg",
    meta: {
      year: "1963",
      originalTitle: "午後の曳航",
      genre: "Psychological novel"
    },
    description:
  "Set around a group of alienated boys and a sailor who enters their lives, the novel begins with admiration that slowly turns into cruelty and disillusionment. As the boys reject ordinary adulthood and search for an absolute ideal of heroism, the story becomes increasingly disturbing. It is one of Mishima’s strongest explorations of masculinity, violence, purity, and emotional detachment."
},

  frolic: {
    title: "The Frolic of the Beasts",
    image: "../images/mishima-frolic-of-the-beasts.jpg",
    meta: {
      year: "1961",
      originalTitle: "獣の戯れ",
      genre: "Psychological novel"
    },
    description:
  "A dark and emotionally claustrophobic novel centered on a destructive love triangle involving guilt, obsession, and emotional dependency. As jealousy and manipulation intensify, desire itself becomes increasingly violent and self-destructive. The novel shows Mishima’s fascination with psychological instability and destructive passion."
  },

  waves: {
    title: "The Sound of Waves",
    image: "../images/mishima-the-sound-of-waves.jpg",
    meta: {
      year: "1954",
      originalTitle: "潮騒",
      genre: "Romantic novel"
    },
    description:
  "Set on a small island, the novel follows the romance between two young people whose relationship develops through labor, sincerity, and emotional maturity rather than dramatic conflict. Much gentler and more optimistic than many of Mishima’s darker works, it contrasts innocence and natural life with social expectation and gossip."
  },

  colors: {
    title: "Forbidden Colors",
    image: "../images/mishima-forbidden-colors.jpg",
    meta: {
      year: "1951",
      originalTitle: "禁色",
      genre: "Psychological novel"
    },
    description:
  "An aging writer becomes fascinated by a beautiful young man and begins manipulating him in order to take revenge on women and society. Through seduction, performance, sexuality, and emotional cruelty, the novel explores beauty as both power and isolation. It is one of Mishima’s key works on desire, identity, and social performance."
  },

  mask: {
    title: "Confessions of a Mask",
    image: "../images/mishima-confessions-of-a-mask.jpg",
    meta: {
      year: "1949",
      originalTitle: "仮面の告白",
      genre: "Semi-autobiographical novel"
    },
    description:
  "A semi-autobiographical coming-of-age novel following a young man who hides his desires and constructs a social ‘mask’ in order to survive within expectations of masculinity and normality. Through fantasy, shame, repression, and performance, Mishima examines identity as something constantly concealed and performed. It remains one of his most famous and revealing early works."
  },

  patriotism: {
    title: "Patriotism",
    image: "../images/mishima-patriotism.jpg",
    meta: {
      year: "1960",
      originalTitle: "愛国心",
      genre: "Short story"
    },
    description:
  "Centered on a young military officer and his wife after a failed coup attempt in 1930s Japan, the story follows their final night together before ritual suicide. Short but extremely intense, the work condenses many of Mishima’s central concerns — loyalty, beauty, love, nationalism, ritual, and death — into a severe and concentrated form."
  },

  silk: {
    title: "Silk and Insight",
    image: "../images/mishima-silk-and-insight.jpg",
    meta: {
      year: "1964",
      originalTitle: "絹と明察",
      genre: "Political novel"
    },
    description:
  "Set during labor unrest and political conflict, the novel explores ideology, industrial society, class tension, and personal ambition through workers, intellectuals, and competing political visions. Mishima contrasts abstract ideals with economic reality and emotional desire, making it one of his more socially and politically engaged novels."
  },

  star: {
    title: "Star",
    image: "../images/mishima-star.jpg",
    meta: {
      year: "1962",
      originalTitle: "スタア",
      genre: "Short novel"
    },
    description:
  "A short novel about a film actor trapped between celebrity image and private emptiness. Moving between film sets, publicity, and performance, the novel reflects on artificiality, self-consciousness, and identity as something staged for others. It connects strongly with Mishima’s fascination with performance and public image."
  },

  stories: {
    title: "Death in Midsummer & Other Stories",
    image: "../images/mishima-death-in-midsummer.jpg",
    meta: {
      year: "1953",
      originalTitle: "真夏の死",
      genre: "Short story collection"
    },
    description:
  "A collection of stories exploring grief, eroticism, death, emotional restraint, memory, and sudden violence. Mishima shifts between ordinary life and psychological extremity, showing both delicate emotional observation and moments of shocking intensity. It is one of the best ways to experience the breadth of his shorter fiction."
  },

  sun: {
    title: "Sun and Steel",
    image: "../images/mishima-sun-and-steel.jpg",
    meta: {
      year: "1968",
      originalTitle: "太陽と鉄",
      genre: "Essay"
    },
    description:
  "Part essay and part personal philosophy, the book reflects on Mishima’s relationship to language, physical training, discipline, beauty, and mortality. Drawing from bodybuilding and martial practice, Mishima argues that the body can express truths that words alone cannot fully capture. It is essential for understanding his aesthetics and self-image."
  },

  spring: {
    title: "Spring Snow",
    image: "../images/mishima-spring-snow.jpg",
    meta: {
      year: "1969",
      originalTitle: "春の雪",
      genre: "Novel"
    },
    description:
  "The first novel of The Sea of Fertility tetralogy follows the tragic romance between Kiyoaki and Satoko within aristocratic early twentieth-century Japan. Emotional hesitation, class expectation, beauty, memory, and impermanence shape the story, while the novel establishes the cycle’s atmosphere of longing and inevitable loss."
  },

  runaway: {
    title: "Runaway Horses",
    image: "../images/mishima-runaway-horses.jpg",
    meta: {
      year: "1969",
      originalTitle: "奔馬",
      genre: "Novel"
    },
    description:
  "The second novel of The Sea of Fertility tetralogy follows a passionate nationalist youth who dreams of restoring spiritual purity through violent political action. As idealism becomes extremism, the novel explores fanaticism, sacrifice, purity, and political obsession with increasing intensity."
  },

  dawn: {
    title: "The Temple of Dawn",
    image: "../images/mishima-the-temple-of-dawn.jpg",
    meta: {
      year: "1970",
      originalTitle: "暁の寺",
      genre: "Novel"
    },
    description:
  "The third novel of The Sea of Fertility tetralogy expands across Thailand, India, and Japan while exploring reincarnation, Buddhism, aging, sexuality, and philosophical uncertainty. More reflective and metaphysical than the earlier volumes, the novel gradually shifts toward questions of spiritual meaning and illusion."
  },

  decay: {
    title: "The Decay of the Angel",
    image: "../images/mishima-the-decay-of-the-angel.jpg",
    meta: {
      year: "1971",
      originalTitle: "天人五衰",
      genre: "Novel"
    },
    description:
  "The final novel of The Sea of Fertility tetralogy follows the aging Honda as he once again believes he has found a reincarnated soul connected to the cycle’s past lives. As memory, certainty, and meaning slowly dissolve, the tetralogy ends in ambiguity, spiritual emptiness, and emotional collapse."
  }
};

const detailOverlay = document.getElementById("bookDetailOverlay");
const detailPanel = document.getElementById("bookDetailPanel");
const detailBookImage = document.getElementById("detailBookImage");
const detailBookTitle = document.getElementById("detailBookTitle");
const detailBookDescription = document.getElementById("detailBookDescription");
const detailBookMeta = document.getElementById("detailBookMeta");

const bookTriggers = document.querySelectorAll(".book-detail-trigger");

bookTriggers.forEach((book) => {
  book.addEventListener("click", () => {
    const bookKey = book.dataset.book;
    const detail = bookDetails[bookKey];

    if (!detail) return;

    detailBookImage.src = detail.image;
    detailBookTitle.textContent = detail.title;
    detailBookDescription.textContent = detail.description;

    if (detail.bgImage) {
      detailBgSymbol.src = detail.bgImage;
      detailBgSymbol.classList.add("active");
    } else {
      detailBgSymbol.src = "";
      detailBgSymbol.classList.remove("active");
    }
    detailOverlay.classList.add("active");
    
    if (detail.meta) {
        detailBookMeta.innerHTML = `
          <span>${detail.meta.year}</span>
          <span>${detail.meta.originalTitle}</span>
          <span>${detail.meta.genre}</span>
        `;
      } else {
        detailBookMeta.innerHTML = "";
      }
  });
});

detailOverlay.addEventListener("click", () => {
  detailOverlay.classList.remove("active");
});

detailPanel.addEventListener("click", (event) => {
  event.stopPropagation();
});
