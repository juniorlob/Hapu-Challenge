import Container from '../Container';
import { FormTypeProps } from './Form.interface';
import {
    ButtonSubmit,
    FormControl,
    FormGrid,
    FormWraper,
    InputItem,
    Spinner,
} from './Form.style';

const Form = ({
    handleChange,
    inputData,
    handleSubmit,
    inputFields,
    status,
    loading,
}: FormTypeProps): JSX.Element => (
    <FormWraper>
        <div>
            <Container>
                <FormGrid>
                    <h3>
                        Are you a parent without a nanny and looking to share?
                    </h3>
                    <p>
                        Leave us your name and email and we’ll update you as
                        soon as a share becomes available in your area!
                    </p>
                    <FormControl status={status}>
                        {inputFields.map((iF, k) => (
                            <InputItem status={status} key={k}>
                                <input
                                    name={iF.name}
                                    value={iF.value || inputData[iF.name]}
                                    onChange={handleChange}
                                    type={iF.type}
                                    required={iF.required}
                                    placeholder={iF.placeholder}
                                />

                                <small>
                                    {status.error && status.message[iF.name]}
                                </small>
                            </InputItem>
                        ))}
                        <small>
                            {(status.success && status.message) ||
                                (status.error && status.message.error)}
                        </small>
                        <ButtonSubmit
                            type="button"
                            size="md"
                            onClick={handleSubmit}
                        >
                            {loading ? (
                                <>
                                    <Spinner isButton /> Loading
                                </>
                            ) : (
                                'Send'
                            )}
                        </ButtonSubmit>
                    </FormControl>
                </FormGrid>
            </Container>
        </div>
    </FormWraper>
);
export default Form;
