import styled from 'styled-components'

export const StyledLogin = styled.div`
  h1 {
    font-size: 28px;
    color: #333;
    padding-right:23vh;
  }
  padding-left: 15vh;
  padding-top: 5vh;
  
  .container {
    padding-top: 20px;
    padding-bottom:
    20px;
    width: 50%;
  }

  form {
    padding-right: 0;
    border-radius: 4px;
    padding: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    fieldset {
      legend {
        font-family: 'Sans-serif';
        font-size: 18px;
        color: #333;
      }
    }

    .form-check {
      font-family: 'Sans-serif';
      font-size: 16px;
      color: #333;
    }

    .form-control {
      font-family: 'Sans-serif';
      font-size: 16px;
      color: #333;
    }

    .btn {
      width: 100%;
      font-family: 'Sans-serif';
      font-size: 16px;
      background: linear-gradient(to right, #0077c9, #00b4db);
      border: none;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 4px;
      color: white;
      padding: 12px 24px;
    }
  }
`;
