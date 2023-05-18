const UpdateForm = ({ updateData,changeTask, updateTask,cancelupdate}) => {
    return(
<>
          <div className="row">
            <div className="col">
              <input
                value={updateData && updateData.title}
                onChange={(e) => changeTask(e)}
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-auto">
              <button
                onClick={updateTask}
                className="btn btn-lg btn-sucess mr-20"
              >
                {" "}
                Update
              </button>
              <button onClick={cancelupdate} className="btn btn-lg btn-warning">
                Cancel
              </button>
            </div>
          </div>
          <br />
        </>
    )
}

export default UpdateForm;