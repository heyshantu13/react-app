import React from "react";

function UserModel({ setShowAddModal }) {
  return (
    <>
      <div className="modal fade show" style={{ display: "block" }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add User</h5>
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
              <form onSubmit={""}>
                <div className="form-group">
                  <label htmlFor="userName">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    name="userName"
                    //   value={newUser.userName}
                    //   onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    //   value={newUser.password}
                    //   onChange={handleChange}
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
      </div>
    </>
  );
}

export default UserModel;
