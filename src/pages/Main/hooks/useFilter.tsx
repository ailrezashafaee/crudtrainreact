import { useContext, useState } from 'react'
import { PostContext } from '../../../context/Postcontext';
import PostKhabar, { PostContextType } from '../../../models/posts';
interface filter{
    name : string,
    index : number , 
    system : string
}
interface useFilterType{
    data : filter,
    setData: { setName: React.Dispatch<React.SetStateAction<string>>, setIndex:React.Dispatch<React.SetStateAction<number>>,setSystem : React.Dispatch<React.SetStateAction<string>>},
    handleFilterSubmit : ()=>void
}
function useFilter() : useFilterType {
    const { Posts, SetFiltered } = useContext(PostContext) as PostContextType;
    const [nameInput, setName] = useState("");
    const [index, setIndex] = useState(0);
    const [system, setSystem] = useState("");
    const handleFilterSubmit = (): void => {
        const newPosts = Posts.filter((value: PostKhabar) => {
            return (value.tags.includes(system) || system === "") && 
                (!index || index === value.index) &&
                (nameInput === "" || value.name === nameInput)
        })
        SetFiltered(newPosts);
    }
    const data = {
                name : nameInput ,
                index : index , 
                system : system};
    const setData = {setName : setName , setIndex : setIndex , setSystem : setSystem};
  return ({data , setData , handleFilterSubmit})
  
}

export default useFilter