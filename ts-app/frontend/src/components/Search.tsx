import { Form, Formik } from 'formik'
import * as yup from 'yup'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import FormikTextField from './FormikTextField'

const initialValues = {
  character: '',
}

const validationSchema = yup.object({
  character: yup.string().required('Character name is required'),
})

type SearchProps = {
  onSubmit: (params: {character: string}) => void
}

export default function Search({onSubmit}: SearchProps) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form noValidate>
        <Stack direction="row" alignItems="center" spacing={1}>
          <FormikTextField
            name="character"
            label="Character name"
            variant="standard"
            sx={{width: '300px'}}
            required
          />
          <Button type="submit" variant="outlined">
            Search
          </Button>
        </Stack>
      </Form>
    </Formik>
  )
}
