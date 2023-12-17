/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const body = getNode("body");
const h1 = getNode(".container h1");
const nav = getNode(".nav");
const ul = getNode(".nav ul");
const visualImage = getNode(".visual img");

// 1.클릭 이벤트 활성화
function handleClick(e) {
  e.preventDefault();

  let li = e.target.closest("li");

  if (!li) return;

  let index = li.dataset.index;

  const list = Array.from(ul.children);

  list.forEach((li) => li.classList.remove("is-active"));

  setImage(index);
  setNameText(index);
  setBgColor(index);

  li.classList.add("is-active");
}

nav.addEventListener("click", handleClick);

// 배경색 변경
function setBgColor(index) {
  const colorA = data[index - 1].color[0];
  const colorB = data[index - 1].color[1];

  body.style.background = `linear-gradient(to bottom,${colorA},${colorB})`;
}

// 이미지 제목 변경
function setImage(index) {
  h1.textContent = data[index - 1].name;
  visualImage.alt = data[index - 1].alt;
}

// 이미지 텍스트 변경
function setNameText(index) {
  visualImage.src = `./assets/${data[index - 1].name}.jpeg`;
}
