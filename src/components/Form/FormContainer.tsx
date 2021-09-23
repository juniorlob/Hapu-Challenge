import { useEffect, useState } from 'react';
import Form from './Form';
import { FormStateProps, HTMLElementEvent } from './Form.interface';

const FormContainer = ({
    storeNews,
    handleCreateNews,
}: FormStateProps): JSX.Element => {
    const inputFields = [
        {
            name: 'name',
            type: 'text',
            placeholder: 'Your name',
            required: true,
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'Your email',
            required: true,
        },
    ];

    const inititalStatus = {
        message: '',
        error: false,
        success: false,
    };

    // var result = arr.map(person => ({ value: person.id, text: person.name }));

    const initialFormData = inputFields.reduce(
        (ac, cur) => ({ ...ac, [cur.name]: '' }),
        {}
    );
    // console.log(initialFormData);
    const [inputData, setData] = useState(initialFormData);
    const [status, setStatus] = useState(inititalStatus);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (storeNews.success.length > 0) {
            setData(initialFormData);
            setStatus({
                ...status,
                error: false,
                success: true,
                message: storeNews.success,
            });
            setLoading(false);
        } else if (storeNews.error.message) {
            const newStatus = {
                ...status,
                message: storeNews.error.message,
                error: true,
                success: false,
            };
            setStatus(newStatus);
            setLoading(false);
        }
    }, [storeNews]);
    // console.log(currentNews);
    // console.log(status);
    const handleChangeFormData = (e: HTMLElementEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        const data = { ...inputData, [name]: value };
        setData(data);
    };

    const handleSubmit = () => {
        setLoading(true);
        handleCreateNews(inputData);
    };
    console.log({ status });

    return (
        <Form
            inputData={inputData}
            handleChange={handleChangeFormData}
            handleSubmit={handleSubmit}
            inputFields={inputFields}
            status={status}
            loading={loading}
        />
    );
};

export default FormContainer;
