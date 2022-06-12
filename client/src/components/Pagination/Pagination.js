import React, { useState } from "react";
import "./Pagination.css";
const paginationNum = [1, 2, 3, 4, 5, 6];

const Pagination = () => {
  const [checkPageState, setCheckPageState] = useState(1);

  const pageClickHandle = (page) => {
    let temp = paginationNum.filter((p) => p === page);
    setCheckPageState(temp[0]);
  };

  return (
    <div className="pagination">
      {paginationNum.map((page) => (
        <p
          key={page}
          onClick={() => {
            pageClickHandle(page);
          }}
          className={checkPageState === page ? "active-page" : ""}
        >
          {page}
        </p>
      ))}
    </div>
  );
};

export default Pagination;
