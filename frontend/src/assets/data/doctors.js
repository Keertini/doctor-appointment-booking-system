import docImg01 from "../images/doc-img01.jpg";
import docImg02 from "../images/doc-img02.jpg";
import docImg03 from "../images/doc-img03.jpg";
import docImg04 from "../images/doc-img04.jpg";
import docImg05 from "../images/doc-img05.jpg";
import docImg06 from "../images/doc-img06.jpg";
import docImg07 from "../images/doc-img07.jpg";
import docImg08 from "../images/doc-img08.jpg";
import docImg09 from "../images/doc-img09.jpg";
import docImg10 from "../images/doc-img10.jpg";
import docImg11 from "../images/doc-img11.jpg";
import docImg12 from "../images/doc-img12.jpg";
import docImg13 from "../images/doc-img13.jpg";
import docImg14 from "../images/doc-img14.jpg";
import docImg15 from "../images/doc-img15.jpg";
import docImg16 from "../images/doc-img16.jpg";
import docImg17 from "../images/doc-img17.jpg";
import docImg18 from "../images/doc-img18.jpg";
import docImg19 from "../images/doc-img19.jpg";
import docImg20 from "../images/doc-img20.jpg";
import signImg01 from "../images/sign-img01.png";
import signImg02 from "../images/sign-img02.png";
import signImg03 from "../images/sign-img03.png";
import signImg04 from "../images/sign-img04.png";
import signImg05 from "../images/sign-img05.png";

