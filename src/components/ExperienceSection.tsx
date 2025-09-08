import React from 'react';
import { useCV, Experience } from '../context/CVContext';

const ExperienceSection: React.FC = () => {
  const { cvData, dispatch } = useCV();

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    dispatch({ type: 'ADD_EXPERIENCE', experience: newExperience });
  };

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    dispatch({
      type: 'UPDATE_EXPERIENCE',
      id,
      experience: { [field]: value },
    });
  };

  const removeExperience = (id: string) => {
    dispatch({ type: 'REMOVE_EXPERIENCE', id });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Work Experience</h2>
        <button
          onClick={addExperience}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Add Experience
        </button>
      </div>

      <div className="space-y-6">
        {cvData.experience.map((exp) => (
          <div key={exp.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-gray-800">Experience Entry</h3>
              <button
                onClick={() => removeExperience(exp.id)}
                className="px-3 py-1 text-red-600 hover:text-red-800 focus:outline-none transition-colors"
              >
                Remove
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  value={exp.jobTitle}
                  onChange={(e) => updateExperience(exp.id, 'jobTitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Senior Software Engineer"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tech Corp Inc."
                  required
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={exp.location}
                  onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="San Francisco, CA"
                />
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <input
                  type="text"
                  value={exp.startDate}
                  onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Jan 2020"
                />
              </div>

              {/* End Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>
                <input
                  type="text"
                  value={exp.endDate}
                  onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Present or Dec 2023"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="• Led development of new features...
• Improved system performance by 40%...
• Mentored junior developers..."
              />
              <p className="text-xs text-gray-500 mt-1">
                Use bullet points (•) to separate different achievements
              </p>
            </div>
          </div>
        ))}

        {cvData.experience.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p>No work experience added yet. Click "Add Experience" to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceSection;
