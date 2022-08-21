import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/material";
import { Contact } from "../../app/data/types";
import { useAppDispatch } from "../../app/store/hooks";
import { addContact } from "../../app/store/actions/contactsActions";
import ContactDetailsForm from "../../components/ContactDetailsForm/ContactDetailsForm";
import { ContactDetailsFormInput } from "../../components/ContactDetailsForm/type";

function FormPage() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleOnSubmit = (data: ContactDetailsFormInput) => {
        const newContact: Contact = {
            ...data,
            id: uuidv4(),
            // mock values
            avatar: {
                large: "https://place-hold.it/128x128.jpg",
                medium: "https://place-hold.it/72x72.jpg",
                thumbnail: "https://place-hold.it/48x48.jpg",
            },
            gender: "male",
            dob: "12-09-1969",
        };
        dispatch(addContact(newContact));
        navigate("/");
    };

    return (
        <Box>
            <ContactDetailsForm
                title="Add New Contact Form"
                defaultValues={{
                    name: "",
                    email: "",
                    cell: "",
                    nat: "",
                }}
                onSubmit={handleOnSubmit}
            />
        </Box>
    );
}

export default FormPage;
