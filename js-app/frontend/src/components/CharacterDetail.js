import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

function KeyValue({label, value}) {
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

export default function CharacterDetail({name, gender}) {
  return (
    <>
      <KeyValue label="Name" value={name} />
      <KeyValue label="Gender" value={gender} />
    </>
  )
}
