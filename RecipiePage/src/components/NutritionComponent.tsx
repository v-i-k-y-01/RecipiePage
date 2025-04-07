interface NutritionItems{
    name: string;
    value: string;
  
}
interface Props{
    title: string;
    content: string;
    tableData: NutritionItems[];
}


export const NutritionComponent = ({title,content,tableData}:Props) => {
  return (
<>
      <h2>{title}</h2>
      <p>{content}</p>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px", textAlign: "left" }}>{item.name}</td>
              <td style={{ padding: "8px", fontWeight: "bold", textAlign: "right" }}>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>  )
}
