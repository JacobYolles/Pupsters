import React, { Component, Fragment } from "react"
import API from "../utils/API"

// const Search = () => {
//     return <h1> Search By Breed!</h1>
// }

class Search extends Component {
    state = {
        breedList: [],
        selectedBreed: "",
        breedImages: []
    }

    componentDidMount() {
        API.getBreeds()
        .then(res => this.setState({breedList : res.data.message}))
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const value = event.target.value
       

        this.setState({
            selectedBreed : value
        });
    };

handleFormSubmit = event => {
    event.preventDefault();
    API.getImagesByBreed(this.state.selectedBreed)
    .then(res => this.setState({breedImages: res.data.message.slice(0, 10)}))
    .catch(err => console.log(err))
}

    render() {
        return (
            <Fragment>
                <h1>Search</h1>
                <form>
                    <label htmlFor="breed-choice">Choose a breed: </label>
                    <br></br>
                    <input 
                    list="breed-type" 
                    id="breed-choice" 
                    name="breed-choice"
                    value={this.state.selectedBreed}
                    onChange={this.handleInputChange}
                 
                    />
                    {/* Datalist is holding the list of array variables kind of behind the scenes. */}
                    <datalist id="breed-type">
                       {this.state.breedList.map(breed =>  <option value={breed} key={breed}/>)}
                    </datalist>
                    <button onClick={this.handleFormSubmit} type="button" className="btn btn-primary">Submit</button>
                </form>
                <div>
                    <h2>{this.state.breedImages.length ? "Here are the dog images" : "Choose a dog type to begin"}</h2>
                    {this.state.breedImages.map(image => <img className ="img" alt = {this.state.selectedBreed} key={image} src ={image}/>)}
                    
                </div>
            </Fragment>
        )
    }

}

export default Search; 