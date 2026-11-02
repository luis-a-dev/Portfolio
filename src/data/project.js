import { skills } from "./skills";

export const skillMap = skills.reduce((map, skill) => {
    map[skill.name] = skill;
    return map;
}, {});

export const projects = [
  {
    id: 1,
    name: 'Labsol Academy',
    description: 'Plataforma educativa en línea diseñada para personas que desean aprender nuevas habilidades a través de cursos impartidos por profesionales. Ofrece contenido estructurado, accesible y práctico, enfocado en facilitar el aprendizaje autónomo y de calidad.',
    img: '/src/assets/img/IMG_9713.jpg',
    dev: [
      skillMap['Django'],
      skillMap['Python'],
      // skillMap['MySQL'],
      // skillMap['Docker'],
      skillMap['JavaScript'],
      skillMap['CSS'],
      skillMap['HTML'],
      skillMap['Bootstrap'],
    ],
    code: '',
    demo: ''
  },
  {
    id: 2,
    name: 'CACEI',
    description: 'Desarrollo web con Django, lenguaje Python, base de datos MySQL, entorno de desarrollo Docker, control de versión GitHub, estilos CSS y Bootstrap, lenguaje de marcado HTML, Cloudflare y AWS.',
    img: '/src/assets/img/IMG_9713.jpg',
    dev: [
      skillMap['Django'],
      skillMap['Python'],
      // skillMap['MySQL'],
      // skillMap['Docker'],
      skillMap['CSS'],
      skillMap['HTML'],
      skillMap['Bootstrap'],
    ],
    code: '',
    demo: ''
  },
  {
    id: 3,
    name: 'Alerta UAZ',
    description: 'Aplicación móvil de emergencia que permite al usuario activar un botón de pánico en situaciones críticas. Al hacerlo, se envía su ubicación en tiempo real exclusivamente a los contactos de confianza previamente seleccionados, garantizando privacidad y respuesta rápida en caso de emergencia.',
    img: '/src/assets/img/IMG_9713.jpg',
    dev: [
      skillMap['Flutter'],
      skillMap['Firebase'],
      // skillMap['Node JS'],
      // skillMap['MongoDB'],
      skillMap['SQLite'],
      // skillMap['Docker']
    ],
    code: '',
    demo: ''
  }
];
