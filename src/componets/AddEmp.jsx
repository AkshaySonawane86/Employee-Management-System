import React from "react";

function AddEmp() {
    return (
     <>
       <div ClassName="container-fluid">
        <div ClassName="container">
        <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name"/>
</div>
<div class="mb-3">
<label for="inputEmail4" class="form-label">Email</label>
<input type="email" class="form-control" id="inputEmail4"/>

</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">DOB</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Dob"/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Contact</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Contact"/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Address</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Apartment, studio, or floor"/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Department</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Department"/>
</div>

<div class="mb-3">
<button class="btn btn-primary" type="submit">Submit form</button>
</div>
        </div>
       </div>
     </>
    );
  }
  
  export default AddEmp;