import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Heading from "./Heading";

export default function Main() {
  const [data, setData] = useState([]);
  const [currencyCode, setCurrencyCode] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  function FetchData(currencyCode) {
    if (currencyCode) {
      axios
        .get(`https://restcountries.com/v3.1/currency/${currencyCode}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((e) => {
          setData([]);
        });
    }else{
      setData([])
    }
  }

  useEffect(() => {
    let timeout = setTimeout(() => {
      FetchData(currencyCode);
    }, 500);
    setCurrentPage(1);
    return () => clearTimeout(timeout);
  }, [currencyCode]);

  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [currencyCode]);

  return (
    <div className="wrapper">
      {/* SearchBox */}
      <div className="searchBox">
        <input
          type="text"
          value={currencyCode}
          onChange={(e) => setCurrencyCode(e.target.value)}
          placeholder="Search..."
        />
      </div>

      {/* Content */}
      <div className="content">
        {currentItems.length > 0 ? (
          currentItems.map((e, i) => (
            <Card
              key={i}
              name={e.name.common}
              capital={e.capital[0]}
              continent={e.continents[0]}
              image={e.flags.png}
            />
          ))
        ) : (
          <Heading />
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {data.length > itemsPerPage && (
          <div>
            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
              (page, index) => {
                const pageButton = (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={currentPage === index + 1 ? "active" : ""}
                  >
                    {index + 1}
                  </button>
                );

                if (
                  Math.abs(currentPage - (index + 1)) <= 2 ||
                  index === 0 ||
                  index === Math.ceil(data.length / itemsPerPage) - 1 ||
                  (currentPage <= 3 && index < 5) ||
                  (currentPage >= Math.ceil(data.length / itemsPerPage) - 2 &&
                    index >= Math.ceil(data.length / itemsPerPage) - 5)
                ) {
                  return pageButton;
                } else if (
                  index === 1 ||
                  index === Math.ceil(data.length / itemsPerPage) - 2
                ) {
                  return (
                    <span className="dots" key={index}>
                      ...
                    </span>
                  );
                }
                return null;
              }
            )}
          </div>
        )}
      </div>
    </div>
  );
}
