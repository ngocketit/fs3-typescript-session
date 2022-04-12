import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

type KeyValueProps = {
  label: string
  value: string
}

function KeyValue({label, value}: KeyValueProps) {
  return (
    <Stack direction="row" sx={{width: '400px'}}>
      <Typography variant="body2" fontWeight={600} sx={{flex: 1}}>
        {label}
      </Typography>
      <Typography variant="body2" sx={{flex: 1}}>
        {value}
      </Typography>
    </Stack>
  )
}

type CharacterDetailProps = {
  name: string
  gender: string
}

export default function CharacterDetail({name, gender}: CharacterDetailProps) {
  return (
    <>
      <KeyValue label="Name" value={name} />
      <KeyValue label="Gender" value={gender} />
    </>
  )
}
