import { Fragment } from "react/jsx-runtime";
import "./App.css";
import { ReactNode } from "react";

function App() {
  return (
    <List
      // <List<{id: number, name: string}>
      data={[
        { name: "Bharath", id: 1 },
        { name: "Vijayan", id: 2 },
        { name: "Kumar", id: 3 },
      ]}
      getKey={(item) => item.id}
      getRow={(item) => <div>{item.name}</div>}
    />
  );
}

type ListProps<T> = {
  data: T[];
  getKey: (item: T) => React.Key;
  getRow: (item: T) => ReactNode;
};

export default App;

const List = <ItemType,>({ data, getKey, getRow }: ListProps<ItemType>) => {
  return (
    <Fragment>
      {data.map((item) => (
        <div key={getKey(item)}>{getRow(item)}</div>
      ))}
    </Fragment>
  );
};
