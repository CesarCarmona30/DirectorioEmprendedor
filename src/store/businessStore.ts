
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

// Mock data para negocios de ejemplo
const mockBusinesses: Business[] = [
  {
    id: '1',
    name: 'TonyPeluches',
    category: 'Regalos',
    description: 'Peluches artesanales hechos a mano por estudiantes, personalizados bajo pedido.',
    createdAt: new Date('2024-01-10')
  },
  {
    id: '2',
    name: 'Bolis el Chris',
    category: 'Comida',
    description: 'Venta de paletas y bolis de sabores naturales, ideales para eventos y reuniones.',
    createdAt: new Date('2024-01-12')
  },
  {
    id: '3',
    name: 'Campus Coffee Co.',
    category: 'Comida',
    description: 'Café artesanal tostado por estudiantes, con granos de origen responsable.',
    createdAt: new Date('2024-01-15')
  },
  {
    id: '4',
    name: 'TechTutor',
    category: 'Tecnología',
    description: 'Plataforma de tutorías entre pares para asignaturas de programación y tecnología.',
    createdAt: new Date('2024-02-01')
  },
  {
    id: '5',
    name: 'EcoThreads',
    category: 'Ropa',
    description: 'Ropa sostenible y a la moda, confeccionada con materiales reciclados.',
    createdAt: new Date('2024-01-28')
  },
  {
    id: '6',
    name: 'Study Buddy Services',
    category: 'Servicios',
    description: 'Apoyo académico: toma de apuntes, asistencia en investigación y coordinación de grupos de estudio.',
    createdAt: new Date('2024-02-10')
  },
  {
    id: '7',
    name: 'Healthy Bites',
    category: 'Comida',
    description: 'Servicio de meal prep nutritivo y económico, ideal para estudiantes con poco tiempo.',
    createdAt: new Date('2024-02-05')
  },
  {
    id: '8',
    name: 'CodeCraft',
    category: 'Tecnología',
    description: 'Desarrollo de sitios web y apps móviles para pequeños negocios y proyectos estudiantiles.',
    createdAt: new Date('2024-02-15')
  },
  {
    id: '9',
    name: 'FitCampus',
    category: 'Deportes',
    description: 'Clases de calistenia y entrenamiento funcional sin equipo, diseñadas para principiantes.',
    createdAt: new Date('2024-03-01')
  },
  {
    id: '10',
    name: 'Arte y Diseño UP',
    category: 'Servicios',
    description: 'Creación de ilustraciones digitales y logos personalizados para emprendedores.',
    createdAt: new Date('2024-03-05')
  },
  {
    id: '11',
    name: 'Tutorías Exprés',
    category: 'Asesorías',
    description: 'Sesiones de asesoría académica exprés en matemáticas, física y química.',
    createdAt: new Date('2024-03-10')
  },
  {
    id: '12',
    name: 'Mente Sana',
    category: 'Salud',
    description: 'Talleres de meditación y manejo de estrés para estudiantes universitarios.',
    createdAt: new Date('2024-03-12')
  },
  {
    id: '13',
    name: 'EcoLimpio',
    category: 'Servicios',
    description: 'Servicio de limpieza ecológica para espacios de estudio y oficinas pequeñas.',
    createdAt: new Date('2024-03-15')
  },
  {
    id: '14',
    name: 'SnackUP',
    category: 'Comida',
    description: 'Venta de snacks saludables y energéticos para jornadas de estudio.',
    createdAt: new Date('2024-03-18')
  },
  {
    id: '15',
    name: 'Lens Lab',
    category: 'Tecnología',
    description: 'Reparación y personalización de lentes de realidad virtual y aumentada.',
    createdAt: new Date('2024-03-20')
  },
  {
    id: '16',
    name: 'ModaUP',
    category: 'Ropa',
    description: 'Colecciones de ropa casual diseñadas por estudiantes de moda de la UPIICSA.',
    createdAt: new Date('2024-03-22')
  },
  {
    id: '17',
    name: 'Café Literario',
    category: 'Servicios',
    description: 'Espacio de café y lectura con suscripción mensual para estudiantes amantes de los libros.',
    createdAt: new Date('2024-03-25')
  },
  {
    id: '18',
    name: 'Arte Urbano UP',
    category: 'Arte',
    description: 'Muralismo y graffiti encargado para eventos culturales en la universidad.',
    createdAt: new Date('2024-03-28')
  },
  {
    id: '19',
    name: 'Club de Debate',
    category: 'Asesorías',
    description: 'Entrenamiento y competencias de debate para desarrollar habilidades de oratoria.',
    createdAt: new Date('2024-04-01')
  },
  {
    id: '20',
    name: 'BikeShare UPIICSA',
    category: 'Deportes',
    description: 'Servicio de préstamo de bicicletas para transporte dentro del campus.',
    createdAt: new Date('2024-04-05')
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
