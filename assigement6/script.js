const textarea = document.getElementById("textarea");
const total = document.getElementById("total");
const remaining = document.getElementById("remaining");

const maxChars = 50;

textarea.addEventListener("input", () => {
  const len = textarea.value.length;
  total.textContent = len;
  remaining.textContent = maxChars - len;

  if (len >= maxChars) {
    textarea.value = textarea.value.substring(0, maxChars);
    total.textContent = maxChars;
    remaining.textContent = 0;
  }
});
