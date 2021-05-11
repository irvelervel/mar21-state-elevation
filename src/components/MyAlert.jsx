import { Alert } from 'react-bootstrap'

const MyAlert = (props) => (
    <Alert variant="success">
        Selected Character: {props.selectedCharacter}
    </Alert>
)

export default MyAlert