import React from 'react';
import { useCV, Education } from '../context/CVContext';

const EducationSection: React.FC = () => {
  const { cvData, dispatch } = useCV();

  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    dispatch({ type: 'ADD_EDUCATION', education: newEducation });
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    dispatch({
      type: 'UPDATE_EDUCATION',
      id,
      education: { [field]: value },
    });
  };

  const removeEducation = (id: string) => {
    dispatch({ type: 'REMOVE_EDUCATION', id });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Education</h2>
        <button
          onClick={addEducation}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Add Education
        </button>
      </div>

      <div className="space-y-6">
        {cvData.education.map((edu) => (
          <div key={edu.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-gray-800">Education Entry</h3>
              <button
                onClick={() => removeEducation(edu.id)}
                className="px-3 py-1 text-red-600 hover:text-red-800 focus:outline-none transition-colors"
              >
                Remove
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* School */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  School/University *
                </label>
                <input
                  type="text"
                  value={edu.school}
                  onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="University of California"
                  required
                />
              </div>

              {/* Degree */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Degree *
                </label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Bachelor of Science in Computer Science"
                  required
                />
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <input
                  type="text"
                  value={edu.startDate}
                  onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Sep 2016"
                />
              </div>

              {/* End Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>
                <input
                  type="text"
                  value={edu.endDate}
                  onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="May 2020"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Details
              </label>
              <textarea
                value={edu.description}
                onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Relevant coursework, honors, GPA, or other achievements..."
              />
            </div>
          </div>
        ))}

        {cvData.education.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p>No education entries added yet. Click "Add Education" to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationSection;
