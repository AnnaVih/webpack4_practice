import './hello-world-button.scss'

class HelloworldButton {
  render(){
    const button = document.createElement('button')
    button.innerHTML = 'Hello world'
    button.classList.add('hello-world-button')
    const body = document.querySelector('body')
    body.appendChild(button)
  }
}

export default HelloworldButton