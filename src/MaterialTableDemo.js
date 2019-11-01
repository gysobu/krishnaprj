import React from 'react';
import MaterialTable from 'material-table';
import usagedata from './server';

 function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Order', field: 'name' },
      { title: 'ProductName', field: 'surname' },
      { title: 'CustomerName', field: 'birthYear', type: 'numeric' },
      {
        title: 'Status',
        field: 'birthCity',
        lookup: { 34: 'sucess', 63: 'failure' },
      },
    ],
     data: usagedata
    //  [
    //   { name: '21034', surname: 'oil', birthYear: "CFEnargia-power", birthCity: 63 },
    //   {
    //     name: '21035',
    //     surname: 'gas',
    //     birthYear: "CFEnargia-power",
    //     birthCity: 34,
    //   },
    // ]
    ,
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}

export default MaterialTableDemo;