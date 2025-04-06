import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rajesh Sharma',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Sharma is dedicated to providing comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: 'MG Road, Bangalore',
            line2: 'Karnataka, India'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Priya Verma',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Verma specializes in women’s health and is committed to providing the best gynecological and obstetric care.',
        fees: 60,
        address: {
            line1: 'Connaught Place, Delhi',
            line2: 'New Delhi, India'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sandeep Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Patel focuses on advanced skincare treatments and offers expert consultation for all skin-related issues.',
        fees: 30,
        address: {
            line1: 'Bandra West, Mumbai',
            line2: 'Maharashtra, India'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Arjun Nair',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Iyer is passionate about child healthcare and ensures the well-being of infants, children, and adolescents.',
        fees: 40,
        address: {
            line1: 'T Nagar, Chennai',
            line2: 'Tamil Nadu, India'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Ananya Iyer',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Nair is an expert in diagnosing and treating disorders related to the nervous system with utmost precision.',
        fees: 50,
        address: {
            line1: 'Kakkanad, Kochi',
            line2: 'Kerala, India'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Rohan Mehta',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Mehta is well-known for his expertise in treating neurological conditions using advanced techniques.',
        fees: 50,
        address: {
            line1: 'Banjara Hills, Hyderabad',
            line2: 'Telangana, India'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Nitin Kapoor',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Kapoor provides comprehensive medical care and emphasizes preventive healthcare strategies.',
        fees: 50,
        address: {
            line1: 'Salt Lake, Kolkata',
            line2: 'West Bengal, India'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Manish Gupta',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Gupta is highly skilled in women’s health and specializes in high-risk pregnancy care.',
        fees: 60,
        address: {
            line1: 'Lalbagh, Lucknow',
            line2: 'Uttar Pradesh, India'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Simran Kaur',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Kaur focuses on dermatology treatments, helping patients achieve healthy and glowing skin.',
        fees: 30,
        address: {
            line1: 'Sector 17, Chandigarh',
            line2: 'Punjab, India'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Vikram Choudhary',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Choudhary is an expert in child health and provides specialized care for infants and young children.',
        fees: 40,
        address: {
            line1: 'Civil Lines, Jaipur',
            line2: 'Rajasthan, India'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Kavita Joshi',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Joshi is a leading neurologist, treating complex brain and nerve disorders with precision.',
        fees: 50,
        address: {
            line1: 'Gomti Nagar, Lucknow',
            line2: 'Uttar Pradesh, India'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Deepak Malhotra',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Malhotra is well-versed in modern neurology treatments and rehabilitation therapies.',
        fees: 50,
        address: {
            line1: 'Anna Nagar, Chennai',
            line2: 'Tamil Nadu, India'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Meera Desai',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Desai focuses on general healthcare and provides primary medical support for various ailments.',
        fees: 50,
        address: {
            line1: 'Vastrapur, Ahmedabad',
            line2: 'Gujarat, India'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Anil Saxena',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Saxena specializes in gynecology and is known for his expertise in fertility treatments.',
        fees: 60,
        address: {
            line1: 'Raja Park, Jaipur',
            line2: 'Rajasthan, India'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Tanya Bhatia',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Bhatia helps patients with dermatological issues and aesthetic treatments for skincare.',
        fees: 30,
        address: {
            line1: 'Rajouri Garden, Delhi',
            line2: 'New Delhi, India'
        }
    },
];
