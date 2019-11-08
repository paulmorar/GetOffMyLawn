const abolishScreenshots = () => {
  Array.from(document.getElementsByTagName("button"))
    .filter(el => el.textContent === "Approve")
    .forEach(el => el.click());
};

abolishScreenshots();
