import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import axios from 'axios'
import qs from 'qs'

class TodoList extends Component{

    constructor(){
        super();
        this.state = {
            list: [],
            inputValue: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    deleteItem(index){
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({list})
    }

    getTodoItems(){
        return (
            this.state.list.map((item,index) => {
                return <TodoItem 
                    deleteItem={this.deleteItem}
                    key={index}
                    content={item}
                    index={index}
                />
            })
        )
    }

    componentDidMount(){
        const requestBody = {
            "wechatId": "liuji"
        };
        const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        axios.post('http://localhost:8080/student/get.do',qs.stringify(requestBody),config)
        .then((res)=>{
            alert('succ');
            console.log(res);
        })
        .catch((res)=>{
            alert('error');
            console.log(res);
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange}/>
                    <button className='red-button' onClick={this.handleBtnClick}>submit</button>
                </div>
                <ul>
                    {this.getTodoItems()}
                </ul>
            </Fragment>
        );            
    }
}

export default TodoList;
