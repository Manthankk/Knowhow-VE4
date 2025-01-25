import React, { useState } from 'react';
import { ArrowRight, Edit, Save } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';

const HealthProfile = () => {
  const [step, setStep] = useState(1); 
  const [formData, setFormData] = useState({
    first_name: '',     
    last_name: '',     
    email: 'sdfsadf@',
    phone: '',     
    age: '',     
    dob: '',     
    gender: '',     
    blood_group: 'o+',     
    height: '',     
    weight: '',     
    skin_color: 'medium',     
    physically_abled: '',    
    lifestyle: '',     
    address: '',     
    password: '',     
    city: '',                
    state: '',               
    zip_code: '',            
  });
  
  const [isEditing, setIsEditing] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (step === 1) {
      if (
        !formData.first_name ||
        !formData.last_name ||
        !formData.phone ||
        !formData.age ||
        !formData.dob ||
        !formData.gender ||
        !formData.height ||
        !formData.weight ||
        !formData.lifestyle ||
        !formData.skin_color ||
        !formData.physicalDisability
      ) {
        alert('Please fill out all required fields.');
        return;
      }
    }
    setStep(step + 1);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/customers", formData);
      if(response.data.success) {
        toast.success("User successfully  registered")
        navigate("/landing-page")
      }
    } catch (error) {
      
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
       
        {step !== 3 && (
          <div>
            <h2 className="text-center text-3xl font-extrabold text-teal-900">
              {step === 1 ? 'Personal Information' : 'Medical History'}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Step {step} of 2
            </p>
          </div>
        )}

        {step === 1 && (
          <form className="mt-8 space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>
            <div>
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                  password
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">
                Blood Group
              </label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={formData.blood_group}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="">Select blood group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                Height (in cm)
              </label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                Weight (in kg)
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="lifestyle" className="block text-sm font-medium text-gray-700">
                Lifestyle
              </label>
              <select
                id="lifestyle"
                name="lifestyle"
                value={formData.lifestyle}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="">Select lifestyle</option>
                <option value="active">Active</option>
                <option value="moderately active">Moderately Active</option>
                <option value="not active">Not Active</option>
              </select>
            </div>

            <div>
              <label htmlFor="skinColor" className="block text-sm font-medium text-gray-700">
                Skin Color
              </label>
              <select
                id="skinColor"
                name="skinColor"
                value={formData.skin_color}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="">Select skin color</option>
                <option value="fair">Fair</option>
                <option value="light">Light</option>
                <option value="medium">Medium</option>
                <option value="olive">Olive</option>
                <option value="brown">Brown</option>
                <option value="dark">Dark</option>
              </select>
            </div>

            <div>
              <label htmlFor="physicalDisability" className="block text-sm font-medium text-gray-700">
                Physical Disability
              </label>
              <select
                id="physicalDisability"
                name="physicalDisability"
                value={formData.physicalDisability}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="">Select</option>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition flex items-center justify-center font-bold"
            >
              Next <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>
        )}

        {step === 2 && (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="existingConditions" className="block text-sm font-medium text-gray-700">
                Existing Conditions
              </label>
              <textarea
                id="existingConditions"
                name="existingConditions"
                value={formData.existingConditions}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="List any existing medical conditions"
              />
            </div>

            <div>
              <label htmlFor="allergies" className="block text-sm font-medium text-gray-700">
                Allergies
              </label>
              <textarea
                id="allergies"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="List any allergies"
              />
            </div>

            <div>
              <label htmlFor="medications" className="block text-sm font-medium text-gray-700">
                Current Medications
              </label>
              <textarea
                id="medications"
                name="medications"
                value={formData.medications}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="List any medications you're currently taking"
              />
            </div>

            <div>
              <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">
                Additional Notes
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="Any additional notes or information"
              />
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex justify-center py-2 px-4 border border-teal-300 rounded-md shadow-sm text-sm font-medium text-teal-700 bg-white hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Back
              </button>
              <button
                type="submit"
                className="ml-auto inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Save Profile
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="mt-8 space-y-6">
            <h2 className="text-center text-3xl font-extrabold text-teal-900">Your Health Profile</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-700">Personal Information</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <p className="text-gray-600"><span className="font-bold text-teal-600">First Name:</span> {formData.firstname}</p>
                <p className="text-gray-600"><span className="font-bold text-teal-600">Last Name:</span> {formData.lastname}</p>
                <p className="text-gray-600"><span className="font-bold text-teal-600">Phone:</span> {formData.phone}</p>
                <p className="text-gray-600"><span className="font-bold text-teal-600">Age:</span> {formData.age}</p>
                <p className="text-gray-600"><span className="font-bold text-teal-600">Date of Birth:</span> {formData.dob}</p>
                <p className="text-gray-600"><span className="font-bold text-teal-600">Gender:</span> {formData.gender}</p>
                <p className="text-gray-600"><span className="font-bold text-teal-600">Blood Group:</span> {formData.bloodGroup}</p>
                <p className="text-gray-600"><span className="font-bold text-teal-600">Height:</span> {formData.height} cm</p>
                <p className="text-gray-600"><span className="font-bold text-teal-600">Weight:</span> {formData.weight} kg</p>
                <p className="text-gray-600"><span className="font-bold text-teal-600">Lifestyle:</span> {formData.lifestyle}</p>
                <p className="text-gray-600"><span className="font-bold text-teal-600">Skin Color:</span> {formData.skinColor}</p>
                <p className="text-gray-600"><span className="font-bold text-teal-600">Physical Disability:</span> {formData.physicalDisability}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-700">Medical History</h3>
              <div className="space-y-2">
                <p className="text-gray-600"><span className="font-bold text-teal-600">Existing Conditions:</span> {formData.existingConditions}</p>
                <p className="text-gray-600"><span className="font-bold text-teal-600">Allergies:</span> {formData.allergies}</p>
                <p className="text-gray-600"><span className="font-bold text-teal-600">Current Medications:</span> {formData.medications}</p>
                <p className="text-gray-600"><span className="font-bold text-teal-600">Additional Notes:</span> {formData.additionalNotes}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={toggleEdit}
              className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition flex items-center justify-center font-bold"
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'} {isEditing ? <Save className="ml-2 h-5 w-5" /> : <Edit className="ml-2 h-5 w-5" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthProfile;