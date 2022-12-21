import { useState } from "react";

export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        phone: "",
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
};
