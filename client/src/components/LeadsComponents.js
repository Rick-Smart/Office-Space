import React from 'react'
import ClientCard from "./ClientCard"
import NewLead from "./NewLead"
import "./Style.css";

function LeadsComponents() {
    return (
        <div className="componentHolder ml-2">
                <ClientCard />
                <NewLead />
              </div>
    )
}

export default LeadsComponents