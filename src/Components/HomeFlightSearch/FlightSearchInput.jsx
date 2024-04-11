import { useEffect, useState, Fragment } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import flightsAPI from "../../Data/flightsAPI";

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export default function FlightSearchInput({ label, optionField }) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1000);
      if (active) {
        const uniqueCities = new Set(); // Using a Set to store unique cities
        const filteredOptions = flightsAPI.filter((flight) => {
          if (!uniqueCities.has(flight[optionField])) {
            uniqueCities.add(flight[optionField]);
            return true;
          }
          return false;
        });
        setOptions([...filteredOptions]);
      }
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
      className="w-[17rem] h-12 flex items-center"
      id="asynchronous-demo"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option[optionField]}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            style: { fontSize: "0.86rem" },
            endAdornment: (
              <Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </Fragment>
            ),
          }}
          InputLabelProps={{
            style: {
              fontSize: "0.87rem",
              display: "flex",
              alignItems: "center",
            },
          }}
        />
      )}
      ListboxComponent={(props) => (
        <div {...props} style={{ fontSize: "0.75rem" }} />
      )}
    />
  );
}
