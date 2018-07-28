import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import { Table } from "reactstrap";

class Customers extends Component {
  state = {
    showCustomers: false,
    customers: null
  };

  componentDidMount() {
    this.getCustomers();
  }

  getCustomers = () => {
    axios
      .get("http://localhost:8080/api/customers")
      .then(response => {
        return response.data;
      })
      .then(data => {
        this.setState({ customers: data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  showCustomers = data => {
    this.setState({ showCustomers: !this.state.showCustomers });
  };

  render() {
    console.log(this.state.customers);
    return (
      <div>
        {this.state.showCustomers ? (
          <div>
            <Button color="info" className="mt-4" onClick={this.showCustomers}>
              Hide Customers
            </Button>
            <Table bordered className="container mt-4">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>email</th>
                </tr>
              </thead>
              <tbody>
                {this.state.customers
                  ? this.state.customers.map(customer => {
                      return (
                        <tr key={customer.id}>
                          <th scope="row">{customer.id}</th>
                          <td>{customer.title}</td>
                          <td>{customer.firstname}</td>
                          <td>{customer.surname}</td>
                          <td>{customer.email}</td>
                        </tr>
                      );
                    })
                  : ""}
              </tbody>
            </Table>
          </div>
        ) : (
          <Button color="info" className="mt-4" onClick={this.showCustomers}>
            View Customers
          </Button>
        )}
      </div>
    );
  }
}

export default Customers;
