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
      pdfUrl?: string;
    }>;
  }
> = {
  1: {
    categoryName: "Sillas de Ruedas",
    products: [
      {
        pdfUrl: "https://canva.link/lc8z2sj5mlwxumk",
        id: 1,
        name: "HE603",
        price: 410000,
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
        pdfUrl: "https://canva.link/lc8z2sj5mlwxumk",
        id: 2,
        name: "HE605",
        price: 410000,
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
        pdfUrl: "https://canva.link/lc8z2sj5mlwxumk",
        id: 3,
        name: "FY809",
        price: 410000,
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
        pdfUrl: "https://canva.link/lc8z2sj5mlwxumk",
        id: 4,
        name: "Silla de Ruedas de Transporte Económica KY871AVJ-12-46",
        price: 530000,
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
        pdfUrl: "https://canva.link/lc8z2sj5mlwxumk",
        id: 5,
        name: "Silla de Ruedas de Transporte T50",
        price: 590000,
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
        pdfUrl: "https://canva.link/lc8z2sj5mlwxumk",
        id: 3,
        name: "Silla de Ruedas Estándar Tipo Escritorio FS909B",
        price: 700000,
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
        pdfUrl: "https://canva.link/lc8z2sj5mlwxumk",
        id: 4,
        name: "Silla de Ruedas de Transporte T100",
        price: 760000,
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
        pdfUrl: "https://canva.link/lc8z2sj5mlwxumk",
        id: 5,
        name: "Silla de Ruedas Estándar en Aluminio FY867L",
        price: 760000,
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
        pdfUrl: "https://canva.link/lc8z2sj5mlwxumk",
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
        pdfUrl: "https://canva.link/lc8z2sj5mlwxumk",
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
        pdfUrl: "https://canva.link/lc8z2sj5mlwxumk",
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
        pdfUrl: "https://canva.link/lc8z2sj5mlwxumk",
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
        pdfUrl: "https://canva.link/lc8z2sj5mlwxumk",
        id: 10,
        name: "Silla de Ruedas Estándar Neurológica PH2000A1 Adulto / pediatrica",
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
        pdfUrl: "https://canva.link/lc8z2sj5mlwxumk",
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
      }, {
        pdfUrl: "https://canva.link/lc8z2sj5mlwxumk",
        id: 12,
        name: "Silla de Ruedas Bariátrica Acolchada FS950",
        price: 1200000,
        image: "https://ortopedicos.co/wp-content/uploads/2026/04/Silla-de-Ruedas-Bariatrica-Acolchada-FS950.webp",
        description:
          "Silla de ruedas bariátrica con estructura robusta en acero y cojinería acolchada, diseñada para brindar resistencia, estabilidad y comodidad. Sus ruedas traseras neumáticas ayudan a absorber impactos y permiten un desplazamiento más suave en interiores y exteriores.",
        specs: {
          Referencia: "FS950",
          Categoría: "Silla de ruedas bariátrica",
          Tipo: "Autopropulsable y plegable",
          Marca: "TME",
          Estructura: "Acero pintado en color negro grafito",
          Tapicería: "Forro acolchado de fácil limpieza",
          Apoyabrazos: "Abatibles",
          Apoyapiés: "Removibles",
          Seguridad: "Ruedas antivuelco removibles",
          "Ruedas delanteras": "8 x 1/2 pulgadas, macizas",
          "Ruedas traseras": "24 pulgadas, neumáticas con rin estrella",
          "Ancho total": "73 cm",
          "Ancho del asiento": "54 cm",
          "Profundidad del asiento": "45 cm",
          "Altura del espaldar": "35 cm",
          "Altura total": "90 cm",
          "Altura del asiento al piso": "55 cm",
          "Largo total": "108 cm",
          "Peso del producto": "21,5 kg",
          "Capacidad máxima": "125 kg",
          "Registro sanitario INVIMA": "2019DM-0020274",
          Garantía:
            "1 año contra defectos de fabricación en la estructura. No cubre rodamientos, partes plásticas ni tapicería.",
          Uso:
            "Indicada para usuarios que requieren un asiento amplio y una estructura reforzada para movilidad diaria en interiores y exteriores."
        }
      },
      {
        pdfUrl: "https://canva.link/lc8z2sj5mlwxumk",
        id: 14,
        name: "Silla de Ruedas Estándar para Sobrepeso PH8001C",
        price: 1200000,
        image: "https://ortopedicos.co/wp-content/uploads/2026/06/silla-para-sobre-peso-PH8001C.webp",
        description:
          "Silla de ruedas estándar para personas con sobrepeso, fabricada en acero ligero y equipada con asiento amplio. Sus apoyabrazos abatibles facilitan las transferencias y los reposapiés desmontables permiten acceder con mayor facilidad a espacios reducidos.",
        specs: {
          Referencia: "PH8001C",
          Categoría: "Silla de ruedas para sobrepeso",
          Tipo: "Estándar, autopropulsable y plegable",
          Marca: "Coimpormédica",
          Estructura:
            "Acero ligero con pintura electrostática de color gris",
          Tapicería: "Nylon",
          Apoyabrazos: "Abatibles",
          Reposapiés: "Desmontables",
          "Sistema de ruedas": "Desmonte rápido",
          "Rin trasero": "Rin estrella",
          Llantas: "Poliuretano",
          "Ruedas delanteras": "7 pulgadas",
          "Ruedas traseras": "24 pulgadas",
          "Ancho total": "69 cm",
          "Ancho del asiento": "50 cm",
          "Altura total": "90 cm",
          "Altura del asiento al piso": "50 cm",
          "Peso del producto": "19,7 kg",
          "Capacidad máxima": "125 kg",
          "Registro sanitario INVIMA": "No especificado en la ficha técnica",
          Garantía: "No especificada en la ficha técnica",
          Uso:
            "Facilita el traslado y las transferencias de personas con sobrepeso, ofreciendo un asiento amplio y componentes desmontables."
        }
      },
      {
        pdfUrl: "https://canva.link/lc8z2sj5mlwxumk",
        id: 15,
        name: "Silla de Ruedas Doble Función en Aluminio FS903LA",
        price: 1650000,
        image: "https://ortopedicos.co/wp-content/uploads/2026/04/Silla-doble-proposito-aluminio-tme-azul-fs903LA.webp",
        description:
          "Silla de ruedas liviana de doble función que puede utilizarse como silla autopropulsable o convertirse en silla de transporte. Su estructura plegable en aluminio, ruedas traseras desmontables y frenos para acompañante facilitan los desplazamientos y el almacenamiento.",
        specs: {
          Referencia: "FS903LA",
          Categoría: "Silla de ruedas doble función",
          Tipo: "Autopropulsable y de transporte",
          Marca: "TME",
          Estructura: "Aluminio plegable",
          Tapicería:
            "Nylon negro con forro removible en tela azul",
          Espaldar: "Abatible",
          Apoyabrazos: "Abatibles y removibles",
          Apoyapiés: "Removibles",
          Frenos: "Frenos accionados por el acompañante",
          Conversión:
            "Pin de desmonte para retirar las ruedas grandes y convertirla en silla de transporte",
          "Ruedas delanteras": "6 pulgadas, macizas",
          "Ruedas auxiliares": "8 pulgadas, macizas con rin estrella",
          "Ruedas traseras":
            "22 pulgadas en poliuretano, con rin de radios y aro autopropulsor",
          "Ancho total": "68 cm",
          "Ancho del asiento": "45 cm",
          "Profundidad del asiento": "40 cm",
          "Altura del espaldar": "49 cm",
          "Altura total": "92 cm",
          "Altura del asiento al piso": "40 cm",
          "Largo total": "103 cm",
          "Peso del producto": "14 kg",
          "Capacidad máxima": "100 kg",
          "Registro sanitario INVIMA": "2019DM-0020274",
          Garantía:
            "1 año contra defectos de fabricación en la estructura. No cubre rodamientos, partes plásticas ni tapicería.",
          Uso:
            "Ideal para usuarios que necesitan alternar entre autopropulsión y traslado asistido en una silla liviana y fácil de transportar."
        }
      }

    ],
  },
  2: {
    categoryName: "Caminadores",
    products: [
     {
    id: 15,
    name: "Caminador Doble Función sin Ruedas KP1342AL",
    price: 125000,
    image: "https://ortopedicos.co/wp-content/uploads/2021/07/caminador-doble-funcion.webp",
    description:
      "Caminador plegable de doble función que puede utilizarse en modo paso a paso o como caminador estándar. Está fabricado en aluminio con refuerzo interno en hierro y cuenta con altura graduable, empuñaduras cómodas y tapones antideslizantes para brindar mayor estabilidad y seguridad.",
    specs: {
      Referencia: "KP1342AL",
      Categoría: "Caminadores ortopédicos",
      Tipo: "Doble función, estándar y paso a paso",
      Marca: "Konfort Plus",
      Ruedas: "Sin ruedas",
      Estructura: "Aluminio con alma de hierro",
      Plegado: "Mecanismo de plegado accionado con la mano",
      Funciones: "Modo estándar y modo paso a paso",
      "Altura graduable": "De 75 cm a 92,5 cm",
      "Ancho del producto": "45,7 cm",
      "Calibre del tubo": "1 mm",
      Empuñaduras: "PVC en color gris",
      Apoyos: "Tapones antideslizantes",
      "Capacidad máxima": "113 kg",
      Colores:
        "Azul KP1342AL-12, gris KP1342AL-19 y verde KP1342AL-9",
      "Clasificación de riesgo": "Clase I, riesgo bajo",
      "Registro sanitario INVIMA": "2017DM-0017016",
      "SKU / EAN": "H01MA011582 - H01MA011583 - 7709224075049",
      "Dimensiones de la caja": "55 x 27 x 80 cm",
      "Cantidad por caja": "4 unidades",
      "Peso neto de la caja": "10 kg",
      "Peso bruto de la caja": "12 kg",
      Garantía: "2 años",
      Uso:
        "Brinda apoyo y estabilidad durante la marcha. Su doble función permite avanzar alternando los laterales o utilizarlo como caminador estándar."
    }
  },
  {
    id: 16,
    name: "Caminador Stand Up Doble Función KP1-816L",
    price: 150000,
    image: "https://ortopedicos.co/wp-content/uploads/2021/07/caminador-stand-up.webp",
    description:
      "Caminador stand up plegable de doble función, diseñado para brindar apoyo durante la marcha y facilitar el proceso de ponerse de pie. Su estructura en aluminio con refuerzo interno en hierro ofrece estabilidad, mientras que su graduación de altura permite adaptarlo al usuario.",
    specs: {
      Referencia: "KP1-816L",
      Categoría: "Caminadores ortopédicos",
      Tipo: "Stand up de doble función",
      Marca: "Konfort Plus",
      Ruedas: "Sin ruedas",
      Estructura: "Aluminio con alma de hierro",
      Plegado: "Mecanismo de plegado rápido accionado con la mano",
      Funciones:
        "Apoyo para incorporarse, caminador estándar y desplazamiento paso a paso",
      "Altura graduable": "De 70 cm a 88 cm",
      "Ancho del producto": "50,8 cm",
      "Calibre del tubo": "1 mm",
      Empuñaduras: "PVC en colores gris y negro",
      Apoyos: "Tapones antideslizantes",
      "Capacidad máxima": "113 kg",
      Colores:
        "Azul KP1-816L-12, gris KP1-816L-19 y verde KP1-816L-9",
      "Clasificación de riesgo": "Clase I, riesgo bajo",
      "Registro sanitario INVIMA":
        "2017DM-0017016 / 2017DM-0016757",
      SKU: "H01MA011290 - H01MA011291 - H01MA011292",
      "Dimensiones de la caja": "57 x 27 x 75 cm",
      "Cantidad por caja": "4 unidades",
      "Peso neto de la caja": "11 kg",
      "Peso bruto de la caja": "12 kg",
      Garantía: "2 años",
      Uso:
        "Ofrece doble nivel de agarre para ayudar al usuario a incorporarse gradualmente y brindar apoyo durante la marcha."
    }
  }, {
    id: 17,
    name: "Caminador con Asiento en Lona y Ruedas Delanteras FY961L",
    price: 190000,
    image: "https://ortopedicos.co/wp-content/uploads/2021/10/caminador-con-lona.webp",
    description:
      "Caminador plegable en aluminio con asiento en lona y ruedas delanteras, diseñado para brindar apoyo durante la marcha y permitir pausas de descanso. Su altura graduable facilita la adaptación al usuario y sus apoyos posteriores ofrecen mayor estabilidad.",
    specs: {
      Referencia: "FY961L",
      Categoría: "Caminadores ortopédicos",
      Tipo: "Caminador plegable con asiento y ruedas delanteras",
      Marca: "Lowe",
      Estructura: "Aluminio color plateado",
      Asiento: "Lona",
      Ruedas: "Dos ruedas delanteras",
      Plegado: "Estructura plegable",
      "Altura graduable": "De 46 cm a 62 cm",
      "Ancho del producto": "48 cm",
      "Profundidad del producto": "48 cm",
      "Peso del producto": "2,6 kg",
      "Capacidad máxima del usuario": "100 kg",
      "Capacidad máxima del asiento": "75 kg",
      "Registro sanitario INVIMA": "2024DM-0028422",
      Garantía:
        "1 año sobre la estructura. No cubre rodamientos, tapicería ni daños ocasionados por mal uso.",
      Uso:
        "Indicado para personas con dificultad para mantenerse de pie o caminar, que necesitan apoyo durante el desplazamiento y una superficie para descansar."
    }
  },{
  id: 19,
  name: "Caminador Ajustable con Ruedas y Asiento KP271-AL-2",
  price: 380000,
  image: "https://ortopedicos.co/wp-content/uploads/2026/05/caminador-andador-4-ruedas.webp",
  description:
    "Caminador rollator plegable y liviano con cuatro ruedas, asiento acolchado, respaldo y frenos manuales. Sus empuñaduras ergonómicas de altura ajustable y la bolsa portaobjetos brindan mayor comodidad, estabilidad y autonomía durante el desplazamiento.",
  specs: {
    Referencia: "KP271-AL-2",
    Categoría: "Caminadores rollator",
    Tipo: "Caminador ajustable de 4 ruedas con asiento",
    Marca: "Konfort Plus",
    Estructura: "Aluminio",
    "Tubos de las asas de empuje": "Acero",
    Empuñaduras: "PVC",
    Plegado: "Estructura plegable",
    Asiento: "Acolchado en espuma",
    Respaldo: "Con pin de seguridad",
    "Bolsa portaobjetos": "Nailon, ubicada debajo del asiento",
    Ruedas: "4 ruedas de 7 x 2,6 cm con coraza en poliuretano",
    "Ruedas direccionales": "2",
    "Ruedas con freno": "2",
    Frenos: "Manuales de doble función: estacionario y parqueo",
    "Ancho total": "60 cm",
    "Largo total": "83 cm",
    "Altura mínima": "79 cm",
    "Altura máxima": "91 cm",
    "Niveles de ajuste": "5 niveles",
    "Altura del asiento al piso": "55 cm",
    "Ancho del asiento": "35 cm",
    "Profundidad del asiento": "32 cm",
    "Altura del respaldo desde el asiento": "25 cm",
    "Peso del producto": "7,42 kg",
    "Capacidad máxima": "135 kg",
    Color: "Rojo",
    "Diámetro del tubo": "2,55 cm",
    "Calibre del tubo": "1,5 mm",
    "Código EAN": "7708442557078",
    "Clasificación de riesgo": "Clase I",
    "Registro sanitario INVIMA": "2017DM-0016757",
    Garantía: "2 años",
    Uso:
      "Indicado para usuarios con movilidad reducida que necesitan estabilidad durante la marcha y una superficie de descanso durante el recorrido."
  }},
  {
    id: 18,
    name: "Caminador Rollator de 4 Ruedas con Canastilla y Calapiés FY9650L",
    price: 490000,
    image: "https://ortopedicos.co/wp-content/uploads/2026/05/caminador-con-ruedas-asiento-y-descansa-pies.webp",
    description:
      "Caminador rollator plegable de cuatro ruedas, equipado con frenos de mano, asiento rígido acolchado, canastilla y calapiés. Su estructura liviana en aluminio ofrece apoyo para la marcha y permite utilizarlo como silla de traslado en recorridos cortos con acompañante.",
    specs: {
      Referencia: "FY9650L",
      Categoría: "Caminadores rollator",
      Tipo: "Rollator de cuatro ruedas con asiento",
      Marca: "Lowe",
      Estructura: "Aluminio color rojo",
      Plegado: "Estructura plegable",
      Ruedas: "4 ruedas de 6 pulgadas",
      Frenos: "Frenos de mano",
      Asiento: "Rígido y acolchado",
      "Medidas del asiento": "33 x 36 cm",
      Canastilla: "Incluida",
      Calapiés: "Incluidos",
      "Altura graduable": "De 79 cm a 90 cm",
      "Ancho del producto": "60 cm",
      "Profundidad del producto": "60 cm",
      "Peso del producto": "2,9 kg",
      "Capacidad máxima del usuario": "100 kg",
      "Capacidad máxima del asiento": "70 kg",
      "Registro sanitario INVIMA": "2024DM-0028422",
      Garantía:
        "1 año sobre la estructura. No cubre rodamientos, tapicería ni daños ocasionados por mal uso.",
      Uso:
        "Indicado para personas con dificultad para caminar o mantenerse de pie que requieren apoyo, control mediante frenos y posibilidad de descansar durante el recorrido."
    }
  },
  {
    id: 20,
    name: "Caminador Doble Función con Ruedas de 5 Pulgadas KP153-AL-19",
    price: 160000,
    image: "https://ortopedicos.co/wp-content/uploads/2021/10/caminador-con-ruedas-delanteras-en-aluminio.webp",
    description:
      "Caminador plegable con dos ruedas delanteras de 5 pulgadas, diseñado para brindar estabilidad y seguridad a personas con movilidad reducida. Puede utilizarse en modo fijo o paso a paso y cuenta con altura graduable, empuñaduras ergonómicas y tapones antideslizantes.",
    specs: {
      Referencia: "KP153-AL-19",
      Categoría: "Caminadores ortopédicos",
      Tipo: "Caminador doble función con ruedas delanteras",
      Marca: "Konfort Plus",
      Estructura:
        "Aluminio anodizado con barras laterales y refuerzo interno en acero",
      Funciones: "Modo fijo y modo paso a paso",
      Plegado: "Plegable mediante un botón",
      "Cantidad de ruedas": "2 ruedas delanteras",
      Ruedas:
        "Macizas de 5 pulgadas en poliuretano con coraza y rin estrella",
      "Ruedas traseras": "Tapones antideslizantes",
      Empuñaduras: "Material PCC, según ficha técnica",
      Tapones: "Material TRP, según ficha técnica",
      "Altura graduable": "De 76 a 94 cm",
      "Niveles de ajuste": "8 niveles",
      "Ancho total": "60 cm",
      "Largo total": "De 51 a 54 cm",
      "Diámetro de los tubos":
        "Estructura: 25,7 mm; patas: 28,1 mm",
      "Calibre de los tubos":
        "Estructura: 1,1 mm; patas: 0,9 mm",
      "Peso del producto": "2,7 kg",
      "Capacidad máxima":
        "100 kg; la ficha también incluye la anotación de 130 kg de usuario",
      "Código EAN": "7709409504197",
      "Unidades por caja": "2 unidades",
      "Condiciones ambientales":
        "Temperatura de -10 a 40 °C y humedad igual o inferior al 80%",
      "Clasificación de riesgo": "Clase I",
      "Registro sanitario INVIMA": "No especificado en la ficha técnica",
      Garantía: "2 años",
      Uso:
        "Indicado para personas con movilidad reducida que necesitan apoyo estable durante la marcha y facilidad para avanzar paso a paso."
    }
  },
  {
    id: 21,
    name: "Caminador Rollator con Silla AJ-922",
    price: 250000,
    image: "https://ortopedicos.co/wp-content/uploads/2026/05/caminador-rollador-con-silla-en-acero.webp",
    description:
      "Caminador rollator plegable con estructura en acero, cuatro ruedas, frenos manuales y asiento acolchado. Incluye un compartimiento tipo tula para transportar objetos personales y permite descansar durante los recorridos.",
    specs: {
      Referencia: "AJ-922",
      Categoría: "Caminadores rollator",
      Tipo: "Rollator de cuatro ruedas con asiento",
      Marca: "Lowe",
      Estructura: "Acero color rojo",
      Plegado: "Estructura plegable",
      Ruedas: "4 ruedas de 6 pulgadas",
      Frenos: "Frenos manuales en los manubrios",
      Manubrios: "Altura graduable",
      Asiento: "Rígido y acolchado",
      "Medidas del asiento": "35 x 32 cm",
      Compartimiento: "Bolsa portaobjetos tipo tula",
      "Ancho total": "50 cm",
      "Largo total": "57 cm",
      "Altura del asiento al piso": "42 cm",
      "Altura mínima": "80 cm",
      "Altura máxima": "93 cm",
      "Peso del producto": "7,7 kg",
      "Capacidad máxima": "75 kg",
      "Dimensiones de la caja": "55 x 55 x 11 cm",
      Color: "Rojo",
      "Registro sanitario INVIMA": "2025DM-0030145",
      Garantía:
        "1 año sobre la estructura. No cubre rodamientos, tapicería ni daños ocasionados por mal uso.",
      Uso:
        "Indicado para personas con dificultad para caminar o mantenerse de pie que necesitan apoyo, control mediante frenos y una superficie para descansar."
    }
  },
  {
    id: 22,
    name: "Caminador Rollator Carrito de Compras AJ-904B",
    price: 500000,
    image: "https://ortopedicos.co/wp-content/uploads/2021/07/Caminador-carrito-de-compras-verde.webp",
    description:
      "Caminador rollator plegable con asiento y compartimiento tipo maletín, diseñado para brindar apoyo durante la marcha y facilitar el transporte de objetos personales o compras. Cuenta con cuatro ruedas de 8 pulgadas, frenos asistidos con bloqueo y altura graduable.",
    specs: {
      Referencia: "AJ-904B",
      Categoría: "Caminadores rollator",
      Tipo: "Rollator de cuatro ruedas con asiento y maletín",
      Marca: "Lowe",
      Estructura: "Acero color verde",
      Plegado: "Estructura plegable",
      Ruedas: "4 ruedas de 8 pulgadas",
      Frenos: "Frenos asistidos con sistema de bloqueo",
      Manubrios: "Altura graduable",
      "Niveles de altura": "6 niveles",
      Asiento: "Tapicería en nylon",
      "Medidas del asiento": "47 x 25 cm",
      Compartimiento: "Maletín portaobjetos",
      "Medidas del maletín": "29 x 39 x 10 cm",
      Espaldar: "86 cm, según información indicada en la ficha",
      "Ancho total": "61 cm",
      "Largo total": "77 cm",
      "Altura mínima": "81 cm",
      "Altura máxima": "93,5 cm",
      "Peso del producto": "8 kg",
      "Capacidad máxima": "100 kg",
      Color: "Verde",
      "Registro sanitario INVIMA": "2025DM-0030145",
      Garantía:
        "1 año sobre la estructura. No cubre rodamientos, tapicería ni daños ocasionados por mal uso.",
      Uso:
        "Indicado para personas con dificultad para caminar que requieren apoyo estable y un compartimiento amplio para llevar objetos o realizar compras."
    }
  }
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
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {categoryData.products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                  specs={product.specs}
                  pdfUrl={product.pdfUrl}
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
