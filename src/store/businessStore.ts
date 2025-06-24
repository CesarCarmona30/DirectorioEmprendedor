
// Global state management for the student entrepreneurship directory
import { create } from 'zustand';

export interface Business {
  id: string;
  name: string;
  category: string;
  description: string;
  createdAt: Date;
  contact: {
    email: string;
    phone?: string;
    instagram?: string;
    facebook?: string;
  };
  owner: string;
  location?: string;
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
    description: 'Peluches bonitos y lindos, de lo más popular y pedido.',
    createdAt: new Date('2024-01-10'),
    contact: {
      email: 'tony@peluches.com',
      phone: '+52 55 1234 5678',
      instagram: '@tonypeluches'
    },
    owner: 'Antonio García',
    location: 'UPIICSA Campus'
  },
  {
    id: '2',
    name: 'Bolis el Chris',
    category: 'Comida',
    description: 'Venta de paletas y bolis de sabores naturales y exóticos😜.',
    createdAt: new Date('2024-01-12'),
    contact: {
      email: 'chris@bolis.com',
      phone: '+52 55 2345 6789',
      instagram: '@boliselchris'
    },
    owner: 'Christian López',
    location: 'Explanada UPIICSA'
  },
  {
    id: '3',
    name: 'Cafetería Laplace',
    category: 'Comida',
    description: 'Café artesanal, con granos de origen responsable.',
    createdAt: new Date('2024-01-15'),
    contact: {
      email: 'contacto@laplace.cafe',
      phone: '+52 55 3456 7890',
      facebook: 'CafeteriaLaplace'
    },
    owner: 'María Fernández',
    location: 'Edificio 1, Planta Baja'
  },
  {
    id: '4',
    name: 'TechTutor',
    category: 'Tecnología',
    description: 'Plataforma de tutorías entre pares para asignaturas de programación y tecnología.',
    createdAt: new Date('2024-02-01'),
    contact: {
      email: 'hello@techtutor.mx',
      instagram: '@techtutor_mx'
    },
    owner: 'Roberto Méndez',
    location: 'Online'
  },
  {
    id: '5',
    name: 'EcoThreads',
    category: 'Ropa',
    description: 'Ropa sostenible y a la moda, confeccionada con materiales reciclados.',
    createdAt: new Date('2024-01-28'),
    contact: {
      email: 'info@ecothreads.mx',
      phone: '+52 55 4567 8901',
      instagram: '@ecothreads_mx'
    },
    owner: 'Ana Rodríguez',
    location: 'Tienda Online'
  },
  {
    id: '6',
    name: 'Connect+',
    category: 'Servicios',
    description: 'Planes para diversas plataformas, desde entretenimiento con Netflix y HBO, hasta productividad con GPT-4o Plus.',
    createdAt: new Date('2024-02-10'),
    contact: {
      email: 'connect@plus.mx',
      phone: '+52 55 5678 9012'
    },
    owner: 'Diego Hernández',
    location: 'Servicio Digital'
  },
  {
    id: '7',
    name: 'Healthy Bites',
    category: 'Comida',
    description: 'Servicio de meal prep nutritivo y económico, ideal para estudiantes con poco tiempo.',
    createdAt: new Date('2024-02-05'),
    contact: {
      email: 'pedidos@healthybites.mx',
      phone: '+52 55 6789 0123',
      instagram: '@healthy_bites_mx'
    },
    owner: 'Sofía Martínez',
    location: 'Entrega a domicilio'
  },
  {
    id: '8',
    name: 'CodeCraft',
    category: 'Tecnología',
    description: 'Desarrollo de sitios web y apps móviles para pequeños negocios y proyectos estudiantiles.',
    createdAt: new Date('2024-02-15'),
    contact: {
      email: 'hola@codecraft.dev',
      instagram: '@codecraft_dev'
    },
    owner: 'Carlos Jiménez',
    location: 'Remoto'
  },
  {
    id: '9',
    name: 'FitCampus',
    category: 'Deportes',
    description: 'Clases de calistenia y entrenamiento funcional sin equipo, diseñadas para principiantes.',
    createdAt: new Date('2024-03-01'),
    contact: {
      email: 'fitness@campus.mx',
      phone: '+52 55 7890 1234',
      instagram: '@fitcampus_mx'
    },
    owner: 'Miguel Torres',
    location: 'Canchas UPIICSA'
  },
  {
    id: '10',
    name: 'Arte y Diseño UP',
    category: 'Servicios',
    description: 'Creación de ilustraciones digitales y logos personalizados para emprendedores.',
    createdAt: new Date('2024-03-05'),
    contact: {
      email: 'arte@up.mx',
      instagram: '@arte_up'
    },
    owner: 'Isabella Ramos',
    location: 'Estudio Digital'
  },
  {
    id: '11',
    name: 'Tutorías Exprés',
    category: 'Asesorías',
    description: 'Sesiones de asesoría académica exprés en matemáticas, física y química.',
    createdAt: new Date('2024-03-10'),
    contact: {
      email: 'tutorias@expres.mx',
      phone: '+52 55 8901 2345'
    },
    owner: 'Alejandro Castro',
    location: 'Biblioteca UPIICSA'
  },
  {
    id: '12',
    name: 'Mente Sana',
    category: 'Salud',
    description: 'Talleres de meditación y manejo de estrés para estudiantes universitarios.',
    createdAt: new Date('2024-03-12'),
    contact: {
      email: 'bienestar@mentesana.mx',
      instagram: '@mente_sana_up'
    },
    owner: 'Valeria Morales',
    location: 'Aula de Bienestar'
  },
  {
    id: '13',
    name: 'EcoLimpio',
    category: 'Servicios',
    description: 'Servicio de limpieza ecológica para espacios de estudio y oficinas pequeñas.',
    createdAt: new Date('2024-03-15'),
    contact: {
      email: 'eco@limpio.mx',
      phone: '+52 55 9012 3456'
    },
    owner: 'Javier Ruiz',
    location: 'Servicio a domicilio'
  },
  {
    id: '14',
    name: 'SnackUP',
    category: 'Comida',
    description: 'Venta de snacks saludables y energéticos para jornadas de estudio.',
    createdAt: new Date('2024-03-18'),
    contact: {
      email: 'snacks@up.mx',
      phone: '+52 55 0123 4567',
      instagram: '@snack_up'
    },
    owner: 'Camila Vega',
    location: 'Cafetería UPIICSA'
  },
  {
    id: '15',
    name: 'Lens Lab',
    category: 'Tecnología',
    description: 'Reparación y personalización de lentes de realidad virtual y aumentada.',
    createdAt: new Date('2024-03-20'),
    contact: {
      email: 'lab@lens.mx',
      instagram: '@lens_lab_mx'
    },
    owner: 'Emilio Vargas',
    location: 'Laboratorio Tech'
  },
  {
    id: '16',
    name: 'ModaUP',
    category: 'Ropa',
    description: 'Colecciones de ropa casual diseñadas por estudiantes de moda de la UPIICSA.',
    createdAt: new Date('2024-03-22'),
    contact: {
      email: 'moda@up.mx',
      instagram: '@moda_up_oficial'
    },
    owner: 'Natalia Silva',
    location: 'Showroom UP'
  },
  {
    id: '17',
    name: 'Café Literario',
    category: 'Servicios',
    description: 'Espacio de café y lectura con suscripción mensual para estudiantes amantes de los libros.',
    createdAt: new Date('2024-03-25'),
    contact: {
      email: 'cafe@literario.mx',
      phone: '+52 55 1234 5670'
    },
    owner: 'Fernando Aguilar',
    location: 'Zona de Lectura'
  },
  {
    id: '18',
    name: 'Arte Urbano UP',
    category: 'Arte',
    description: 'Muralismo y graffiti encargado para eventos culturales en la universidad.',
    createdAt: new Date('2024-03-28'),
    contact: {
      email: 'arte@urbano.mx',
      instagram: '@arte_urbano_up'
    },
    owner: 'Sebastián Moreno',
    location: 'Espacios Culturales'
  },
  {
    id: '19',
    name: 'Club de Debate',
    category: 'Asesorías',
    description: 'Entrenamiento y competencias de debate para desarrollar habilidades de oratoria.',
    createdAt: new Date('2024-04-01'),
    contact: {
      email: 'debate@club.mx',
      phone: '+52 55 2345 6780'
    },
    owner: 'Daniela Ortiz',
    location: 'Auditorio UPIICSA'
  },
  {
    id: '20',
    name: 'BikeShare UPIICSA',
    category: 'Deportes',
    description: 'Servicio de préstamo de bicicletas para transporte dentro del campus.',
    createdAt: new Date('2024-04-05'),
    contact: {
      email: 'bike@share.mx',
      instagram: '@bikeshare_upiicsa'
    },
    owner: 'Andrés Delgado',
    location: 'Entrada Principal'
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
