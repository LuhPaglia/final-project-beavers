import styled from 'styled-components'
export const StyledStudentProfile = styled.div`
* {
  padding: 0;
  margin: 0;
}

.profile{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: beige;
  height: 90vh;
  width: 20px;
}

aside {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5vh;
  width: 80vh;
  height: 70vh;
  border-radius: 10px;
  background-color: #53b881;
  border: 5px solid #00592b;
}

img {
  height: 50vh;
  border-radius: 10px;
}

tr {
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
}

td {
  border: 1px solid black;
  padding-top: 16%;
  font-size: 20px;
}

footer {
  background-color: #198754;
  height: 10vh;
}`;
export const StyledTeacher = styled.div`
  padding-top:4vh;
`;

