import styled from 'styled-components'
export const StyledLogin = styled.div`
h1 {
  color:green;
  font-weight: 700;
  font-size: 45px;
}

p{
  color: #777;
  a{
    color: rgb( 25, 135, 84, 0.8);
    &:hover{
      color:rgb( 25, 135, 84, 1);
      text-decoration:none;
    }
  }
}

.btn-success {
  font-family:Sans-serif;
  font-size: 16px;
  width: 100%;
  background: linear-gradient(#5DE168,#198722);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  transition: 0.4s;
  &:hover {
      background: white; 
      border: 1px solid #198722;
      color: green;
    }
}
.btn-link {
  color: green;
  width:15%;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  
}
.form-control {
  border: 1px solid #ced4da;
  box-shadow: none;
  &:hover {
      box-shadow: 0, 0, 0, 3px #198722;
  }
}

.passwrap {
  display:flex;
  flex-direction: column;
  justify-content: right;
  align-items: flex-end;
}



margin-right: 8px, color:'#198722';
font-family: Sans-serif, font-size: 16px, color: '#333';
fieldset {width:30%; }
form {
  display: flex;
  justify-content: center;
}
.radiowrap{
  display:flex;
  flex-direction:column;
  align-items:center;
}
.form-check{
  display:flex;
  justify-content: space-even;
  column-gap:3vh;
  width:30%;
  .form-check-input {
    float: none;
    cursor: pointer;
    transition: 0.2s;
    &:active {
      box-shadow: 0 0 0 3px rgba( 25, 135, 84, 0.5);
      border: 1px solid rgb(25, 135, 84);
    }
    &:checked {
      background-color: rgb(25, 135, 84);
      box-shadow: 0 0 0 3px rgba( 25, 135, 84, 0.5);
      border: 1px solid rgb(25, 135, 84);
    }
  }
}
.form-control {
  &:focus {
    ::placeholder{
      color:white;
    }
    background-color: rgba( 25, 135, 84, 0.6);
    border: 1px solid rgb(25, 135, 84);
    color : white;
  }
}
`;

export const StyledTeacher = styled.div`
  padding-top:4vh;
`;

export const StyledAdmin = styled.div`
  h1 {
    color : green;
    font-weight:700;
  }
  .adrow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:1vh;

    .seccol {
      padding: 0;
      flex: none;
      width: 10%;
    }
  }

  th{
    background-color: rgb( 25, 135, 84);
    color:white;
  }

  .btn {
    :hover{
      background-color: white;
      color: rgb(25, 135, 84)
    }
  }
`;

export const StyledNav = styled.div`
.navbar-dark {
  --bs-navbar-color: white;
}
.navbar{
  padding: 2vh 0
}
.nav-link{
  padding: 0.1vh 0;
  margin: 0 1vh;
  border-bottom:1px solid transparent;
  transition: 0.3s;
  &:hover{
    border-bottom:1px solid rgba(255, 255, 255, 0.55);
  }
  &:focus{
    border-bottom:1px solid rgba(255, 255, 255, 0.55);
  }


}


`;