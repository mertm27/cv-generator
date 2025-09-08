import React from 'react';
import SummarySection from './SummarySection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';

const CVForm: React.FC = () => {
  return (
    <div className="space-y-6">
      <SummarySection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
    </div>
  );
};

export default CVForm;
