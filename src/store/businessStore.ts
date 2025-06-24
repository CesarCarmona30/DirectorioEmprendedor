
// Global state management for the student entrepreneurship directory
import { create } from 'zustand';

export interface Business {
  id: string;
  name: string;
  category: string;
  description: string;
  createdAt: Date;
}

export interface BusinessStore {
  businesses: Business[];
  selectedCategory: string | null;
  addBusiness: (business: Omit<Business, 'id' | 'createdAt'>) => void;
  setSelectedCategory: (category: string | null) => void;
  getFilteredBusinesses: () => Business[];
}

// Mock data for initial businesses
const mockBusinesses: Business[] = [
  {
    id: '1',
    name: 'Campus Coffee Co.',
    category: 'Comida',
    description: 'Artisanal coffee roasted by students, for students. Ethically sourced beans with a focus on sustainability.',
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'TechTutor ',
    category: 'Tecnología',
    description: 'Peer-to-peer coding tutoring platform connecting students across different skill levels.',
    createdAt: new Date('2024-02-01')
  },
  {
    id: '3',
    name: 'EcoThreads',
    category: 'Ropa',
    description: 'Sustainable clothing brand creating trendy pieces from recycled materials.',
    createdAt: new Date('2024-01-28')
  },
  {
    id: '4',
    name: 'Study Buddy Services',
    category: 'Servicios',
    description: 'Academic support services including note-taking, research assistance, and study group coordination.',
    createdAt: new Date('2024-02-10')
  },
  {
    id: '5',
    name: 'Healthy Bites',
    category: 'Comida',
    description: 'Nutritious meal prep service designed specifically for busy students and their budgets.',
    createdAt: new Date('2024-02-05')
  }
];

export const useBusinessStore = create<BusinessStore>((set, get) => ({
  businesses: mockBusinesses,
  selectedCategory: null,
  
  addBusiness: (businessData) => {
    const newBusiness: Business = {
      ...businessData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date()
    };
    
    set((state) => ({
      businesses: [newBusiness, ...state.businesses]
    }));
  },
  
  setSelectedCategory: (category) => {
    set({ selectedCategory: category });
  },
  
  getFilteredBusinesses: () => {
    const { businesses, selectedCategory } = get();
    if (!selectedCategory) return businesses;
    return businesses.filter(business => business.category === selectedCategory);
  }
}));
