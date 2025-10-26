import React, { useState } from "react";
import "../ReportForm.css";

const ReportLostForm: React.FC = () => {
  const [itemName, setItemName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [priority, setPriority] = useState(false);
  const [wantsCall, setWantsCall] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    // ✅ Get the token from localStorage (set during login)
    const token = localStorage.getItem("token");

    if (!token) {
      setStatus("❌ You must log in first.");
      return;
    }

    const formData = new FormData();
    formData.append("item_name", itemName);
    formData.append("description", description);
    formData.append("date", new Date().toISOString().split("T")[0]);
    formData.append("time", new Date().toLocaleTimeString());
    formData.append("location", location);
    formData.append("contact_info", contactInfo || "Not provided");
    formData.append("priority", String(priority));
    formData.append("wants_call", String(wantsCall));
    if (image) formData.append("image", image);

    try {
      const res = await fetch("http://localhost:8000/api/report_lost", {
        method: "POST",
        headers: {
          // ✅ Include the token in Authorization header
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();
      console.log("Backend response:", data);

      if (res.ok) {
        setStatus("✅ Lost item reported successfully!");
        setItemName("");
        setDescription("");
        setLocation("");
        setContactInfo("");
        setImage(null);
        setPriority(false);
        setWantsCall(false);
      } else {
        setStatus("❌ " + (data.detail || "Failed to submit."));
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to submit lost item.");
    }
  };

  return (
    <div className="report-form-container">
      <h1>Report a Lost Item</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Item Name</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="e.g., Black leather wallet"
            required
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., Central Park near the fountain"
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add details like brand, color, or identifying marks."
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

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={priority}
              onChange={(e) => setPriority(e.target.checked)}
            />{" "}
            Mark as Priority
          </label>
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={wantsCall}
              onChange={(e) => setWantsCall(e.target.checked)}
            />{" "}
            I would like to receive a call if found
          </label>
        </div>

        <div className="form-group">
          <label>Upload a Photo (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Lost Report
        </button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default ReportLostForm;
