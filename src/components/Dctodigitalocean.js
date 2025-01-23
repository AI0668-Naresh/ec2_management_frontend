import React, { useState } from "react";
import "../static/css/doterminateinstance.css";
import axios from "axios";

function Dctodigitalocean() {
  const [mongoServer, setMongoServer] = useState("");
  const [websiteCode, setWebsiteCode] = useState("");
  const [inputCount, setInputCount] = useState(""); // Set initial value as an empty string
  const [region, setRegion] = useState("");
  const [imageId, setImageId] = useState("");
  const [instanceName, setInstanceName] = useState("");
  const [machineFormat, setMachineFormat] = useState("");
  const [processName, setProcessName] = useState("");

  const mongoServers = ["Mongo_1", "Mongo_2", "Mongo_3"];
  const websiteCodes = ["Code_1", "Code_2", "Code_3"];
  const regions = ["us-east-1", "us-west-1", "eu-central-1"];
  const machineFormats = ["Small", "Medium", "Large"];
  const processNames = ["Node.js", "Python", "Java", "PHP"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      mongoServer,
      websiteCode,
      inputCount,
      region,
      imageId,
      instanceName,
      machineFormat,
      processName,
    };

    try {
      const response = await axios.post("http://192.168.1.109:5000/digitalocean/launch_instance", data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputCountChange = (e) => {
    const value = e.target.value;
    // Update the state with the input value, ensuring it is a valid number (empty allowed)
    if (value === "" || /^[1-9][0-9]*$/.test(value)) {
      setInputCount(value); // Allow only non-negative integers or an empty string
    }
  };

  return (
    <div className="terminate-instance-wrapper">
      <h2>Launch DigitalOcean Instance</h2>
      <form className="terminate-instance-form" onSubmit={handleSubmit}>
        {/* Mongo Server */}
        <div className="form-group">
          <label>Mongo Server</label>
          <select
            className="form-control"
            value={mongoServer}
            onChange={(e) => setMongoServer(e.target.value)}
            required
          >
            <option value="">Select Mongo Server</option>
            {mongoServers.map((server) => (
              <option key={server} value={server}>
                {server}
              </option>
            ))}
          </select>
          <small className="form-note">Select the Mongo Server for your project.</small>
        </div>

        {/* Website Code */}
        <div className="form-group">
          <label>Website Code</label>
          <select
            className="form-control"
            value={websiteCode}
            onChange={(e) => setWebsiteCode(e.target.value)}
            required
            disabled={!mongoServer} // Disabled until Mongo Server is selected
          >
            <option value="">Select Website Code</option>
            {websiteCodes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
          <small className="form-note">Select the website code for your project.</small>
        </div>

        {/* Input Count */}
        <div className="form-group">
          <label>Input Count</label>
          <input
            type="number"
            className="form-control"
            value={inputCount}
            onChange={handleInputCountChange}
            required
            min="1"
            disabled={!websiteCode} // Disabled until Website Code is selected
            placeholder="Enter the number of inputs required"
          />
          <small className="form-note">Enter the number of inputs required.</small>
        </div>

        {/* Region */}
        <div className="form-group">
          <label>Region</label>
          <select
            className="form-control"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            required
            disabled={inputCount === ""} // Disabled until Input Count is provided
          >
            <option value="">Select Region</option>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        {/* Image ID */}
        <div className="form-group">
          <label>Image ID</label>
          <input
            type="text"
            className="form-control"
            value={imageId}
            onChange={(e) => setImageId(e.target.value)}
            placeholder="Enter Image ID"
            required
            disabled={!region} // Disabled until Region is selected
          />
        </div>

        {/* Instance Name */}
        <div className="form-group">
          <label>Instance Name</label>
          <input
            type="text"
            className="form-control"
            value={instanceName}
            onChange={(e) => setInstanceName(e.target.value)}
            placeholder="Enter Instance Name"
            required
            disabled={!imageId} // Disabled until Image ID is entered
          />
        </div>

        {/* Machine Format */}
        <div className="form-group">
          <label>Machine Format</label>
          <select
            className="form-control"
            value={machineFormat}
            onChange={(e) => setMachineFormat(e.target.value)}
            required
            disabled={!instanceName} // Disabled until Instance Name is entered
          >
            <option value="">Select Machine Format</option>
            {machineFormats.map((format) => (
              <option key={format} value={format}>
                {format}
              </option>
            ))}
          </select>
        </div>

        {/* Process Name */}
        <div className="form-group">
          <label>Process Name</label>
          <select
            className="form-control"
            value={processName}
            onChange={(e) => setProcessName(e.target.value)}
            required
            disabled={!machineFormat} // Disabled until Machine Format is selected
          >
            <option value="">Select Process</option>
            {processNames.map((process) => (
              <option key={process} value={process}>
                {process}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-danger" disabled={!processName}>
          Launch Instance
        </button>
      </form>
    </div>
  );
}

export default Dctodigitalocean;
