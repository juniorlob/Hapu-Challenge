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

    const initialFormData = inputFields.reduce(
        (ac, cur) => ({ ...ac, [cur.name]: '' }),
        {}
    );

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

    const handleChangeFormData = (e: HTMLElementEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        const data = { ...inputData, [name]: value };
        setData(data);
    };

    const handleSubmit = () => {
        setLoading(true);
        handleCreateNews(inputData);
    };

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
