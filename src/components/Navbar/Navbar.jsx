import { useState } from "react";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const navItems = [
    { id: "home", href: "#", text: "home" },
    { id: "classes", href: "#classes", text: "classes" },
    { id: "events", href: "#events", text: "events" },
    { id: "contact", href: "#contact", text: "contacts" },
  ];

  return (
    <>
      {/* navbar */}
      <div className="NavBar">
        <div className="container-fluid">
          <div className="NavInside row">
            <div className="logo col-1">
              <img src="/images/icon.png" alt="" />
            </div>
            <div className="NavInside-list col-7">
              <ul>
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className={activeItem === item.id ? "here" : ""}
                  >
                    <a
                      href={item.href}
                      onClick={() => handleItemClick(item.id)}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* offCanv */}
      <button
        className="offTrigger"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        menu
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <img src="/images/icon.png" alt="" />
          <button
            type="button"
            className="btn-close closeBtn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul>
            {navItems.map((item) => (
              <li
                key={item.id}
                className={activeItem === item.id ? "here" : ""}
              >
                <a href={item.href} onClick={() => handleItemClick(item.id)}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
