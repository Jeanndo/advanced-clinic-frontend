// @ts-nocheck
import React, { useRef } from "react"
import { useReactToPrint } from "react-to-print"
import { ComponentToPrint } from "./Result"
import classes from "./workspace.module.css"

const PrintResult = () => {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint} className={classes.printBtn}>
        Print Result
      </button>
    </div>
  )
}

export default PrintResult
