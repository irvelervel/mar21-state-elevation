import React from 'react'
import { ListGroup } from 'react-bootstrap'

class MyTable extends React.Component {

    state = {
        selected: null
    }


    componentDidMount = async () => {
        const myHeaders = {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkwNzRkMTdmNzQ0NTAwMTU1OGIxMTEiLCJpYXQiOjE2MjAwNzk4MjYsImV4cCI6MTYyMTI4OTQyNn0.THfeqovKBETJeyWfyRVQb2RRHrxlfjdkmAHU3OAV0Ck",
        }
        try {
            let response = await Promise.all([
                fetch(
                    "https://striveschool-api.herokuapp.com/api/comments/1621579832",
                    {
                        headers: myHeaders,
                    }
                ),
                fetch(
                    "https://striveschool-api.herokuapp.com/api/comments/0307742482",
                    {
                        headers: myHeaders,
                    }
                ),
                fetch(
                    "https://striveschool-api.herokuapp.com/api/comments/0525512179",
                    {
                        headers: myHeaders,
                    }
                )])
            console.log(response)
            let data = await Promise.all(response.map(r => r.json()))
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <>
                <ListGroup defaultActiveKey="#link1">
                    <ListGroup.Item className="pointer" onClick={(e) => this.setState({ selected: e.target.innerText })}>
                        Browny
                </ListGroup.Item>
                    <ListGroup.Item className="pointer" onClick={(e) => this.setState({ selected: e.target.innerText })}>
                        Whitey
                </ListGroup.Item>
                    <ListGroup.Item className="pointer" onClick={(e) => this.setState({ selected: e.target.innerText })}>
                        Blacky
                </ListGroup.Item>
                    <ListGroup.Item className="pointer" onClick={(e) => this.setState({ selected: e.target.innerText })}>
                        Wolf
                </ListGroup.Item>
                </ListGroup>
                <p className="mt-3">Local state is {this.state.selected || 'null'}</p>
            </>
        )
    }
}

export default MyTable