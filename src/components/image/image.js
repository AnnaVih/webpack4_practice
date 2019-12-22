import ImageM from './image.jpeg'

class Image {
  render(){
    const img = document.createElement('img')
    img.alt = 'img'
    img.width = 300
    img.src = ImageM
    const body = document.querySelector('body')
    body.appendChild(img)
  }
}

export default Image