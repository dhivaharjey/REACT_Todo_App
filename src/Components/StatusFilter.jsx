import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
const StatusFilter = ({ filter, setFilter }) => {
  const handleSelect = (opt) => {
    setFilter(opt);
  };

  return (
    <div className=" d-flex justify-content-between mt-5">
      <h1 className=" fw-bold">My Todo</h1>
      <div className="d-flex">
        <div className="text-end  me-2 ">
          <h4>Filter Status : </h4>
        </div>
        <div className="text-end">
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="primary " id="dropdown-basic">
              {filter}
            </Dropdown.Toggle>
            <Dropdown.Menu variant="bg-success">
              <Dropdown.Item eventKey="All">All</Dropdown.Item>
              <Dropdown.Item eventKey="Completed">Completed</Dropdown.Item>
              <Dropdown.Item eventKey="Not Completed">
                Not Completed
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default StatusFilter;
