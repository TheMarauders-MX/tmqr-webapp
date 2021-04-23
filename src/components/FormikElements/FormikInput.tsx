import { TextField } from "@material-ui/core";
import { useField } from "formik";

interface FormikInputTextProps {
  name: string;
  placeholder?: string;
  validateOnClick?: boolean;
  disabled: boolean;
}

const FormikInput = (props: FormikInputTextProps) => {
  const [field /*, meta , helpers */] = useField(props.name);

  return (
    <div className="formik-input-text">
      <TextField {...field} variant="outlined" placeholder={props.placeholder} disabled={props.disabled} />
    </div>
  );
};

export default FormikInput;
