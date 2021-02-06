import styled from 'styled-components';

export const InputContainer = styled.div`
  .MuiFormLabel-root {
    font-size: 15px !important;
    color: #47cdff !important;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
  }

  .MuiInputBase-root {
    input {
      color: #47cdff !important;
      font-family: 'Montserrat', sans-serif;
      font-weight: 600 !important;
    }
  }

  .MuiFormHelperText-root.Mui-error {
    color: #f44336;
    margin-top: 6px;
    margin-left: 7px !important;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600 !important;
    font-size: 11px !important;
  }

  .MuiFormControl-root {
    width: 100%;
  }

  .icon-input {
    color: #47cdff;
  }

  .MuiOutlinedInput-adornedEnd {
    padding-right: 0px !important;
  }

  .input-style fieldset {
    border-color: #47cdff !important;
    border-width: 1px !important;
    border-radius: 10px !important;
  }
`;
