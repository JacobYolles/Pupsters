import React, { Component, Fragment } from "react"
import API from "../utils/API"

// in line styling process where styles are drawn from style={styles.image} styles is the const and image is the variable wanted from inside of it.
const styles = {
    image: {
        width: 300,
        padding: "0 15px"
    },
    buttons: {
        paddingTop: 15,
    },
    button: {
        margin: "0 15px"
    },
    h1: {
        padding: "0 15px",
    }
}

// create a last saved friend.

class Discover extends Component {

    state = {
        currentDog: "",
        friendCount: 0,
        matched: false,
    }

    // only available in places that start with class Discover extends Component {
    componentDidMount() {
        this.getNextDog();
    }

    getNextDog = () => {
        API.showDog()
            .then(res => this.setState({ currentDog: res.data.message }))
            .catch(err => console.log(err))
    }

    handleButtonClick = (type) => {
        if (type === "friend") {
            // const match is equal to a random number between one and 5 matching 5. the match number could be anything between 1-5.
            // EX: const match = (3 === Math.floor(Math.random() * 5) + 1); = a random number between 1-5 being 3. 
            const match = (4 === Math.floor(Math.random() * 4) + 1);
            if (match) {
                // if the one in five chance is hit, add one to the friend count and change matched to true.
                this.setState({ friendCount: this.state.friendCount + 1, matched: true})
                
            } 
            else {
                // if the one in five chance is not hit set matched to false.
                this.setState({ matched: false})
            }
        } // end of first if.
        // this else sets itself outside of the type === friend argument.
        else {
            this.setState({ matched: false})
        }
        this.getNextDog();
    }

    render() {
        return (
            <Fragment>
                <h1 style={styles.h1}> Discover </h1>
                <div>
                    <div className={`alert alert-${this.state.matched ? "success" : "dark"}`} role="alert">
                    <p><strong>{this.state.matched ? "Thanks for being my friend" : "How dare you"}</strong></p>
                    <p>Pup Friend Count: {this.state.friendCount}</p>
                    </div>
                    <img src={this.state.currentDog} alt="Dog" style={styles.image} />
                    <p style={styles.buttons}>
                        <button type="button" onClick={() => this.handleButtonClick("friend")} style={styles.button} className="btn btn-lg btn-success">Lets be Friends</button>
                        <button type="button" onClick={() => this.handleButtonClick()} style={styles.button} className="btn btn-secondary">I dont like you</button>
                    </p>
                </div>
            </Fragment>
        )
    }
} // end of class tag

export default Discover; 