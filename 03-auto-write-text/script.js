const text = "Hardware: las partes de un ordenador que pueden ser pateadas";

let index = 0

setInterval(() => {
  document.body.innerText = text.slice(0, index++)
  if (index > text.length) index = 0
}, 100)
