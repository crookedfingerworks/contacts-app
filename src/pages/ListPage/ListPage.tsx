import React from "react";
import { useAppSelector } from "../../app/store/hooks";

function ListPage() {
    const contacts = useAppSelector((state) => state.contacts);

    console.log(contacts);

    return <div>ListPage</div>;
}

export default ListPage;
