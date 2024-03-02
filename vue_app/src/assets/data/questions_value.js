import {
    address, addressV2, anyAtFaultAccidentsInTheLast3Years, areYouCurrentlyInsured,
    areYouMarried, howLongHaveYouBeenWithCompany, whatCompanyAreYouInsuredWith,
    whatIsYourCreditScore, whatIsYourDateOfBirth, whatIsYourEducationLevel,
    whatIsYourEmail, whatIsYourGender, whatIsYourGenderMin, whatIsYourGenderOptional,
    whatIsYourName, whatIsYourOccupation, whatIsYourPhoneNumber, whatTypeOfHomeDoYouLiveIn,
    whatIsYourDateOfBirth_show, whatIsYourDateOfBirth_show_optional
} from "./questions-export-value.js";


const home_whatTypeOfHomeDoYouLiveIn_show = whatTypeOfHomeDoYouLiveIn
home_whatTypeOfHomeDoYouLiveIn_show.show = true

export default {
    auto: [
        {
            title: "Let's get started, what car do you drive?",
            value: {
                auto_year: '2000',
                auto_make: 'Audi',
                auto_model: 'MDX',
            },
            options: {
                years: ['Select Vehicle Year', ...Array.from({ length: (2024 - 1990) + 1 }, (_, i) => '' + (1990 + i)).reverse()],
                makes: ["Select Make"],
                // make: ["Select Make", "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", "Genesis", "GMC", "Honda", "Hyundai", "INFINITI", "Jaguar", "Kia", "Land Rover", "Lincoln", "Mazda", "MINI", "Mitsubishi", "Nissan", "Polestar", "Subaru", "Toyota", "Volvo", "Alfa Romeo", "Bentley", "Chrysler", "Dodge", "FIAT", "Ford", "Jeep", "Karma", "Lamborghini", "Lexus", "Lucid", "Maserati", "McLaren", "Mercedes-Benz", "Porsche", "Ram", "Rivian", "Rolls-Royce", "Tesla", "Volkswagen", "Aston Martin", "Lotus", "Ferrari", "smart", "Scion", "Suzuki", "Fisker", "Maybach", "Saab", "Mercury", "HUMMER", "Pontiac", "Bugatti", "Saturn", "Spyker", "Isuzu", "Panoz", "Oldsmobile", "Daewoo", "Plymouth", "AM General", "Eagle", "Geo", "VinFast" ],
                models: ['Select Model', 'QASHQAI Hybrid', 'BMW 5', 'X-TRAIL Hybrid', 'QASHQAI', 'JUKE', 'LEAF'],
            },
            load: {
                years: false,
                makes: false,
                models: false,
            },
            show: true,
            complete: false,
            type: 'select_auto',
        },
        {
            title: 'What do you use your %%auto_make%% for?',
            value: 'Running Errands',
            options: ['Getting to Work', 'Running Errands', 'Pleasure', 'Uber / Lyft'],
            type: 'radio',
        },
        {
            title: 'How many miles per day do you drive?',
            descr: 'Most drivers average 30 per day',
            value: '5',
            options: ['5', '10', '20', '30+'],
            type: 'radio',
        },
        {
            title: 'Do you own your %%auto_make%% GT-R?',
            descr: 'Drivers who lease or finance may need more coverage',
            value: 'Own',
            options: ['Own', 'Lease', 'Finance'],
            type: 'radio',
        },
        {
            title: 'Would You Like Full Coverage or Liability Only?',
            descr: 'Liability covers damage you cause other drivers or their property.\nFull coverage applies to damage to your vehicle.',
            value: 'Full Coverage',
            options: ['Full Coverage', 'Liability Only'],
            type: 'radio',
        },
        {
            title: 'Select Deductible for Collision',
            descr: 'Amount you pay in case of an accident.',
            value: '$1000',
            options: ['$2500', '$1500', '$1000', '$750', '$500', '$250', '$100', '$0'],
            type: 'radio',
        },
        {
            title: 'Select Deductible for Comprehensive',
            descr: 'Amount you pay in case of theft, vandalism etc.',
            value: '$1000',
            options: ['$2500', '$1500', '$1000', '$750', '$500', '$250', '$100', '$0'],
            type: 'radio',
        },
        {
            title: 'Want to add a second vehicle?',
            descr: 'You can save up to 25% by having multiple vehicles on the same policy',
            value: 'No',
            options: ['Yes', 'No'],
            type: 'radio',
        },

        whatIsYourName,
        whatIsYourDateOfBirth,
        whatIsYourGender,
        areYouMarried,
        whatIsYourEducationLevel,
        whatIsYourOccupation,
        whatIsYourCreditScore,

        {
            title: "What is the status of your driver's license?",
            value: 'Suspended',
            options: ['Active', 'Permit', 'Suspended', 'Foreign', 'Expired'],
            type: 'radio',
        },
        {
            title: "Do you require SR-22?",
            descr: 'SR-22 is a certificate issued by the state that is sometimes required for drivers that have a DUI or multiple incidents.',
            value: 'No',
            options: ['Yes', 'No'],
            type: 'radio',
        },
        {
            title: "Any incidents in the last 3 years?",
            descr: 'Such as tickets, accidents, claims, DUI, or license suspension',
            value: 'No',
            options: ['Yes', 'No'],
            type: 'radio',
        },
        {
            title: "Want to add a second driver?",
            descr: 'You can save up to 25% by having multiple drivers on the same policy',
            value: 'No',
            options: ['Yes', 'No'],
            type: 'radio',
        },
        {
            title: "Do you currently have car insurance?",
            value: 'No',
            options: ['Yes', 'No'],
            type: 'radio',
        },
        {
            title: "How much coverage do you need?",
            descr: 'Most select Standard, You can change it later if you want.',
            value: 'Basic',
            options: [
                { value: 'State Minimum', descr: 'Bodily Injury Minimum\nProperty Damage Minimum', star: 1 },
                { value: 'Basic', descr: 'Bodily Injury $50K / $100K\nProperty Damage $50K', star: 2 },
                { value: 'Standard', descr: 'Bodily Injury $100K / $300K\nProperty Damage $100K', star: 3 },
                { value: 'Superior', descr: 'Bodily Injury $250K / $500K\nProperty Damage $250K', star: 4 }
            ],
            type: 'radio_star',
        },
        {
            title: "Have you or anyone in your family\nserved in the military?",
            descr: 'Some insurance companies offer military discounts',
            value: 'No',
            options: ['Yes', 'No'],
            type: 'radio',
        },
        {
            title: "Do you own or rent your home?",
            descr: 'Home owners usually need more coverage than renters',
            value: 'Own',
            options: ['Own', 'Rent'],
            type: 'radio',
        },

        whatTypeOfHomeDoYouLiveIn,
        address,
    ],

    home: [
        home_whatTypeOfHomeDoYouLiveIn_show,
        address,

        {
            title: 'What year was your home built?',
            value: '12345',
            type: 'number',
            validation: 'required|number',
        },
        {
            title: 'What is the square footage?',
            value: '54321',
            type: 'number',
            validation: 'required|number',
        },
        {
            title: 'How many stories is your home?',
            value: '3',
            options: ['1', '2', '3', '4+'],
            type: 'radio',
        },
        {
            title: 'How many bedrooms?',
            value: '4',
            options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            type: 'radio',
        },
        {
            title: 'How many bathrooms?',
            value: '5',
            options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            type: 'radio',
        },
        {
            title: 'What year did you purchase your home?',
            value: '23423',
            type: 'number',
            validation: 'required|number',
        },

        whatIsYourName,
        whatIsYourDateOfBirth,
        whatIsYourGender,
        areYouMarried,
        whatIsYourEducationLevel,
        whatIsYourOccupation,
        whatIsYourCreditScore,
        areYouCurrentlyInsured,
        whatCompanyAreYouInsuredWith,
        howLongHaveYouBeenWithCompany,

        {
            title: "When does your policy expire?",
            descr: "It's ok to guess if you aren't sure.",
            value: 'A Few Days',
            options: ['Not Sure', 'A Few Days', '2 Weeks', '1 Month', '2 Month', '3 Month', '4-6 Month', '6 Month+'],
            type: 'radio',
        },
        {
            title: "Last question Ertgerg, how much would \n it cost to rebuild your home?",
            descr: 'Rebuild cost is different from market value. If you’re not sure we recommend using $150 per sq ft.',
            value: 'dssgfsdf',
            validation: 'required|length:3',
            type: 'text',
        },
    ],

    life: [
        whatIsYourDateOfBirth_show,
        whatIsYourGender,
        areYouMarried,

        {
            title: 'How Tall Are You?',
            value: {
                ft: '',
                in: ''
            },
            type: 'size_two',
        },
        {
            title: 'How Much Do you Weigh?',
            value: '',
            type: 'size',
        },
        {
            title: "Do You Use Tobacco?",
            value: '',
            options: ['Yes', 'No'],
            type: 'radio',
        },
        {
            title: "Do You Have any Major Health Conditions?",
            value: '',
            options: ['Yes', 'No'],
            type: 'radio',
        },
        {
            title: "What Coverage Are You Interested in?",
            value: '',
            options: ['Term 1 Year', 'Term 5 Year', 'Term 10 Year', 'Term 15 Year', 'Term 20 Year', 'Term 25 Year', 'Term 30 Year', 'Whole Life', 'Universal Life', 'Variable Life', 'Investment', 'Not Sure'],
            type: 'radio',
        },
        {
            title: 'What Coverage Amount Are You Interested in?',
            value: '',
            options: ['$50,000', '$100,000', '$150,000', '$200,000', '$250,000', '$300,000', '$350,000', '$400,000', '$450,000', '$500,000', '$550,000', '$600,000', '$650,000', '$700,000', '$750,000', '$800,000', '$850,000', '$900,000', '$950,000', '$1,000,000', '$1,250,000', '$1,500,000', '$1,7500,000', '$2,000,000'],
            type: 'radio',
        },

        whatIsYourName,
        addressV2,
        whatIsYourEmail,
        whatIsYourPhoneNumber,
    ],

    health: [
        whatIsYourDateOfBirth_show,

        {
            title: "What is Your Household Income?",
            value: '',
            options: ['Below $17,000', '$17,000 - $20,000', '$20,000 - $25,000', '$25,000 - $30,000', '$30,000 - $35,000', '$35,000 - $40,000', '$40,000 - $55,000', 'Over $55,000'],
            type: 'radio',
        },
        {
            title: "Do You Have Any of the Following Health Conditions?",
            value: '',
            options: ['Yes', 'No'],
            descrList: [
                'Alcohol / Drug Abuse', 'Clinical Depression', 'Mental Illness',
                'Alcohol / Drug Abuse', 'Diabetes', 'Pulmonary Disease',
                'Alzheimer\'s Disease', 'Heart Disease', 'Stroke',
                'Asthma', 'High Blood Pressure', 'Ulcer',
                'Cancer', 'Kidney Disease', 'Vascular Disease',
                'High Cholesterol', 'Liver Disease', 'Other / Not Listed'
            ],
            type: 'radio',
        },

        whatIsYourName,
        address,
        whatIsYourEmail,
        whatIsYourPhoneNumber,
    ],

    medicare: [
        whatIsYourDateOfBirth_show_optional,
        whatIsYourGenderOptional,
        whatIsYourName,
        address,
        whatIsYourEmail,
        whatIsYourPhoneNumber,
    ],

    commercial: [
        {
            title: "What is the Name of Your Business?",
            value: 'Name Busines',
            type: 'text',
            validation: 'required|length:3',
            show: true,
        },
        {
            title: "Legal Entity",
            value: 'Partnership',
            options: ['Sole Proprietorship', 'Partnership', 'LLC', 'S Corporation', 'C Corporation', 'Other'],
            type: 'radio',
            show: true,
        },

        addressV2,

        {
            title: "Brief Description of Your Business",
            value: 'Description',
            type: 'text',
            validation: 'required|length:3',
        },
        {
            title: "Years in Business",
            value: '3 Year',
            options: ['Less that 1 Year', '1 Year', '2 Year', '3 Year', '4 Year', '5 Year', '6 Year', '7 Year', '8 Year',  '9 Year', '10 Year', '11 - 15 Year', '15 - 20 Year', '20 - 30 Year', '30 - 40 Year', '40 - 50 Year'],
            type: 'radio',
        },
        {
            title: "Number of Partners/Owners",
            value: '4',
            options: ['1', '2', '3', '4', '5', '6', '7', '8',  '9', '10+'],
            type: 'radio',
        },
        {
            title: "Number of Full Time Employees",
            value: '6 - 10',
            options: ['None', '1', '2', '3', '4', '5', '6 - 10', '11 - 20', '21 - 30',  '31 - 40', '41 - 50', '51 - 100', 'More then 100'],
            type: 'radio',
        },
        {
            title: "Number of Part Time Employees",
            value: '6 - 10',
            options: ['None', '1', '2', '3', '4', '5', '6 - 10', '11 - 20', '21 - 30',  '31 - 40', '41 - 50', '51 - 100', 'More then 100'],
            type: 'radio',
        },
        {
            title: "Annual Revenue",
            value: '$500,000 - $1,000,000',
            options: ['Under $100,000', '$100,000 - $500,000', '$500,000 - $1,000,000', '$1,000,000 - $5,000,000', '$5,000,000 - $10,000,000', 'Over $10,000,000'],
            type: 'radio',
        },
        {
            title: "Annual Payroll",
            value: '$100,001 - $200,000',
            options: ['Less Than $50,000', '$50,001 - $100,000', '$100,001 - $200,000', '$200,001 - $500,000', 'Over $500,001'],
            type: 'radio',
        },
        {
            title: "Type of coverage You're Interested in",
            value: ['Commercial Auto', 'Commercial Property', 'Professional Liability (E&O)'],
            options: ['General Liability', 'Commercial Auto', 'Commercial Property', 'Professional Liability (E&O)', 'Directors and Officers Liability', 'Business owner Package Police (BOP)', 'Worker Compensation', 'Commercial Crime'],
            type: 'checkbox',
        },
        {
            title: "General Liability Coverage",
            value: '$2,000,000',
            options: ['$1,000,000', '$2,000,000'],
            type: 'radio',
        },

        whatIsYourName,
        whatIsYourEmail,
        whatIsYourPhoneNumber,
    ],

    bike: [
        {
            title: 'Legal Entity',
            value: '',
            options: ['2025', '2024', ...Array.from({ length: (2020 - 1986) + 1 }, (_, i) => '' + (1986 + i)).reverse()],
            type: 'radio',
            show: true,
        },
        {
            title: 'Select Motorcycle Make',
            value: '',
            options: {
                radio: ['Harley-Davidson', 'Honda', 'Yamaha', 'Kawasaki', 'Suzuki', 'BMW', 'Ducati', 'Triumph Motorcycle', '__for_select__'],
                select: ['Select Other Make', 'Make1', 'Make2', 'Make3', 'Make4']
            },
            type: 'radio_select',
        },
        {
            title: 'Select Motorcycle Model',
            value: '',
            options: ['BR125', 'EJ8000', 'EL450', 'EN650', 'EN651', 'EN652', 'EN653', 'EN654', 'EN655', 'EN656', 'EN657'],
            type: 'radio',
        },

        areYouCurrentlyInsured,
        whatCompanyAreYouInsuredWith,
        howLongHaveYouBeenWithCompany,

        {
            title: 'Are You a Homeowner?',
            value: '',
            options: ['Yes', 'No'],
            type: 'radio',
        },

        whatIsYourDateOfBirth,
        whatIsYourGenderMin,
        areYouMarried,
        anyAtFaultAccidentsInTheLast3Years,

        {
            title: "DUI in the Last 3 years?",
            value: '',
            options: ['Yes', 'No'],
            type: 'radio',
        },

        whatIsYourName,
        addressV2,
        whatIsYourEmail,
        whatIsYourPhoneNumber,
    ],

    renters: [
        {
            title: 'Select Type of Property',
            value: '',
            options: ['Single Family Home', 'Townhome', 'Multi Family Home', 'Condominium', 'Duplex', 'Mobile Home', 'Apartment'],
            type: 'radio',
            show: true,
        },

        areYouCurrentlyInsured,
        whatCompanyAreYouInsuredWith,

        {
            title: 'How Much Personal Property Do You Want to Insure?',
            value: '',
            options: ['$10,000 or less', '$15,000', '$20,000', '$25,000', '$30,000', '$35,000', '$40,000', '$45,000', '$50,000', '$60,000', '$70,000', '$80,000', '$90,000', '$100,000', '$125,000', '$150,000', '$175,000', '$200,000', '$225,000', '$250,000', '$275,000', '$300,000 or more'],
            type: 'radio',
        },

        whatIsYourDateOfBirth,
        whatIsYourGenderMin,
        areYouMarried,
        anyAtFaultAccidentsInTheLast3Years,
        whatIsYourName,
        addressV2,
        whatIsYourEmail,
        whatIsYourPhoneNumber,
    ],
}