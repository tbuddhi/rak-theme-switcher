import React from 'react'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import bgLight from '../static/bg_light.webp'
import bgDark from '../static/bg_dark.webp'

const LeftSideImage = () => {
  const theme = useSelector((state:any) => state.theme)

  return (
    <Box
      sx={{
        backgroundImage: `url(${theme.darkTheme ? bgDark : bgLight})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        width: '100%',
        height: '100%',
        borderRadius: '15px 0 0 15px'
      }}
    ></Box>
  )
}

export default LeftSideImage