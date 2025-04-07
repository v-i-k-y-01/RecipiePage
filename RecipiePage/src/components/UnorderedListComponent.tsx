interface Props{
    title: string;
    list : string[];
    listStyle? : string;
}

export const UnorderedListComponent = ({title,list,listStyle}:Props) => {
  return (
    <>
    <h2>{title} </h2>
    <div>
    <ul style={{listStyleType:listStyle}}>
        {list.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
         </ul>
    </div>
    </>
  )
}
