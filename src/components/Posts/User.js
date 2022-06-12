const User  =(props)=>{
  const {data} = props
  return (
    <p>{data.name}</p>
  )
}

export default User