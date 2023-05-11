import React, { useState, useEffect } from "react";
import { httpGetUserList } from "../../http/user.service";
import UserModel from "../../components/modal/userModal";

function Users() {
  const [state, setState] = useState([]);

  useEffect(() => {
    httpGetUserList()
      .then((response) => {
        setState(response?.data?.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [showAddModal, setShowAddModal] = useState(false);
  const handleAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  return (
    <>
      <div className="container">
        <div className="slim-pageheader">
          <ol className="breadcrumb slim-breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active">
              <a href="/admin/users">Users</a>
            </li>
          </ol>
          <h6 className="slim-pagetitle">Users Manager</h6>
        </div>
        {/* End Page Header */}
        <div className="row row-sm">
          <div className="col-lg-12">
          <button className="btn btn-primary btn-sm pull-right mb-2" 
                  onClick={() => setShowAddModal(true)}
          >Add User</button>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {state?.users?.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item?.userName}</td>
                    <td>{item?.enabled ? "Active" : "Inactive"}</td>
                    <td>
                      <button className="btn btn-primary btn-sm mg-b-10">
                        <i className="fa fa-edit"></i>
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

        {/* Modal */}
            {showAddModal && ( <UserModel setShowAddModal={setShowAddModal} />)}
        {/* End Modal */}
      </div>
    </>
  );
}

export default Users;
