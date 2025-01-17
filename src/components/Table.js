import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to access state
import '../static/css/table.css'; // Assuming your CSS is in this file

function Table() {
    const location = useLocation();
    const data = location.state?.data || [];  // Access the data passed via navigation

    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({});

    // Columns for which filters should not appear
    const noFilterColumns = ['instance_name', 'instance_id', 'public_ip', 'private_ip', 'ipv6'];

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

    return (
        <div className="table-wrapper">
            <h2>Instance Details</h2>

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
                        {[
                            "instance_name",
                            "instance_id",
                            "public_ip",
                            "private_ip",
                            "ipv6",
                            "account",
                            "region",
                            "platform",
                        ].map((column, index) => (
                            <th key={index}>
                                <div className="filter-container">
                                    {column.replace("_", " ").toUpperCase()}
                                    {/* Conditionally render the filter dropdown */}
                                    {!noFilterColumns.includes(column) && (
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
                                <td>{item.instance_name}</td>
                                <td>{item.instance_id}</td>
                                <td>{item.public_ip}</td>
                                <td>{item.private_ip}</td>
                                <td>{item.ipv6}</td>
                                <td>{item.account}</td>
                                <td>{item.region}</td>
                                <td>{item.platform}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">No matching data found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Table;

