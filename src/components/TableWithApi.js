import React, { useEffect, useState } from "react";
import PaginationTable from "./PaginationTable";

export default function TableWithAPI() {
    const [cells, setCells] = useState([]);
    const getData = async () => {
        const res = await fetch("http://localhost:5000/getAllOrders");
        const data = await res.json();
      //console.log(data);
      setCells(data);
      console.log(data);
      
    };
   
    const columns = React.useMemo(
      () => [
        {
          Header: 'Id',
          accessor: 'Id'
        },
        {
          Header: 'CustomerOrderId',
          accessor: 'CustomerOrderId' // accessor is the "key" in the data
        },
        {
          Header: 'ProductId',
          accessor: 'ProductId'
        },
        {
          Header: 'Quantity',
          accessor: 'Quantity'
        }
      ]
    );
  
    useEffect(() => {
      //console.log("useeffect");
      getData();
      
    }, []);
    const data = React.useMemo(() => cells);
    //console.log(data);
    console.log(cells);
    return <>{cells && <PaginationTable columns={columns} data={data} />}</>;
  }