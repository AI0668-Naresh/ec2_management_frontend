import React, { useState } from "react";
import "../static/css/doinsertips.css";
import axios from "axios";

function Doinsertips( {prefix_uri}) {
  const [dropletName, setDropletName] = useState("");
  const [machineInsertFormat, setMachineInsertFormat] = useState("");
  
  const machineFormats = ["DC", "Static", "Playwright"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      dropletName,
      machineInsertFormat
    };

    try {
      console.log(`${prefix_uri}do_insert_ips`);
      const response = await axios.post(`${prefix_uri}do_insert_ips`, data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cont-wrap">
    <div className="insert-tips-wrapper">
      <h2>Insert IPS</h2>
      <p className="note-text">Note: After launching instance, It will take 3-5 mins to connect the machine.</p>
      <form className="insert-tips-form" onSubmit={handleSubmit}>
        {/* Droplet Name */}
        <div className="form-group">
          <label>Droplet Name</label>
          <input
            type="text"
            className="form-control"
            value={dropletName}
            onChange={(e) => setDropletName(e.target.value)}
            placeholder="Enter Droplet Name"
            required
          />
        </div>

        {/* Machine Insert Format */}
        <div className="form-group">
          <label>Machine Insert Format</label>
          <select
            className="form-control"
            value={machineInsertFormat}
            onChange={(e) => setMachineInsertFormat(e.target.value)}
            required
            disabled={!dropletName} // Disabled until Droplet Name is entered
          >
            <option value="">Select Machine Format</option>
            {machineFormats.map((format) => (
              <option key={format} value={format}>
                {format}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success" disabled={!machineInsertFormat || !dropletName}>
          Insert Tips
        </button>
      </form>
    </div>
    </div>
  );
}

export default Doinsertips;
