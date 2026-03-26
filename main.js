
  const openBtn = document.getElementById("openCall");
  const closeBtn = document.getElementById("closeCall");
  const overlay = document.getElementById("overlay");
  const sheet = document.getElementById("callSheet");
  const copyBtn = document.getElementById("copyBtn");

  function openSheet() {
    overlay.classList.add("active");
    sheet.classList.add("active");
  }

  function closeSheet() {
    overlay.classList.remove("active");
    sheet.classList.remove("active");
  }

  openBtn.onclick = e => {
    e.preventDefault();
    openSheet();
  };
  
  closeBtn.onclick = closeSheet;
  overlay.onclick = closeSheet;
  
  copyBtn.addEventListener("click", () => {
    const number = copyBtn.dataset.number;

    navigator.clipboard.writeText(number).then(() => {
      copyBtn.innerText = "Copied ✓";
      copyBtn.style.background = "transparent";
      copyBtn.style.color = "#fff";

      setTimeout(() => {
        copyBtn.innerText = "Save to contacts";
        copyBtn.style.background = "none";
        copyBtn.style.color = "#000";
      }, 2000);
    });
  });