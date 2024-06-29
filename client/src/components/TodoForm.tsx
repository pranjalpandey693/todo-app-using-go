import { Button, Flex, Input, Spinner } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";

export default function TodoForm() {

const [newTodo, setNewTodo] = useState("")
const [isPending, setIsPending] = useState("")

 const createTodo = async(e: React.FormEvent)=>{
    e.preventDefault()
    alert("Todo added!")
 }
  return (
  <form onSubmit={createTodo}>
  <Flex >
   <Input 
    type='text'
    value={newTodo}
    onChange={(e)=> setNewTodo(e.target.value)}
    ref={(input)=> input && input.focus()}
   />
   <Button
   mx={2}
   type='submit'
   _active={{
    transform: "scale(.97)",
   }}
   >
 {isPending ? <Spinner size={"xs"} />:  <IoMdAdd size={30}/>}
   </Button>
  </Flex>
  </form>
);
}
