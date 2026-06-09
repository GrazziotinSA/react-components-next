import { DEFAULT_ACCENT } from "./utils/css";
import { IconButton, InputAdornment } from "@mui/material";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import type { InputProps, PasswordToggleArgs } from "./utils/interface";

function withPasswordToggle({
  showPwd,
  canToggle,
  slotProps,
  setShowPwd,
  color = DEFAULT_ACCENT,
}: PasswordToggleArgs): InputProps["slotProps"] {
  if (!canToggle) return slotProps;

  const Icon = showPwd ? MdVisibilityOff : MdVisibility;

  return {
    ...slotProps,
    input: {
      ...slotProps?.input,
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            edge="end"
            size="small"
            sx={{ color }}
            onClick={() => setShowPwd((prev) => !prev)}
          >
            <Icon size={20} />
          </IconButton>
        </InputAdornment>
      ),
    },
  };
}

export function buildSlotProps(
  args: PasswordToggleArgs,
): InputProps["slotProps"] {
  return withPasswordToggle(args);
}
