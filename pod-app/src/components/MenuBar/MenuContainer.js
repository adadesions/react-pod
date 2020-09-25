import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class MenuContrainer extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item header>AdaBrain</Menu.Item>
                <Menu.Item
                    name='Home'
                    active={activeItem === 'Home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='jobs'
                    active={activeItem === 'jobs'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='About'
                    active={activeItem === 'About'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}

export default MenuContrainer