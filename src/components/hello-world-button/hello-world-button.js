import './hello-world-button.scss'

class HelloworldButton {
  buttonCssClass = 'hello-world-button'
  render(){
    const button = document.createElement('button')
    button.innerHTML = 'Hello world'
    button.classList.add(this.buttonCssClass)
    const body = document.querySelector('body')
    button.onclick = function(){
      const p = document.createElement('p')
      p.innerHTML = 'Hello world'
      body.appendChild(p)
    }
    body.appendChild(button)
  }
}

export default HelloworldButton