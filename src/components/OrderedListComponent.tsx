interface Props{
    title: string;
    list : string[];
    listStyle? : string;
}
export const OrderedListComponent  = ({title,list,listStyle}:Props) => {
  return (
   <>
   <h2>{title} </h2>
   <div>
   <ol style={{listStyleType:listStyle}}>
    {list.map((item,index)=>(
        <li key={index}>{item}</li>
    ))}
    </ol>
  </div>
   </>
  )
}
