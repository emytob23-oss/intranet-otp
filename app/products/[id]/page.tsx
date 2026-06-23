"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import ProductCard from "@/app/components/ProductCard";

// Datos de ejemplo de productos por categoría
const productsDatabase: Record<
  string,
  {
    categoryName: string;
    products: Array<{
      id: number;
      name: string;
      price: number;
      image: string;
      description: string;
      specs: Record<string, string>;
    }>;
  }
> = {
  1: {
    categoryName: "Sillas de Ruedas",
    products: [
      {
        id: 1,
        name: "HE603",
        price: 410.000,
        image: "https://ortopedicos.co/wp-content/uploads/2026/04/Silla-de-Ruedas-Estandar-en-Acero-HE605.webp",
        description: "Silla de ruedas resistencia total en acero",
        specs: {
          Material: "Acero reforzado",
          "Carga máxima": "150 kg",
          "Ancho del asiento": "45 cm",
          "Peso total": "18 kg",
          "Freno": "Manual dual",
          "Ruedas traseras": "24 pulgadas",
        },
      },
      {
        id:2,
        name: "HE605",
        price: 410.000,
        image: "https://ortopedicos.co/wp-content/uploads/2026/04/Silla-de-Ruedas-Estandar-en-Acero-HE603-1.webp",
        description: "Silla de ruedas control y estabilidad en acero",
        specs: {
          Material: "Acero de alta resistencia",
          "Carga máxima": "160 kg",
          "Ancho del asiento": "46 cm",
          "Peso total": "19 kg",
          "Freno": "Seguro lateral",
          "Ruedas delanteras": "8 pulgadas",
        },
      },
      {
        id: 3,
        name: "FY809",
        price: 410.000,
        image: "https://ortopedicos.co/wp-content/uploads/2026/04/Silla-de-Ruedas-Estandar-Fy809.webp",
        description: "Silla de ruedas ligera y plegable en acero",
        specs: {
          Material: "Acero ultraligero",
          "Carga máxima": "140 kg",
          "Ancho del asiento": "44 cm",
          "Peso total": "15 kg",
          "Plegable": "Sí",
          "Ruedas traseras": "22 pulgadas",
        },
      },
       {
    id: 4,
    name: "Silla de Ruedas de Transporte Económica KY871AVJ-12-46",
    price: 530.000,
    image: "https://ortopedicos.co/wp-content/uploads/2022/06/Silla-de-transporte-acero-lowe-KY871AVJ.webp",
    description:
      "Silla de transporte compacta y plegable, diseñada para facilitar el traslado asistido de personas con dificultad para caminar o mantenerse de pie. Cuenta con espaldar abatible y frenos de mano que brindan mayor control al cuidador.",
    specs: {
      Referencia: "KY871AVJ-12-46",
      Categoría: "Silla de ruedas de transporte",
      Tipo: "Traslado asistido",
      Marca: "Lowe",
      Estructura: "Acero pintado de color negro",
      Tapicería: "Nylon",
      Espaldar: "Abatible",
      Reposabrazos: "Fijos",
      Reposapiés: "Fijos en plástico",
      Frenos: "Frenos de mano para cuidador",
      Llantas: "Poliuretano macizo",
      "Ancho total": "56 cm",
      "Ancho del asiento": "42 cm",
      "Altura total": "90 cm",
      "Altura del asiento al piso": "47 cm",
      "Ruedas delanteras": "6 pulgadas",
      "Ruedas traseras": "12 pulgadas",
      "Peso del producto": "14 kg",
      "Capacidad máxima": "100 kg",
      "Registro sanitario INVIMA": "2016DM-0015030",
      Garantía:
        "1 año sobre la estructura en acero. No cubre rodamientos, tapicería ni daños por mal uso.",
      Uso:
        "Traslado asistido en el hogar, clínicas, hospitales, consultas médicas y recorridos cortos."
    }
  },
  {
    id: 5,
    name: "Silla de Ruedas de Transporte T50",
    price: 590.000,
    image: "https://ortopedicos.co/wp-content/uploads/2022/06/Silla-De-Ruedas-De-Transporte-En-Acero-Konfort-Plus-T50.webp",
    description:
      "Silla de transporte liviana, plegable y fácil de maniobrar. Su estructura en acero, espaldar abatible, reposapiés desmontables y frenos accionados por el cuidador facilitan el traslado, las transferencias y el almacenamiento.",
    specs: {
      Referencia: "KBO1432RF-MP23",
      Categoría: "Silla de ruedas de transporte",
      Tipo: "Traslado asistido",
      Marca: "Konfort Basic",
      Estructura: "Acero pintado de color gris",
      Tapicería: "Nylon",
      Espaldar: "Abatible",
      Reposabrazos: "Fijos",
      Reposapiés: "Fijos y desmontables mediante pin",
      Frenos: "Sistema de freno accionado por el cuidador",
      "Ancho total": "62 cm",
      "Ancho del asiento": "44,5 cm",
      "Profundidad del asiento": "42,5 cm",
      "Altura del espaldar": "43,5 cm",
      "Altura del asiento al piso": "45 cm",
      "Ruedas delanteras": "7,10 x 1 pulgada, rin estrella maciza",
      "Ruedas traseras":
        "16 x 1,43 pulgadas, rin en poliuretano grabado color negro",
      "Peso neto": "13 kg",
      "Peso bruto empacado": "15 kg",
      "Capacidad máxima": "90 kg",
      "Dimensiones de la caja": "72 x 23 x 67,5 cm",
      "Clasificación de riesgo": "Clase I, riesgo bajo",
      "Registro sanitario INVIMA": "2017DM-0017305",
      Garantía: "1 año",
      Uso:
        "Traslado de pacientes con asistencia de un cuidador en interiores y recorridos cortos."
    }
  },
  {
    id: 3,
    name: "Silla de Ruedas Estándar Tipo Escritorio FS909B",
    price: 700.000,
    image: "https://ortopedicos.co/wp-content/uploads/2022/01/Silla-de-Transporte-TME-FS9043.webp",
    description:
      "Silla de ruedas estándar en acero, diseñada para brindar resistencia, estabilidad y comodidad. Sus apoyabrazos abatibles tipo escritorio permiten acercarse a mesas y superficies de trabajo, mientras que los apoyapiés removibles facilitan las transferencias.",
    specs: {
      Referencia: "FS909B",
      Categoría: "Silla de ruedas estándar",
      Tipo: "Autopropulsable y plegable",
      Marca: "TME",
      Estructura: "Acero pintado",
      Tapicería: "Nylon negro",
      Apoyabrazos: "Abatibles tipo escritorio",
      Apoyapiés: "Removibles",
      Frenos: "Freno de parqueo",
      "Ruedas delanteras": "8 pulgadas, macizas",
      "Ruedas traseras":
        "24 pulgadas, poliuretano con rin de estrella",
      "Ancho total": "64 cm",
      "Ancho del asiento": "46 cm",
      "Profundidad del asiento": "40 cm",
      "Altura del espaldar": "41 cm",
      "Altura total": "90 cm",
      "Altura del asiento al piso": "49 cm",
      "Largo total": "107 cm",
      "Peso del producto": "13,8 kg",
      "Capacidad máxima": "100 kg",
      "Registro sanitario INVIMA": "2019DM-0020274",
      Garantía:
        "1 año contra defectos de fabricación en la estructura. No cubre rodamientos, partes plásticas ni tapicería.",
      Uso:
        "Movilidad diaria en el hogar, clínicas, instituciones y espacios de trabajo."
    }
  },
  {
    id: 4,
    name: "Silla de Ruedas de Transporte T100",
    price: 760.000,
    image: "https://ortopedicos.co/wp-content/uploads/2022/06/Silla-de-Transporte-Aluminio-Kp-KBE1432RF-MP23L.webp",
    description:
      "Silla de transporte liviana fabricada en aluminio. Su estructura plegable, espaldar abatible, apoyabrazos abatibles y reposapiés graduables facilitan las transferencias, el almacenamiento y el desplazamiento asistido.",
    specs: {
      Referencia: "KBE1432RF-MP23L",
      Categoría: "Silla de ruedas de transporte",
      Tipo: "Traslado asistido liviano",
      Marca: "Konfort Basic",
      Estructura: "Aluminio pintado de color gris",
      "Calibre del tubo": "2,67 mm",
      Tapicería: "Acolchada",
      Espaldar: "Abatible",
      Apoyabrazos: "Abatibles",
      Reposapiés: "Fijos y ajustables en 3 posiciones mediante pin",
      Frenos: "Sistema de freno accionado por el cuidador",
      "Ancho total": "58 cm",
      "Ancho del asiento": "46 cm",
      "Profundidad del asiento": "42 cm",
      "Altura del espaldar": "42 cm",
      "Altura del asiento al piso": "47 cm",
      "Ruedas delanteras": "6 x 1,1 pulgadas, rin estrella maciza",
      "Ruedas traseras":
        "16 x 1,43 pulgadas, rin estrella en poliuretano",
      "Peso bruto empacado": "12,7 kg",
      "Capacidad máxima": "90 kg",
      "Dimensiones de la caja": "79 x 26 x 76 cm",
      "Código EAN": "7708566880762",
      "Clasificación de riesgo": "Clase I, riesgo bajo",
      "Registro sanitario INVIMA": "2017DM-0017305",
      Garantía: "1 año",
      Uso:
        "Traslado asistido en interiores, clínicas, hospitales, consultas médicas y vehículos."
    }
  },
  {
    id: 5,
    name: "Silla de Ruedas Estándar en Aluminio FY867L",
    price: 760.000,
    image: "https://ortopedicos.co/wp-content/uploads/2022/09/Silla-semi-transporte-Aluminio-lowe-FY867L.webp",
    description:
      "Silla de ruedas estándar fabricada en aluminio, liviana y fácil de transportar. Cuenta con doble cruceta, espaldar abatible, apoyabrazos abatibles y ruedas traseras con radios para brindar estabilidad y comodidad durante la movilidad diaria.",
    specs: {
      Referencia: "FY867L",
      Categoría: "Silla de ruedas estándar",
      Tipo: "Autopropulsable, plegable y liviana",
      Marca: "Lowe",
      Estructura: "Aluminio",
      Refuerzo: "Doble cruceta",
      Tapicería: "Nylon",
      Colores: "Disponible en 3 colores",
      Espaldar: "Abatible",
      Apoyabrazos: "Abatibles",
      Reposapiés: "Fijos con plataformas plegables",
      Llantas: "Macizas",
      "Ruedas traseras": "20 pulgadas con radios",
      "Ruedas delanteras": "6 pulgadas",
      "Ancho total": "63 cm",
      "Ancho del asiento": "45 cm",
      "Profundidad del asiento": "43 cm",
      "Altura total": "89 cm",
      "Altura del asiento al piso": "47 cm",
      "Peso del producto": "13 kg",
      "Capacidad máxima": "100 kg",
      "Registro sanitario INVIMA": "2024DM-0028420",
      Garantía:
        "1 año sobre la estructura en aluminio. No cubre rodamientos, tapicería ni daños por mal uso.",
      Uso:
        "Movilidad diaria, autopropulsión y traslado asistido en interiores y exteriores moderados."
    }
  },
    {
    id: 6,
    name: "Silla de Ruedas Eléctrica Ultra Ligera con Amortiguadores HE704",
    price: 3000000,
    image: "https://ortopedicos.co/wp-content/uploads/2022/01/Silla-de-ruedas-electrica-lowe-he704.png",
    description:
      "Silla de ruedas eléctrica ultraligera con amortiguadores, espaldar reclinable y batería de litio removible. Está diseñada para brindar una conducción cómoda, segura y fácil de controlar mediante joystick.",
    specs: {
      Referencia: "HE704",
      Categoría: "Silla de ruedas eléctrica",
      Tipo: "Eléctrica ultraligera con amortiguadores",
      Marca: "Lowe",
      Estructura: "Acero",
      Tapicería: "Nylon",
      Control: "Joystick",
      Espaldar: "Reclinable",
      Apoyabrazos: "Abatibles",
      Reposapiés: "Abatibles",
      Suspensión: "Amortiguadores",
      Seguridad: "Cinturón de seguridad y ruedas antivuelco",
      Llantas: "Poliuretano",
      "Ancho total": "58 cm",
      "Ancho del asiento": "45 cm",
      "Profundidad del asiento": "41 cm",
      "Altura total": "94 cm",
      "Altura del asiento al piso": "51 cm",
      "Altura del espaldar": "47 cm",
      "Ruedas delanteras": "7 pulgadas",
      "Ruedas traseras": "11 pulgadas",
      "Inclinación máxima": "6°",
      "Distancia entre ruedas": "90 cm",
      "Peso del producto": "21,7 kg",
      "Capacidad máxima": "120 kg",
      Baterías: "2 baterías removibles de litio de 12 V / 6,6 Ah",
      Motores: "2 motores de 24 V / 250 W",
      "Velocidad máxima": "5 km/h",
      Autonomía: "6 km, según información de la ficha técnica",
      "Tiempo de carga": "6 horas",
      "Registro sanitario INVIMA": "2024DM-0029131",
      Garantía:
        "1 año para estructura, motor, controlador y joystick. 3 meses para la batería. No cubre descargas eléctricas, rodamientos, tapicería ni daños por mal uso.",
      Uso:
        "Movilidad de personas con limitación física o dificultad para caminar, moverse o trasladarse, especialmente en espacios interiores."
    }
  },
  {
    id: 8,
    name: "Silla de Ruedas Eléctrica Ultra Portable VH100",
    price: 3700000,
    image: "https://ortopedicos.co/wp-content/uploads/2026/05/Silla-de-Ruedas-Electrica-Lowe-VH100-1.webp",
    description:
      "Silla de ruedas eléctrica ultraprortátil, plegable y fácil de transportar. Cuenta con estructura en acero, control mediante joystick, apoyabrazos abatibles y plataforma reposapiés abatible. Al apagarla puede utilizarse de forma manual.",
    specs: {
      Referencia: "VH100",
      Categoría: "Silla de ruedas eléctrica",
      Tipo: "Eléctrica, plegable y ultraportátil",
      Marca: "Lowe",
      Estructura: "Acero",
      Tapicería: "Nylon",
      Control: "Joystick",
      Modalidad:
        "Puede utilizarse de forma manual cuando la silla está apagada",
      Apoyabrazos: "Abatibles",
      Reposapiés: "Plataforma abatible",
      Seguridad: "Cinturón de seguridad",
      Llantas: "Poliuretano",
      "Ancho total": "57 cm",
      "Ancho del asiento": "44 cm",
      "Profundidad del asiento": "40 cm",
      "Altura total": "92 cm",
      "Altura del asiento al piso": "54 cm",
      "Altura del espaldar": "53 cm",
      "Ruedas delanteras": "8 pulgadas",
      "Ruedas traseras": "11,5 pulgadas",
      "Inclinación máxima": "6°",
      "Distancia entre ruedas": "100 cm",
      "Ancho plegada": "38 cm",
      "Peso del producto": "21,6 kg",
      "Capacidad máxima": "130 kg",
      Baterías: "2 baterías de 12 V / 12 Ah",
      Motores: "2 motores de 24 V / 250 W",
      "Velocidad máxima": "6 km/h",
      Autonomía: "Hasta 15 km",
      "Tiempo estimado de recorrido": "4 horas",
      "Tiempo de carga": "6 a 7 horas",
      "Registro sanitario INVIMA": "2023DM-0027289",
      Garantía:
        "1 año para estructura, motor, controlador y joystick. 3 meses para la batería. No cubre descargas eléctricas, rodamientos, tapicería ni daños por mal uso.",
      Uso:
        "Movilidad de personas con dificultad para caminar, moverse o trasladarse, principalmente en espacios interiores."
    }
  },
  {
    id: 7,
    name: "Silla de Ruedas Motorizada Plegable FS111-AF1",
    price: 4350000,
    image: "https://ortopedicos.co/wp-content/uploads/2022/01/Silla-de-ruedas-motorizada-FS111-AF1.webp",
    description:
      "Silla de ruedas motorizada plegable diseñada para proporcionar movilidad independiente y cómoda. Su estructura resistente en acero, joystick de control y ruedas neumáticas permiten un desplazamiento suave y estable en interiores y exteriores.",
    specs: {
      Referencia: "FS111-AF1",
      Categoría: "Silla de ruedas eléctrica",
      Tipo: "Motorizada y plegable",
      Marca: "TME",
      Estructura: "Acero",
      Tapicería: "Nylon con malla acolchada",
      Control: "Joystick",
      Apoyabrazos: "Abatibles",
      Apoyapiés: "Removibles",
      Seguridad: "Cinturón de seguridad",
      "Modo manual":
        "Pin de bloqueo en las ruedas traseras para uso manual o automático",
      "Ruedas delanteras": "8 pulgadas, macizas",
      "Ruedas traseras": "16 pulgadas, neumáticas",
      "Ancho total": "60 cm",
      "Ancho del asiento": "47 cm",
      "Profundidad del asiento": "40 cm",
      "Altura del espaldar": "45 cm",
      "Altura total": "95 cm",
      "Altura del asiento al piso": "50 cm",
      "Largo total": "105 cm",
      "Peso con baterías": "47,5 kg",
      "Capacidad máxima": "100 kg",
      Batería: "24 Ah",
      Motores: "2 motores de 250 W",
      Velocidad: "De 1 a 6 km/h",
      Autonomía:
        "Hasta 20 km, dependiendo del peso, velocidad, terreno e inclinación",
      "Inclinación máxima": "12°",
      "Registro sanitario INVIMA": "2019DM-0020274",
      Garantía:
        "1 año contra defectos de fabricación en la estructura y 6 meses para controlador y baterías. No cubre descargas, rodamientos, partes plásticas ni tapicería.",
      Uso:
        "Movilidad independiente en interiores y exteriores sobre superficies estables."
    }
  },
   {
    id: 9,
    name: "Silla de Ruedas Neurológica Reclinable SYIV100-HE601",
    price: 1200000,
    image: "https://ortopedicos.co/wp-content/uploads/2022/01/Silla-reclinable-syiv100-he601.webp",
    description:
      "Silla de ruedas reclinable diseñada para brindar soporte postural y facilitar el traslado asistido. Cuenta con espaldar reclinable hasta 160°, cojín cefálico, soportes laterales, cojín abductor, mesa y reposapiés elevables para mejorar la comodidad y seguridad del usuario.",
    specs: {
      Referencia: "SYIV100-HE601",
      Categoría: "Silla de ruedas neurológica",
      Tipo: "Reclinable para traslado asistido",
      Marca: "Lowe",
      Estructura: "Acero cromado",
      Tapicería: "Nylon",
      Espaldar: "Reclinable hasta 160°",
      "Soporte cefálico": "Cojín cefálico",
      "Soportes laterales": "Cojines laterales para el tronco",
      "Cojín abductor": "Incluido",
      Mesa: "Incluida",
      Apoyabrazos: "Abatibles",
      Reposapiés:
        "Desmontables y elevables, con graduación de 30° a 90°",
      "Extensión de reposapiés": "Hasta 10 cm",
      Frenos: "Freno accionado desde la barra de empuje",
      Seguridad: "Ruedas antivuelco",
      Llantas: "Macizas",
      "Ancho total": "67 cm",
      "Ancho del asiento": "45 cm",
      "Profundidad del asiento": "40 cm",
      "Altura total": "87 cm",
      "Altura máxima con soporte cefálico": "104 cm",
      "Altura del asiento al piso": "57 cm",
      "Ruedas delanteras": "6 pulgadas",
      "Ruedas traseras": "15 pulgadas",
      "Altura del chasis al suelo": "18 cm",
      "Medidas del cojín cefálico": "55 x 33 cm",
      "Peso del producto": "18 kg",
      "Capacidad máxima": "75 kg",
      "Altura máxima recomendada del usuario": "1,60 m",
      "Registro sanitario INVIMA": "2024DM-0029131",
      Garantía:
        "1 año sobre la estructura en acero. No cubre rodamientos, tapicería ni daños por mal uso.",
      Uso:
        "Indicada para personas con dificultad para mantener la posición de pie o realizar la marcha y que requieren apoyo postural durante el traslado."
    }
  },
  {
    id: 10,
    name: "Silla de Ruedas Estándar Neurológica PH2000A1",
    price: 1750000,
    image: "https://ortopedicos.co/wp-content/uploads/2022/06/Silla-de-Ruedas-Neurologica-Goshen-Azul-VH880.webp",
    description:
      "Silla de ruedas neurológica con sistema de reclinación y basculación que favorece la postura prolongada en posición sedente. Sus soportes acolchados para tronco y cabeza brindan estabilidad, seguridad y mayor comodidad durante la alimentación y el traslado.",
    specs: {
      Referencia: "PH2000A1",
      Categoría: "Silla de ruedas neurológica",
      Tipo: "Reclinable y basculante",
      Marca: "HCM",
      Estructura: "Aluminio pintado de color azul",
      Tapicería: "Nylon",
      Espaldar: "Reclinable",
      Basculación: "Sistema de asiento y espaldar basculante",
      "Extensión cefálica": "Incluida",
      "Soportes laterales": "Cojines acolchados para el tórax",
      "Cojín abductor": "Incluido",
      Apoyabrazos: "Ajustables en altura",
      Reposapiés: "Elevables y desmontables",
      Llantas: "Poliuretano",
      "Ancho total": "61 cm",
      "Ancho del asiento": "44 cm",
      "Profundidad del asiento": "40 cm",
      "Altura total": "De 106 a 118 cm",
      "Altura del asiento al piso": "50 cm",
      "Altura del espaldar": "46 cm",
      "Largo total": "96 cm",
      "Ruedas delanteras": "6 pulgadas",
      "Ruedas traseras": "15 pulgadas",
      "Peso del producto": "18 kg",
      "Capacidad máxima": "75 kg",
      "Registro sanitario INVIMA": "2016DM-0015030",
      Garantía:
        "1 año sobre la estructura en aluminio. No cubre rodamientos, tapicería ni daños por mal uso.",
      Uso:
        "Favorece la postura prolongada en posición sedente, facilita la ingesta de alimentos y proporciona soporte de tronco y cabeza."
    }
  },
  {
    id: 11,
    name: "Silla de Ruedas Neurológica para Adulto PH5002",
    price: 2100000,
    image: "https://ortopedicos.co/wp-content/uploads/2026/06/Silla-de-Ruedas-Neurologica-Reclinable-Adulto.webp",
    description:
      "Silla de ruedas neurológica para adulto con sistema reclinable y basculante, diseñada para brindar soporte integral de cabeza, tronco y miembros inferiores. Cuenta con ajustes posturales, pechera, cojín abductor y ruedas traseras de 24 pulgadas que permiten la autopropulsión.",
    specs: {
      Referencia: "PH5002",
      Categoría: "Silla de ruedas neurológica",
      Tipo: "Neurológica para adulto, reclinable y basculante",
      Marca: "Lowe",
      Estructura: "Acero ligero",
      Tapicería: "Cordobán suave",
      Espaldar: "Reclinable hasta 175°",
      Basculación: "Sistema de asiento basculante",
      "Extensión cefálica": "Incluida",
      "Soportes laterales":
        "Soportes ajustables para el tórax en posiciones 1 y 2",
      Pechera:
        "Ajustable para evitar el desplazamiento del tronco hacia delante",
      "Cojín abductor":
        "Ayuda a evitar el deslizamiento hacia delante y el patrón de tijera",
      Apoyabrazos: "Ajustables en altura",
      Reposapiés: "Elevables y desmontables",
      Seguridad: "Ruedas antivuelco",
      Llantas: "Poliuretano",
      "Ruedas delanteras": "8 pulgadas",
      "Ruedas traseras": "24 pulgadas para autopropulsión",
      "Ancho total": "66 cm",
      "Ancho del asiento": "45 cm",
      "Profundidad del asiento": "47 cm",
      "Altura sin extensión cefálica": "99 cm",
      "Altura máxima con extensión cefálica": "123 cm",
      "Altura del asiento al piso": "53 cm",
      "Altura del espaldar": "54 cm",
      "Largo total": "110 cm",
      "Peso del producto": "38 kg",
      "Capacidad máxima": "120 kg",
      "Edad sugerida": "Desde los 12 años, según la ficha técnica",
      "Registro sanitario INVIMA": "2016DM-0015030",
      Garantía:
        "1 año sobre la estructura en acero. No cubre rodamientos, tapicería ni daños por mal uso.",
      Uso:
        "Proporciona soporte postural para usuarios neurológicos, facilita periodos de descanso y procedimientos clínicos o terapéuticos."
    }
  }
 
    ],
  },
  2: {
    categoryName: "Teléfonos",
    products: [
      {
        id: 201,
        name: "Smartphone Pro",
        price: 999,
        image: "phone-pro.jpg",
        description: "Teléfono inteligente premium",
        specs: {
          Pantalla: '6.7" OLED 120Hz',
          Procesador: "Snapdragon 8 Gen 2",
          RAM: "12GB LPDDR5",
          Cámara: "48MP + 12MP + 12MP",
          Batería: "4500 mAh",
          "Sistema Operativo": "Android 14",
        },
      },
      {
        id: 202,
        name: "Smartphone Standard",
        price: 599,
        image: "phone-standard.jpg",
        description: "Teléfono accesible y confiable",
        specs: {
          Pantalla: '6.1" LCD 60Hz',
          Procesador: "Snapdragon 7 Gen 1",
          RAM: "6GB LPDDR4",
          Cámara: "32MP + 8MP",
          Batería: "3800 mAh",
          "Sistema Operativo": "Android 13",
        },
      },
    ],
  },
  3: {
    categoryName: "Tablets",
    products: [
      {
        id: 301,
        name: "Tablet Pro",
        price: 799,
        image: "tablet-pro.jpg",
        description: "Tablet de gran tamaño para productividad",
        specs: {
          Pantalla: '12.9" OLED',
          Procesador: "A16 Bionic",
          RAM: "8GB",
          "Almacenamiento": "256GB",
          Batería: "10 horas",
          "Peso": "580g",
        },
      },
    ],
  },
  4: {
    categoryName: "Auriculares",
    products: [
      {
        id: 401,
        name: "Auriculares Inalámbricos Premium",
        price: 299,
        image: "headphones-premium.jpg",
        description: "Auriculares con cancelación de ruido activa",
        specs: {
          "Tipo": "Over-ear",
          "Conexión": "Bluetooth 5.3",
          "Cancelación de Ruido": "Activa ANC",
          Autonomía: "30 horas",
          "Micrófono": "Sí",
          "Peso": "250g",
        },
      },
    ],
  },
  5: {
    categoryName: "Cámaras",
    products: [
      {
        id: 501,
        name: "Cámara Mirrorless 4K",
        price: 1299,
        image: "camera-mirrorless.jpg",
        description: "Cámara profesional para fotografía y video",
        specs: {
          Sensor: "Full Frame 45MP",
          Video: "8K 30fps",
          "Velocidad ISO": "100-25600",
          "Sistema Autofoco": "AI",
          "Pantalla": "LCD 3.2 pulgadas",
          "Peso": "650g",
        },
      },
    ],
  },
  6: {
    categoryName: "Monitores",
    products: [
      {
        id: 601,
        name: "Monitor 4K 27\"",
        price: 599,
        image: "monitor-4k.jpg",
        description: "Monitor profesional para diseño y edición",
        specs: {
          Resolución: "3840x2160 4K",
          "Tamaño Pantalla": "27 pulgadas",
          "Tasa Refresco": "60Hz",
          "Cobertura de Color": "99% Adobe RGB",
          Puertos: "HDMI 2.1 + DisplayPort",
          "Poder": "65W USB-C",
        },
      },
    ],
  },
  7: {
    categoryName: "Teclados",
    products: [
      {
        id: 701,
        name: "Teclado Mecánico RGB",
        price: 179,
        image: "keyboard-mechanical.jpg",
        description: "Teclado mecánico profesional gaming",
        specs: {
          "Tipo de Switch": "Gateron Optical",
          "Retroiluminación": "RGB individual",
          "Conexión": "USB-C inalámbrico",
          "Layout": "Full Size",
          "Peso": "980g",
          "Material": "Aluminio",
        },
      },
    ],
  },
  8: {
    categoryName: "Ratones",
    products: [
      {
        id: 801,
        name: "Ratón Gaming Inalámbrico",
        price: 89,
        image: "mouse-gaming.jpg",
        description: "Ratón de precisión para gaming competitivo",
        specs: {
          Sensor: "PMW3389 16000 DPI",
          "Botones": "8 programables",
          "Peso": "69g",
          "Conexión": "2.4GHz inalámbrico",
          "Batería": "70 horas",
          "Material": "Plástico reforzado",
        },
      },
    ],
  },
  9: {
    categoryName: "Fuentes de Poder",
    products: [
      {
        id: 901,
        name: "Fuente 1000W 80+ Gold",
        price: 249,
        image: "power-supply.jpg",
        description: "Fuente modular de alta eficiencia",
        specs: {
          Potencia: "1000W",
          Certificación: "80+ Gold",
          "Conectores": "Modulares",
          "Protección": "OCP, OVP, SCP",
          Ventilador: "135mm",
          "Garantía": "10 años",
        },
      },
    ],
  },
  10: {
    categoryName: "Almacenamiento",
    products: [
      {
        id: 1001,
        name: "SSD NVMe 2TB",
        price: 149,
        image: "ssd-nvme.jpg",
        description: "Almacenamiento ultrarrápido NVMe Gen4",
        specs: {
          Capacidad: "2TB",
          Interface: "NVMe Gen4",
          "Lectura": "7000 MB/s",
          Escritura: "6000 MB/s",
          "Factor de Forma": "M.2 2280",
          "Garantía": "5 años",
        },
      },
    ],
  },
};

export default function ProductsPage() {
  const params = useParams();
  const categoryKey = String(params?.id ?? "");
  const categoryData = productsDatabase[categoryKey];

  if (!categoryData) {
    return (
      <div className="flex flex-col min-h-screen bg-white">

        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Categoría no encontrada
            </h1>
            <p className="text-gray-500 mb-4">ID recibido: {categoryKey}</p>
            <Link
              href="/"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Volver atrás
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">


      <main className="flex-1">
        {/* Header */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 font-medium mb-4 transition-colors"
            >
              ← Volver
            </Link>
            <h1 className="text-4xl font-bold text-gray-900">
              {categoryData.categoryName}
            </h1>
            <p className="text-gray-600 mt-2">
              {categoryData.products.length} productos disponibles
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryData.products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                  specs={product.specs}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 text-gray-600 py-8 text-center">
        <p>&copy; 2024 Mi Sitio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
