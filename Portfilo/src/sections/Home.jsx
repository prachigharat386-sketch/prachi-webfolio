import Button from "../components/Button";
import SocialIcons from "../components/SocialIcons";
import photo from "../assets/photo.jpg.jpeg";

export default function Home(){

return(

<section className="home">


<div className="left">

<h1>
Hi, I'm <span>Prachi</span>
</h1>

<h2>
Frontend Developer
</h2>

<p>
I build exceptional digital experiences that are fast, accessible, and visually appealing. Let's create something amazing together
</p>


<Button/>

<SocialIcons/>

</div>



<div className="right">

<img 
src={photo}
className="profile"
alt="profile"
/>

</div>
</section>

)

}