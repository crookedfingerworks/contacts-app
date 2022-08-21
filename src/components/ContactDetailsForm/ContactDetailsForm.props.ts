import { ContactDetailsFormInput } from "./type";

export type ContactDetailsFormProps = {
    title: string;
    defaultValues: ContactDetailsFormInput;
    // eslint-disable-next-line no-unused-vars
    onSubmit: (data: ContactDetailsFormInput) => void;
};
