import JohnDoe from '../images/John-Doe.jpg'

function About(props) {
    return(
        <div>
            <h1>
            {props.greet}
        <span class="rotate text-important">{props.N}</span>,<br />
        {props.P}
      </h1>
      <img class="avatar" src={JohnDoe} alt="jhon-doe" />
      </div>
      )
    
}
export default About