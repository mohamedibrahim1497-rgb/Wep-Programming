const samples = [
  { name: "Ah-Ha", file: "ah-ha.mp3", length: 1.4 },
  { name: "Dan", file: "dan.mp3", length: 0.5 },
  { name: "Back of the net", file: "back-of-the-net.mp3", length: 1.02 },
  { name: "Bang out of order", file: "bangoutoforder.mp3", length: 1.38 },
  { name: "Hello Partridge", file: "hellopartridge.mp3", length: 2.25 },
  { name: "Email of the Evening", file: "emailoftheevening.mp3", length: 2.5 },
  { name: "I'm Confused", file: "imconfused.mp3", length: 1.8 },
  { name: "I ate a Scotch Egg", file: "iateascotchegg.mp3", length: 1.9 },
  {name: "low battery", file: "low battery.mp3", length: 1.2},
  {name:"mouse click", file: "mouse clicks.mp3", length: 0.3},
  {name:"notification", file: "notification.mp3", length: 0.8},
  {name:"sereneshutterbugs", file: "sereneshutterbugs.mp3.mp3", length: 1.5},
  {name:"stop watch", file: "stop watch.mp3", length: 1.0},
  {name:"window break", file: "window break.mp3.mp3", length: 1.7},
  {name:"glass break", file: "glass break.mp3", length: 1.6},
  {name:"dan", file: "dan.mp3", length: 0.5},
  {name:"air horn", file: "air horn sound.mp3", length: 2.0},
  {name:"censor beep", file: "censor beep.mp3", length: 0.4},
];

let currentPage = 0;
const samplesPerPage = 9;

const sampleGrid = document.getElementById("sampleGrid");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const bankTitle = document.getElementById("bankTitle");

function renderSamples() {
  sampleGrid.innerHTML = "";

  const start = currentPage * samplesPerPage;
  const end = start + samplesPerPage;
  const pageSamples = samples.slice(start, end);

  pageSamples.forEach(sample => {
    const div = document.createElement("div");
    div.className = "sample";

    div.innerHTML = `
      <div class="sample-title">${sample.name}</div>
      <div class="sample-length">${sample.length}s</div>
    `;

    div.addEventListener("click", () => {
      const audio = new Audio(sample.file);
      audio.play();
    });

    sampleGrid.appendChild(div);
  });

  bankTitle.textContent = `Sample Bank ${currentPage + 1}`;

  leftArrow.classList.toggle("hidden", currentPage === 0);
  rightArrow.classList.toggle("hidden", end >= samples.length);
}

leftArrow.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    renderSamples();
  }
});

rightArrow.addEventListener("click", () => {
  if ((currentPage + 1) * samplesPerPage < samples.length) {
    currentPage++;
    renderSamples();
  }
});

document.getElementById("sayButton").addEventListener("click", () => {
  const text = document.getElementById("textInput").value;
  if (!text.trim()) return;

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  window.speechSynthesis.speak(speech);
});

renderSamples();
