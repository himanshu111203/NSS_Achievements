function loadContent(section, url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error(`Failed to load ${url}`);
      return response.text();
    })
    .then((data) => {
      document.getElementById(section).innerHTML = data;

      
      if (section === "header") {
        highlightActiveTab();
      }
    })
    .catch((error) => {
      console.error("Error loading content:", error);
    });
}


loadContent("header", "header.html");
loadContent("footer", "footer.html");
