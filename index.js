window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound"); // gives a node list
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3",
  ];

  console.log(sounds);
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubbles(index);
    });
  });

  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.append(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function () {
      // visual.removeChild(this);
      bubble.remove();
    });
  };
});
