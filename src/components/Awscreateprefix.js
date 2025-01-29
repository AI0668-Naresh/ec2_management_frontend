import React, { useState } from "react";
import "../static/css/awscreateprefix.css";
import axios from "axios";

function Awscreateprefix({user}) {
  const [accountId, setAccountId] = useState("");
  const [regionId, setRegionId] = useState("");
  const [prefixName, setPrefixName] = useState("");
  const [prefixList, setPrefixList] = useState("");
  const [addressType, setAddressType] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const accountIds = ["Account_900", "Account_106", "Account_5646", "Account_365"];
  const regionIds = ["us-east-1", "us-east-2", "us-west-1", "us-west-2"];
  const addressTypes = ["IPv4", "IPv6"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setPopupMessage("");

    const data = {
      accountId,
      regionId,
      prefixName,
      prefixList,
      addressType,
    };

    try {
      const response = await axios.post("http://192.168.1.109:5000/aws/create_prefixlist", data);
      setPopupMessage(response.data.data);
      if (response.data.message === "success") {
        setSuccess(true);
      }
        
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cont-wrap">
      <div className="create-prefix-wrapper">
        <h2>Create Prefix</h2>
        <form className="create-prefix-form" onSubmit={handleSubmit}>
          {/* Account ID */}
          <div className="form-group">
            <label>Account ID</label>
            <select
              className="form-control"
              value={accountId}
              onChange={(e) => setAccountId(e.target.value)}
              required
            >
              <option value="">Select Account ID</option>
              {accountIds.map((id) => (
                <option key={id} value={id}>
                  {id}
                </option>
              ))}
            </select>
          </div>

          {/* Region ID */}
          <div className="form-group">
            <label>Region ID</label>
            <select
              className="form-control"
              value={regionId}
              onChange={(e) => setRegionId(e.target.value)}
              required
              disabled={!accountId}
            >
              <option value="">Select Region ID</option>
              {regionIds.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          {/* Prefix Name */}
          <div className="form-group">
            <label>Prefix Name</label>
            <input
              type="text"
              className="form-control"
              value={prefixName}
              onChange={(e) => setPrefixName(e.target.value)}
              placeholder="Enter Prefix Name"
              required
              disabled={!regionId}
            />
          </div>

          {/* Prefix List */}
          <div className="form-group">
            <label>Prefix List</label>
            <input
              type="text"
              className="form-control"
              value={prefixList}
              onChange={(e) => setPrefixList(e.target.value)}
              placeholder="Enter Prefix(es)"
              required
              disabled={!prefixName}
            />
            <small className="form-note">
              Enter a single prefix or a comma-separated list of prefixes.
            </small>
          </div>

          {/* Address Type */}
          <div className="form-group">
            <label>Address Type</label>
            <select
              className="form-control"
              value={addressType}
              onChange={(e) => setAddressType(e.target.value)}
              required
              disabled={!prefixList}
            >
              <option value="">Select Address Type</option>
              {addressTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`btn btn-primary ${loading ? "btn-loading" : ""}`}
            disabled={!addressType || loading}
          >
            {loading ? (
              <span className="loading-spinner"></span>
            ) : success ? (
              <span className="btn-success">✔</span>
            ) : (
              "Create Prefix"
            )}
          </button>
        </form>
        {popupMessage && <div className="popup-message">{popupMessage}</div>}
      </div>
    </div>
  );
}

export default Awscreateprefix;
