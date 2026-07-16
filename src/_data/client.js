module.exports = {
    name: "23-7 Builders",
    email: "robert@237builders.co.nz",
    phoneForTel: "0210409371",
    phoneFormatted: "021 040 9371",
    address: {
        lineOne: "[STREET ADDRESS]",
        lineTwo: "",
        city: "Auckland",
        state: "",
        zip: "",
        country: "NZ",
        mapLink: "https://maps.google.com/",
    },
    socials: {},
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.237builders.co.nz",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
