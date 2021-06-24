

const Project=props=>{

    return (
       
<div className="project-card">
        <img src={props.el.img} alt="photo"></img>
        <h3>{props.el.title}</h3>
        <p>
          {props.el.para}</p>
          <a href={props.el.a}></a>
       
       
        </div>)}
        
        export default Project

