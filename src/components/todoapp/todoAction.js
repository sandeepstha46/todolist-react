import React from 'react';
import {Button, Container} from "@material-ui/core";

function TodoAction({list}) {
    return (
        <div>
            <Container fixed>
                <div>
                    <ul>
                        <li>{list}
                            <Button id={"button"} variant={"contained"}>Delete</Button>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}

export default TodoAction;
