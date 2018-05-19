import {TextField} from '@material-ui/core'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(TextField, ({
  defaultValue,
  ...props
}) => ({
  ...mapError(props)
}))
