import React, { useRef } from 'react';
import { useCV, Theme } from '../context/CVContext';

const SummarySection: React.FC = () => {
  const { cvData, dispatch } = useCV();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (field: keyof Pick<typeof cvData, 'profilePhoto' | 'name' | 'jobTitle' | 'address' | 'email' | 'phone' | 'summary'>, value: string) => {
    dispatch({
      type: 'UPDATE_BASIC_INFO',
      field,
      value,
    });
  };

  const handleThemeChange = (theme: Theme) => {
    dispatch({
      type: 'UPDATE_THEME',
      theme,
    });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        handleInputChange('profilePhoto', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const themes: { value: Theme; label: string; description: string }[] = [
    { value: 'modern', label: 'Modern', description: 'Clean and contemporary design' },
    { value: 'classic', label: 'Classic', description: 'Traditional professional layout' },
    { value: 'minimal', label: 'Minimal', description: 'Simple and elegant' },
    { value: 'creative', label: 'Creative', description: 'Bold and artistic' },
    { value: 'professional', label: 'Professional', description: 'Corporate and formal' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h2>
      
      <div className="space-y-4">
        {/* Profile Photo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Profile Photo
          </label>
          <div className="space-y-3">
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                📁 Upload from Gallery
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            <div className="text-sm text-gray-500">Or enter URL:</div>
            <input
              type="url"
              value={cvData.profilePhoto}
              onChange={(e) => handleInputChange('profilePhoto', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com/photo.jpg"
            />
            {cvData.profilePhoto && (
              <div className="mt-2">
                <img
                  src={cvData.profilePhoto}
                  alt="Profile preview"
                  className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={cvData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Title *
          </label>
          <input
            type="text"
            value={cvData.jobTitle}
            onChange={(e) => handleInputChange('jobTitle', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Software Engineer"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address
          </label>
          <input
            type="text"
            value={cvData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="123 Main St, City, State 12345"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            value={cvData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="john.doe@email.com"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={cvData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        {/* Summary */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Professional Summary
          </label>
          <textarea
            value={cvData.summary}
            onChange={(e) => handleInputChange('summary', e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Brief description of your professional background and key achievements..."
          />
        </div>

        {/* Theme Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            CV Theme
          </label>
          <div className="grid grid-cols-1 gap-3">
            {themes.map((theme) => (
              <label
                key={theme.value}
                className={`relative flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                  cvData.theme === theme.value
                    ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="theme"
                  value={theme.value}
                  checked={cvData.theme === theme.value}
                  onChange={() => handleThemeChange(theme.value)}
                  className="sr-only"
                />
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{theme.label}</div>
                  <div className="text-sm text-gray-500">{theme.description}</div>
                </div>
                {cvData.theme === theme.value && (
                  <div className="text-blue-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;
