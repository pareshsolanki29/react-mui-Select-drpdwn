import * as React from 'react';
import Slider, { SliderProps } from '@mui/material/Slider';
import {
  alpha,
  styled,
  useTheme,
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';
import * as S from './styled';
import { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import { SelectChangeEvent } from '@mui/material/Select/Select';
// declare module '@mui/material/styles/' {
// eslint-disable-next-line @typescript-eslint/no-empty-interface (remove this line if you don't have the rule enabled)
//   interface DefaultTheme extends Theme {}
// }

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 10;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
      width: 240,
    },
  },
};
export default function StyledCustomization() {
  const [state, setState] = React.useState('');
  const handleChange = (event: SelectChangeEvent) =>
    setState(event.target.value);
  const demoData = [
    { name: 'demo1', value: 'demo1' },
    { name: 'demo2', value: 'demo2' },
    { name: 'demo3', value: 'demo3' },
  ];
  const value = demoData.filter((e, i) => {
    const res = e.name == 'demo1' ? e.value : undefined;
    // console.log(res);
    return res;
  });

  console.log(value);
  // MenuProps.PaperProps.className = classes.selectOptions;
  return (
    <S.FormControl variant="standard">
      <S.InputLabel>Hello</S.InputLabel>
      <S.Select
        MenuProps={MenuProps}
        value={state}
        onChange={handleChange}
        
        // MenuProps={{
        //   PaperProps: {
        //     sx: {
        //       '& .MuiMenuItem-root.Mui-selected': {
        // backgroundColor: "yellow"
        // },
        // '& .MuiMenuItem-root:hover': {
        // backgroundColor: "pink"
        // },
        // '& .MuiMenuItem-root.Mui-selected:hover': {
        // backgroundColor: "red"
        // },
        // '& .MuiList-root': {
        //   paddingBottom: 0,
        //   paddingTop: 0,
        // },
        // '&. MuiPaper-root': { borderRadius: 'none' },
        // '&. MuiMenu-list': { borderRadius: 0 },
        // '&. MuiMenu-paper': { borderRadius: 0 },
        // '&. MuiPaper-elevation': { borderRadius: 'none' },
        //       borderRadius: 0,
        //     },
        //   },
        // }}
        variant="standard"
      >
        {demoData.map((o, i) => (
          <S.MenuItem divider key={i} value={o.value}>
            {o.name}
          </S.MenuItem>
        ))}
      </S.Select>
    </S.FormControl>
  );
}
