

const isFormValid = (formData) => {
  console.log("is form valid called");

  if (!formData) {
    console.error("❌ formData is undefined!");
    return false;
  }

  const result = Boolean(
    formData.type &&
    formData.bhk &&
    formData.bathrooms &&
    formData.furnishing &&
    formData.status &&
    formData.listedBy &&
    formData.superBuiltup &&
    formData.carpetArea &&
    formData.maintenance &&
    formData.parking &&
    formData.projName &&
    formData.description &&
    formData.price &&
    Object.keys(formData.location).length > 0 && // check location is filled
    formData.photos.length > 0 // at least 1 photo uploaded
  );

  console.log("✅ isFormValid result:", result);
  return result;
};

export default isFormValid;
