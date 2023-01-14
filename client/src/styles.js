import styled from 'styled-components'
export const StyledLogin = styled.div`
h1 {
  color:green;
}

.btn-success {
  font-family:Sans-serif;
  font-size: 16px;
  background: linear-gradient(#5DE168,#198722);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  &:hover {
      background: white;
      border: 1px solid #198722;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 4px;
      color: green;
    }
    transition:0.2s;
}
.btn-link {
  color: green;
  transition:1s;
  &:hover {
    text-decoration: underline;
  }
  text-decoration: none;
  
}
.form-control {
  border: 1px solid #ced4da;
  box-shadow: none;
  &:hover {
      box-shadow: 0, 0, 0, 3px #198722;
  }
}

margin-right: 8px, color:'#198722';
font-family: Sans-serif, font-size: 16px, color: '#333';
fieldset {width:30%; }
form {
  display: flex;
  justify-content: center;
}
.form-check{
  display:flex;
  column-gap: 3vh;
  padding-left:9vh;
  .form-check-input {
    float: none;
  }
}
`;

export const StyledTeacher = styled.div`
  padding-top:4vh;
`;