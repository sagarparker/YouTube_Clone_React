import React,{Component} from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {term:''};
    }

    render(){
        return (
            <div className="search-bar">
                <input 
                    style={{padding:'6px',border:'1.5px solid gainsboro',borderRadius:'2px'}} 
                    placeholder="Search for a video" 
                    value = {this.state.term} 
                    onChange={(e)=>this.onInputChange(e.target.value)} 
                />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

module.exports = SearchBar;