import styled from 'styled-components';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

const Box = styled.div`
    margin-top: 16px;
    margin-bottom: 16px;
`;

interface ISearchBar {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

const SearchBar = ({ value = "", onChange }: ISearchBar) => {
    return (
      <Box>
        <FormControl sx={{ m: 1, width: '500' }} variant="outlined">
          <InputLabel htmlFor="searcher" shrink>Search</InputLabel>
          <OutlinedInput
            id="searcher"
            label="Search"
            value={value}
            onChange={onChange}
            autoComplete="off"
            startAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    )
}

export default SearchBar;