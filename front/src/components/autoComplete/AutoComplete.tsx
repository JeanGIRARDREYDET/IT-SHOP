import * as React from 'react';
import { SyntheticEvent, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';


type IFormattedProduct = {
  _id: any,
  label: string,
  brand?: string
}

export interface IProduct {
  _id?: object | undefined;
  name: string;
  brand: string;
  description: string;
  categories: string[];
  images: string[];
  price: number;
  stock: number;
  rating: number;
  createdAt: Date;
}



type Props = {
  onChange: (event: SyntheticEvent<Element, Event>, value: IProduct | null) => void
}


const CustomAutocomplete = ({onChange}: Props) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly IProduct[]>([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (() => {
      const url = 'http://localhost:3000/api/products'
      fetch(url).then(res => res.json()).then(result => {
            if (active) {
              setOptions([...result]);
            }
          }
            )
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name }
      options={options}
      loading={loading}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Rechercher un produit"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null }
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

export default CustomAutocomplete