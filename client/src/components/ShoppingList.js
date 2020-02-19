import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    componentDidMount() {
        console.log(this.props.item.items);
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    }

    render() {
        // const { items } = this.state;
        const { items } = this.props.item;

        return (
            <Container>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {
                            items.map(({_id, name}) => (
                                <CSSTransition
                                    key={_id} 
                                    timeout={1000} 
                                    classNames="fade">
                                        <ListGroupItem>
                                            { this.props.isAuthenticated ? <Button 
                                                className="remove-btn" 
                                                color="danger"
                                                size="sm"
                                                onClick={this.onDeleteClick.bind(this, _id)}>&times;</Button> : null }
                                                {/* Can also be onClick={() => this.onDeleteClick(id)} */}
                                            { name }
                                        </ListGroupItem>
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);