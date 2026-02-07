export function dataStudyT(e) {
  console.log(e);
  return `${e.content.map((element) => `<a href="${e.data}" download><span>${element.title}</span></a>`).join("")}`;
}
