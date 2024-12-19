import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createQuotation, clearQuotationState } from '../../redux/slices/quotationSlice';
import { toast } from 'react-toastify';  
import './quotationForm.css';

const QuotationForm = () => {
  const dispatch = useDispatch();
  const { quotation, loading, error } = useSelector((state) => state.quotations);
  
  const [formData, setFormData] = useState({
    name: '',
    company_organization: '',
    email: '',
    contact: '',
    country: '',
    description: '',
    quotationOptions: {
      webDesign: false,
      webApplication: false,
      cloudSolution: false,
      otherQueries: false,
    },
  });
  
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const newErrors = {};
  
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
  
    if (!formData.company_organization.trim()) {
      newErrors.company_organization = "Company/Organization is required";
    }
  
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
  
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Contact number must be 10 digits";
    }
  
    if (!formData.country) {
      newErrors.country = "Please select a country";
    }
  
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }
  
    const checkboxValues = Object.values(formData.quotationOptions);
    if (!checkboxValues.includes(true)) {
      newErrors.quotationOptions = "At least one option must be selected";
    }
  
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      quotationOptions: { ...prev.quotationOptions, [id]: checked },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      dispatch(createQuotation(formData));

  
      toast.success("Your Quotation submitted !");

     
      setFormData({
        name: '',
        company_organization: '',
        email: '',
        contact: '',
        country: '',
        description: '',
        quotationOptions: {
          webDesign: false,
          webApplication: false,
          cloudSolution: false,
          otherQueries: false,
        },
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  useEffect(() => {
    if (quotation && !loading && !error) {
     
      dispatch(clearQuotationState());
    }
    if (error) {
      toast.error(`Error: ${error}`);
    }
  }, [quotation, loading, error, dispatch]);

  return (
    <Fragment>
      <section className="quotation-form-container-wrapper">
        <div className="mx-5 px-5 quotation-form-container">
          <h2 className="text-primary quotation-form-header">Request for Quotation</h2>
          <p className="quotation-form-title">
            The purpose of this form is to give us your feedback, comments, reports, or problems.
            Your opinions are highly valued, as they help us improve our services.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 col-lg-6">
                <label htmlFor="name" className="quotation-form-label">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="respon-contact"
                  aria-label="Your Name"
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              <div className="col-12 col-lg-6">
                <label htmlFor="company" className="quotation-form-label">Company/Organization</label>
                <input
                  id="company"
                  type="text"
                  name="company_organization"
                  value={formData.company_organization}
                  onChange={handleChange}
                  placeholder="Company/Organization"
                  className="respon-contact"
                  aria-label="Company or Organization"
                />
                {errors.company_organization && <span className="error">{errors.company_organization}</span>}
              </div>

              <div className="col-12 col-lg-6">
                <label htmlFor="email" className="quotation-form-label">Your Email ID</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email ID"
                  className="respon-contact"
                  aria-label="Your Email ID"
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="col-12 col-lg-6">
                <label htmlFor="contact" className="quotation-form-label">Contact No.</label>
                <input
                  id="contact"
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Contact No."
                  className="respon-contact"
                  aria-label="Contact Number"
                />
                {errors.contact && <span className="error">{errors.contact}</span>}
              </div>

              <div className="col-12 col-lg-6">
                <label htmlFor="country" className="quotation-form-label">Your Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="respon-contact"
                  aria-label="Your Country"
                >
                  <option value="">Select Your Country</option>
                  <option value="India">India</option>
                  <option value="UK">UK</option>
                  <option value="Australia">Australia</option>
                  <option value="USA">USA</option>
                </select>
                {errors.country && <span className="error">{errors.country}</span>}
              </div>

              <div className="col-12">
                <label htmlFor="description" className="quotation-form-label">Your Requirement</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="text_area"
                  placeholder="Please Describe Your Requirement"
                  aria-label="Requirement Description"
                />
                {errors.description && <span className="error">{errors.description}</span>}
              </div>

              <div className="col-12 mt-3">
                <h6>Need for Quotation?</h6>
                <div className="d-flex flex-wrap">
                  <div className="form-check me-3">
                    <input
                      type="checkbox"
                      id="webDesign"
                      className="form-check-input"
                      checked={formData.quotationOptions.webDesign}
                      onChange={handleCheckboxChange}
                      aria-label="Web Designing"
                    />
                    <label htmlFor="webDesign" className="form-check-label">Web Designing</label>
                  </div>
                  <div className="form-check me-3">
                    <input
                      type="checkbox"
                      id="webApplication"
                      className="form-check-input"
                      checked={formData.quotationOptions.webApplication}
                      onChange={handleCheckboxChange}
                      aria-label="Mobile Application"
                    />
                    <label htmlFor="webApplication" className="form-check-label">Mobile Application</label>
                  </div>
                  <div className="form-check me-3">
                    <input
                      type="checkbox"
                      id="cloudSolution"
                      className="form-check-input"
                      checked={formData.quotationOptions.cloudSolution}
                      onChange={handleCheckboxChange}
                      aria-label="Cloud Solution"
                    />
                    <label htmlFor="cloudSolution" className="form-check-label">Cloud Solution</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="otherQueries"
                      className="form-check-input"
                      checked={formData.quotationOptions.otherQueries}
                      onChange={handleCheckboxChange}
                      aria-label="Other Queries"
                    />
                    <label htmlFor="otherQueries" className="form-check-label">Other Queries</label>
                  </div>
                </div>
                {errors.quotationOptions && <p className="error">{errors.quotationOptions}</p>}
              </div>

              <div className="text-center mt-4">
                <button type="submit" className="btn btn-primary px-5" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default QuotationForm;
