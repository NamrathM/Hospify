import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Hospify <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
        Welcome to Hospify, your reliable online healthcare platform. 
          Our goal is to offer accessible and personalized medical services to individuals
          in need of expert advice and treatment. 
          By using our platform, you agree to the terms specified 
          in our Privacy Policy and Terms of Service.


        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Your privacy is paramount to us. Our Privacy Policy outlines how we
          collect, use, and protect your personal and medical information. We
          ensure secure data handling, and you can trust that your information
          is treated with the utmost confidentiality.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          When using Hospify, you agree to our Terms of Service. This
          includes guidelines for using our platform, interacting with doctors,
          and the responsibilities of both parties. It's essential to understand
          these terms to ensure a smooth experience for all users.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
          Our platform connects you with expert doctors who provide online
          consultations. These consultations are not a replacement for in-person
          medical visits but serve as a convenient option for medical advice,
          prescriptions, and guidance. It's crucial to provide accurate and
          complete information to receive the best possible care.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        Hospify aims to make healthcare more accessible and convenient. 
        You can select a specialist, book an appointment, and have a virtual consultation all in one place. 
        Our experts provide personalized advice and treatment plans to suit your needs. 
        In case of emergencies, please seek immediate assistance from your local medical facility.






        </p>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Hospify. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
