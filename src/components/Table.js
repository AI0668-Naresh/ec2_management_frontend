// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom'; // Import useLocation to access state
// import '../static/css/table.css'; // Assuming your CSS is in this file
// import Loading from './Loading'; // Import the Loading component

// function Table() {
//     const location = useLocation();
//     const ck = location.state?.data || null;  // Access the data passed via navigation
//     const [data, setData] = useState([{
//         "instance_id": "i-06803bcd0646b59eb",
//         "instance_name": "RE_ST_EuropeExplorer_STG",
//         "account": "Account 365",
//         "region": "us-west-2",
//         "public_ip": "54.149.97.252",
//         "private_ip": "172.31.23.204",
//         "ipv6": "N/A",
//         "platform": "Linux/UNIX"
//     }]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filters, setFilters] = useState({});
//     const [loading, setLoading] = useState(true); // Loading state to track the fetching status

//     const fetchdata = async () => {
//         try {
//             setLoading(true); // Set loading to true before starting the fetch
//             console.log(`http://192.168.1.109:5000/${ck}/instancelist`)
//             const response = await axios.get(`http://192.168.1.109:5000/${ck}/instancelist`);
//             console.log(response.data);
//             setData(response.data); // Set data once it's fetched successfully
//         } catch (error) {
//             alert('Error on fetch');
//         } finally {
//             setLoading(false); // Set loading to false after the fetch completes (success or error)
//         }
//     };

//     useEffect(() => {
//         const fun = async () => {
//             if (ck) {
//                 console.log(ck)
//                 await fetchdata();
//             }
//         };
//         fun();
//     }, [ck]); // Add ck as a dependency

//     // Columns for which filters should not appear
//     const noFilterColumns = ['instance_name', 'instance_id', 'public_ip', 'private_ip', 'ipv6'];

//     // Handle filter selection
//     const handleFilterChange = (column, value) => {
//         setFilters((prevFilters) => ({
//             ...prevFilters,
//             [column]: value === "All" ? "" : value,
//         }));
//     };

//     // Get unique values for each column
//     const getUniqueValues = (column) => [
//         "All",
//         ...new Set(data.map((item) => String(item[column]))),
//     ];

//     // Filter data based on search term and selected filters
//     const filteredData = data.filter((item) =>
//         Object.values(item).some((value) =>
//             String(value).toLowerCase().includes(searchTerm.toLowerCase())
//         ) &&
//         Object.keys(filters).every((column) =>
//             filters[column]
//                 ? String(item[column]).toLowerCase() === filters[column].toLowerCase()
//                 : true
//         )
//     );

//     return (
//         <div className="table-wrapper">
//             <h2>Instance Details</h2>

//             {/* Display the Loading component if data is still being fetched */}
//             {loading ? (
//                 <Loading />
//             ) : (
//                 <>
//                     {/* Search Box */}
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         className="search-box"
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />

//                     {/* Table */}
//                     <table className="fl-table">
//                         <thead>
//                             <tr>
//                                 {[
//                                     "instance_name",
//                                     "instance_id",
//                                     "public_ip",
//                                     "private_ip",
//                                     "ipv6",
//                                     "account",
//                                     "region",
//                                     "platform",
//                                 ].map((column, index) => (
//                                     <th key={index}>
//                                         <div className="filter-container">
//                                             {column.replace("_", " ").toUpperCase()}
//                                             {/* Conditionally render the filter dropdown */}
//                                             {!noFilterColumns.includes(column) && (
//                                                 <select
//                                                     className="filter-select"
//                                                     onChange={(e) =>
//                                                         handleFilterChange(column, e.target.value)
//                                                     }
//                                                 >
//                                                     {getUniqueValues(column).map((value, i) => (
//                                                         <option key={i} value={value}>
//                                                             {value}
//                                                         </option>
//                                                     ))}
//                                                 </select>
//                                             )}
//                                         </div>
//                                     </th>
//                                 ))}
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredData.length > 0 ? (
//                                 filteredData.map((item, index) => (
//                                     <tr key={index}>
//                                         <td>{item.instance_name}</td>
//                                         <td>{item.instance_id}</td>
//                                         <td>{item.public_ip}</td>
//                                         <td>{item.private_ip}</td>
//                                         <td>{item.ipv6}</td>
//                                         <td>{item.account}</td>
//                                         <td>{item.region}</td>
//                                         <td>{item.platform}</td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="8">No matching data found</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </>
//             )}
//         </div>
//     );
// }

// export default Table;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; // Import useLocation to access state
import '../static/css/table.css'; // Assuming your CSS is in this file
import Loading from './Loading'; // Import the Loading component
import Cookies from 'js-cookie';

function Table({user}) {
    const token = Cookies.get("access_token");
    const location = useLocation();
    const ck = location.state?.data || null; // Access the data passed via navigation
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({});
    const [loading, setLoading] = useState(true); // Loading state to track the fetching status

    const fetchdata = async () => {
        try {
            setLoading(true); // Set loading to true before starting the fetch
            console.log(ck);
            console.log(Cookies)
            const response = await axios.get(ck,{
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
            console.log(response.data);
            setData(response.data); // Set data once it's fetched successfully
        } catch (error) {
            alert('Error on fetch');
        } finally {
            setLoading(false); // Set loading to false after the fetch completes (success or error)
        }
    };
    console.log(ck);
    console.log("daddy's home")

    useEffect(() => {
        const fun = async () => {
            if (ck) {
                console.log(ck);
                await fetchdata();
            }
        };
        fun();
    }, []); // Add ck as a dependency

    // Handle filter selection
    const handleFilterChange = (column, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [column]: value === "All" ? "" : value,
        }));
    };

    // Get unique values for each column
    const getUniqueValues = (column) => [
        "All",
        ...new Set(data.map((item) => String(item[column]))),
    ];

    // Filter data based on search term and selected filters
    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        ) &&
        Object.keys(filters).every((column) =>
            filters[column]
                ? String(item[column]).toLowerCase() === filters[column].toLowerCase()
                : true
        )
    );

    // Extract column names dynamically from data
    const columnNames = data.length > 0 ? Object.keys(data[0]) : [];

    return (
        <div className="table-wrapper">
            <h2>Instance Details</h2>

            {/* Display the Loading component if data is still being fetched */}
            {loading ? (
                <Loading />
            ) : (
                <>
                    {/* Search Box */}
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-box"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    {/* Table */}
                    <table className="fl-table">
                        <thead>
                            <tr>
                                {columnNames.map((column, index) => (
                                    <th key={index}>
                                        <div className="filter-container">
                                            {column.replace("_", " ").toUpperCase()}
                                            {/* Add filter dropdowns only for region and account */}
                                            {["region", "account"].includes(column) && (
                                                <select
                                                    className="filter-select"
                                                    onChange={(e) =>
                                                        handleFilterChange(column, e.target.value)
                                                    }
                                                >
                                                    {getUniqueValues(column).map((value, i) => (
                                                        <option key={i} value={value}>
                                                            {value}
                                                        </option>
                                                    ))}
                                                </select>
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <tr key={index}>
                                        {columnNames.map((column) => (
                                            <td key={column}>{item[column]}</td>
                                        ))}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={columnNames.length}>No matching data found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
}

export default Table;
