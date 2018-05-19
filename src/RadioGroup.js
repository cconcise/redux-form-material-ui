import { RadioGroup } from '@material-ui/core/Radio'
import createComponent from './createComponent'

export default createComponent(RadioGroup, ({
  input: { onChange, value, ...inputProps },
  meta,
  onChange: onChangeFromField,
  ...props
}) => ({
  ...inputProps,
  ...props,
  value,
  onChange: (event, value) => {
    onChange(value);
    if(onChangeFromField) {
      onChangeFromField(value)
    }
  }
}))
