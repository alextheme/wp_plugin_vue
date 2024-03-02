export const address =  {
    title: "What is your address?",
    value: {
        address: 'Shevchenko, 45',
        unit: '13300',
        apt: '',
        state: 'AB',
        zip: '12345'
    },
    options: ['State...', 'AB', 'BC', 'CD', 'AA', 'FD', 'RP'],
    type: 'address',
    formKitvalid: false,
}

export const addressV2   =  {
    title: "What is your address?",
    value: {
        address: 'Test address #2',
        unit: '1234',
        city: 'Berdograd',
        state: 'BC',
        zip: '4312'
    },
    options: ['State...', 'AB', 'BC', 'CD', 'AA', 'FD', 'RP'],
    type: 'address_v2',
    formKitvalid: false,
}

export const whatIsYourDateOfBirth = {
    title: "What is your date of birth?",
    value: {
        dd: '10',
        mm: '10',
        yyyy: '1975',
        error: {
            text: 'Driver Must be at least 18 years old',
            show: false
        }
    },
    type: 'user_birth',
}

export const whatIsYourDateOfBirth_show = {
    title: "What is your date of birth?",
    value: {
        dd: '10',
        mm: '10',
        yyyy: '1975',
        error: {
            text: 'Driver Must be at least 18 years old',
            show: false
        }
    },
    type: 'user_birth',
    show: true,
}

export const whatIsYourDateOfBirth_show_optional = {
    title: "What is your date of birth? (optional)",
    value: {
        dd: '',
        mm: '',
        yyyy: '',
        error: {
            text: 'Driver Must be at least 18 years old',
            show: false
        }
    },
    optional: true,
    show: true,
    type: 'user_birth',
}

export const whatIsYourName =  {
    title: "What is your name?",
    descr: 'The better we know you, the more accurate quotes we can provide',
    value: {
        full_name: 'Oleksandr',
        last_name: 'Borymskyi'
    },
    type: 'user_name',
}

export const whatIsYourGender = {
    title: "What is your gender?",
    value: 'Male',
    options: ['Male', 'Female', 'Non-binary'],
    type: 'radio',
}

export const whatIsYourGenderMin = {
    title: "What is your gender?",
    value: '',
    options: ['Male', 'Female'],
    type: 'radio',
}

export const whatIsYourGenderOptional = {
    title: "What is your gender? (Optional)",
    value: '',
    options: ['Male', 'Female'],
    type: 'radio',
    show: true,
    optional: true,
    complete: true,
}

export const areYouMarried = {
    title: "Are you married?",
    value: 'Yes',
    options: ['Yes', 'No'],
    type: 'radio',
}

export const whatIsYourEducationLevel = {
    title: "What is your education level?",
    value: 'High School Diploma',
    options: ['Less than High School', 'Some or No High School', 'High School Diploma', 'Some College', 'Associate Degree', 'Bachelors Degree', 'Masters Degree', 'Doctorate Degree'],
    type: 'radio',
}

export const whatIsYourOccupation = {
    title: "What is your occupation?",
    value: 'Engineer 3',
    options: ['Select Engineer', 'Engineer 2', 'Engineer 3', 'Engineer 4', 'Engineer 5', 'Engineer 6', 'Engineer 7', 'Engineer 8'],
    type: 'select',
}

export const whatIsYourCreditScore = {
    title: "What is your credit score?",
    value: 'Good (600-700)',
    options: ['Excellent (700-850)', 'Good (600-700)', 'Average (400-600)', 'Poor (300-400)'],
    type: 'radio',
}

export const whatTypeOfHomeDoYouLiveIn = {
    title: "What type of home do you live in?",
    descr: 'Home owners usually need more coverage than renters',
    value: 'Townhome',
    options: ['Single Family Home', 'Townhome', 'Multi Family Home', 'Condominium', 'Duplex', 'Mobile Home', 'Apartment'],
    type: 'radio',
}

export const areYouCurrentlyInsured = {
    title: "Are you currently insured?",
    value: '',
    options: ['Yes', 'No'],
    type: 'radio',
}

export const whatCompanyAreYouInsuredWith = {
    title: "What company are you insured with?",
    value: '',
    options: ['Select Company', 'Company 1', 'Company 2', 'Company 3'],
    type: 'select',
}

export const howLongHaveYouBeenWithCompany = {
    title: "How long have you been with AAA Insurance Co.?",
    value: '',
    options: ['Less than a year', '1-2 years', '2-3 years', '3-5 years', '5+ years'],
    type: 'radio',
}

export const whatIsYourEmail = {
    title: "What is Your Email?",
    value: 'info@test.eml',
    type: 'email',
    name: 'Your Email',
    validation: 'email',
}

export const whatIsYourPhoneNumber = {
    title: "What is Your Phone Number?",
    value: '123456789',
    type: 'text',
    name: 'Phone Number',
    validation: 'required|length:5',
}

export const anyAtFaultAccidentsInTheLast3Years = {
    title: "Any at-fault Accidents in the Last 3 years?",
    value: 'No',
    options: ['Yes', 'No'],
    type: 'radio',
}