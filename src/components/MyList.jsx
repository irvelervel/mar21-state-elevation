import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class MyList extends Component {
    render() {
        return (
            <>
                <ListGroup>
                    <ListGroup.Item className="pointer" onClick={this.props.chooseCharacter}>Browny</ListGroup.Item>
                    <ListGroup.Item className="pointer" onClick={this.props.chooseCharacter}>Whitey</ListGroup.Item>
                    <ListGroup.Item className="pointer" onClick={this.props.chooseCharacter}>Blacky</ListGroup.Item>
                    <ListGroup.Item className="pointer" onClick={this.props.chooseCharacter}>Wolf</ListGroup.Item>
                </ListGroup>
                <p className="mt-3">
                    The selected character is {this.props.selectedCharacter || 'none'}
                </p>
            </>
        )
    }
}

export default MyList