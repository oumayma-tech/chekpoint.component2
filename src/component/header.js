function Header(props) {
    return(
        <>
     <h1>{props.name}</h1>
      <ul class="navmenu">
        <li><a href="#">about</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
        </>
        )
    
}
export default Header