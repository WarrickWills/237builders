module.exports = {
    name: "23-7 Builders",
    email: "[EMAIL ADDRESS]",
    phoneForTel: "[PHONE NUMBER]",
    phoneFormatted: "[PHONE NUMBER]",
    address: {
        lineOne: "[STREET ADDRESS]",
        lineTwo: "",
        city: "Auckland",
        state: "",
        zip: "",
        country: "NZ",
        mapLink: "https://maps.google.com/",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
