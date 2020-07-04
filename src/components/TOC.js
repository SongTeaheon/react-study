import React, {Component} from 'react';

class TOC extends Component{
    render() {
        var list = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length) {
            if(this.props.selected == data[i].id){
                list.push(<li key={data[i].id} style={{fontWeight:'bold'}}>{data[i].desc}</li>);
            }else{
                list.push(<li key={data[i].id} style={{fontWeight:'normal'}}>{data[i].desc}</li>);
            }
            
            i += 1;
        }
        return(
            <div>
                 <h4>{this.props.title}</h4>
                <ul>
                     {list}
                </ul>
            </div>
        );
    }
}

export default TOC;