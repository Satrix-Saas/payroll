import React from 'react'

export default function Submit_button(props) {
  return (
    <div className="form-group text-center">
      <button className="btn btn-primary account-btn" type="button" id={props.btn_id}>{props.submitvalue}</button>
    </div>
  )
}