const doctors = [
  {
    id: "01",
    name: "Dr. Emily Smith",
    description:
      "Dr. Emily Smith is a dedicated physician with a focus on preventive care and patient education. She believes in building strong relationships with her patients to provide personalized medical solutions.",
    reviews: [],
    signature: signImg01,
    hospital: "City General Hospital",
    location: "123 Medical Avenue, Cityville",
    fees: 150,
    available: true,
    image: docImg01,
  },
  {
    id: "02",
    name: "Dr. John Doe",
    description:
      "Dr. John Doe is an experienced specialist in internal medicine known for his compassionate approach and expertise in diagnosing complex medical conditions. Patients appreciate his thoroughness and clear communication.",
    reviews: [],
    signature: signImg02,
    hospital: "Unity Medical Center",
    location: "456 Health Street, Townsville",
    fees: 200,
    available: true,
    image: docImg02,
  },
  {
    id: "03",
    name: "Dr. Sarah Lee",
    description:
      "Dr. Sarah Lee specializes in pediatric care and is passionate about ensuring the health and well-being of children. She is known for her gentle demeanor and expertise in managing childhood illnesses.",
    reviews: [],
    signature: signImg03,
    hospital: "Sunrise Hospital",
    location: "789 Wellness Boulevard, Villagetown",
    fees: 180,
    available: false,
    image: docImg03,
  },
  {
    id: "04",
    name: "Dr. Michael Johnson",
    description:
      "Dr. Michael Johnson is a skilled surgeon with a focus on minimally invasive procedures. He is committed to providing high-quality care and ensuring optimal outcomes for his patients.",
    reviews: [],
    signature: signImg04,
    hospital: "Evergreen Clinic",
    location: "101 Medical Drive, Healthcity",
    fees: 160,
    available: true,
    image: docImg04,
  },
  {
    id: "05",
    name: "Dr. Laura Martinez",
    description:
      "Dr. Laura Martinez is an obstetrician-gynecologist known for her compassionate approach and comprehensive care for women's health issues. She is dedicated to empowering her patients through education and support.",
    reviews: [],
    signature: signImg05,
    hospital: "Grace Hospital",
    location: "555 Healing Lane, Medtown",
    fees: 190,
    available: true,
    image: docImg05,
  },
  {
    id: "06",
    name: "Dr. James Brown",
    description:
      "Dr. James Brown is a family physician with a passion for promoting healthy lifestyles and disease prevention. He takes a holistic approach to patient care, addressing both physical and emotional well-being.",
    reviews: [],
    signature: signImg01,
    hospital: "Green Valley Medical Center",
    location: "789 Health Road, Greentown",
    fees: 170,
    available: true,
    image: docImg06,
  },
  {
    id: "07",
    name: "Dr. Sophia Garcia",
    description:
      "Dr. Sophia Garcia specializes in psychiatry and is dedicated to providing compassionate care for individuals struggling with mental health issues. She believes in a personalized approach to treatment and empowers her patients to achieve mental wellness.",
    reviews: [],
    signature: signImg02,
    hospital: "Mountain View Hospital",
    location: "321 Wellness Way, Mountaintown",
    fees: 180,
    available: false,
    image: docImg07,
  },
  {
    id: "08",
    name: "Dr. Daniel White",
    description:
      "Dr. Daniel White is an orthopedic surgeon known for his expertise in sports medicine and orthopedic trauma. He is committed to helping patients regain mobility and function through advanced surgical techniques and rehabilitation.",
    reviews: [],
    signature: signImg03,
    hospital: "Silverlake Medical Center",
    location: "222 Health Avenue, Silvertown",
    fees: 150,
    available: true,
    image: docImg08,
  },
  {
    id: "09",
    name: "Dr. Olivia Brown",
    description:
      "Dr. Olivia Brown is a cardiologist with a focus on preventive cardiology and heart disease management. She is dedicated to helping patients adopt heart-healthy lifestyles and providing comprehensive cardiac care.",
    reviews: [],
    signature: signImg04,
    hospital: "Blue Ridge Clinic",
    location: "777 Healing Lane, Bluetown",
    fees: 200,
    available: true,
    image: docImg09,
  },
  {
    id: "10",
    name: "Dr. Ethan Wilson",
    description:
      "Dr. Ethan Wilson is a pulmonologist known for his expertise in respiratory diseases and critical care medicine. He is dedicated to providing comprehensive care for patients with lung conditions and improving their quality of life.",
    reviews: [],
    signature: signImg05,
    hospital: "Sunset Medical Center",
    location: "456 Wellness Road, Sunsetville",
    fees: 160,
    available: true,
    image: docImg10,
  },
  {
    id: "11",
    name: "Dr. Mia Rodriguez",
    description:
      "Dr. Mia Rodriguez is a dermatologist known for her expertise in medical and cosmetic dermatology. She is dedicated to providing personalized care and helping patients achieve healthy, radiant skin.",
    reviews: [],
    signature: signImg01,
    hospital: "Golden Gate Hospital",
    location: "888 Health Boulevard, Goldentown",
    fees: 190,
    available: false,
    image: docImg11,
  },
  {
    id: "12",
    name: "Dr. Jacob Martinez",
    description:
      "Dr. Jacob Martinez is a neurologist known for his expertise in treating neurological disorders such as epilepsy, Parkinson's disease, and stroke. He is dedicated to providing compassionate care and improving the quality of life for his patients.",
    reviews: [],
    signature: signImg02,
    hospital: "Pine Valley Clinic",
    location: "333 Wellness Lane, Pinetown",
    fees: 170,
    available: true,
    image: docImg12,
  },
  {
    id: "13",
    name: "Dr. Ava Johnson",
    description:
      "Dr. Ava Johnson is an ophthalmologist known for her expertise in eye care and vision correction procedures. She is dedicated to helping patients achieve optimal vision and providing compassionate care for eye-related issues.",
    reviews: [],
    signature: signImg03,
    hospital: "Crestview Medical Center",
    location: "999 Health Street, Crestville",
    fees: 180,
    available: true,
    image: docImg13,
  },
  {
    id: "14",
    name: "Dr. Noah Thomas",
    description:
      "Dr. Noah Thomas is an emergency medicine physician known for his calm demeanor and quick decision-making in high-pressure situations. He is dedicated to providing timely and effective care for patients in critical conditions.",
    reviews: [],
    signature: signImg04,
    hospital: "Riverbank Hospital",
    location: "444 Healing Avenue, Rivertown",
    fees: 150,
    available: true,
    image: docImg14,
  },
  {
    id: "15",
    name: "Dr. Isabella Carter",
    description:
      "Dr. Isabella Carter is an endocrinologist known for her expertise in managing hormonal disorders such as diabetes, thyroid disorders, and hormonal imbalances. She is dedicated to providing comprehensive care and empowering patients to take control of their health.",
    reviews: [],
    signature: signImg05,
    hospital: "Skyline Medical Center",
    location: "555 Wellness Boulevard, Skytown",
    fees: 200,
    available: true,
    image: docImg15,
  },
  {
    id: "16",
    name: "Dr. Benjamin Clark",
    description:
      "Dr. Benjamin Clark is a gastroenterologist known for his expertise in diagnosing and treating digestive disorders. He is dedicated to providing personalized care and helping patients achieve gastrointestinal health.",
    reviews: [],
    signature: signImg01,
    hospital: "Oceanview Clinic",
    location: "777 Health Lane, Oceantown",
    fees: 160,
    available: true,
    image: docImg16,
  },
  {
    id: "17",
    name: "Dr. Emma Adams",
    description:
      "Dr. Emma Adams is a pediatrician known for her compassionate approach and dedication to children's health. She is committed to providing comprehensive care for children of all ages and empowering families to make informed health decisions.",
    reviews: [],
    signature: signImg02,
    hospital: "Maplewood Medical Center",
    location: "111 Wellness Road, Mapletown",
    fees: 190,
    available: false,
    image: docImg17,
  },
  {
    id: "18",
    name: "Dr. Nathan Evans",
    description:
      "Dr. Nathan Evans is a nephrologist known for his expertise in treating kidney diseases and disorders. He is dedicated to providing compassionate care and helping patients manage kidney-related issues for improved quality of life.",
    reviews: [],
    signature: signImg03,
    hospital: "Hillside Hospital",
    location: "666 Healing Avenue, Hilltown",
    fees: 170,
    available: true,
    image: docImg18,
  },
  {
    id: "19",
    name: "Dr. Lily Turner",
    description:
      "Dr. Lily Turner is an oncologist known for her expertise in diagnosing and treating cancer. She is dedicated to providing compassionate care and supporting patients and their families throughout their cancer journey.",
    reviews: [],
    signature: signImg04,
    hospital: "Valley Medical Center",
    location: "222 Wellness Lane, Valleytown",
    fees: 180,
    available: true,
    image: docImg19,
  },
  {
    id: "20",
    name: "Dr. Oliver Parker",
    description:
      "Dr. Oliver Parker is a rheumatologist known for his expertise in diagnosing and treating autoimmune diseases and musculoskeletal disorders. He is dedicated to providing personalized care and improving the quality of life for patients with rheumatic conditions.",
    reviews: [],
    signature: signImg05,
    hospital: "Lakeside Clinic",
    location: "888 Health Road, Lakeville",
    fees: 150,
    available: true,
    image: docImg20,
  },
];

export default doctors;
