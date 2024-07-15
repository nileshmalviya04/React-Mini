import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
    const { userid } = useParams()
    return (
        <div className="flex justify-center text-2xl"> User: {userid}</div>
    )
}