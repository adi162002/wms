import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { apiLink } from '../../Config';
function MeterMappingForm({data, onSubmit}) {
    const [options, setOptions] = useState([]);
    const [formValues, setFormValues] = useState({
        sourceName: "",
        targetName: "",
        errorMessage: "",
    })
    useEffect(() => {
        async function fetch() {
            await axios
                .get(`${apiLink}/meter/all-meter`, {
                    headers: {
                        "ngrok-skip-browser-warning": "true",
                    },
                })
                .then((response) => {
                    console.log(response.data);
                    setOptions(response.data);
                })
                .catch((response) => {
                    console.log(response.data);
                });
        }
        fetch();
    }, []);
    function handleChange(e) {
        const { name, value } = e.target;
        setFormValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!formValues.sourceName || !formValues.targetName) {
            setFormValues((prevState) => ({
                ...prevState,
                errorMessage: "Please fill in all required fields."
            }));
            return;
        }
        data(prevMappingData => [...prevMappingData, formValues]);
        onSubmit()
        setFormValues({
            sourceName: "",
            targetName: "",
            errorMessage: "",
        });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="sourceName">Source Name*: </label>
                <select
                    name="sourceName"
                    value={formValues.sourceName}
                    onChange={handleChange}
                >
                    <option value="">Select Source Meter</option>
                    {Object.values(options).map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.meterName}
                        </option>
                    ))}
                </select>
                <br />
                <br />
                <label htmlFor="targetName">Target Name*: </label>
                <select
                    name="targetName"
                    value={formValues.targetName}
                    onChange={handleChange}
                >
                    <option value="">Select Target Meter</option>
                    {Object.values(options).map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.meterName}
                        </option>
                    ))}
                </select>
                <br />
                <br />
                <div>
                    <button type="submit">Connect Meter</button>
                </div>
            </form>
            {formValues.errorMessage && <p>{formValues.errorMessage}</p>}
        </>
    )
}
export default MeterMappingForm












