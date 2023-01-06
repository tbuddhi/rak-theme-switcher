import React from 'react'
import { Box, Button, Stack, styled, Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import { useTheme } from '@mui/system'

import { themeBlue } from '../theme/theme';

const buttonSides = 38;

const SocialMediaButtons = () => {

  const theme = useTheme()

  // Custom styles for small buttons
  const SquareButton = styled(Button)({
    width: buttonSides,
    minWidth: buttonSides,
    height: buttonSides,
    backgroundColor: theme.palette.custom.smButtonBg,
    color: '#000',
    "& .MuiButton-startIcon": { margin: 0 },
    "&:hover": { backgroundColor: theme.palette.custom.smButtonHoverBg, }
  })

  // Custom styles for the Google button
  const GoogleButton = styled(Button)({
    width: '100%',
    fontSize: '0.6em',
    backgroundColor: theme.palette.custom.smButtonBg,
    color: themeBlue,
    "&:hover": { backgroundColor: theme.palette.custom.smButtonHoverBg, }
  })

  return (
    <Box pb={3}>
      <Typography variant="overline" display='flex' justifyContent='center' py={2}>- OR -</Typography>

      {/* Social media buttons row */}
      <Stack direction="row" spacing={2}>
        <Box flex={5}>
          <GoogleButton
            disableElevation
            size="large"
            variant="contained"
            startIcon={
              <GoogleIcon htmlColor='#EA4335' />
            }
          >
            Sign in with Google
          </GoogleButton>
        </Box>
        <Box flex={1} >
          <SquareButton
            disableElevation
            variant="contained"
            startIcon={
              <FacebookIcon htmlColor='#4267B2' />
            }
          >
          </SquareButton>
        </Box>
        <Box flex={1} >
          <SquareButton
            disableElevation
            variant="contained"
            startIcon={
              <AppleIcon />
            }
          >
          </SquareButton>
        </Box>
      </Stack>
    </Box>
  )
}

export default SocialMediaButtons