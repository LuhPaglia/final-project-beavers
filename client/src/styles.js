export const styles = {
  green: {color:'#198722'},
  white: {color:'#198722', fontWeight:'700'},
  bgHover: {
    width: '100%',
    fontFamily:'Sans-serif',
    fontSize: '16px',
    background: 'transparent',
    border: '1px solid #198722',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '4px',
    color:'#198722'
  },
  bgEnd: {
    width: '100%',
    fontFamily:'Sans-serif',
    fontSize: '16px',
    background: 'linear-gradient(to right, #198722, #5DE168)',
    border: 'none',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '4px'
  },
  bgCh: (e) =>{
    switch(e.type){
        case "focus":
            e.target.style.boxShadow="0 0 0 3px #198722";
            e.target.style.border="none";
        break;
        case "blur":
          e.target.style.boxShadow="none";
          e.target.style.border="1px solid #ced4da";
        break;
    }
  },
  color: { marginRight: '8px', color:'#198722'},
  font: { fontFamily: 'Sans-serif', fontSize: '16px', color: '#333'},
  fieldset: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}
}
