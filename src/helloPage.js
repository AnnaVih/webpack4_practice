import HelloworldButton from './components/hello-world-button/hello-world-button'
import Heading from './components/heading/heading'
import _ from 'lodash'

const helloworldButton = new HelloworldButton()
helloworldButton.render()

const heading = new Heading()
heading.render(_.upperFirst("helloPage"))