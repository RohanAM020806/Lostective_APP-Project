import React, { useState } from "react";
import "../ReportForm.css";

const ReportFoundForm: React.FC = () => {
  const [itemName, setItemName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    const token = localStorage.getItem("token");
    if (!token) {
      setStatus("❌ You must log in first.");
      return;
    }

    const formData = new FormData();
    formData.append("item_name", itemName);
    formData.append("location", location);
    formData.append("description", description);
    formData.append("contact_info", contactInfo || "Not provided");
    formData.append("date", new Date().toISOString().split("T")[0]); // YYYY-MM-DD
    formData.append("time", new Date().toLocaleTimeString()); // e.g. 10:45:23 AM
    if (image) formData.append("image", image);

    try {
      const res = await fetch("http://localhost:8000/api/report_found", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        data = { detail: text };
      }

      console.log("Backend response:", data);

      if (res.ok) {
        setStatus("✅ Found item reported successfully!");
        setItemName("");
        setLocation("");
        setDescription("");
        setContactInfo("");
        setImage(null);
      } else {
        if (Array.isArray(data.detail)) {
          const msg = data.detail
            .map((err: any) => `${err.loc?.join(".") || "field"}: ${err.msg}`)
            .join("; ");
          setStatus("❌ " + msg);
        } else if (typeof data.detail === "object") {
          setStatus("❌ " + JSON.stringify(data.detail));
        } else {
          setStatus("❌ " + (data.detail || "Failed to submit."));
        }
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to submit found item.");
    }
  };

  return (
    <div className="report-form-container">
      <h1>Report a Found Item</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>What did you find?</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="e.g., Blue backpack"
            required
          />
        </div>

        <div className="form-group">
          <label>Where did you find it?</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., On a bench at Main Street Station"
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the item and its contents if applicable."
          />
        </div>

        <div className="form-group">
          <label>Contact Info</label>
          <input
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            placeholder="Email or phone number"
            required
          />
        </div>

        <div className="form-group">
          <label>Upload a Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Found Report
        </button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default ReportFoundForm;
