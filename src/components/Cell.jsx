import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
    Cell: {
      width: 50,
      height: 50
    }
})
function Cell(props) {
    const classes = useStyles()
    return <button disabled={props.disabled} onClick={props.onclick} id={props.idNum} className={classes.Cell}>{props.icon}</button>
}
export default Cell;