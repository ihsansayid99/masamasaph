import PropTypes from "prop-types";
const Intro = ({ data }) => {
    return (
        <div
            className="intro-section section overlay"
            style={{
                backgroundImage: `url(${
                    data.backgroundImage
                })`,
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="container">
                <div className="row row-cols-lg-1 row-cols-1">
                    <div className="col align-self-center">
                        <div className="intro-content">
                            <span className="sub-title">{data.subTitle}</span>
                            <h2 className="title">{data.title}</h2>
                            <div className="desc">
                                <p>{data.desc}</p>
                            </div>
                            <a href={data.linkCampaign} className="intro-btn">{data.buttonText}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Intro.propTypes = {
    data: PropTypes.object,
};

export default Intro;
