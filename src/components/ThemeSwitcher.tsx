import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
  Switch,
  Typography,
  Stack,
  Box,
  Divider,
  styled,
} from "@mui/material";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import { asyncToggleTheme } from '../redux/reducers/themeSlice';

import { themeBlue, themeOrange } from '../theme/theme';
import { AppDispatch, RootState } from '../redux/store';

// Custom style for the theme Switch button
const CustomSwitch = styled(Switch)({
  width: 62,
  height: 32,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 1,
    margin: 3,
    transform: 'translateX(1px)',
    backgroundColor: themeBlue,
    color: themeOrange,
    '& .MuiSvgIcon-root': {
      padding: 4,
    },
    "&:hover": { backgroundColor: themeBlue },
    '&.Mui-checked': {
      transform: 'translateX(28px)',
      backgroundColor: '#fff',
      color: themeOrange,
      '& + .MuiSwitch-track': {
        backgroundColor: 'transparent',
        border: '1px solid #fff',
      },
      "&:hover": { backgroundColor: '#fff' }
    }
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: 'transparent',
    borderRadius: 30,
    border: `1px solid ${themeBlue}`
  },
})

// Custom style for the subtitle
const CustomSubtitle = styled(Typography)({
  color: themeOrange,
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center'
})

const ThemeSwitcher = () => {
  const theme = useSelector((state: RootState) => state.theme);

  const dispatch: AppDispatch = useDispatch();

  // Custom toggle switch button
  const ToggleSwitch = () => {
    return (
      <>
        <CustomSwitch
          icon={<LightModeOutlinedIcon />}
          checkedIcon={<ModeNightOutlinedIcon />}
          checked={theme.darkTheme}
          onChange={() => dispatch(asyncToggleTheme())}
        />
      </>
    )
  };

  return (
    <Box >
      {/* Top theme switcher box */}
      <Stack
        direction='row'
        justifyContent="space-between"
        alignItems="center"
        sx={{ py: 3 }}
      >
        <CustomSubtitle variant="subtitle1">
          Travelguru
          <ExploreIcon fontSize='small' sx={{ ml: 1 }} />
        </CustomSubtitle>
        <ToggleSwitch />
      </Stack>
      <Divider />
    </Box>
  );
}

export default ThemeSwitcher