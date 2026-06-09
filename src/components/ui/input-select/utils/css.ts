const optionText = {
  fontSize: "13px !important",
  fontFamily: "var(--font-poppins) !important",
};

export const selectMui = {
  "& .MuiAutocomplete-option": {
    padding: "8px 12px",
    ...optionText,
    lineHeight: "25px !important",
  },
  "& .MuiAutocomplete-noOptions": optionText,
  "& .MuiAutocomplete-listbox": { padding: "5px" },
};
