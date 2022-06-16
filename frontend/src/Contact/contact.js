import Footer from "../Footer/footer"
import Forms from "../Form/forms"
import Navbars from "../Header/navbar"
import HeadBar from "../Page Bar/headBar"
import './contact.css'


const Contact = () => {
    return(

        <div>
            <Navbars/>
            <HeadBar name={"CONTACT US"}/>
            <div id="contact-form">
            <Forms/>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Contact