import React, { useState,useEffect } from 'react'
import { getRolesList, httpCreateRole, httpDeleteRole } from '../../http/roles.service';
import { toast } from 'react-hot-toast';

function Roles() {

  const [state, setState] = useState([]);

  const _handleRoleFetch = () => {
    getRolesList()
    .then((response) => {
      setState(response?.data?.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  useEffect(() => {
    _handleRoleFetch();
  }, []);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [roleName,setRoleName] = useState('');


  const handleDelete = (name) => {
    setShowConfirmModal(true);
    setRoleName(name);
  };

  const applyDelete = async () => {
    try{
      const newRolename = roleName?.replace(/\s+/g, "");
      const httpResponse =  await httpDeleteRole(newRolename);
      if(httpResponse.data.status === 200){
        toast.success("Role Deleted SUccesfully")
        await _handleRoleFetch();
        setShowConfirmModal(false);

      }else{
        toast.error("Unable To Delete Role")
      }
    }catch(err){
      toast.error("Internal Server Error!")
    }
  
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try{
      const httpResponse = await httpCreateRole(roleName);
      if(httpResponse.data.status === 201){
        toast.success("New Role Created Succesfully");
        await _handleRoleFetch()
        setShowAddModal(false);

      }
    }catch(err){
      toast.error("Something Went Wrong!")
    }
     
  }

  return (
    <>
      <div className="container">

        <div className="slim-pageheader">
          <ol className="breadcrumb slim-breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active">
              <a href="/admin/roles">Roles</a>
            </li>
          </ol>
          <h6 className="slim-pagetitle">Roles Manager</h6>
        </div>
        {/* End Page Header */}
        <div className="row row-sm">
          <div className="col-lg-12">
          <button className="btn btn-primary btn-sm pull-right mb-2" 
                  onClick={() => setShowAddModal(true)}
          >Add Role</button>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Role Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {state?.roles?.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item}</td>
                    <td>
                      <button className="btn btn-danger btn-md mg-b-10"  onClick={() => handleDelete(item)}>
                        <i className="icon fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav>
              <ul className="pagination">
                <li key={1} className={`active`}>
                  <button className="page-link" onClick={""}>
                    1
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

      {/* Confirmation Modal */}
        <div
          className={`modal fade ${showConfirmModal ? "show" : ""}`}
          tabIndex="-1"
          role="dialog"
          style={{ display: showConfirmModal ? "block" : "none" }}
        >
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmation</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowConfirmModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">Are you sure you want to delete?</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowConfirmModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={applyDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      {/* End Confirmation Modal */}
      {/* Create Modal */}
  {showAddModal &&  <div className="modal fade show" style={{ display: "block", }}>
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Role</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => setShowAddModal(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="roleName">Role Name *</label>
              <input
                type="text"
                className="form-control"
                id="roleName"
                name="roleName"
                onChange={(e) => setRoleName(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
    {/* <div className="modal-backdrop" style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}></div> */}
  </div>}

      {/* End Create Modal */}
      </div>
    </>
  )
}

export default Roles