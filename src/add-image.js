import Image from './image.jpeg'
function addImage(){
  const img = document.createElement('img')
  img.alt = 'img'
  img.width = 300
  img.src = Image
  const body = document.querySelector('body')
  body.appendChild(img)
}

export default addImage