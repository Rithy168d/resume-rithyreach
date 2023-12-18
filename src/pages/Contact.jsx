import { Mail, MapPin, Phone, SendHorizontal, Timer } from "lucide-react";

const Contact = () => {
  return (
    <section className="contact padding-top" id="contact">
      <div id="Change-color">
        <div className="contact-card card-inner grid-1x2">
          <article className="input-card">
            <h2>Contact us</h2>
            <p className="margin-2x0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nisi
              maiores possimus suscipit commodi nobis!
            </p>
            <form action="" className="form-input">
              <input
                className="border-radius"
                type="text"
                placeholder="full name"
              />
              <input className="border-radius" type="email" placeholder="email" />
              <input
                className="border-radius"
                type="password"
                placeholder="password"
              />
              <button className="button margin-2x0">
                <span>
                  Submit <SendHorizontal />
                </span>
              </button>
            </form>
          </article>
          <article className="card-inner">
            <div className="padding-3">
              <h3 className="">info</h3>
              <div className="flex">
                <div>
                  <Mail />
                </div>
                <p>abcd@gmail.com</p>
              </div>
              <div className="flex">
                <div>
                  <Phone />
                </div>
                <p>+855 123 456</p>
              </div>
              <div className="flex">
                <div className="">
                  <MapPin />
                </div>
                <p>Phnom Penh</p>
              </div>
              <div className="flex">
                <div className="">
                  <Timer />
                </div>
                <p>8:00AM - 9:00PM</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
