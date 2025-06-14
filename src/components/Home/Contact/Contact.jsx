export default function Contact() {
  return (
    <>
      <div className="contact" id="contact">
        <div className="container-fluid">
          <form className="contactForm fadeIn row">
            <div className="headerCF col-12">
              <h2>join us</h2>
            </div>
            <div className="inpContainer row col-10">
              <label className="col-12" htmlFor="fullName">
                full name*
              </label>
              <input
                className="col-8"
                type="text"
                name="fullName"
                id="fullName"
                required
              />
            </div>
            <div className="inpContainer row col-10">
              <label className="col-12" htmlFor="phone">
                phone number*
              </label>
              <input
                className="col-8"
                type="tel"
                name="phone"
                id="phone"
                required
              />
            </div>
            <div className="inpContainer row col-10">
              <label className="col-12" htmlFor="email">
                email address
              </label>
              <input className="col-8" type="email" name="email" id="email" />
            </div>
            <div className="inpContainer row col-10">
              <label className="col-12" htmlFor="plan">
                selecct your plan*
              </label>
              <select className="col-8" name="plan" id="plan" required>
                <option value="silver">silver membership</option>
                <option value="gold" selected>
                  golden membership
                </option>
                <option value="diamond">diamond membership</option>
              </select>
            </div>
            <div className="inpContainer row col-10">
              <label className="col-12" htmlFor="class">
                want to join a class ? (optional)
              </label>
              <select className="col-8" name="class" id="class">
                <option value="cardio">cardio class</option>
                <option value="powerlifting">powerlifting class</option>
                <option value="boxing">boxing class</option>
              </select>
            </div>
            <div className="sendArea col-10">
              <button className="contactBtn" type="submit">
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
