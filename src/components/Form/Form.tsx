import Button from '../Button'
import { FormContainer, FormWraper } from './Form.style'

const Form = (sendData: any): JSX.Element => (
    <FormContainer>
        <FormWraper>
            <h3>Are you a parent without a nanny and looking to share?</h3>
            <p>
                Leave us your name and email and we’ll update you as soon as a
                share becomes available in your area!
            </p>
            <form action="">
                <input
                    onChange={sendData}
                    type="text"
                    placeholder="Your name"
                />
                <input type="email" placeholder="Your email" />
                <Button size="md" type="submit">
                    Send
                </Button>
            </form>
        </FormWraper>
    </FormContainer>
)
export default Form
