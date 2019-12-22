import Heading from './components/heading/heading'
import Image from './components/image/image'
import _ from 'lodash'
const image = new Image()
image.render()
const heading = new Heading()
heading.render(_.upperFirst("imagePage"))