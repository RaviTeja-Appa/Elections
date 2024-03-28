import React from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';




const Dropdown = ({handleClick}) => {
  const Constituencies = [
    
    { "title": "Ambala" },
    { "title": " Krukshetra"},
    { "title":  "Sirsa " },
    { "title": "Karnal"},
    { "title":  "Sonipat"},
    {"title": "Hisar"},  
    {"title":"Udupi"},
    {"title":"Chikmagalur"},
    {"title":"Tumkur"} ,
    {"title":"Kolar"},
    {"title":"Bangalore"},
    {"title":"Rural"},
    {"title":"Dharwad"}

      
]


  return (
    <Autocomplete
        onChange={(event,value)=>handleClick('green',[value])}
        freeSolo
        className='dropDown'
        disableClearable
        options={ Constituencies.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Select Constituency"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
          )}
      />
    )
}

export default Dropdown


    
   

