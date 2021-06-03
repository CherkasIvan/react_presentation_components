import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import {useStyles} from "./FormButtonStyles";
import {useState} from "react";

function FormButton({type}) {
  const classes = useStyles();
  const [valueState, setValueState] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(valueState)
  };

  return (
    <div>
      <Button
        type={type}
        variant="contained"
        color="primary"
        size="big"
        className={classes.button}
        startIcon={<SaveIcon/>}
        disableElevation
        onClick={handleSubmit}
      >
        Save your name
      </Button>
    </div>
  )
};

export default FormButton;