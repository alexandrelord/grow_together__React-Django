import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Button from '../Button'

import InvertColorsOutlinedIcon from '@mui/icons-material/InvertColorsOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined'
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


export default function BestMatch() {
  return (
    <Box sx={{ marginTop: 7 }}>
        <Card  elevation={0} sx={{ width: 375, borderRadius: '0' }}>
            <CardMedia
            component="img"
            height="375"
            image="https://m.media-amazon.com/images/I/51wYWuPCK-L._AC_SL1000_.jpg"
            />
            <CardContent>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Bird of Paradise</Typography>
                <Typography variant='body2'>Care & Conditions</Typography>
                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-around' }}>
                    <Stack spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ bgcolor: 'custom.light' }}>
                            <InvertColorsOutlinedIcon sx={{ color: 'custom.mediumDark' }} />
                        </Avatar>
                        <Typography variant='body2'>Water</Typography>
                    </Stack>
                    <Stack spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ bgcolor: 'custom.light' }}>
                            <LightModeOutlinedIcon sx={{ color: 'custom.mediumDark' }} />
                        </Avatar>
                        <Typography variant='body2'>Light</Typography>
                    </Stack>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Accordion elevation={0} sx={{ mt: 1 }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon fontSize='small'/>} >
                            <Typography variant='caption'>Learn More</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack direction='row'>
                                <Stack spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar sx={{ bgcolor: 'custom.light' }}>
                                    <BugReportOutlinedIcon sx={{ color: 'custom.mediumDark' }} />
                                    </Avatar>
                                    <Typography variant='body2'>Bugs</Typography>
                                </Stack>
                                <Stack spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar sx={{ bgcolor: 'custom.light' }}>
                                    <CoronavirusOutlinedIcon sx={{ color: 'custom.mediumDark' }} />
                                    </Avatar>
                                    <Typography variant='body2'>Diseases</Typography>
                                </Stack>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </CardContent>
            <Box sx={{ width: 335, margin: 'auto', marginBottom: 1}}>
                <Stack>
                    <Button label='See all matches...' />
                </Stack>
            </Box>
        </Card>

    </Box>
  )
}
