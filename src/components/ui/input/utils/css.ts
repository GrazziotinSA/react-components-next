import { memo } from "react";
import { styled, SxProps, TextField, Theme } from "@mui/material";

export const DEFAULT_ACCENT = "var(--primary-color)";

const accent = "var(--primary-color)";
const errorColor = "#D32F2F";
const focusLabel = { color: accent };
const errorLabel = { color: errorColor };
const borderAccent = { borderColor: accent };
const borderError = { borderColor: errorColor };
const underlineAccent = { borderBottomColor: accent };
const underlineError = { borderBottomColor: errorColor };
const disabledText = { color: "#9E9E9E", cursor: "not-allowed" };
const disabledBorder = { borderColor: "#9E9E9E", cursor: "not-allowed" };
const input = {
  color: "#333",
  fontSize: "13px !important",
  fontFamily: "var(--font-poppins) !important",
};

const InputTextField = styled(TextField)({
  fontFamily: "var(--font-poppins) !important",
  "& input": input,
  "& label": input,
  "& label.Mui-focused": focusLabel,
  "& label.Mui-error": errorLabel,
  "& .MuiInput-underline:after": underlineAccent,
  "& .MuiInput-underline.Mui-error:after": underlineError,
  "& .MuiOutlinedInput-root": {
    "& fieldset": borderAccent,
    "&:hover fieldset": borderAccent,
    "&.Mui-disabled fieldset": disabledBorder,
    "&.Mui-focused fieldset": borderAccent,
    "&.Mui-error fieldset": borderError,
    "&.Mui-error:hover fieldset": borderError,
    "&.Mui-error.Mui-focused fieldset": borderError,
  },
  "& .MuiFilledInput-root": {
    backgroundColor: "#F9FAFB",
    "&:after": underlineAccent,
    "&:before": underlineAccent,
    "&:hover:before": underlineAccent,
    "&.Mui-error:after": underlineError,
    "&.Mui-error:before": underlineError,
    "&:hover": { backgroundColor: "#F5F5F5" },
    "&.Mui-error:hover:before": underlineError,
    fontFamily: "var(--font-poppins) !important",
    "&.Mui-disabled": { ...disabledText, backgroundColor: "#F9FAFB" },
  },
  "& .MuiInputBase-input": { ...input, "&.Mui-disabled": disabledText },
  "& .MuiFormHelperText-root": {
    fontSize: "11px",
    marginLeft: 2,
    fontFamily: "var(--font-poppins) !important",
  },
  "& .MuiFormHelperText-root.Mui-error": { color: errorColor },
  "& .Mui-disabled": disabledText,
});

export default memo(InputTextField);

export const xsInputFilled: SxProps<Theme> = {
  "& .MuiFilledInput-root": {
    bgcolor: "#F3F4F6",
    borderStartEndRadius: "20px",
    borderStartStartRadius: "20px",
  },
};
