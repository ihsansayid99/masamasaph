import moment from 'moment';
import PropTypes from "prop-types";
import PortfolioItemDetail from "../../components/portofolio-details";

const PortfolioDetailsContainer = ({ data }) => {
    return (
        <div className="portfolio-area portfolio-single">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner-content">
                            <div className="content" data-aos="fade-up">
                                <p className="category">{data.category}</p>
                                <h3 className="title">{data.title}</h3>
                            </div>
                            <div className="portfolio-info">
                                <div className="row">
                                    <div
                                        className="col-sm-6 col-md-3 col-lg-3"
                                        data-aos="fade-up"
                                    >
                                        <div className="info-item">
                                            <span>Client</span>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: data.client,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-6 col-md-3 col-lg-3"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        <div className="info-item">
                                            <span>Date</span>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: moment(data.date).format("LL"),
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-6 col-md-3 col-lg-3"
                                        data-aos="fade-up"
                                        data-aos-delay="600"
                                    >
                                        <div className="info-item">
                                            <span>Team</span>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: data.team,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-6 col-md-3 col-lg-3"
                                        data-aos="fade-up"
                                        data-aos-delay="900"
                                    >
                                        <div className="info-item style-two">
                                            <span>Services</span>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: data.services,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="portfolio-content"
                                data-aos="fade-up"
                            >
                                <div
                                    key={data.id}
                                    className="content-wrap"
                                    dangerouslySetInnerHTML={{
                                        __html: data.desc,
                                    }}
                                />
                            </div>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 portfolio-list mb-n30">
                                <div className="col resizer"></div>
                            {
                                data.photo.map((item, idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            className={`col masonry-grid mb-30`}
                                        >
                                            <PortfolioItemDetail portfolio={item} />
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

PortfolioDetailsContainer.propTypes = {
    data: PropTypes.object,
};

export default PortfolioDetailsContainer;
