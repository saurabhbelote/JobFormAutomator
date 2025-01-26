"use client";
import React, { useState } from "react";
import { useCertificateStore } from "@/app/store";

export default function CertificatesSection() {
  const { certificates, addCertificate, updateCertificate } = useCertificateStore();
  const [certificate, setCertificate] = useState("");
  const [editCertId, setEditCertId] = useState<string | null>(null);

  const handleCertificateSubmit = () => {
    if (!certificate.trim()) {
      alert("Certificate name cannot be empty!");
      return;
    }
    if (editCertId) {
      updateCertificate(editCertId, certificate);
      setEditCertId(null);
    } else {
      addCertificate(certificate);
    }

    setCertificate(""); // Reset input
  };

  const handleEditClick = (id: string, name: string) => {
    setEditCertId(id);
    setCertificate(name);
  };

  const handleDeleteClick = (id: string) => {
    // Filter out the certificate (requires delete logic in store)
    useCertificateStore.setState((state) => ({
      certificates: state.certificates.filter((cert) => cert.id !== id),
    }));
  };

  return (
    <div className="mb-2">
      <h4>Certificates</h4>
      <input
        type="text"
        placeholder="Certificate Name"
        value={certificate}
        onChange={(e) => setCertificate(e.target.value)}
      />
      <button onClick={handleCertificateSubmit}>
        {editCertId ? "Update Certificate" : "Add Certificate"}
      </button>
    </div>
  );
}
