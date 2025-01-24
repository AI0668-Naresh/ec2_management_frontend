import React, { useState } from "react";
import axios from "axios";
import "../static/css/createinstance.css";

function CreateInstance({user}) {
  const [processName, setProcessName] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [instanceName, setInstanceName] = useState("");
  const [instanceType, setInstanceType] = useState("");
  const [selectedAmi, setSelectedAmi] = useState("");
  const [customAmi, setCustomAmi] = useState("");
  const [selectedSubnet, setSelectedSubnet] = useState("");
  const [selectedSecurityGroup, setSelectedSecurityGroup] = useState("");
  const [selectedIp, setSelectedIp] = useState("");  // Removed duplicate
  const [selectedMachineInsertFormat, setMachineInsertFormat] = useState("");  // Corrected the name
  const [machineCount, setMachineCount] = useState("");
  const [inputCount, setInputCount] = useState("");
  const [selectedCountOption, setSelectedCountOption] = useState("");

  const accounts = ["Account_900", "Account_106", "Account_5646", "Account_365"];
  const regions = ["us-east-1", "us-east-2", "us-west-1", "us-west-2"];
  const instanceTypes = ["t2.medium", "t3.medium", "t3.large", "t3.xlarge", "r5.large", "r5.xlarge"];
  const amis = ["AMI 1", "AMI 2", "AMI 3", "Others"];
  const subnets = ["Subnet 1", "Subnet 2", "Subnet 3"];
  const securityGroups = ["Security Group 1", "Security Group 2", "Security Group 3"];
  const ipOptions = ["IP 1", "IP 2", "IP 3"];
  const machineInsertFormatOptions = ["xxxx", "yyy", "zzz"]; // Updated the variable name for consistency

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      processName,
      selectedAccount,
      selectedRegion,
      instanceName,
      instanceType,
      ami: selectedAmi === "Others" ? customAmi : selectedAmi,
      subnet: selectedSubnet,
      securityGroup: selectedSecurityGroup,
      ip: selectedIp,
      machineInsertFormat: selectedMachineInsertFormat, // Corrected the reference
      count: selectedCountOption === "MachineCount" ? machineCount : inputCount,
    };

    try {
      const response = await axios.post('http://192.168.1.109:5000/aws/create_instance', data);
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
          <input
            type="text"
            className="form-control"
            value={processName}
            onChange={(e) => setProcessName(e.target.value)}
            required
            onKeyDown={(e) => handleKeyDown(e, document.getElementById("account"))}
          />
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
            onKeyDown={(e) => handleKeyDown(e, document.getElementById("instanceType"))}
          />
        </div>

        {/* Instance Type */}
        <div className="form-group">
          <label>Instance Type</label>
          <select
            className="form-control"
            value={instanceType}
            onChange={(e) => setInstanceType(e.target.value)}
            required
            disabled={!instanceName}
            id="instanceType"
            onKeyDown={(e) => handleKeyDown(e, document.getElementById("ami"))}
          >
            <option value="">Select Instance Type</option>
            {instanceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* AMI */}
        <div className="form-group" id="ami">
          <label>AMI</label>
          <select
            className="form-control"
            value={selectedAmi}
            onChange={(e) => setSelectedAmi(e.target.value)}
            required
            disabled={!instanceType}
            onKeyDown={(e) => handleKeyDown(e, document.getElementById("subnet"))}
          >
            <option value="">Select AMI</option>
            {amis.map((ami) => (
              <option key={ami} value={ami}>
                {ami}
              </option>
            ))}
          </select>
          {selectedAmi === "Others" && (
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Enter Custom AMI"
              value={customAmi}
              onChange={(e) => setCustomAmi(e.target.value)}
              required
              onKeyDown={(e) => handleKeyDown(e, document.getElementById("subnet"))}
            />
          )}
        </div>

        {/* Subnet */}
        <div className="form-group" id="subnet">
          <label>Subnet</label>
          <select
            className="form-control"
            value={selectedSubnet}
            onChange={(e) => setSelectedSubnet(e.target.value)}
            required
            disabled={!selectedAmi}
            onKeyDown={(e) => handleKeyDown(e, document.getElementById("securityGroup"))}
          >
            <option value="">Select Subnet</option>
            {subnets.map((subnet) => (
              <option key={subnet} value={subnet}>
                {subnet}
              </option>
            ))}
          </select>
        </div>

        {/* Security Group */}
        <div className="form-group" id="securityGroup">
          <label>Security Group</label>
          <select
            className="form-control"
            value={selectedSecurityGroup}
            onChange={(e) => setSelectedSecurityGroup(e.target.value)}
            required
            disabled={!selectedSubnet}
            onKeyDown={(e) => handleKeyDown(e, document.getElementById("ip"))}
          >
            <option value="">Select Security Group</option>
            {securityGroups.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>

        {/* IP Address */}
        <div className="form-group" id="ip">
          <label>IP Address</label>
          <select
            className="form-control"
            value={selectedIp}
            onChange={(e) => setSelectedIp(e.target.value)}
            required
            disabled={!selectedSecurityGroup}
            onKeyDown={(e) => handleKeyDown(e, document.getElementById("countOption"))}
          >
            <option value="">Select IP Address</option>
            {ipOptions.map((ip) => (
              <option key={ip} value={ip}>
                {ip}
              </option>
            ))}
          </select>
        </div>

        {/* Machine Insert Format */}
        <div className="form-group" id="machineInsertFormat">
          <label>Machine Insert Format</label>
          <select
            className="form-control"
            value={selectedMachineInsertFormat}
            onChange={(e) => setMachineInsertFormat(e.target.value)}
            required
            disabled={!selectedSecurityGroup}
            onKeyDown={(e) => handleKeyDown(e, document.getElementById("countOption"))}
          >
            <option value="">Select Machine Insert Format</option>
            {machineInsertFormatOptions.map((format) => (
              <option key={format} value={format}>
                {format}
              </option>
            ))}
          </select>
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
                disabled={!selectedIp}
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
                disabled={!selectedIp}
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
            />
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success" disabled={!selectedCountOption}>
        Launch Instance
        </button>
      </form>
    </div>
  );
}

export default CreateInstance;
