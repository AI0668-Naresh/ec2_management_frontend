import React, { useState } from "react";
import "../static/css/doinsertips.css";
import axios from "axios";
import Cookies from "js-cookie";

function Doinsertips( {prefix_uri, user}) {
  const token = Cookies.get("access_token");
  const [dropletName, setDropletName] = useState("");
  const [machineInsertFormat, setMachineInsertFormat] = useState("");
  const username_v = Cookies.get("username");
  const machineFormats = ["DC", "Static", "Playwright"];
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setPopupMessage("");

    const data = {
      username: username_v,
      dropletName,
      machineInsertFormat
    };

    try {
      console.log(`${prefix_uri}do_insert_ips`);
      const response = await axios.post(`${prefix_uri}insert_launched_digitalocean_instances_to_mongo`, data,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPopupMessage(response.data.data);
      if (response.data.message === "success") {
        setSuccess(true);
      }
      
    } catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
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
        {/* <button type="submit" className="btn btn-success" disabled={!machineInsertFormat || !dropletName}>
          Insert Tips
        </button> */}
         <button
            type="submit"
            className={`btn btn-success ${loading ? "btn-loading" : ""}`}
            disabled={!machineInsertFormat || !dropletName || loading}
          >
            {loading ? (
              <span className="loading-spinner"></span>
            ) : success ? (
              <span className="btn-success">✔</span>
            ) : (
              "Insert Ips"
            )}
          </button>

      </form>
      {popupMessage && <div className="popup-message">{popupMessage}</div>}
    </div>
    </div>
  );
}

export default Doinsertips;
