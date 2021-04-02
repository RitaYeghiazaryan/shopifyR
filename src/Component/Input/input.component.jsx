import classNames from "classnames";
import { useRef } from "react";
import styles from "./input.module.scss"
const Input = (props) => {
  const inputRef=useRef();
  const{ label, value="",...restProps}=props
 const labelClass=classNames({
   [styles.label]:true,
   [styles.active]:value
 })
 const handleLabelClick=()=>{
   const el=inputRef.current
   el.focus()
 }

  return(
    <div className={styles.container}>
        <input value={value} {...restProps} className={styles.input} ref={inputRef}/>
        <label className={labelClass} onClick={handleLabelClick}>{label}</label>

    </div>
  

  )
}; 

export default Input;
