import {useEffect,useState} from 'react'
import { useUser } from '../context/UserContext'

// next - debounce , loading ,error handling 

const Fetchdata = ()=>{
    //Api from on
    //need fetch or axios method 
    //to get data fromapi
    // fetch in useEffect - by a async fn 
    //set this data in state
    //jsx to show data 
    //map method to show this data 

    //search - input - serchQry, onSerch fn - filter-include(searcgQry) return filterData - setData 

    //debounce 

    const [data,setData]=useState([] )
    const [filtrdData,setFiltrdData]=useState([])
    const [query,setQuery]=useState('')

    const  {user} = useUser()

    useEffect (()=>{
        getData()

    },[])

    const getData = async () => {

        const response = await  fetch('https://dummyjson.com/products')
        .then((res)=>res.json())
        .then((res)=> { 
            setData(res.products)
            setFiltrdData(res.products)
            console.log('res',res)
        }).catch((e)=>console.log('e',e))

        console.log('response',response)
       
        
    }

  useEffect(()=>{
    const timer = setTimeout(()=>{
    if(query.length >=2){
 
     const filterdData = data.filter((item)=>item.title.toLowerCase().includes(query.toLowerCase()))
     setFiltrdData(filterdData)
  
   
      } else if(query.length ===0){
    setFiltrdData(data)
     }
    },500)
    return () => clearTimeout(timer)
      },[query,data])

           
    const  handleSearch =(text)=>{
      setQuery(text)
    }

    return (
        <div>
           <p>hey! {user.name} you can  fetching products data </p> 
            <input 
            placeholder='serach products ....'
            value = {query}
            type='text'
            onChange={(e)=>handleSearch(e.target.value)}
            />
            {filtrdData.map((item,index)=>{return(
                    <div key={item.id}>{item.title}</div>
                )}
            )}
        </div>
    )
    


}

export default  Fetchdata;