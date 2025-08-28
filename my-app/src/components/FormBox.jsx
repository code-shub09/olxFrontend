import { useContext, useState } from "react";
import UploadPhotos from "./UploadPhotos";
import LocationForm from "./location";
import ReviewDetails from "./UserDetails";
import TypeComp from "./TypeComp";
import BHKxComp from "./BHK_Comp";
import Bathroom from "./BathroomComp";
import Furnishing from "./Furnishing";
import Builtup from "./BuiltUpArea";
import ParkingComp from "./ParkingComp";
import Description from "./DescrptionComp";
import Status from "./StatusComp";
import ListedBy from "./ListedBy";
import ProName from "./ProName";
import Maintenance from "./Maintance";
import CarpetArea from "./CarpetArea";
import PriceComp from "./PriceComp";
import ModelLoad from "./ModelLoad";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "../store/ContextApi";

function FormBox() {
  const navigate = useNavigate();
  const {setisSucces,isSuccess}=useContext(Wrapper);
  // main form data
  const [formData, setFormData] = useState({
    type: "",
    bhk: "",
    bathrooms: "",
    furnishing: "",
    status: "",
    listedBy: "",
    superBuiltup: "",
    carpetArea: "",
    maintenance: "",
    parking: "",
    projName: "",
    description: "",
    price: "",
    location: {},
    photos: [],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false); // for overlay

  // update field helper
  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // API call
  async function submitForm() {
    console.log("🚀 Fetch about to run with formData:", formData);

    const payload = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "photos") {
       
        formData.photos.forEach((p) => {
          if (p && p.file) {
            payload.append("photos", p.file); // ignore nulls
          }
        });
        
      } else if (typeof formData[key] === "object") {
        payload.append(key, JSON.stringify(formData[key]));
      } else {
        payload.append(key, formData[key]);
      }
    });

    console.log("📦 Payload ready:", [...payload.entries()]);
    setLoading(true); // show overlay when form submits


    try {
      setIsSubmitting(true);
      const response = await fetch(
        "http://localhost:5000/api/v1/user/property/sell",
        {
          method: "POST",
          body: payload,
        }
      );

      console.log("🌐 Fetch called → Response status:", response.status);

      const data = await response.json();
      setisSucces(true);
      console.log('dd',isSuccess)
      console.log("✅ Server response:", data);
      navigate("/congratulations");
      
      setFormData({
        type: "",
        bhk: "",
        bathrooms: "",
        furnishing: "",
        status: "",
        listedBy: "",
        superBuiltup: "",
        carpetArea: "",
        maintenance: "",
        parking: "",
        projName: "",
        description: "",
        price: "",
        location: {},
        photos: [],
      });
    } catch (err) {
      console.error("❌ Fetch error:", err);
    } finally {
       // hide overlay when done
       setLoading(false)
    }
  }

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.type) newErrors.type = "Type is required";
    if (!formData.bhk) newErrors.bhk = "BHK is required";
    if (!formData.bathrooms) newErrors.bathrooms = "Bathroom count is required";
    if (!formData.furnishing) newErrors.furnishing = "Furnishing is required";
    if (!formData.status) newErrors.status = "Status is required";
    if (!formData.listedBy) newErrors.listedBy = "Listed By is required";
    if (!formData.superBuiltup)
      newErrors.superBuiltup = "Super builtup area is required";
    if (!formData.projName) newErrors.projName = "Project name is required";
    if (!formData.description) newErrors.description = "Description is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      submitForm();
    }
  };

  return (
    <>
    
   
    {loading && (<ModelLoad></ModelLoad>)}
    <form onSubmit={handleSubmit}>
      <div className="form-top">
        <div><h3>SELECTED CATEGORY</h3></div>
        <div className="cate-pro">Properties / For Sale: Houses & Apartments</div>
      </div>

      <div className="form-main">
        <div className="form-main-child">
          {/* Type */}
          <TypeComp
            value={formData.type}
            error={errors.type}
            onChange={(val) => updateField("type", val)}
          />

          {/* BHK */}
          <BHKxComp
            value={formData.bhk}
            error={errors.bhk}
            onChange={(val) => updateField("bhk", val)}
          />

          {/* Bathrooms */}
          <Bathroom
            value={formData.bathrooms}
            error={errors.bathrooms}
            onChange={(val) => updateField("bathrooms", val)}
          />

          {/* Furnishing */}
          <Furnishing
            value={formData.furnishing}
            error={errors.furnishing}
            onChange={(val) => updateField("furnishing", val)}
          />

          {/* Status */}
          <Status
            value={formData.status}
            error={errors.status}
            onChange={(val) => updateField("status", val)}
          />

          {/* Listed By */}
          <ListedBy
            value={formData.listedBy}
            error={errors.listedBy}
            onChange={(val) => updateField("listedBy", val)}
          />

          {/* Super Builtup Area */}
          <Builtup
            value={formData.superBuiltup}
            error={errors.superBuiltup}
            onChange={(val) => updateField("superBuiltup", val)}
          />

          {/* Carpet Area */}
          <CarpetArea
            value={formData.carpetArea}
            error={errors.carpetArea}
            onChangex={(val) => updateField("carpetArea", val)}
          />

          {/* Maintenance */}
          <Maintenance
            value={formData.maintenance}
            error={errors.maintenance}
            onChangeX={(val) => updateField("maintenance", val)}
          />

          {/* Parking */}
          <ParkingComp
            value={formData.parking}
            error={errors.parking}
            onChange={(val) => updateField("parking", val)}
          />

          {/* Project Name */}
          <ProName
            value={formData.projName}
            error={errors.projName}
            onChangeX={(val) => updateField("projName", val)}
          />

          {/* Description */}
          <Description
            value={formData.description}
            error={errors.description}
            onChangeX={(val) => updateField("description", val)}
          />

          {/* Price */}
          <PriceComp
            value={formData.price}
            error={errors.price}
            onChangeX={(val) => updateField("price", val)}
          />
        </div>
      </div>

      {/* Photos */}
      <UploadPhotos
        photos={formData.photos}
        handlePhoto={(updatedPhotos) => updateField("photos", updatedPhotos)}
      />

      {/* Location */}
      <LocationForm
        value={formData.location}
        locationHandler={(locX) => updateField("location", locX)}
      />

      {/* Review */}
      <ReviewDetails data={formData} />

    
      <div className="postnowX">
        
      <button type="submit" disabled={isSubmitting} >
        {isSubmitting ? "Submitting..." : "POST NOW"}
      </button>
      </div>
    </form>
    </>
  );
}

export default FormBox;

