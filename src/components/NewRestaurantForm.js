import {useState} from 'react';
import { Button, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import {createRestaurant} from '../store/restaurants/actions';
import { Alert } from '@material-ui/lab';

export const NewRestaurantForm = ({createRestaurant}) => {
  const [name, setName] = useState('');
  const [validationError, setValidationError] = useState(false);
  const [serverError, setServerError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if(name) {
      setValidationError(false);
      setServerError(false);
      createRestaurant(name)
        .then(() => {
          setName('');
        })
        .catch(() => {
          setServerError(true);
        });
    } else {
      setValidationError(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {serverError && 
        <Alert severity="error">
          The restaurant could not be saved. Please try again.
        </Alert>
      }
      {validationError && <Alert severity="error">Name is required</Alert>}
      <TextField
        placeholder="Add Restaurant"
        fullWidth
        variant="filled"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        data-testid="new-restaurant-submit-button"
      >
        Add
      </Button>
    </form>
  )
};

const mapStateToProps = null;
const mapDispatchToProps = {createRestaurant};

export default connect(mapStateToProps, mapDispatchToProps)(NewRestaurantForm);