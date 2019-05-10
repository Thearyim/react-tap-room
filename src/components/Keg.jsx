import React from "react";
import PropTypes from "prop-types";

class Keg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beerName: this.props.name,
      editable: false
    };
  }

  // const [editable, setEditable] = useState(false);

  // var myKegStyle = {
  //   backgroundColor: '#ecf0f1',
  //   fontFamily: 'sans-serif',
  //   paddingTop: '50px'
  // };

  // const kegInformation =
  //   <div>
  //     <h3>{props.name} - {props.brand} - {props.price}</h3>
  //     <p><em>{props.alcoholContent}</em></p>
  //     <hr/>
  //   </div>;

  onUpdateKeg(event) {
    event.preventDefault();
    this.setState({ editable: false });
  }

  render() {
    if (this.state.editable) {
      return (
        <div>
          <form onSubmit={this.onUpdateKeg}>
            <label htmlFor="beerName">
              <input name="beerName" type="text" text={this.props.name} />
            </label>
            <label htmlFor="beerBrand">
              <input name="beerBrand" type="text" value={this.props.brand} />
            </label>
            <label htmlFor="beerPrice">
              <input name="beerPrice" type="text" value={this.props.price} />
            </label>
            <label htmlFor="beerAlcoholContent">
              <input name="beerAlcoholContent" type="text" value={this.props.price} />
            </label>
            <button type="submit">Update</button>
          </form>
          <hr/>
        </div>
      );
    }
    else {
      return (
        <div onClick={() => this.setState({ editable: true })}>
          <h3>{this.props.name} - {this.props.brand} - {this.props.price}</h3>
          <p><em>{this.props.alcoholContent}</em></p>
          <hr/>
        </div>
      );
    }
  }

  // if (props.currentRouterPath === '/editKeg'){
  //   return (
  //     <div onClick={() => {props.onKegSelection(props.kegId);}}> {kegInformation}</div>
  //   );
  // } else {
  //   return (
  //     <div>{kegInformation}</div>
  //   );
  // }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  kegId: PropTypes.string.isRequired
};

export default Keg;
