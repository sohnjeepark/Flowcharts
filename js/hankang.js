const chartWrap = document.querySelector(".hankang-flowchart-wrap");
const chart = document.querySelector(".hankang-flowchart");

const chartWidth = 1180;
const chartHeight = 2286;

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
