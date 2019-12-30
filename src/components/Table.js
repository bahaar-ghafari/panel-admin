import React from "react";
import MaterialTable from "material-table";

export default class RemoteData extends React.Component {
  render() {
    return (
      <MaterialTable
        style={{ overflowX: "auto", maxWidth: "80vw", margin: "5% 0 0 10%" }}
        title="Remote Data Preview"
        columns={[
          { title: "Name", field: "name" },
          { title: "UserName", field: "username" },
          { title: "Email", field: "email" },
          { title: "Phone", field: "phone" },
          { title: "Street", field: "address.street" },
          { title: "Suite", field: "address.suite" },
          { title: "City", field: "address.city" },
          { title: "Zipcode", field: "address.zipcode" },
          { title: "lat", field: "address.geo.lat" },
          { title: "lng", field: "address.geo.lng" }
        ]}
        data={() =>
          new Promise(resolve => {
            let url = "https://jsonplaceholder.typicode.com/users";
            fetch(url)
              .then(response => response.json())
              .then(result => {
                resolve({
                  data: result
                });
              });
          })
        }
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  data.push(newData);
                  this.setState({ data }, () => resolve());
                }
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  const index = data.indexOf(oldData);
                  data[index] = newData;
                  this.setState({ data }, () => resolve());
                }
                resolve();
              }, 1000);
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  let data = this.state.data;
                  const index = data.indexOf(oldData);
                  data.splice(index, 1);
                  this.setState({ data }, () => resolve());
                }
                resolve();
              }, 1000);
            })
        }}
      />
    );
  }
}
