import React, { useState } from 'react';

const ImageUpload = ({image}) => {
	const [ selectedFiles, setSelectedFiles ] = useState([]);

	const imageChangeHandler = (e) => {
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file)
			);
		}
	};

	const previewPhotos = (source) => {
		if(image) return 
		return source.map((photo) => {
			return (
				<img src={photo} alt={photo} key={photo} />
			);
		});
	};

	return (
		<div className="imageUpload">
             <div className="result">{previewPhotos(selectedFiles)}</div>
            <input type="file" id="file" multiple onChange={imageChangeHandler} />
            <label htmlFor="file" className="label">
                    + ADD IMAGE
            </label>
        </div>
	);
};

export default ImageUpload;