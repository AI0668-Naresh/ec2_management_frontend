import React, { useState } from "react";
import axios from "axios";
import "../static/css/docreateinstance.css"; // New CSS for DoCreateInstance
import Cookies from "js-cookie"; // Assuming you have js-cookie installed and imported

function DoCreateInstance( {prefix_uri, user}) {
  const [processName, setProcessName] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [instanceName, setInstanceName] = useState("");
  const [selectedIp, setSelectedIp] = useState("");
  const [selectedCountOption, setSelectedCountOption] = useState("");
  const [machineCount, setMachineCount] = useState("");
  const [inputCount, setInputCount] = useState("");
  const [selectedMachineInsertFormat, setMachineInsertFormat] = useState("");
  const [imageId, setImageId] = useState("");
  const token = Cookies.get("access_token");

  const accounts = ["Account_900", "Account_106", "Account_5646", "Account_365"];
  const regions = ["NYC3"];
  const machineInsertFormats = ["xxxx", "yyy", "zzz"];

  const username_v = Cookies.get("username");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username_v,
      processName,
      selectedAccount,
      selectedRegion,
      instanceName,
      ip: selectedIp,
      machineInsertFormat: selectedMachineInsertFormat,
      count: selectedCountOption === "MachineCount" ? machineCount : inputCount,
      imageId,
      // "gflags":"ygghgfh"
    };

    try {
      console.log(`${prefix_uri}launch_digitalocean_instances`, data);
      const response = await axios.post(`${prefix_uri}launch_digitalocean_instances`, data,{headers: {
        Authorization: `Bearer ${token}`,
      },});
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (e, nextElement) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      nextElement?.focus();  // Focus the next element
      if (nextElement) window.scrollTo(0, nextElement.offsetTop - 10);  // Scroll the page a little
    }
  };

  return (
    <div className="create-instance-wrapper">
      <h2>Create Instance</h2>
      <form className="create-instance-form" onSubmit={handleSubmit}>
        {/* Process Name */}
        <div className="form-group">
          <label>Process Name</label>
          <select
            className="form-control"
            value={processName}
            onChange={(e) => setProcessName(e.target.value)}
            required
            onKeyDown={(e) => handleKeyDown(e, document.getElementById("account"))}
          >
            <option value="">Select Process Name</option>
            <option value="Process 1">Process 1</option>
            <option value="Process 2">Process 2</option>
          </select>
        </div>

        {/* Account */}
        <div className="form-group">
          <label>Account</label>
          <select
            className="form-control"
            value={selectedAccount}
            onChange={(e) => setSelectedAccount(e.target.value)}
            required
            disabled={!processName}
            id="account"
            onKeyDown={(e) => handleKeyDown(e, document.getElementById("region"))}
          >
            <option value="">Select Account</option>
            {accounts.map((account) => (
              <option key={account} value={account}>
                {account}
              </option>
            ))}
          </select>
        </div>

        {/* Region */}
        <div className="form-group">
          <label>Region</label>
          <select
            className="form-control"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            required
            disabled={!selectedAccount}
            id="region"
            onKeyDown={(e) => handleKeyDown(e, document.getElementById("instanceName"))}
          >
            <option value="">Select Region</option>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        {/* Instance Name */}
        <div className="form-group">
          <label>Instance Name</label>
          <input
            type="text"
            className="form-control"
            value={instanceName}
            onChange={(e) => setInstanceName(e.target.value)}
            required
            disabled={!selectedRegion}
            id="instanceName"
          />
        </div>

        {/* Machine Insert Format */}
        <div className="form-group" id="machineInsertFormat">
          <label>Machine Insert Format</label>
          <select
            className="form-control"
            value={selectedMachineInsertFormat}
            onChange={(e) => setMachineInsertFormat(e.target.value)}
            required
            disabled={!instanceName}
            onKeyDown={(e) => handleKeyDown(e, document.getElementById("imageId"))}
          >
            <option value="">Select Machine Insert Format</option>
            {machineInsertFormats.map((format) => (
              <option key={format} value={format}>
                {format}
              </option>
            ))}
          </select>
        </div>

        {/* Image ID */}
        <div className="form-group" id="imageId">
          <label>Image ID</label>
          <input
            type="text"
            className="form-control"
            value={imageId}
            onChange={(e) => setImageId(e.target.value)}
            required
            disabled={!selectedMachineInsertFormat}
          />
        </div>

        {/* Count Option */}
        <div className="form-group" id="countOption">
          <label>Count Option</label>
          <div>
            <label>
              <input
                type="radio"
                name="countOption"
                value="MachineCount"
                checked={selectedCountOption === "MachineCount"}
                onChange={(e) => setSelectedCountOption(e.target.value)}
                disabled={!imageId}
              />
              Machine Count
            </label>
            <label className="ml-3">
              <input
                type="radio"
                name="countOption"
                value="InputCount"
                checked={selectedCountOption === "InputCount"}
                onChange={(e) => setSelectedCountOption(e.target.value)}
                disabled={!imageId}
              />
              Input Count
            </label>
          </div>
          {selectedCountOption === "MachineCount" && (
            <input
              type="number"
              className="form-control mt-2"
              placeholder="Enter Machine Count"
              value={machineCount}
              onChange={(e) => setMachineCount(e.target.value)}
              required
              disabled={!selectedCountOption || selectedCountOption !== "MachineCount"}
            />
          )}
          {selectedCountOption === "InputCount" && (
            <input
              type="number"
              className="form-control mt-2"
              placeholder="Enter Input Count"
              value={inputCount}
              onChange={(e) => setInputCount(e.target.value)}
              required
              disabled={!selectedCountOption || selectedCountOption !== "InputCount"}
            />
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success" disabled={!instanceName || !imageId}>
          Launch Instance
        </button>
      </form>
    </div>
  );
}

export default DoCreateInstance;
