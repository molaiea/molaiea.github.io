import FacebookIcon from "@mui/icons-material/Facebook"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
/* ============ */
import drone from '../assets/images/drone.jpg'
import um6p from '../assets/images/um6p.jpeg'
import harambee from '../assets/images/harambee.png'
import caravane from '../assets/images/caravane.jpg'
import bureau from '../assets/images/bureau.jpg'
import geohackathon from '../assets/images/geohackathon.jpg'
import codechallenge from '../assets/images/codechallenge.jpg'
/* ============ */


export const personalInfo = [
    {name: "Nom", text: "Nafissa Atlagh"},
    {name: "Date de naissance", text: "06 Janvier 2001"},
    {name: "Occupation", text: "Elève ingénieur en SGIT"},
    {name: "Email", text: "atlaghnafissa@iav.ac.ma"},
    {name: "Tél", text: "+212677538407"}
]

export const aboutMe = "Étudiante en sciences géomatiques et ingénierie\
topographique, agée de 21 ans, passionnée par les mathématiques,\
l’astronomie et la culture chinoise. J’essaie de\
développer mes compétences dans le domaine des\
sciences géomatiques, je suis aussi intéressée par tout\
ce qui concerne la digitalisation et l’automatisation."

export const socials = {
    LinkedIn: {
        link: "https://www.linkedin.com/in/nafissa-atlagh-64b129162/",
        text: "Nafissa Atlagh",
        icon: <LinkedInIcon />
    },
    GitHub: {
        link: "https://github.com/molaiea",
        text: "Nafissa Atlagh",
        icon: <GitHubIcon />
    },
    Facebook: {
        link: "https://web.facebook.com/sas.kia.1042032/",
        text: "Molaiea Tssooe",
        icon: <FacebookIcon />
    }
}

export const educationInfo = [
    {name: "Juillet 2018", 
    text: "Baccalauréat en Sciences physique et chimie",
    detail: "-Lycée Moulay Youssef, Ouled Berhil, Taroudant-"},
    {name: "2022 - 2019", 
    text: "Année Préparatoire aux Etudes Supérieures en Agriculture (APESA)",
    detail: "-Institut Agronomique et Vétérinaire Hassan II, Rabat-"},
    {name: "2019 - Présent", 
    text: "Sciences géomatiques et Ingénierie Topographique",
    detail: "-Institut Agronomique et Vétérinaire Hassan II, Rabat-"},
    {name: "Juillet 2020", 
    text: "Baccalauréat en Sciences Mathématiques",
    detail: "-Lycée les Orangers, Rabat-"}
]

export const experienceInfo = [
    {name: "Mai 2019", 
    text: "Stage de Découverte de la Nature",
    detail: "-APESA, El Hajeb-"},
    {name: "Septembre 2021", 
    text: "Stage d'Initiation Professionnelle",
    detail: "-Chetouani Topographie & Géomatique-"},
    {name: "Mai 2022", 
    text: "Stage de Professionalisme",
    detail: "-Tamesna, Temara-"},
    {name: "Août 2022", 
    text: "Stage Professionnel",
    detail: "-Lycée les Orangers, Rabat-"},
    {name: "Septembre 2022", 
    text: "Stage de la Conservation Foncière et du Cadastre",
    detail: "-Service du Cadastre et CF, Taroudant-"}
]

export const sliderData = [
    {img: drone,
    title: "Cheffe du projet TheDroneTOP",
    description: "-Forum Ametop Entreprises, 2022-"},
    {img: um6p,
    title: "Team Leader, projet AgriFLAI",
    description: "-UM6P, 2022-"},
    {img: harambee,
    title: "Membre du Team ANA",
    description: "-BIM Harambee Africa, 2021-"},
    {img: bureau,
    title: "Responsable Infographie et Médiatisation",
    description: "-Bureau Exécutif AMETOP, 2021-2022-"},
    {img: caravane,
    title: "Membre du groupe d'organisation de l'événement",
    description: "Caravane Espoir, 2021"},
    {img: codechallenge,
    title: "Membre du groupe IAV",
    description: "-Code Challenge, Ensias, 2019-"},
    {img: geohackathon,
    title: "Membre du groupe IAV",
    description: "Geo-Hackathon, FST Tanger, 2020"}
]

export const skillsData = [
    {name: "AutoCAD", level:90},
    {name: "Pix4D", level:90},
    {name: "QGIS", level:90},
    {name: "ArcMap", level: 80},
    {name: "ArcGIS PRO", level:60},
    {name: "Erdas Imagine", level:70},
    {name: "Revit", level:60},
    {name: "Pix4D", level:90},
    {name: "Postgresql", level:80},
    {name: "Python", level:90},
    {name: "ReactJS", level:80},
    {name: "NodeJS", level:70},
    {name: "JavaScript", level:80},
    {name: "Java", level:80},
    {name: "HTML, CSS", level:90},
    {name: "Data Science", level:70},
    {name: "Latex", level:80},
    {name: "Design Graphique", level:90},
]

export const languageData = [
    {name: "tamazight", level: 100, text: "langue maternelle"},
    {name: "arabe", level: 90, text: "niveau bilingue"},
    {name: "français", level: 85, text: "niveau avancé"},
    {name: "anglais", level: 85, text: "niveau avancé"},
    {name: "chinois", level: 40, text: "niveau intermédiaire"}
]