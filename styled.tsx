import MUISelect, { SelectProps, SelectClasses } from '@mui/material/Select';
import FormControlMUI from '@mui/material/FormControl';
import InputLabelMUI from '@mui/material/InputLabel';
import MenuItemMUI from '@mui/material/MenuItem';
import styled from '@mui/material/styles/styled';
import MenuProps from '@mui/material/Menu';
import selectClasses from '@mui/material/Select/selectClasses';
import menuClasses from '@mui/material/Menu/menuClasses';
import paperClasses from '@mui/material/Paper/paperClasses';
import listClasses from '@mui/material/List/listClasses';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import popoverClasses from '@mui/material/Popover/popoverClasses';
import MenuList from '@mui/material/MenuList/MenuList';
export const Select = styled(MUISelect)({
  MenuProps: {
    [`& .${listClasses.root}`]: {},
  },
  [` .${paperClasses.root}`]: {
    backgroundColor: 'red',
  },
});
export const FormControl = styled(FormControlMUI)`
`;
export const InputLabel = styled(InputLabelMUI)``;
export const MenuItem = styled(MenuItemMUI)({
  MenuProps: {
    [`& .${listClasses.root}`]: { backgroundColor: 'red' },
  },
  [`& .${menuClasses.root}`]: {
    backgroundColor: 'red',
  },
});
