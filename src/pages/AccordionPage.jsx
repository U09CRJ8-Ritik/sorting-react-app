import React from 'react';
import Accordion from '../components/Accordion';

const AccordionPage = () => {

    const items = [
        {
            id: 'dsr3',
            label: "Can I use React in my Project ?",
            content: "You can use React in any project.You can use React in any project.You can use React in any project.You can use React in any project."
        },
        {
            id: 'dfh5',
            label: "Can I use JS in my Project ?",
            content: "You can use JS in any project.You can use JS in any project.You can use JS in any project.You can use JS in any project."
        },
        {
            id: 'dfd6',
            label: "Can I use Java in my Project ?",
            content: "You can use Java in any project.You can use Java in any project.You can use Java in any project.You can use Java in any project."
        },
    ]

    return (
        <div>
            <Accordion items={items} />
        </div>
    )
}

export default AccordionPage
