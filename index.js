function newTab(url) {
  window.open(url, "_blank");
}

function switchLanguage(lang) {
  const englishContent = document.getElementById("englishContent");
  const greekContent = document.getElementById("greekContent");
  const languageButtonEN = document.getElementById("languageButtonEN");
  const languageButtonGR = document.getElementById("languageButtonGR");

  // Εμφάνιση περιεχομένου ανάλογα με τη γλώσσα
  englishContent.style.display = lang === "en" ? "block" : "none";
  greekContent.style.display = lang === "gr" ? "block" : "none";

  // Ενημέρωση τίτλου κουμπιών
  languageButtonEN.title =
    lang === "en" ? "This page is in English" : "Κλικ για προβολή στα Αγγλικά";
  languageButtonGR.title =
    lang === "gr"
      ? "Η σελίδα είναι στα ελληνικά"
      : "Click to switch to English";

  if (lang === "en") {
    greekContent.classList.remove("active");
    setTimeout(() => {
      greekContent.style.display = "none";
      englishContent.style.display = "block";
      englishContent.classList.add("active");
    }, 10);
  } else if (lang === "gr") {
    englishContent.classList.remove("active");
    setTimeout(() => {
      englishContent.style.display = "none";
      greekContent.style.display = "block";
      greekContent.classList.add("active");
    }, 10);
  }
}
