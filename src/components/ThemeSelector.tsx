import React from 'react';
import { useCV, Theme } from '../context/CVContext';
import ModernTheme from './themes/ModernTheme';
import ClassicTheme from './themes/ClassicTheme';
import MinimalTheme from './themes/MinimalTheme';
import CreativeTheme from './themes/CreativeTheme';
import ProfessionalTheme from './themes/ProfessionalTheme';

const ThemeSelector: React.FC = () => {
  const { cvData } = useCV();

  const renderTheme = () => {
    switch (cvData.theme) {
      case 'modern':
        return <ModernTheme cvData={cvData} />;
      case 'classic':
        return <ClassicTheme cvData={cvData} />;
      case 'minimal':
        return <MinimalTheme cvData={cvData} />;
      case 'creative':
        return <CreativeTheme cvData={cvData} />;
      case 'professional':
        return <ProfessionalTheme cvData={cvData} />;
      default:
        return <ModernTheme cvData={cvData} />;
    }
  };

  return <>{renderTheme()}</>;
};

export default ThemeSelector;
