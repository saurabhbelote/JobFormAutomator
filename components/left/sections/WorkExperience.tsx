import React, { useState } from 'react';
import { useExperienceStore } from '@/app/store';

function ExperienceManager() {
    const {  addExperience, updateExperience } = useExperienceStore();
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [editId, setEditId] = useState<string | null>(null);

    const handleSubmit = () => {
        if (editId) {
            updateExperience(editId, name, details, startDate, endDate);
            setEditId(null);
        } else {
            addExperience(name, details, startDate, endDate);
        }
        setName('');
        setDetails('');
        setStartDate('');
        setEndDate('');
    };

    return (
        <div>
            <h1>Experience Manager</h1>
            <input
                type="text"
                placeholder="Company Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                placeholder="Details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
            />
            <input
                type="date"
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <input
                type="date"
                placeholder="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
            <button onClick={handleSubmit}>
                {editId ? 'Update Experience' : 'Add Experience'}
            </button>
        </div>
    );
}

export default ExperienceManager;
