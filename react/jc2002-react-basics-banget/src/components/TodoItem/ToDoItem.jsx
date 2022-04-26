import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import moment from 'moment'

const ToDoItem = (props) => {

    return (
    <Card className='my-3'>
        <CardBody>
            <div className="d-flex justify-content-between">
                <div>
                    <CardTitle tag="h5" className='fw-bold'>
                    {moment(props.date).format("DD MMMM YYYY")}
                    </CardTitle>
                    <CardText>{props.action}</CardText>
                </div>
                <div className="d-flex align-items-center">
                    {props.isDone ? (
                    <Button className="mx-2" onClick={props.toggleStatus} color="dark">
                        Done
                    </Button>
                    ) : (
                    <Button className="mx-2" onClick={props.toggleStatus} color="outline-secondary">
                        On Going
                    </Button>
                    )}
                    <Button onClick={props.deleteItem} className="mx-2" color="outline-danger">
                        Delete
                    </Button>
                </div>
            </div>
        </CardBody>
    </Card>
    )
}

export default ToDoItem;