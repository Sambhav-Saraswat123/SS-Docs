const saveButton = document.querySelector('#save');
const TOOLBAR_MODIFICATIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }][("image", "blockquote", "code-block")],
  ["clean"],
];
const quill = new Quill("#container", {
  theme: "snow",
  modules: {
    toolbar: TOOLBAR_MODIFICATIONS,
  },
});
saveButton.addEventListener("click", () => {
  window.alert(`A print dialouge will appear there select printer as ***Save to PDF***`)
  window.print()
})