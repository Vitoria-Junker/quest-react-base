import './uppercase.css'

const UpperCaseText = ({text, color}) => {
  const upperCaseText = text.toUpperCase();
    return  <p
    style={{ color: color }} 
    >{upperCaseText}</p>
}


export default UpperCaseText