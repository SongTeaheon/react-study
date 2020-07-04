import React, {Component} from 'react';


class Selector extends Component{

    

    render() {
        var lists = [];
        for(var i = 1; i <= this.props.length; i++) {
            lists.push(
                <li key={i}><a id={i} href="#" onClick={function(e){
                    console.log(e.target.id);
                    e.preventDefault();
                    this.props.onClickNum(e.target.id);
                }.bind(this)}>{i}</a></li>
            );
         }

        return(
            <ul>
                {lists}
            </ul>
        );
    }
}

export default Selector;