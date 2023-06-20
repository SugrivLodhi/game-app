// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { uploadImage } from './actions';

// const UploadImage = ({ uploadImage }) => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       const imagePath = reader.result;
//       uploadImage(imagePath);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   return 
//     <div>
//       <input type="file" onChange={handleImageUpload} />
//     </div>
//   );
// };

// export default connect(null, { uploadImage })(UploadImage);