import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

function careers() {
    return (
      <Layout title="SigNoz Plans">
        <section>
        <div className="container" style={{marginTop: '2rem', marginBottom:'4rem'}}>
          
          <h2 style={{textAlign: "center"}} > Open Positions @ SigNoz </h2>
          <p style={{textAlign: "center"}}>  Join us to democratise great observability for all teams</p>
  
          <div className={"row"}>
              <div className={"col col--6 margin-vert--md"}>
                  <div class="card">
                      <div class="card__header">
                          <h3> Product Designer (Remote) (India) </h3>
                      </div>
                      {/* <div class="card__image">
                        <img
                            src="/img/case_study/Instasafe-summary.png"
                            alt="InstaSafe"
                         />
                      </div>
                      <div class="card__body">
                          <p>

                          </p>
                      </div> */}
                      <div class="card__footer">
                      <Link
                        className="button button--primary"
                        href={"/careers/product-designer-in/"}
                      >
                       Read more 
                      </Link>
                      </div>
  
                  </div>
              </div>
              <div className={"col col--6 margin-vert--md"}>
                  <div class="card">
                      <div class="card__header">
                          <h3>DevRel Engineers (Remote) (India)</h3>
                          
                      </div>
                      {/* <div class="card__image">
                        <img
                            src="/img/case_study/BlipBillBoards-summary.png"
                            alt="Blip"
                             />
                      </div>
                      <div class="card__body">
                          <p>
  
                
  
                          
  
                          </p>
                      </div> */}
                      <div class="card__footer">
                      <a class="button button--primary"
                       href="/careers/devrel-engineer-in/" 
                       >Read more</a>
                      </div>
                  </div>
              </div>
              <div className={"col col--6 margin-vert--md"}>
                  <div class="card">
                      <div class="card__header">
                          <h3>Technical Content Writer/Marketer (Remote) (India)</h3>
                      </div>
                      {/* <div class="card__image">
                        <img
                            src="/img/case_study/outplay-list.webp"
                            alt="Image alt text"
                            title="Logo Title Text 1" />
                      </div>
                      <div class="card__body">
                          <p>
  
  
                          </p>
                      </div> */}
                      <div class="card__footer">
                      <a class="button button--primary" href="/careers/technical-content-writer-in/" >Read more</a>
                      </div>
                  </div>
              </div>
              {/* <div className={"col col--6 margin-vert--md"}>
                  <div class="card">
                      <div class="card__header">
                          <h3>Wombo</h3>
                      </div>
                      <div class="card__image">
                        <img
                            src="/img/case_study/wombo-list-image.webp"
                            alt="Wombo"
                            title="Wombo Case Study" />
                      </div>
                      <div class="card__body">
                          <p>
  
  
                          </p>
                      </div>
                      <div class="card__footer">
                      <a class="button button--primary" href="/case-study/wombo/" >Read more</a>
                      </div>
                  </div>
              </div> */}
          </div>
        </div>  
        </section>
    </Layout>
  );
}
export default careers;
