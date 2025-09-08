import React from 'react';
import { CVData } from '../../context/CVContext';

interface CreativeThemeProps {
  cvData: CVData;
}

const CreativeTheme: React.FC<CreativeThemeProps> = ({ cvData }) => {
  const formatDateRange = (startDate: string, endDate: string) => {
    if (!startDate && !endDate) return '';
    if (!startDate) return endDate;
    if (!endDate) return startDate;
    return `${startDate} - ${endDate}`;
  };

  const formatDescription = (description: string) => {
    if (!description) return [];
    return description.split('\n').filter(line => line.trim());
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden" style={{ maxWidth: '210mm', minHeight: '297mm' }}>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 flex items-center space-x-6">
          {cvData.profilePhoto && (
            <div className="flex-shrink-0">
              <img
                src={cvData.profilePhoto}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          )}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{cvData.name || 'Your Name'}</h1>
            <p className="text-xl text-pink-100 mb-4">{cvData.jobTitle || 'Your Job Title'}</p>
            <div className="space-y-1 text-sm">
              {cvData.address && <p>📍 {cvData.address}</p>}
              {cvData.email && <p>✉️ {cvData.email}</p>}
              {cvData.phone && <p>📞 {cvData.phone}</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Left Column */}
        <div className="w-1/3 bg-gradient-to-b from-purple-50 to-pink-50 p-6">
          {/* Summary */}
          {cvData.summary && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-purple-800 mb-3 border-b-2 border-purple-500 pb-1">
                Summary
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {cvData.summary}
              </p>
            </div>
          )}

          {/* Skills */}
          {cvData.skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-purple-800 mb-4 border-b-2 border-purple-500 pb-1">
                Skills
              </h2>
              <div className="space-y-4">
                {cvData.skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="w-2/3 p-6">
          {/* Experience */}
          {cvData.experience.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-purple-800 mb-4 border-b-2 border-purple-500 pb-1">
                Work Experience
              </h2>
              <div className="space-y-6">
                {cvData.experience.map((exp) => (
                  <div key={exp.id} className="border-l-4 border-purple-500 pl-4 bg-gradient-to-r from-purple-50 to-transparent p-3 rounded-r-lg">
                    <div className="mb-2">
                      <h3 className="text-base font-semibold text-gray-800">{exp.jobTitle}</h3>
                      <p className="text-sm font-medium text-purple-600">{exp.company}</p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        {exp.location && <span className="mr-4">📍 {exp.location}</span>}
                        <span>📅 {formatDateRange(exp.startDate, exp.endDate)}</span>
                      </div>
                    </div>
                    {exp.description && (
                      <div className="text-sm text-gray-700">
                        {formatDescription(exp.description).map((line, index) => (
                          <p key={index} className="mb-1">
                            {line.startsWith('•') ? line : `• ${line}`}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {cvData.education.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-purple-800 mb-4 border-b-2 border-purple-500 pb-1">
                Education
              </h2>
              <div className="space-y-6">
                {cvData.education.map((edu) => (
                  <div key={edu.id} className="border-l-4 border-purple-500 pl-4 bg-gradient-to-r from-purple-50 to-transparent p-3 rounded-r-lg">
                    <div className="mb-2">
                      <h3 className="text-base font-semibold text-gray-800">{edu.degree}</h3>
                      <p className="text-sm font-medium text-purple-600">{edu.school}</p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <span>📅 {formatDateRange(edu.startDate, edu.endDate)}</span>
                      </div>
                    </div>
                    {edu.description && (
                      <div className="text-sm text-gray-700">
                        <p>{edu.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreativeTheme;
