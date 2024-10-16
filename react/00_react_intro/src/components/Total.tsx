interface TotalProps {
  value : number;
}

export const Total = (props : TotalProps) => {
  return (
    <div>
      <h1>There are {props.value} products</h1>
    </div>
  )
}