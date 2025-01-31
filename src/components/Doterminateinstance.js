import React, { useState } from "react";
import "../static/css/doterminateinstance.css";
import axios from "axios";
import Cookies from "js-cookie";
function DoTerminateInstance({ prefix_uri, user}) {
  const token = Cookies.get("access_token");
  // const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [instanceNames, setInstanceNames] = useState("");
  const [instanceIds, setInstanceIds] = useState("");
  const [instanceIps, setInstanceIps] = useState("");
  const username_v = Cookies.get("username");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  // const accounts = ["Account_900", "Account_106", "Account_5646", "Account_365"];
  const regions = ["NYC1", "NYC2", "NYC3"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setPopupMessage("");

    const data = {
      username: username_v,
      // account: selectedAccount,
      region: selectedRegion,
      details:
        selectedOption === "Name"
          ? { names: instanceNames.split(",").map((name) => name.trim()) }
          : selectedOption === "Id"
          ? { ids: instanceIds.split(",").map((id) => id.trim()) }
          : { ips: instanceIps.split(",").map((ip) => ip.trim()) },
    };

    try {
      const response = await axios.post(`${prefix_uri}terminate_digitalocean_instances`, data, {headers: {
        Authorization: `Bearer ${token}`,
      },});
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
    <div className="terminate-instance-wrapper">
      <h2>Terminate Instance</h2>
      <form className="terminate-instance-form" onSubmit={handleSubmit}>
        {/* Account */}
        {/* <div className="form-group">
          <label>Account</label>
          <select
            className="form-control"
            value={selectedAccount}
            onChange={(e) => setSelectedAccount(e.target.value)}
            required
          >
            <option value="">Select Account</option>
            {accounts.map((account) => (
              <option key={account} value={account}>
                {account}
              </option>
            ))}
          </select>
        </div> */}

        {/* Region */}
        <div className="form-group">
          <label>Region</label>
          <select
            className="form-control"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            required
            // disabled={!selectedAccount} // Disabled until Account is selected
          >
            <option value="">Select Region</option>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        {/* Termination Options */}
        <div className="form-group">
          <label>Termination Option</label>
          <div>
            <label>
              <input
                type="radio"
                name="terminationOption"
                value="Name"
                checked={selectedOption === "Name"}
                onChange={(e) => setSelectedOption(e.target.value)}
                disabled={!selectedRegion} // Disabled until Region is selected
              />
              Instance Name
            </label>
            <label className="ml-3">
              <input
                type="radio"
                name="terminationOption"
                value="Id"
                checked={selectedOption === "Id"}
                onChange={(e) => setSelectedOption(e.target.value)}
                disabled={!selectedRegion} // Disabled until Region is selected
              />
              Instance ID
            </label>
            <label className="ml-3">
              <input
                type="radio"
                name="terminationOption"
                value="Ip"
                checked={selectedOption === "Ip"}
                onChange={(e) => setSelectedOption(e.target.value)}
                disabled={!selectedRegion} // Disabled until Region is selected
              />
              Instance Public IP
            </label>
          </div>
        </div>

        {selectedOption === "Name" && (
          <div className="form-group">
            <label>Instance Names</label>
            <input
              type="text"
              className="form-control"
              value={instanceNames}
              onChange={(e) => setInstanceNames(e.target.value)}
              placeholder="Enter names separated by commas"
              required
              disabled={!selectedOption} // Disabled until Termination Option is selected
            />
            <small className="form-note">Note: For multiple names, use commas to separate them.</small>
          </div>
        )}

        {selectedOption === "Id" && (
          <div className="form-group">
            <label>Instance IDs</label>
            <input
              type="text"
              className="form-control"
              value={instanceIds}
              onChange={(e) => setInstanceIds(e.target.value)}
              placeholder="Enter IDs separated by commas"
              required
              disabled={!selectedOption} // Disabled until Termination Option is selected
            />
            <small className="form-note">Note: For multiple IDs, use commas to separate them.</small>
          </div>
        )}

        {selectedOption === "Ip" && (
          <div className="form-group">
            <label>Instance Public IPs</label>
            <input
              type="text"
              className="form-control"
              value={instanceIps}
              onChange={(e) => setInstanceIps(e.target.value)}
              placeholder="Enter IPs separated by commas"
              required
              disabled={!selectedOption} // Disabled until Termination Option is selected
            />
            <small className="form-note">Note: For multiple IPs, use commas to separate them.</small>
          </div>
        )}

        {/* Submit Button */}
        {/* <button
          type="submit"
          className="btn btn-danger"
          disabled={!selectedOption || (!instanceNames && !instanceIds && !instanceIps)}
        >
          Terminate Instance
        </button> */}
        <button
            type="submit"
            className={`btn btn-danger ${loading ? "btn-loading" : ""}`}
            disabled={!selectedOption || (!instanceNames && !instanceIds && !instanceIps) || loading}
          >
            {loading ? (
              <span className="loading-spinner"></span>
            ) : success ? (
              <span className="btn-success">✔</span>
            ) : (
              "Terminate Instance"
            )}
          </button>
      </form>
      {popupMessage && <div className="popup-message">{popupMessage}</div>}
    </div>
    </div>
  );
}

export default DoTerminateInstance;
