import "./Component8.css";

const Component8 = ({ Data }) => {
  return (
    <section id="Edit-section">
      <div className="container">
        <div className="row">
          <div className="col-12 aboutServices d-flex justify-content-center">
            <ul className="list-unstyled text-center d-flex">
              {Data.map((item) => (
                <li key={item.aboutServicesId} className="mx-1 mx-lg-5">
                  <div className="d-flex justify-content-center pb-3">
                    <div className="iconService d-flex align-items-center justify-content-center">
                      <div className="iconService_deeb d-flex align-items-center justify-content-center">
                        <i className={item.aboutServicesIcon}></i>
                      </div>
                    </div>
                  </div>
                  <h6>{item.aboutServicesHeder}</h6>
                  <p>{item.aboutServicesTitle}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component8;
