import React, { useState, useEffect } from "react";

// --- Types ---
interface LostFoundItem {
  id: string;
  name: string;
  description: string;
  status: "Lost" | "Found";
  category: string;
  location: string;
  date: string;
  image_url?: string;
}

// --- Claim Modal ---
const ClaimModal: React.FC<{ item: LostFoundItem; onClose: () => void }> = ({ item, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [proof, setProof] = useState("");

  const handleSubmit = async () => {
    if (!name || !email || !phone || !proof) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      const res = await fetch("http://localhost:8000/api/claim_item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item_id: item.id,
          name,
          email,
          phone,
          proof,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Claim submitted successfully! We'll contact you soon.");
        onClose();
      } else {
        alert(data.detail || "Error submitting claim");
      }
    } catch (err) {
      alert("Network error submitting claim");
      console.error(err);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "24px",
          borderRadius: "16px",
          width: "400px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ marginBottom: "12px" }}>Claim "{item.name}"</h2>
        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
        />
        <textarea
          placeholder="Describe proof of ownership..."
          value={proof}
          onChange={(e) => setProof(e.target.value)}
          style={{ ...inputStyle, height: "80px" }}
        />
        <button onClick={handleSubmit} style={submitBtn}>
          Submit Claim
        </button>
        <button onClick={onClose} style={cancelBtn}>
          Cancel
        </button>
      </div>
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px 12px",
  borderRadius: "8px",
  border: "1px solid #D1D5DB",
  marginBottom: "10px",
};

const submitBtn: React.CSSProperties = {
  width: "100%",
  background: "#4F46E5",
  color: "white",
  padding: "10px",
  borderRadius: "8px",
  border: "none",
  marginBottom: "8px",
  cursor: "pointer",
};

const cancelBtn: React.CSSProperties = {
  width: "100%",
  background: "#E5E7EB",
  color: "#111827",
  padding: "8px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
};

// --- Item Card ---
const ItemCard: React.FC<{ item: LostFoundItem; onClick: () => void }> = ({ item, onClick }) => (
  <div
    onClick={onClick}
    style={{
      width: "280px",
      background: "white",
      borderRadius: "16px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      overflow: "hidden",
      transition: "transform 0.2s",
      cursor: "pointer",
    }}
  >
    <div style={{ position: "relative", height: "200px" }}>
      {item.image_url ? (
        <img
          src={`http://localhost:8000${item.image_url}`}
          alt={item.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <div
          style={{
            background: "#F3F4F6",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9CA3AF",
          }}
        >
          No Image
        </div>
      )}
      <span
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          background: item.status === "Found" ? "#F59E0B" : "#EF4444",
          color: "white",
          padding: "4px 10px",
          borderRadius: "12px",
          fontSize: "12px",
          fontWeight: 600,
        }}
      >
        {item.status}
      </span>
    </div>
    <div style={{ padding: "16px" }}>
      <h3 style={{ marginBottom: "6px", fontWeight: 600 }}>{item.name}</h3>
      <p style={{ color: "#6B7280", fontSize: "14px" }}>
        {item.description.slice(0, 80)}...
      </p>
      <p style={{ fontSize: "13px", color: "#9CA3AF", marginTop: "8px" }}>
        📍 {item.location || "Unknown"}
      </p>
      <p style={{ fontSize: "13px", color: "#9CA3AF" }}>📅 {item.date}</p>
    </div>
  </div>
);

// --- Main Page ---
const LostFoundPage: React.FC = () => {
  const [items, setItems] = useState<LostFoundItem[]>([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"All" | "Lost" | "Found">("All");
  const [claimingItem, setClaimingItem] = useState<LostFoundItem | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/items", { credentials: "include" })
      .then((res) => res.json())
      .then(setItems)
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  const filtered = items.filter(
    (item) =>
      (status === "All" || item.status === status) &&
      (item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "linear-gradient(135deg, #4338CA, #6366F1)",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "40px", fontWeight: 700 }}>Lostective</h1>
        <p style={{ maxWidth: "600px", margin: "12px auto 24px" }}>
          Your University Lost & Found Portal — help reunite lost items with their owners.
        </p>
        <input
          type="text"
          placeholder="Search for items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px 16px",
            borderRadius: "8px",
            border: "none",
            width: "300px",
            outline: "none",
          }}
        />
      </div>

      {/* Filter Tabs */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        {["All", "Lost", "Found"].map((t) => (
          <button
            key={t}
            onClick={() => setStatus(t as "All" | "Lost" | "Found")}
            style={{
              margin: "0 8px",
              padding: "8px 16px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              background: status === t ? "#4F46E5" : "#E5E7EB",
              color: status === t ? "white" : "#111827",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Items */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "24px",
          padding: "20px",
        }}
      >
        {filtered.map((item) => (
          <ItemCard key={item.id} item={item} onClick={() => setClaimingItem(item)} />
        ))}
      </div>

      {claimingItem && (
        <ClaimModal item={claimingItem} onClose={() => setClaimingItem(null)} />
      )}
    </div>
  );
};

export default LostFoundPage;
