import { v4 as uuidv4 } from 'uuid';
let users=[]

export const createUser=(req,res)=>{
  const user=req.body
  users.push({...user, id: uuidv4()})
  res.status(200)
      .json({message:"User added successfully"})
}


export const getUser = (req,res)=>{
  res.status(200).json(users)
 }

 export const findUser=(req,res)=>{
  const {id}=req.params
  const foundUser=users.find((user)=>user.id===id)
  res.status(200).json(foundUser)
}

export const deleteUser=(req,res)=>{
  const {id}=req.params
  users=users.filter((user)=>user.id!=id)
  res.status(200).json(users)
}

export const updateUser=(req,res)=>{
  const {id}=req.params
  const user=users.find((user)=>user.id===id)
  const {firstName,lastName,age}=req.body

  if(firstName) user.firstName=firstName
  if(lastName) user.lastName=lastName
  if(age) user.age=age
  res.status(200).json(users)
}