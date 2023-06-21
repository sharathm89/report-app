import { Table } from "@jikji/react";

import Title from './components/title';

const LIST = [
  {category: "Car", subCategory: "Ford", rank: "A", bgColor: "#FF9301"},
  {category: "Truck", subCategory: "Volvo", rank: "B", bgColor: "#81C784"},
  {category: "Bike", subCategory: "Pulsur", rank: "A", bgColor: "#283593"},
  {category: "Car", subCategory: "BMW", rank: "C", bgColor: "blue"},
  {category: "Sedan", subCategory: "Coupe", rank: "C", bgColor: "#BCD34F"},
  {category: "SUV", subCategory: "Convertible", rank: "C", bgColor: "#E344A9"},
  {category: "articles", subCategory: "robust", rank: "C", bgColor: "#44B4E3"},
  {category: "Car", subCategory: "Ford", rank: "A", bgColor: "#D3664F"},
  {category: "Truck", subCategory: "Volvo", rank: "B", bgColor: "#65E344"},
  {category: "Bike", subCategory: "Pulsur", rank: "A", bgColor: "#7AD34F"},
  {category: "Car", subCategory: "BMW", rank: "C", bgColor: "#D3A84F"},
];

const RiskScorecardView = ({ list }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap:"16px", padding: "0 10px" }}>
      <Title name="Table View" />

      <div style={{ color: "blue", fontWeight: 600, fontSize: '18px' }}>Risk Score</div>

      <Table>
        <table className="table">
          <thead>
            <tr className="table-row">
             <th className="table-th">Sl.No</th>
              <th className="table-th">Type</th>
              <th className="table-th">Sub Type</th>
              <th className="table-th">Merge</th>
              <th className="table-th" style={{ textAlign: "center"}}>Rank</th>
            </tr>
          </thead>

          <tbody>
            {
              [...LIST, ...LIST, ...LIST, ...LIST].map((item, index) => (
                <tr key={index} className="table-data">
                  <td style={{ fontWeight: 600, textTransform: "capitalize" }}>{index+1}</td>
                  <td style={{ textTransform: "capitalize" }}>{item.category}</td>
                  <td style={{ textTransform: "capitalize" }}>{item.subCategory}</td>
                  <td style={{ textTransform: "capitalize" }}>{`${item.category} ${item.subCategory}`}</td>
                  <td style={{ backgroundColor: item.bgColor, textAlign: "center" }}>
                    {item.rank}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </Table>
    </div>
  );
}

export default RiskScorecardView;
