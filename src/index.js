const password = document.getElementById("password");
const backgroundImage = document.getElementById("background-image");

password.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;
  backgroundImage.style.filter = `blur(${blurValue}px)`;
});
