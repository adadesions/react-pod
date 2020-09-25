import React, {Component} from 'react'
import { Button, Grid, Menu } from 'semantic-ui-react'

class CanvasContainer extends Component {
    state = {
        showShirt: true,
        showPritable: true
    }

    render() {
        return (
            <div className="canvas-container">
                <Grid>
                    <Grid.Row centered={true}>
                        <Menu>
                            <Menu.Item>
                                <Button>
                                    Show Shirt
                                </Button>
                            </Menu.Item>
                            <Menu.Item>
                                <Button>
                                    Show Pritable area
                                </Button>
                            </Menu.Item>
                            <Menu.Item>
                                <Button>
                                    Reset
                                </Button>
                            </Menu.Item>
                        </Menu>
                    </Grid.Row>
                    <Grid.Row></Grid.Row>
                </Grid>
                {/* {this.state.showShirt ? <h1>Shirt</h1> : <h1>No Shirt</h1>} */}
            </div>
        )
    }
}

export default CanvasContainer