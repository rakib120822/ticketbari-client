import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  const handleSocial = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="bg-primary text-base-content shadow p-10">
      <footer className="footer sm:footer-horizontal  ">
        <aside>
          <img src="https://img.icons8.com/fluency/58/ticket-booth.png" />
          <p>
            TicketBari Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Train </a>
          <a className="link link-hover">Bus</a>
          <a className="link link-hover">Launch</a>
          <a className="link link-hover">Flight</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to={"/"} className="link link-hover">
            Home
          </Link>
          <Link to={"/all-tickets"} className="link link-hover">
            All Tickets
          </Link>
          <Link to={"/about-us"} className="link link-hover">
            About us
          </Link>
          <Link to={"/contact-us"} className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Payment</h6>
          <a className="link link-hover">Stripe</a>
          <div className="flex gap-2">
            <button
              onClick={() =>
                handleSocial("https://www.linkedin.com/in/rakibul-islam-payel/")
              }
              className=" cursor-pointer"
            >
              <FaLinkedinIn size={20} />
            </button>
            <button
              className="cursor-pointer"
              onClick={() => handleSocial("https://wa.me/8801883860565")}
            >
              <FaWhatsapp size={20} />
            </button>
            <button
              className="cursor-pointer"
              onClick={() =>
                handleSocial("https://www.facebook.com/rakibul.islam.466934")
              }
            >
              <FaFacebookF size={20} />
            </button>
          </div>
        </nav>
      </footer>
      <p className="pt-10 text-center">
        Copyright © {new Date().getFullYear()} - All right reserved
      </p>
    </div>
  );
};

export default Footer;
