import React from "react";
import BusinessesList from "./BusinessList";
const axios = require("axios");
var cors_api_url = "https://cors-anywhere.herokuapp.com/";
const API_KEY =
  "4f2jUzX5f-4__wU0KGhgEEPSj-Mqrv6YOv8H5o35ayKIZSaj5OXU_-9usC59StCW0nAK513-wWh4UX4u9cdu0GplgvkOphqEFTWqoKgsSexiQIHk_EBatszqLqseYHYx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  getYelpData() {
    axios
      .get(`${cors_api_url}https://api.yelp.com/v3/businesses/search`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          location: "new york",
          limit: 50,
          offset: 0,
        },
      })
      .then((res) => {
        this.setState({ data: res.data.businesses });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidMount() {
    this.getYelpData();
  }

  render() {
    return (
      <div>
        <BusinessesList data={this.state.data} />
      </div>
    );
  }
}

export default App;
