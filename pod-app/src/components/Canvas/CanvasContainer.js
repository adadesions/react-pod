import React, { Component } from 'react'
import { Button, Grid, Menu } from 'semantic-ui-react'

import shirtImg from '../../images/shirt.png'

class CanvasContainer extends Component {
    state = {
        showShirt: true,
        showPritable: true
    }

    handleShowShirt = () => {
        this.setState({
            showShirt: !this.state.showShirt
        })
    }

    render() {
        return (
            <div className="canvas-container">
                <Grid>
                    <Grid.Row centered={true}>
                        <Menu>
                            <Menu.Item>
                                <Button onClick={this.handleShowShirt}>
                                    {this.state.showShirt ? "Hide Shirt" : "ShowShirt"}
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
                    <Grid.Row>
                        {this.state.showShirt ? 
                            <img src={shirtImg} alt=""/> : <h1>No Shirt</h1>
                        }
                        
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default CanvasContainer