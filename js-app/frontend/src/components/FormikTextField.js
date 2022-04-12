import TextField from '@mui/material/TextField'
import { useField } from 'formik'

export default function FormikTextField(props) {
  const [field, meta] = useField(props.name)

  return (
    <TextField
      error={meta.touched && Boolean(meta.error)}
      helperText={props.helperText || (meta.touched && meta.error)}
      {...field}
      {...props}
    />
  )
}

