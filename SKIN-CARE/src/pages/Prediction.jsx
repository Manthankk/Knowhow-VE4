import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Camera, Upload, RefreshCw } from 'lucide-react';

const Prediction = () => {
  const [isUsingWebcam, setIsUsingWebcam] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const webcamRef = useRef(null);

  const captureImage = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setCapturedImage(imageSrc);
      setIsUsingWebcam(false);
    }
  }, [webcamRef]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCapturedImage(event.target.result); 
      };
      reader.readAsDataURL(file); 
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Skin Analysis</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Capture or Upload Image</h2>

          {!isUsingWebcam && !capturedImage && (
            <div className="space-y-4">
              <button
                onClick={() => setIsUsingWebcam(true)}
                className="w-full flex items-center justify-center gap-2 bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
              >
                <Camera className="h-5 w-5" />
                Use Webcam
              </button>

              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImage}
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition cursor-pointer"
                >
                  <Upload className="h-5 w-5" />
                  Upload Image
                </label>
              </div>
            </div>
          )}

          {isUsingWebcam && (
            <div className="space-y-4">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="w-full rounded-lg"
              />
              <div className="flex gap-4">
                <button
                  onClick={captureImage}
                  className="flex-1 flex items-center justify-center gap-2 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
                >
                  <Camera className="h-5 w-5" />
                  Capture
                </button>
                <button
                  onClick={() => setIsUsingWebcam(false)}
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {capturedImage && (
            <div className="space-y-4">
              <img
                src={capturedImage} 
                alt="Captured"
                className="w-full rounded-lg"
              />
              <button
                onClick={() => {
                  setCapturedImage(null);
                  setIsUsingWebcam(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                <RefreshCw className="h-5 w-5" />
                Retake
              </button>
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Analysis Results</h2>
          {!capturedImage ? (
            <div className="text-center text-gray-500 py-12">
              Capture or upload an image to see the analysis results
            </div>
          ) : (
            <div className="space-y-6">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Prediction;