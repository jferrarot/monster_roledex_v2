import './card.styles.css'


//we use '{' when we declare something else, and '(' (implicit) when not.}
//on implicit we dont need return
const Card=({monster}) =>{
  const {name,email,id} = monster;
  return(
    <div className='card-container'>
        <img  
            src={`https://robohash.org/${id}?set=set2&size=180x180`} 
            alt={`monster ${name}`} />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
  )
}
export default Card;