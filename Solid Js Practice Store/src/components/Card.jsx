export default function Card(props) {
  return (
    <div 
      class="card"
      classList={{"rounded-md": props.rounded, "shadow-md": !props.flat}}
    >
      {props.children}
    </div>
  )
}