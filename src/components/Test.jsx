import React, { useState, useEffect } from 'react';
// ... (Previous imports and code)

const Test = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(15);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos');
          const todos = await response.json();
          setData(todos);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    return (
      <div>
        <h1>Posts</h1>
  
        <ul>
          {currentItems.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
  
        <div>
          {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default Test;
  