import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{

    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const {deleteItem, index} = this.props
        deleteItem(index);
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
    }

    render() {
        const {content} = this.props;
        return(
            <div onClick={this.handleClick}>{content}</div>
        )
    }

}

TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

export default TodoItem;