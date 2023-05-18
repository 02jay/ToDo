import React from "react";
import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
  } from "@fortawesome/react-fontawesome";
  import {
    faCircleCheck,
    faPen,
    faTrashCan,
    faCheckSquare
  } from "@fortawesome/free-solid-svg-icons";

const ToDO = ({ toDo,markDone,setUpdateData,deleteTask}) => {
  return (
    <>
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "Completed" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="iconswrap">
                    <span
                      title="Completed/Not completed"
                      onClick={(e) => markDone(task.id)}
                    >
                      <FontAwesomeIcon icon={faCheckSquare} />
                    </span>
                    {task.status ? null : (
                      <span
                        title="Edit"
                        onClick={() =>
                          setUpdateData({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false,
                          })
                        }
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    )}

                    <span title="Delete" onClick={() => deleteTask(task.id)}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};

export default ToDO;
