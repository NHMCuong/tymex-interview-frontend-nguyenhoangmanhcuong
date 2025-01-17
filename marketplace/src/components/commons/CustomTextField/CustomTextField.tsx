import { styled, TextField } from "@mui/material";

interface CustomTextFieldProps {
  label: string;
}

const CustomTextField = (props: CustomTextFieldProps) => {
  const { label } = props;

  const StyledTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#A0AAB4",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E0E3E7",
        color: "white",
      },
      "&:hover fieldset": {
        borderColor: "#B2BAC2",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#6F7E8C",
      },
    },
  });

  return (
    <StyledTextField
      fullWidth
      label={label}
      slotProps={{
        input: { style: { color: "white" } },
        inputLabel: { style: { color: "white" } },
      }}
    />
  );
};

export default CustomTextField;
