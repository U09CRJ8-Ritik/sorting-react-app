import React, { useState } from 'react';
import Dropdown from '../components/Dropdown'


const DropdownPage = () => {

    const [selection, setSelection] = useState(null);

    const options = [
        { label: 'Red', title: 'red' },
        { label: 'Green', title: 'green' },
        { label: 'Blue', title: 'blue' },

    ];

    const handleSelect = (option) => {
        setSelection(option);
        setSelection(option);
    }

    return (
        <div className='flex'>
            <Dropdown options={options} value={selection} onChange={handleSelect} />
        </div>
    )
}

export default DropdownPage;
