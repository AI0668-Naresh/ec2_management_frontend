import React, { useState } from "react";
import '../static/css/createinstance.css';

function Createinstance() {
  const [processName, setProcessName] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const accounts = ["Account 1", "Account 2", "Account 3"]; // Replace with actual accounts
  const regions = ["Region 1", "Region 2", "Region 3"]; // Replace with actual regions

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      processName,
      selectedAccount,
      selectedRegion,
    });
    // Add your form submission logic here
  };

  return (
    <div className="create-instance-wrapper">
      <h2>Create Instance</h2>
      <form className="create-instance-form" onSubmit={handleSubmit}>
        <div className="form-row">
          {/* Process Name Input */}
          <div className="form-group">
            <label htmlFor="processName">Process Name</label>
            <input
              type="text"
              id="processName"
              className="form-control"
              placeholder="Enter process name"
              value={processName}
              onChange={(e) => setProcessName(e.target.value)}
              required
            />
          </div>

          {/* Account Dropdown */}
          <div className="form-group">
            <label htmlFor="account">Account</label>
            <select
              id="account"
              className="form-control"
              value={selectedAccount}
              onChange={(e) => setSelectedAccount(e.target.value)}
              required
            >
              <option value="">Select Account</option>
              {accounts.map((account, index) => (
                <option key={index} value={account}>
                  {account}
                </option>
              ))}
            </select>
          </div>

          {/* Region Dropdown */}
          <div className="form-group">
            <label htmlFor="region">Region</label>
            <select
              id="region"
              className="form-control"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              required
            >
              <option value="">Select Region</option>
              {regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Createinstance;
