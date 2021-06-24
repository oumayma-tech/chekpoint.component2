 
import Project from './project'

 function List (props){

    return (
        <div className='projects-container' >
       { props.data.map((el,i)=> <Project el=  {el} /> )}
        </div>
    )
 }
 export default List 