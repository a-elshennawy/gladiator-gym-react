export default function Footer() {
  return (
    <>
      <div className="Footer fadeIn">
        <div className="container-fluid">
          <div className="FooterInsider row">
            <div className="contacts col-lg-3 col-6">
              <h3>contacts ?</h3>
              <ul>
                <li>egypt - gharbia - tanta</li>
                <li>+20103392177</li>
                <li>GladiatorGym@info.com</li>
              </ul>
            </div>
            <div className="opHrs col-lg-3 col-6">
              <h3>openeing hours ?</h3>
              <ul>
                <li>saturday to thursday 24 hours</li>
                <li>friday 12 Pm - 6 Am</li>
              </ul>
            </div>
            <div className="sub col-lg-3 col-10">
              <h3>subscribe ?</h3>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@gmail.com"
              />
              <button className="SubBtn">subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
