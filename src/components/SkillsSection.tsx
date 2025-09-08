import React from 'react';
import { useCV, Skill } from '../context/CVContext';

const SkillsSection: React.FC = () => {
  const { cvData, dispatch } = useCV();

  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: '',
      level: 50,
    };
    dispatch({ type: 'ADD_SKILL', skill: newSkill });
  };

  const updateSkill = (id: string, field: keyof Skill, value: string | number) => {
    dispatch({
      type: 'UPDATE_SKILL',
      id,
      skill: { [field]: value },
    });
  };

  const removeSkill = (id: string) => {
    dispatch({ type: 'REMOVE_SKILL', id });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
        <button
          onClick={addSkill}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Add Skill
        </button>
      </div>

      <div className="space-y-4">
        {cvData.skills.map((skill) => (
          <div key={skill.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1 mr-4">
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Skill name (e.g., JavaScript, React, Python)"
                />
              </div>
              <button
                onClick={() => removeSkill(skill.id)}
                className="px-3 py-1 text-red-600 hover:text-red-800 focus:outline-none transition-colors"
              >
                Remove
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700">
                  Proficiency Level
                </label>
                <span className="text-sm text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={skill.level}
                onChange={(e) => updateSkill(skill.id, 'level', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        ))}

        {cvData.skills.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p>No skills added yet. Click "Add Skill" to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsSection;
