import "./style.scss"

function NewsLetter() {
  return (
    <div className="footer__container-box">
      <h2 className="footer__title">Newsletter</h2>
      <div>
        <form method="POST" className="newsletterform">
          <input
            type="text"
            name="nameRequest"
            placeholder="Your Name"
            className="bookingform__input bookingform__input--newsletter"
            required
          />
          <input
            type="email"
            name="emailRequest"
            placeholder="Your Email"
            className="bookingform__input bookingform__input--newsletter"
            required
          />
          <button type="submit" className="button--blue requestNL btnSubmit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewsLetter
