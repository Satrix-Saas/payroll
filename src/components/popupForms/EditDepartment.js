import React from 'react'



export default  function EditDepartment() {
  return (
    <div>
  			<div className='container' id="editdepartment">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Edit Department</h5>
								<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
									<i className="fas fa-times"></i>
								</button>
							</div>
							<div className="modal-body">
								<form>
									<div className="form-group">
										<label>Department Name <span className="text-danger">*</span></label>
										<input className="form-control" id="dept_name" type="text"/>
									</div>
									<div className="submit-section">
										<button className="btn btn-primary cancel-btn" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
										<button className="btn btn-primary submit-btn" id="depSbtn">Save</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
        </div>
  
  
  )
}
