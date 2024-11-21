/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function DemoList({demoData = []}) {
    return (
        <div>
            <h2>Liste fra JsonServer API</h2>
            {JSON.stringify(demoData)}
            
            {demoData.map((demo) => (
                <ul>
                    <li>id: {demo.id}</li>
                    <li>myInput: {demo.myInput}</li>
                    <li>Checkbox: {demo.myCheckbox == 'on' ? 'Checked' : 'Unchecked'}</li>
                </ul>
            ))}
        </div>
     )
}

export default DemoList;