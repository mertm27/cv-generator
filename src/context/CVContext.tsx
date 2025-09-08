import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Types
export interface Skill {
  id: string;
  name: string;
  level: number; // 0-100
}

export interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
}

export type Theme = 'modern' | 'classic' | 'minimal' | 'creative' | 'professional';

export interface CVData {
  profilePhoto: string;
  name: string;
  jobTitle: string;
  address: string;
  email: string;
  phone: string;
  summary: string;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  theme: Theme;
}

// Initial state
const initialState: CVData = {
  profilePhoto: '',
  name: '',
  jobTitle: '',
  address: '',
  email: '',
  phone: '',
  summary: '',
  skills: [],
  experience: [],
  education: [],
  theme: 'modern',
};

// Action types
type CVAction =
  | { type: 'UPDATE_BASIC_INFO'; field: keyof Pick<CVData, 'profilePhoto' | 'name' | 'jobTitle' | 'address' | 'email' | 'phone' | 'summary'>; value: string }
  | { type: 'UPDATE_THEME'; theme: Theme }
  | { type: 'ADD_SKILL'; skill: Skill }
  | { type: 'UPDATE_SKILL'; id: string; skill: Partial<Skill> }
  | { type: 'REMOVE_SKILL'; id: string }
  | { type: 'ADD_EXPERIENCE'; experience: Experience }
  | { type: 'UPDATE_EXPERIENCE'; id: string; experience: Partial<Experience> }
  | { type: 'REMOVE_EXPERIENCE'; id: string }
  | { type: 'ADD_EDUCATION'; education: Education }
  | { type: 'UPDATE_EDUCATION'; id: string; education: Partial<Education> }
  | { type: 'REMOVE_EDUCATION'; id: string }
  | { type: 'LOAD_CV_DATA'; data: CVData };

// Reducer
const cvReducer = (state: CVData, action: CVAction): CVData => {
  switch (action.type) {
    case 'UPDATE_BASIC_INFO':
      return {
        ...state,
        [action.field]: action.value,
      };
    
    case 'UPDATE_THEME':
      return {
        ...state,
        theme: action.theme,
      };
    
    case 'ADD_SKILL':
      return {
        ...state,
        skills: [...state.skills, action.skill],
      };
    
    case 'UPDATE_SKILL':
      return {
        ...state,
        skills: state.skills.map(skill =>
          skill.id === action.id ? { ...skill, ...action.skill } : skill
        ),
      };
    
    case 'REMOVE_SKILL':
      return {
        ...state,
        skills: state.skills.filter(skill => skill.id !== action.id),
      };
    
    case 'ADD_EXPERIENCE':
      return {
        ...state,
        experience: [...state.experience, action.experience],
      };
    
    case 'UPDATE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.map(exp =>
          exp.id === action.id ? { ...exp, ...action.experience } : exp
        ),
      };
    
    case 'REMOVE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.filter(exp => exp.id !== action.id),
      };
    
    case 'ADD_EDUCATION':
      return {
        ...state,
        education: [...state.education, action.education],
      };
    
    case 'UPDATE_EDUCATION':
      return {
        ...state,
        education: state.education.map(edu =>
          edu.id === action.id ? { ...edu, ...action.education } : edu
        ),
      };
    
    case 'REMOVE_EDUCATION':
      return {
        ...state,
        education: state.education.filter(edu => edu.id !== action.id),
      };
    
    case 'LOAD_CV_DATA':
      return action.data;
    
    default:
      return state;
  }
};

// Context
interface CVContextType {
  cvData: CVData;
  dispatch: React.Dispatch<CVAction>;
}

const CVContext = createContext<CVContextType | undefined>(undefined);

// Provider
export const CVProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cvData, dispatch] = useReducer(cvReducer, initialState);

  return (
    <CVContext.Provider value={{ cvData, dispatch }}>
      {children}
    </CVContext.Provider>
  );
};

// Hook
export const useCV = (): CVContextType => {
  const context = useContext(CVContext);
  if (context === undefined) {
    throw new Error('useCV must be used within a CVProvider');
  }
  return context;
};
