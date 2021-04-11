function XWinText(props){
    if(props.winSide === "X"){
      return <h1>{props.XWinText}</h1>
    }else if(props.winSide === "O"){
      return <h1>{props.OWinText}</h1>
    }else{
      return null;
    }  
}
export default XWinText;