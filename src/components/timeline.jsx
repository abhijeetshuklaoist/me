import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Atlassian <span>2021-present</span></h2>
                        <p>Contributing in CST Engineering as Lead. Building highly scalable systems for end users and support users. Mastering Microservices chaos.
                          Leading team to build tools and pipelines to make sure each and every support ticket reach the best Atlassian who can help millions of our customer on priority.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>SAP Labs <span>2020-2021</span></h2>
                        <p>Part of Successfactors team, working on building platform and data framework.Responsible for making high throughput APIs with very high KPI standards, used for supporting requirements of thousands of customers and millions of users</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Dailyhunt<span>2019-2020</span></h2>
                        <p>Owning the Social module and ensuring the delivery of features in high pace. Leading a team of junior engineers and owning every aspect of SDLC right from getting the idea from stake holders till resolving production issues.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Cognizant <span>2011-2015</span></h2>
                        <p>Part of VCG UDT program. Which implemented a control mechanism on the available UDTs within the VCG business users. Analyse the requirement of each user as every use case was quite different and implement the use case. Testing the systems, releasing the features and getting the UAT sign-off.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Adobe <span>2015-2019</span></h2>
                        <p>Involved in engineering Adobe Target Recommendation which is part of Adobe Experience cloud SaaS. Gather the requirements from Product managers and break the high-level requirements to detailed tasks. Implement the requirements and test the code using unit testing and integration testing. Create the deployment scripts, plan and support the team during deployment.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
