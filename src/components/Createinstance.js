import React, { useState } from "react";
import "../static/css/createinstance.css";

function CreateInstance() {
  const [processName, setProcessName] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [instanceName, setInstanceName] = useState("");
  const [instanceType, setInstanceType] = useState("");
  const [selectedAmi, setSelectedAmi] = useState("");
  const [customAmi, setCustomAmi] = useState("");
  const [selectedSubnet, setSelectedSubnet] = useState("");
  const [selectedSecurityGroup, setSelectedSecurityGroup] = useState("");
  const [selectedIp, setSelectedIp] = useState("");
  const [machineCount, setMachineCount] = useState("");
  const [inputCount, setInputCount] = useState("");
  const [selectedCountOption, setSelectedCountOption] = useState("");

  const accounts = ["Account 1", "Account 2", "Account 3"];
  const regions = ["Region 1", "Region 2", "Region 3"];
  const instanceTypes = ["t2.micro", "t2.small", "t2.medium"];
  const amis = ["AMI 1", "AMI 2", "AMI 3", "Others"];
  const subnets = ["Subnet 1", "Subnet 2", "Subnet 3"];
  const securityGroups = ["Security Group 1", "Security Group 2", "Security Group 3"];
  const ipOptions = ["IP 1", "IP 2", "IP 3"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      processName,
      selectedAccount,
      selectedRegion,
      instanceName,
      instanceType,
      ami: selectedAmi === "Others" ? customAmi : selectedAmi,
      subnet: selectedSubnet,
      securityGroup: selectedSecurityGroup,
      ip: selectedIp,
      count: selectedCountOption === "MachineCount" ? machineCount : inputCount,
    };
    console.log(formData);
  };

  return (
    
    <div className="create-instance-wrapper">
      <h2>Create Instance</h2>
      <form className="create-instance-form" onSubmit={handleSubmit}>
        {/* First Row */}
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

        {/* Second Row */}
        <div className="form-row">
          {/* Instance Name Input */}
          <div className="form-group">
            <label htmlFor="instanceName">Instance Name</label>
            <input
              type="text"
              id="instanceName"
              className="form-control"
              placeholder="Enter instance name"
              value={instanceName}
              onChange={(e) => setInstanceName(e.target.value)}
              required
            />
          </div>

          {/* Instance Type Dropdown */}
          <div className="form-group">
            <label htmlFor="instanceType">Instance Type</label>
            <select
              id="instanceType"
              className="form-control"
              value={instanceType}
              onChange={(e) => setInstanceType(e.target.value)}
              required
            >
              <option value="">Select Instance Type</option>
              {instanceTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* AMI ID Dropdown */}
          <div className="form-group">
            <label htmlFor="ami">AMI ID</label>
            <select
              id="ami"
              className="form-control"
              value={selectedAmi}
              onChange={(e) => setSelectedAmi(e.target.value)}
              required
            >
              <option value="">Select AMI</option>
              {amis.map((ami, index) => (
                <option key={index} value={ami}>
                  {ami}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Custom AMI Input */}
        {selectedAmi === "Others" && (
          <div className="form-row custom-ami-row">
            <div className="form-group">
              <label htmlFor="customAmi">Custom AMI</label>
              <input
                type="text"
                id="customAmi"
                className="form-control"
                placeholder="Enter custom AMI ID"
                value={customAmi}
                onChange={(e) => setCustomAmi(e.target.value)}
                required
              />
            </div>
          </div>
        )}

        {/* Third Row: Subnet, Security Group, IP, and Count Selection */}
        <div className="form-row">
          {/* Subnet Dropdown */}
          <div className="form-group">
            <label htmlFor="subnet">Subnet</label>
            <select
              id="subnet"
              className="form-control"
              value={selectedSubnet}
              onChange={(e) => setSelectedSubnet(e.target.value)}
              required
            >
              <option value="">Select Subnet</option>
              {subnets.map((subnet, index) => (
                <option key={index} value={subnet}>
                  {subnet}
                </option>
              ))}
            </select>
          </div>

          {/* Security Group Dropdown */}
          <div className="form-group">
            <label htmlFor="securityGroup">Security Group</label>
            <select
              id="securityGroup"
              className="form-control"
              value={selectedSecurityGroup}
              onChange={(e) => setSelectedSecurityGroup(e.target.value)}
              required
            >
              <option value="">Select Security Group</option>
              {securityGroups.map((group, index) => (
                <option key={index} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>

          {/* IP Dropdown */}
          <div className="form-group">
            <label htmlFor="ip">IP</label>
            <select
              id="ip"
              className="form-control"
              value={selectedIp}
              onChange={(e) => setSelectedIp(e.target.value)}
              required
            >
              <option value="">Select IP</option>
              {ipOptions.map((ip, index) => (
                <option key={index} value={ip}>
                  {ip}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Machine Count or Input Count Radio Buttons */}
        <div className="form-row count-row ">
          <div className="form-group">
            <label>Count Type</label>
            <div>
              <input
                type="radio"
                id="machineCount"
                name="countOption"
                value="MachineCount"
                onChange={() => setSelectedCountOption("MachineCount")}
                checked={selectedCountOption === "MachineCount"}
              />
              <label htmlFor="machineCount">Machine Count</label>
              <input
                type="radio"
                id="inputCount"
                name="countOption"
                value="InputCount"
                onChange={() => setSelectedCountOption("InputCount")}
                checked={selectedCountOption === "InputCount"}
              />
              <label htmlFor="inputCount">Input Count</label>
            </div>
          </div>
        </div>


        {/* Count Input Fields */}
        {selectedCountOption && (
          <div className="form-row hhh">
            <div className="form-group ">
              <label htmlFor="count">{selectedCountOption} Value</label>
              <input
                type="number"
                id="count"
                className="form-control"
                placeholder={`Enter ${selectedCountOption}`}
                value={selectedCountOption === "MachineCount" ? machineCount : inputCount}
                onChange={(e) =>
                  selectedCountOption === "MachineCount"
                    ? setMachineCount(e.target.value)
                    : setInputCount(e.target.value)
                }
                required
              />
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateInstance;
